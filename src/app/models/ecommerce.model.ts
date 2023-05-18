// src/app/models/ecommerce.model.ts

export class Scarpa {
    id: number;
    nome: string;
    prezzo: number;
    taglia: string;
  }
  
  export class Maglietta {
    id: number;
    nome: string;
    prezzo: number;
    taglia: string;
  }
  
  export class ECommerce {
    scarpe: Scarpa[];
    magliette: Maglietta[];
  }
  