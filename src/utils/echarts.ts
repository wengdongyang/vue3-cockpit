/** @format */

interface ILinearColorStop {
  offset: number;
  color: string;
}
export const createEchartsLinearColorStops = (colorStops: ILinearColorStop[]) => {
  return { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops };
};
