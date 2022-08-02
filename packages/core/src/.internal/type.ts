export const hasOwn = Object.prototype.hasOwnProperty;
export const toString = Object.prototype.toString;
export const isWindow = (item: object): boolean =>
  item && typeof item === "object" && "setInterval" in item;

export const is = (type: string, primitive: boolean = false) => {
  return function (obj: any): boolean {
    return primitive
      ? typeof obj === type.toLowerCase()
      : toString.call(obj) === `[object ${type}]`;
  };
};

export const match = (
  item: string | number,
  pattern: RegExp | string,
  flags?: string
): boolean => {
  const regex = new RegExp(pattern, flags);
  return regex.test(String(item));
};
