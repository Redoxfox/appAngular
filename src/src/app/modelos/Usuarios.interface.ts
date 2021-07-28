export interface entityUsuariosGetI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number,
    idTipoNavigation: number,
    usuarioConsumibles: []
  }

  export interface entityUsuariosGetIdI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number,
    idTipoNavigation: number,
    usuarioConsumibles: []
  }

  export interface entityUsuariosPostI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number
  }

  
  export interface entityUsuariosPutI{
    id: number,
    nombre: string,
    asignado: string,
    estado: string,
    idTipo: number
  }