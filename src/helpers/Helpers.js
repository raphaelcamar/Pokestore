import {hp, attack, defense, speed, fire, water} from '../assets/svg/svg'

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
        water
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