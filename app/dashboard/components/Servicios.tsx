import { Card } from "./Card";
import { MagnifyingGlassIcon, BookmarkIcon } from "@radix-ui/react-icons";
import { useDebouncedCallback } from "use-debounce";
import { Proveedor } from "@/types/proveedor";
import { getProvs } from "@/services/fetchApi";
import { useProveedores } from "@/lib/hooks/use-Proveedor";

const ServiciosCards = () => {
  const {
    isLoading,
    proveedores,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    setQueryId,
  } = useProveedores();

  console.log(proveedores);

  const handleRefresh = () => {};
  const handleSearch = useDebouncedCallback((term) => {
    setQueryId(term || "");
  }, 300);

  if (isError)
    return (
      <div className="relative flex flex-1 w-1/2 max-w-screen-xl mx-auto  ">
        <h1>Error: {error?.message}</h1>
      </div>
    );

  return (
    <>
      <div className="relative flex flex-1 w-1/2 max-w-screen-xl mx-auto  ">
        <label htmlFor="Buscar" className="sr-only">
          Buscar
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>

      {isLoading ? (
        <div className="relative flex flex-1 w-1/2 max-w-screen-xl mx-auto  ">
          <h1>loading...</h1>
        </div>
      ) : (
        <div className="w-full mx-auto p-5 sm:p-10 md:p-16">
          <div className="border-b mb-5 flex  text-sm justify-between">
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
              <BookmarkIcon />
              <a className="font-semibold inline-block">
                {proveedores.length} Servicios Encontrados{" "}
              </a>
            </div>
            <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2">
              <button
                className="bg-greenF hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded-full ml-1"
                onClick={() => {}}
              >
                Crematorios
              </button>
              <button
                className="bg-greenF hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded-full ml-1"
                onClick={() => {}}
              >
                Funerarias
              </button>
              <button
                className="bg-greenF hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded-full ml-1"
                onClick={() => {}}
              >
                Ver todos
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center min-h-screen ">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
              {proveedores?.map((proveedor: Proveedor) => (
                <Card proveedor={proveedor} key={proveedor.id} />
              ))}
            </div>
          </div>

          <div className="flex my-2 justify-center items-center mt-4">
            {hasNextPage === true && (
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full "
                onClick={() => void fetchNextPage()}
              >
                Cargar Más Resultados
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ServiciosCards;

/*(arg) => {

  const cache = getFromCache(`getProveedores/${queryId}`); // try to access the data from cache
if (cache) return cache;
  let queryString: QueryString  = {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: {
      page: page,
      pageSize: pageSize,
    }, filters: {}
  }
   // use the data if in the cache

  if( arg?.queryKey[0].split("/")[1] ){ //https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication
    
        queryString.filters = {
          Nombre: { $contains: arg.queryKey[0].split("/")[1] }
        }
  }
  
  return getProvs(queryString);
  
}*/
