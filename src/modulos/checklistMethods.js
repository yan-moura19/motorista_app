import { useAppStore } from "@/store/app";
import axios from "axios";
import { URL_API } from "@/ennviroments";



function getId(){
    const appDb = useAppStore()
    return appDb.usuario.id;
}

export function postFormulario(form){
    let body = {...form}
    body.idMotorista = getId()
    return axios.post(`${URL_API}formularios`, body, null)
}