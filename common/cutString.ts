const cutString = (str: string, limit: number) => {
  str = str.trim();
  if (str.length <= limit) return str;
  return str.slice(0, limit) + '...';
};

export default cutString;
