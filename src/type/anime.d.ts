export interface Anime { 
    id: number; 
    title: string; 
    category: 'vedette' | 'recommande' | 'autre'; 
    gif?: string; 
  }
  declare module 'strapi' {
    export interface ApiAnimeAnime {
      attributes: Anime;
    }
  }
  