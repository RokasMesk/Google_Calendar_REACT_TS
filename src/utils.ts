export const createArray = (length: number) => {
  return new Array(length).fill(undefined);
};

export function generateSimpleID(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}
