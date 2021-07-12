export interface entityActivoI{
    id: number,
    nombre: string,
    modelo: string,
    serial: string,
    nroActivo: number,
    procesador: string,
    disco: string,
    color: string,
    nombreEquipo:string,
    asignado: string,
    estado: string,
    idTipo: number,
    idTipoNavigation: number,
    usuarioActivos: []
  }

  export interface entityActivoPostI{
    nombre: string,
    modelo: string,
    serial: string,
    nroActivo: number,
    procesador: string,
    disco: string,
    color: string,
    nombreEquipo:string,
    asignado: string,
    estado: string,
    idTipo: number
  }

  export interface entityActivoGetIdI{
    id:number,
    nombre: string,
    modelo: string,
    serial: string,
    nroActivo: number,
    procesador: string,
    disco: string,
    color: string,
    nombreEquipo:string,
    asignado: string,
    estado: string,
    idTipo: number
  }
  

  
  export interface entityActivoPutI{
    id:number,
    nombre: string,
    modelo: string,
    serial: string,
    nroActivo: number,
    procesador: string,
    disco: string,
    color: string,
    nombreEquipo:string,
    asignado: string,
    estado: string
  }