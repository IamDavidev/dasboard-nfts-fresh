// export interface IPropsRandomPosition {
//   limit: number;
// }

export function randomPosition(limit: number): number {
  const random: number = Math.random();
  console.info(
    '🚀 ~>  file: randomPositionList.ts:7 ~>  randomPosition ~>  random',
    random
  );

  const position: number = Math.floor(random * limit);
  console.info(
    '🚀 ~>  file: randomPositionList.ts:9 ~>  randomPosition ~>  position',
    position
  );

  return position;
}
