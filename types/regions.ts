export interface Regions {
    name: string
    regions: Region[]
  }
  
  export interface Region {
    name: string
    romanNumber: string
    number: string
    id: string
    communes: Commune[]
  }
  
  export interface Commune {
    name: string
    id: string
  }

  export type RegionType ={
    name?: string
    romanNumber?: string
    number?: string
    id: string
  }
