import useGenres from "./useGenres"

const useGenre = (genreId?: number) =>{
    const {data} = useGenres();
    return data?.results.find(d => d.id === genreId);
}
export default useGenre;