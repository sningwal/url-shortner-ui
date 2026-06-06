import api from "./api";

export const generateShortUrl = async (payload:any) => {
   return await api.post("/short-urls", payload);
};

