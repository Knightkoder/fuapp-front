import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image";
import { Proveedor } from "@/types/proveedor";
interface Props {
    proveedor: Proveedor;
  }
const DialogServicio = ({ proveedor }: Props) => {
  const { Descripcion, Nombre, servicios } = proveedor.attributes;

   return (<>
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <a>
            <Image
              src="https://www.funerariapp.cl/wp-content/uploads/2022/11/excelencia-nativa-1-sanjuanbosco.webp"
              alt="Sunset in the mountains"
              width={250}
              height={0}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when s
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
     </>)
};
  
  export default DialogServicio;