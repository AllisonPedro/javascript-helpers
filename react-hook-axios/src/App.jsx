import './App.css'
import useAxios from "./hook/use-axios.js";
import pokemonInstance from "./helper/axios-instance.js";
const FrontBeginnersApp = () => {

    const [pokemonList, loading, error] = useAxios({
        axiosInstance: pokemonInstance,
        method: 'GET',
        url: 'pokemon',
    });

    const [pokedexList, loadingPokedex, errorPokedex] = useAxios({
        axiosInstance: pokemonInstance,
        method: 'GET',
        url: 'pokedex',
    });

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (

        <div className="app">
            <h1>Pokemon List</h1>
            <h2>
                Exemplo 1
            </h2>
            <div>
            {pokemonList?.results?.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}
            </div>
            <h2>
                Exemplo 2
            </h2>
            <div>
            {pokedexList?.results?.map((pokedex, index) => (
                <div key={index}>{pokedex.name}</div>
            ))}
            </div>
        </div>

    )
}

export default FrontBeginnersApp
