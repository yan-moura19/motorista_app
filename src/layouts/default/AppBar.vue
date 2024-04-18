<template>
  <v-app-bar flat>
    <v-app-bar-title>
      

     
    </v-app-bar-title>
    <v-btn v-if="!showSair" @click="sair">SAIR</v-btn>
  </v-app-bar>
  
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const showSair = computed(()=>{
  return route.path == '/'
})

function sair(){
  router.push('/')
}
 
</script>
