<template>
  <v-app>
    <v-main class="white notranslate"  translate="no">
    <DefaultBar />

    <router-view></router-view>
  </v-main>
  </v-app>
</template>

<script setup>
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
</script>
