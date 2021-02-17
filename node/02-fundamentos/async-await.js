const pokemons = [
    {
        id: 1,
        nombre: "Pichu"
    },
    {
        id: 2,
        nombre: "Pikachu"
    },
    {
        id: 3,
        nombre:"Raichu"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    }
];

const getPokemon = (id) => {

    return  new Promise((resolve, reject) => {
        const pokemon = pokemons.find( p => p.id === id);

        (pokemon) 
            ? resolve(pokemon)
            : reject(`No existe pokemon con el id ${id}`);
    });
} 

const getSalario = (id) => {
    return new Promise ((resolve, reject) => {
        const salario = salarios.find( s => s.id === id);

        (salario)
            ? resolve (salario)
            : reject (`No hay salario con id ${id}`);
    })
}

const getInfoPokemon = async (id) => {
    try {
        const nombre = await getPokemon(id);
        const salario = await getSalario(id);
    
        return `El salario de pokemon ${nombre.nombre} es de ${salario.salario}`;
    } catch (error) {
        return error;
    }
}

const id = 2;

getInfoPokemon (id)
    .then (msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log (err);
    });