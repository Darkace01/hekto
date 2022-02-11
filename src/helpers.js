export const removeSpecialChars = (str) => {
  const a = str.replace(/[^a-zA-Z0-9\-]/g, "");
  return a.replace(/[\-]/g, " ");
};
