import type { Platform } from "./Platform";

export interface Game{
    id: number;
    name: string;
    background_image: string;
    metacritic:number;
    rating: number;
    parent_platforms: {platform: Platform}[];
}