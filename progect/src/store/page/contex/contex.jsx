import { createContext } from "react";

export let Contex=createContext({
    product:[],
    setProduct:()=>{}
})
export let locaalContex=createContext({
    basscetCarad:[],
    setBasscetCard:()=>{}
})
export let UserCOntex=createContext({
    users:[],
    setUsers:()=>{}
})