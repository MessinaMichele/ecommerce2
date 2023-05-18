// src/app/models/ecommerce.model.ts

export interface Scarpa {
    id: number;
    nome: string;
    prezzo: number;
    taglia: string;
  }
  
  export interface Maglietta {
    id: number;
    nome: string;
    prezzo: number;
    taglia: string;
  }
  
  export interface ECommerce {
    scarpe: Scarpa[];
    magliette: Maglietta[];
  }
  