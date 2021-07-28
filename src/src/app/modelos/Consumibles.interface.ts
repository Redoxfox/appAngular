export interface entityConsumiblesGetI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number,
    idTipoNavigation: number,
    usuarioConsumibles: []
  }

  export interface entityConsumiblesGetIdI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number,
    idTipoNavigation: number,
    usuarioConsumibles: []
  }

  export interface entityConsumiblesPostI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number
  }

  
  export interface entityConsumiblesPutI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number
  }