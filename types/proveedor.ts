export interface Proveedor {
  id: number;
  attributes: attributes_proveedor;
}
interface attributes_proveedor {
  Nombre: string;
  Descripcion: string;
  Activo: boolean;
  Tipo: string;
  NombreContacto: string;
  EmailContacto: string;
  NombreRepresentante: string;
  FechaCertificacion: string;
  TelefonoContacto: string;
  ZonaCobertura: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  servicios: Servicio;
  sucursals: Sucursals;
  CertificadoTraslado: CertificadoTraslado;
  Resolucion: CertificadoTraslado;
}

export interface Servicio {
  data: Data_Servicio[];
}

export interface Data_Servicio {
  id: number;
  attributes: attributes_servicios;
}

export interface attributes_servicios {
  Nombre: string;
  Valor: string;
  Tipo: Tipo[];
  Caracteristicas: Tipo[];
  Descripcion: Tipo[];
  Adicional?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface Tipo {
  type: string;
  children: Child[];
}

export interface Child {
  text: string;
  type: string;
}
export interface CertificadoTraslado {
  data?: any;
}

export interface Sucursals {
  data: any[];
}
