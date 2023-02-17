<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import {topBarInfo} from '../assets/Info'
    const props = defineProps({
        language: String
    });
    //Find the object that matches language.
    const navButtons = computed (() => topBarInfo.find(element => element.language === props.language))
    
</script>

<template>
    <div class="contenedor-botones">
        <button v-for="item in navButtons?.buttons">{{ item }}</button>
    </div>
</template>

<style scoped>

.contenedor-botones {
    min-width: calc(fit-content + 4rem);
    display: flex;
    gap:0.5em;
    padding-right: 1rem;
}

</style>