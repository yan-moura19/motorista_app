<template>
     <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
           <v-card>
            <v-card-title class="headline text-center">Login</v-card-title>

            <v-card-text>
                <v-text-field
                label="Usuario"
                v-model="form.usuario" 
                
                />
                <v-text-field
                label="Senha"
                v-model="form.senha" 
                type="password"
                
                />

            </v-card-text>
        
            <v-btn @click="efetuarLogin" dense block>Entrar</v-btn>
           </v-card>

        </v-col>
        </v-row>
         
        <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ message }}

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        </v-container>
</template>
<script setup>
import { ref } from 'vue';
import {  useRouter } from 'vue-router';
import { useAppStore } from '@/store/app'

    const message = ref('')
    const timeout = ref(2000)
    const snackbar = ref(false)
const erro = ref(false)
    const form = ref({
    usuario: '',
    senha: ''
})
const router = useRouter();
const appDb = useAppStore()
async function efetuarLogin(){
    appDb.login(form.value).then((resp)=>{
        router.push("/checklist")
    }).catch((err)=>{
        message.value = "Usuario ou senha inválidos"
        snackbar.value = true
        
    })

}




</script>