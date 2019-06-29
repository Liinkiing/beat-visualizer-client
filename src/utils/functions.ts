export const randomBoolean = (): boolean => Math.random() < 0.5

export const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min
