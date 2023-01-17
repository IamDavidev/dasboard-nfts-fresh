export type Time = number | string;

const MAX_RANDOM_TIME = 60;
export const MIN_RAMDOM_TIME = 10;

export function fixTime(time: Time): Time {
  if (time < 10) return '0' + time;
  return time;
}

export function randomMinTime(): Time {
  const random: number = Math.random();
  const time: number = Math.floor(random * MIN_RAMDOM_TIME);
  return fixTime(time);
}
export function randomMaxTime(): Time {
  const random: number = Math.random();
  const time: number = Math.floor(random * MAX_RANDOM_TIME);
  return fixTime(time);
}
