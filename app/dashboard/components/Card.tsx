import NextImage from "next/image";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Proveedor } from "@/types/proveedor";
import DialogServicio from "@/components/Dialog";

const Image = (props: any) => {
  if (props.src) {
    return <NextImage {...props} />;
  }
  const defaultSrc = "https://via.placeholder.com/50";
  return <NextImage {...props} src={defaultSrc} />;
};

interface Props {
  proveedor: Proveedor;
}

export const Card = ({ proveedor }: Props) => {
  const { Descripcion, Nombre, servicios } = proveedor.attributes;
  //console.log(servicios.data[0]?.attributes);
  const { Nombre: nombre_servicio, Descripcion: descripcion_servicio } =
    servicios.data[0]?.attributes || [];
// <DialogServicio proveedor={proveedor} />
  return (
    <>
      <div className="flex flex-col bg-gray-100 rounded-lg p-2 m-2 overflow-hidden shadow-lg ">
        <div className="relative">
          <DialogServicio proveedor={proveedor} />

          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-greenF px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {Nombre}
            </div>
          </a>
        </div>
        <div className="px-6 py-4 mb-auto">
          <a className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {nombre_servicio}
          </a>
          <p className="text-gray-500 text-sm">{Descripcion}</p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <span className="ml-1">6 mins ago</span>
          </span>

          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg
              className="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <span className="ml-1">Datos</span>
          </span>
        </div>
      </div>
    </>
  );
};
