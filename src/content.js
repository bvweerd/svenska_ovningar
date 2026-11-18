import index from '../content/index.yaml';
import { buildCourse } from './build.js';

const files = import.meta.glob('../content/chapters/*.yaml', { eager: true, import: 'default' });

export const course = buildCourse(index, Object.values(files));
