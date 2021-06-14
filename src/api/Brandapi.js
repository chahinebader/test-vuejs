import axios from "axios";
// the files here are local but in the real world apps we still need to async await
export const brandsApi = async () => {
  return await axios.get("../brands.json", { baseURL: window.location.origin });
};
export const listBrandApi = async () => {
    return await axios.get("../payload-rmp.json", { baseURL: window.location.origin });
  } 


