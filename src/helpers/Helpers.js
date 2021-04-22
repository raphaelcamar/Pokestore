import {hp, attack, defense, speed, fire, water, cart, poison, bug} from '../assets/svg'

export const createObjectPokemon = (pokemon, type) =>{
    const { forms, sprites, stats, id } = pokemon
    const { name } = forms[0]
    const photo = sprites.other['official-artwork'].front_default || sprites.other.dream_world.front_default || sprites.front_default
    const price = randomPrice()
    const obj = {
        name,
        photo,
        stats,
        price : price,
        currentPrice : price,
        idPokemon : id,
        qtd : 1,
        type
    }

    return obj;
}

export const catchSVG = (typeSVG) => {
    const svgs = {
        hp,
        attack,
        defense,
        speed,
        fire,
        water,
        cart,
        poison,
        bug
    }
    
    return svgs[typeSVG]
}

export const translate = (attibute) =>{
    const attrs = {
        'attack' : 'Ataque',
        'defense' : 'Defesa',
        'speed': 'Velocidade',
        'hp' : 'Vida'
    }

    return attrs[attibute]
}

const randomPrice = () => {
    return (Math.random() * 500).toFixed(2)
}

export const getDate = () =>{

        const date = new Date();
        const day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
        const month = date.getMonth() + 1 < 10 ? '0'+ (date.getMonth() + 1).toString() : date.getMonth() + 1;
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
}
export const getHours = () =>{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hour}:${minute}:${second}`

}
export const calcCashBack = (price) =>{
    const valueDiscounted = (price * 0.10).toFixed(2)
    return valueDiscounted;
}

export const filterPokemon = (pokemons, value) =>{
    const pokemonsFiltered = pokemons.filter(pokemon =>{
        return pokemon.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    });

    return pokemonsFiltered;
}