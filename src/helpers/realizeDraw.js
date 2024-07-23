import shuffle from "just-shuffle";

export const realizeDraw = (names) => {
  const result = new Map();
  const shuffled = shuffle(names);

  for(let i = 0; i < names.length; i++) {
    const friend = i === (names.length - 1) ? 0 : i + 1;
    result.set(shuffled[i], shuffled[friend]);
  }
  
  return result;
};
