import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

const useGames = () => useQuery({
    queryKey: ['games'],
    queryFn: apiClient.getAll
})
export default useGames;