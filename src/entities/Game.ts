import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type Publishers from "./publishers";

export interface Game{
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    background_image: string;
    metacritic:number;
    rating: number;
    publishers: Publishers[];
    parent_platforms: {platform: Platform}[];
    description_raw: string;
}