
export const isPangram = (word) => {
  let lc = word.toLowerCase()

  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .filter(c => lc.indexOf(c) === -1)
    .length === 0
    
};
