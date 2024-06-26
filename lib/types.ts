export interface Movies {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids:number[];
    id?: number;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string
    popularity?: number;
    poster_path?: string;
    first_air_date?: string;
    name?: string;
    vote_average?: number;
    vote_count?:number;
}

export interface MovieDetailsInterface {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string | null;
      backdrop_path: string | null;
    } | null;
    budget: number;
    genres: Array<{
      id: number;
      name: string;
    }>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<{
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }>;
    production_countries: Array<{
      iso_3166_1: string;
      name: string;
    }>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{
      english_name: string;
      iso_639_1: string;
      name: string;
    }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  

  export interface TVShow {
    adult: boolean;
    backdrop_path: string;
    created_by: Creator[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Episode;
    name: string;
    next_episode_to_air: Episode | null;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    runtime?: number;
  }
  
  interface Creator {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface Episode {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  }
  
  interface Network {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  export interface Video {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }