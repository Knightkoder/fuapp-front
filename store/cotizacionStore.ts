import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import {
  StepOneData,
  StepThreeData,
  StepTwoData,
  FormValues,
} from "@/types/form";

type formCoti = {
  name: string;
  email: string;
  phone: string;
  plan: "funerario" | "crematorio" | "futuro";
  billing: "monthly" | "yearly";
  addons: {
    online: boolean;
    storage: boolean;
    profile: boolean;
  };
};

/*
type CotizacionStore = {
  cotizacion: formCoti[];
  setCotizacion: (cotizacion: any) => void;
  removeCotizacion: () => void;
};

// Create the store
export const useCotizacionStore = create(
  persist<CotizacionStore>(
    (set) => ({
      cotizacion: [],
      setCotizacion: (cotizacion) => set((state) => ({ cotizacion: [cotizacion] })),
      removeCotizacion: () => set({ cotizacion: [] }),
    }),
    {
      name: "cotizacion",
    }
  )
);*/

const stepVariant = {
  1: "stepOne",
  2: "stepTwo",
  3: "stepThree",
};

type setDataType =
  | { step: 1; data: StepOneData }
  | { step: 2; data: StepTwoData }
  | { step: 3; data: StepThreeData };

const useFormStore = create<{
  stepOne: StepOneData | null;
  stepTwo: StepTwoData | null;
  stepThree: StepThreeData | null;
  setData: ({ step, data }: setDataType) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
        setData: ({ step, data }) =>
          set((state) => ({
            ...state,
            [stepVariant[step]]: data,
          })),
      }),
      {
        name: "formCot",
        version: 1,
      }
    )
  )
);

export default useFormStore;
