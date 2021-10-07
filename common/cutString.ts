const cutString = (str: string, limit: number): string => {
  str = str.trim();
  if (str.length <= limit) return str;
  return str.slice(0, limit) + '...';
};

export default cutString;
