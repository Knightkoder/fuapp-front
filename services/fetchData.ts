//import Project from '../types/Project'
import { API_URL, STRAPI_URL, STRAPI_API_URL } from '../app/config'
import axios from 'axios';

const address = `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`;
const auth = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

export function getStrapiURL(path = "") {
  return `${
    STRAPI_API_URL || "http://127.0.0.1:1337"
  }${path}`;
}

const proveedoresAPI = axios.create({
  baseURL: STRAPI_API_URL,
});

export const getProveedores = async (query: string) => { //?populate=*&locale=es&filters[Nombre][$eq]=Funearia%201
  const response = await proveedoresAPI.get(`proveedors?populate=*&locale=es&${query}`);
  console.log(`proveedors?populate=*&locale=es&${query}`)
  return response.data;
};

export const getProveedoresAll = async () => {
  const response = await proveedoresAPI.get(`proveedors?populate=*&locale=es`);

    
  return response.data;
};
export const getProveedoresById = async (id: string) => {
  const response = await proveedoresAPI.get(`/proveedors/${id}?populate=*&locale=es`);
  return response.data;
};

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
//export const fetcher2 = (url: string) => fetch(url).then((res) => res.json());

const fetcher2 = async (url: string) => await axios.get(url, {
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}` }
}).then((res)=> res.data)




async function fetcher3(url: string) {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  return response.data.data;
}


export async function fetchData() {
  //const url = `${API_URL}/proveedors?populate[comuna][fields][0]=nombre&populate[comuna][fields][1]=obs`
  const url = `${API_URL}/proveedors?populate=*&locale=es`
  
  const options = {
    method: 'GET',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
    },
  }

  try {
    const response = await fetch(url)
    const { data } = await response.json()
    console.log("data",data)
    
    return data;

  } catch (error) {
    console.error(error)
  }
}

/*export async function getSolicitudes({attributes}) {
  const {url} = attributes.fotos.data.attributes
  return `${STRAPI_URL}${url}`
}*/

