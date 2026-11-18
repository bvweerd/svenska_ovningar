import { describe, it, expect } from 'vitest';
import { reportPayload } from '../src/report.js';

// De Worker zelf (met zijn tests) staat in de B1–B2-repo, map worker/.
describe('reportPayload', () => {
  it('stuurt de repo en de plaats van de vraag mee', () => {
    const item = { type: 'gap', text: 'a ___' };
    const p = reportPayload({ item, ref: { ch: 5, ex: { id: 'x', title: 'X' }, idx: 0 }, number: 2, message: ' fout ', answer: 'b', token: 't', page: 'p' });
    expect(p).toMatchObject({ repo: 'bvweerd/svensk_ovningar', message: 'fout', shownNumber: 2, chapter: 5, exercise: 'x', itemIndex: 0, itemType: 'gap', token: 't' });
    expect(JSON.parse(p.item)).toEqual(item);
  });
  it('werkt ook zonder plaats (snelle rondes)', () => {
    expect(reportPayload({ item: { type: 'mc' }, message: 'x' })).toMatchObject({ chapter: null, exercise: null, itemIndex: null });
  });
});
