import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publishers";

export interface Game{
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    background_image: string;
    metacritic:number;
    rating: number;
    publishers: Publisher[];
    parent_platforms: {platform: Platform}[];
    description_raw: string;
}