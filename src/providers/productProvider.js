import axios from "axios";

export const getProductsByFetch = async (url) => {
  return await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
};

export const getProductsByAxios = async (url) => {
  try {
    const resutl = await axios.get(url);
    return resutl.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postProductsByAxios = async (url, data) => {
  try {
    const result = await axios.post(url, data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
