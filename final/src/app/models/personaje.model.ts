export class PersonajeModel {

    id: string;
    nombre: string;
    poder: string;
    vivo: boolean;
    tipo?: string;
    descripcion?: string;
    foto?: string;
    
  
    constructor() {
      this.vivo = true;
    }
  }