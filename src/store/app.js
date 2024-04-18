// Utilities
import { defineStore } from 'pinia'
import {URL_API} from '../ennviroments.js'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    usuario: {

    }
  }),
  actions: {
    async login(form) {
      let body = {...form}
      return await axios.post(`${URL_API}usuarios/auth`,body).then((resp)=>{
          this.usuario = resp.data;
          

      })

  },
  }
})
