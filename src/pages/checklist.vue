<template>
    <v-container class="">
        <v-row>
            <v-select
    :items="['Checklist Inicial', 'Checklist Final']"
    v-model="tipoCheck"
    />
 </v-row> 
    <div v-if="tipoCheck == 'Checklist Inicial'">
        <h1>CHECKLIST INICIAL</h1>
    </div>
    <div v-else-if="tipoCheck == 'Checklist Final'">
        <h1>CHECKLIST FINAL</h1>
    </div>
    <v-col>
            <v-row>
                <span >Pneus</span> <v-select
                :items="tiposVerificacao"
                v-model="formCheck.pneus"
                ></v-select>
            </v-row>
            <v-row>
                <span >Luzes</span> <v-select
                :items="tiposVerificacao"
                v-model="formCheck.luzes"
                ></v-select>
            </v-row>
            <v-row>
                <span >Freios</span> <v-select
                :items="tiposVerificacao"
                v-model="formCheck.freios"
                ></v-select>
            </v-row>
            <v-row v-if="tipoCheck == 'Checklist Final'">
                <span >Relato</span> <v-text-field
              
                v-model="formCheck.relato"
                />
            </v-row>


        </v-col>
        <v-btn @click="salvarFormulario">SALVAR</v-btn>
        
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

import { postFormulario } from '@/modulos/checklistMethods';
import { ref } from 'vue';



const message = ref('')
const timeout = ref(2000)
const snackbar = ref(false)
const tiposVerificacao = ref(['Normal', 'Danificado'])
const tipoCheck = ref('Checklist Inicial')
const formCheck = ref({
    pneus: '',
    freios: '',
    luzes: '',
    relato: ''
})


async function salvarFormulario(){
    let form = {...formCheck.value}
    form.tipoFormulario = tipoCheck.value
    await postFormulario(form).then(()=>{
       
        message.value = "Formulário salvo"
        snackbar.value = true
        formCheck.value = {
    pneus: '',
    freios: '',
    luzes: '',
    relato: ''
}
    }).catch(()=>{

        message.value = "Erro ao salvar formulário"
        snackbar.value = true

    })
    
}
</script>