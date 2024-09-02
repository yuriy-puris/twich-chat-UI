const hashStringToNumber = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

const numberToHexColor = (num: number): string => {
  const color = ((num >> 24) & 0xFF).toString(16) +
                ((num >> 16) & 0xFF).toString(16) +
                ((num >> 8) & 0xFF).toString(16) +
                (num & 0xFF).toString(16);
  
  return `#${color.slice(-6)}`;
}

export const getUserColor = (username: string): string => {
  const hash = hashStringToNumber(username);
  return numberToHexColor(hash);
};
