import customAxiosPrivate from "../axiosInstanse";
import {  urlGetRazonsocial } from "../URLS/urls";

export const getRazonsocial = async () => {
  return await customAxiosPrivate.get(urlGetRazonsocial);
};