const parseJsonArray = (arr: JSON[]) => {
  const parsedArr = arr.map((item) => JSON.parse(item as any));
  return parsedArr;
};

export default parseJsonArray;
