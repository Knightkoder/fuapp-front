import { FileWithPath } from "react-dropzone";
export interface FormValues {
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
}
export type StepOneData = {
  plan: "funerario" | "crematorio" | "futuro";
  billing: "monthly" | "yearly";
  region?: string;
  comuna?: string;
  rango?: string;
  lat?: number;
  lng?: number;
};

export type StepTwoData = {
  name?: string;
  email?: string;
  phone?: string;
  score_1?: number;
  score_2?: number;
  score_3?: number;
  score_file?: FileWithPreview[];
  identity_card?: FileWithPreview[];
};

export type StepThreeData = {
  addons: {
    online: boolean;
    storage: boolean;
    profile: boolean;
  };
  birth_date?: Date;
  gender?: string;
  lat?: number;
  lng?: number;
};

export type FormData = StepOneData & StepTwoData & StepThreeData;

export type LatLong = {
  lat: number;
  lng: number;
};

export type FileWithPreview = FileWithPath & { preview: string };
