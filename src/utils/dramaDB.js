import { get, createStore } from "idb-keyval";

export const customStore = createStore("dramaDB", "levelStore");

export const checkExist = async (dataKey) => {
  const exist = get(dataKey, customStore);
  if (exist) {
    return true;
  }
  return false;
};
