import { getProvs } from "@/services/fetchApi";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { Proveedor } from "@/types/proveedor";
import { useState } from "react";

export const useProveedores = () => {
  const queryClient = useQueryClient();

  const getFromCache = (key: string) => {
    return queryClient.getQueryData([key]);
  };
  const [queryId, setQueryId] = useState<string>("");

  const { isLoading, data, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<{ nextCursor?: number; proveedores: Proveedor[] }>({
      queryKey: [`proveedores/${queryId}`],
      queryFn: getProvs,
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    });

  return {
    proveedores: data?.pages?.flatMap((page) => page.proveedores ) ?? [],
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    setQueryId,
    queryId,
  };
};
