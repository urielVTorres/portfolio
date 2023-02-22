<script setup lang="ts">
    import { defineProps, computed, ref } from 'vue';
    import {topBarInfo} from '../assets/Info'
    const props = defineProps({
        language: String
    });
    //Find the object that matches language.
    const navButtons = computed (() => topBarInfo.find(element => element.language === props.language))
    const id = ref("");
    const handleScrollView = (e : Event)=>{
        //@ts-ignore
        id.value = e.target?.value;
        document.getElementById(id.value)?.scrollIntoView({
            behavior: "smooth"
        });
    }
    
</script>

<template>
    <div class="contenedor-botones">
        <button v-for="item in navButtons?.buttons" :value="item.value" @click="handleScrollView">{{ item.text }}</button>
        <a href="src\assets\Resume_Marco_Vargas.pdf" download="Resume_Uriel_Vargas.pdf" ><button >CV</button></a>
    </div>
</template>

<style>

.contenedor-botones {
    min-width: calc(fit-content + 4rem);
    display: flex;
    gap:0.5em;
    padding-right: 1rem;
    z-index: 100;
}

</style>