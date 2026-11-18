// Omhulsel rond één vraag: knop "Controleer", feedback en oplopende hulp.
import { h } from '../dom.js';
import { inline } from '../md.js';
import { RENDERERS } from './items.js';

const GENERIC_WRONG = 'Nog niet goed. Probeer het nog eens.';

/**
 * @param item    de vraag
 * @param ctx     { topic, findTopic(topic) → {card, href} }
 * @param onDone  callback({ firstTry: boolean, revealed: boolean, neutral: boolean })
 */
export function itemCard(item, ctx, number, onDone, label) {
  const topic = item.topic ?? ctx.topic;
  const r = RENDERERS[item.type](item, { ...ctx, topic });
  const feedback = h('div', { class: 'feedback', 'aria-live': 'polite' });
  const checkBtn = h('button', { type: 'button', class: 'btn primary' }, 'Controleer');
  const revealBtn = h('button', { type: 'button', class: 'btn ghost', hidden: true }, 'Toon antwoord');
  const actions = h('div', { class: 'actions' }, checkBtn, revealBtn);
  const card = h('article', { class: `item type-${item.type}` },
    h('div', { class: 'item-head' }, h('span', { class: 'item-no' }, String(number)), label ? h('span', { class: 'item-label' }, label) : null),
    r.el, actions, feedback,
  );

  let attempts = 0;
  let hadError = false;
  let finished = false;

  const finish = (revealed) => {
    finished = true;
    r.lock();
    checkBtn.hidden = true;
    revealBtn.hidden = true;
    card.classList.add(revealed ? 'is-revealed' : 'is-done');
    onDone({ firstTry: !hadError && !revealed, revealed, neutral: !!r.neutral });
  };

  const rule = () => {
    const found = topic && ctx.findTopic?.(topic);
    if (!found) return null;
    return h('p', { class: 'rule' },
      h('strong', {}, 'Regel: '), h('span', { html: inline(found.card.summary) }), ' ',
      h('a', { href: found.href }, 'Lees de uitleg →'),
    );
  };

  const show = (cls, ...content) => {
    feedback.className = `feedback ${cls}`;
    feedback.replaceChildren(...content.filter(Boolean));
  };

  const check = () => {
    if (finished) return;
    const res = r.check();

    if (res.neutral) {
      const list = h('ul', { class: 'checks' }, res.checks.map((c) => h('li', { class: c.ok ? 'ok' : 'bad' }, c.ok ? '✓ ' : '✗ ', c.label)));
      if (res.correct) {
        show('good', h('p', {}, 'Mooi! Vergelijk je tekst met het voorbeeldantwoord.'), list);
        finish(false);
      } else {
        show('info', h('p', {}, res.tip ?? 'Je tekst is nog niet compleet:'), list);
        revealBtn.textContent = 'Klaar';
        revealBtn.hidden = false;
      }
      return;
    }

    if (res.empty) {
      show('info', h('p', {}, res.tip));
      return;
    }
    if (res.correct && res.advance) {
      attempts = 0;
      revealBtn.hidden = true;
      show('good', h('p', {}, 'Goed! Nu de volgende stap.'));
      return;
    }
    if (res.correct) {
      show('good', h('p', {}, hadError ? 'Goed zo, nu klopt het!' : 'Goed!'), item.explain ? h('p', { class: 'explain', html: inline(item.explain) }) : null);
      finish(false);
      return;
    }

    attempts++;
    hadError = true;
    const tip = h('p', {}, res.tip ?? GENERIC_WRONG);
    if (attempts === 1) show('bad', tip);
    else show('bad', tip, rule());
    if (attempts >= 3) revealBtn.hidden = false;
  };

  checkBtn.addEventListener('click', check);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('input[type="text"]')) {
      e.preventDefault();
      check();
    }
  });
  revealBtn.addEventListener('click', () => {
    if (r.neutral) {
      r.reveal();
      show('info', h('p', {}, 'Vergelijk je tekst met het voorbeeldantwoord.'));
      finish(false);
      return;
    }
    r.reveal();
    show('info', h('p', {}, 'Dit is het goede antwoord. Doe de oefening later nog eens om het te herhalen.'), rule(), item.explain ? h('p', { class: 'explain', html: inline(item.explain) }) : null);
    finish(true);
  });

  return card;
}
