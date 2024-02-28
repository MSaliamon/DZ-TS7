
interface UnionIndexSignature {
  [key: string]: number | string;
}

interface FunctionIndexSignature {
  [key: string]: (...args: any[]) => any;
}

interface ArrayLikeObject {
  [index: number]: number;
}

interface SpecificPropertiesWithIndexSignature {
  name: string;
  [key: string]: any;
}

interface BaseInterface {
  [key: string]: any;
}

interface ExtendedInterface extends BaseInterface {
  specificProperty: string;
}

function checkValues(obj: { [key: string]: any }, keys: string[]): boolean {
  return keys.every(key => typeof obj[key] === 'number');
}