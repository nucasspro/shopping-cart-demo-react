export const getLocalStorageByKey = (key) => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : null;
};

export const setLocalStorageByKey = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
