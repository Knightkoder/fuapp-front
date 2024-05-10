import qs from "qs";
import { getStrapiURL } from "../utils/api-helpers";
import { QueryString } from "@/types/queryString";

export const fetchApi = async (
  path: string,
  urlParamsObject = {},
  options = { method: "GET" }
) => {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // prettify URL
    });

    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(
      "Error al conectar la api, verifique servidor encendido, params, etc"
    );
  }
};
/**
 * Get providers from strapi
 *
 * @param {{
 *   pageParam?: number;
 *   queryKey?: string;
 * }} {
 *   pageParam = 1,
 *   queryKey = "",
 * }
 * @return {*}
 */
export const getProvs = async ({
  pageParam = 1,
  queryKey = "",
}: {
  pageParam?: number;
  queryKey?: string;
}) => {
  let pageSize = 10;
  let queryString: QueryString = {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: {
      page: pageParam,
      pageSize: pageSize,
    },
    filters: {},
  };
  if (queryKey[0].split("/")[1]) {
    //https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication

    queryString.filters = {
      Nombre: { $contains: queryKey[0].split("/")[1] },
    };
  }
  
  const data = await fetchApi("/proveedors", queryString);
  const currentPage = Number(data.meta.pagination.page);
  const nextCursor = currentPage > 3 ? undefined : currentPage + 1;
  return {
    proveedores: data.data,
    nextCursor: nextCursor,
  };
};
