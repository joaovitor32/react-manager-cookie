import { GenericObject } from '../../types';

const parseObjectToString = (obj: GenericObject): string => Object.entries(obj).sort().toString();

const compareObjects = (a: GenericObject, b: GenericObject): boolean =>
  parseObjectToString(a) === parseObjectToString(b);

export { parseObjectToString, compareObjects };
