<script setup lang="ts">
import {ref} from 'vue'
import NavBar from './components/NavBar.vue';
import Introduction from './components/Introduction.vue';
import Certification from './components/Certification.vue';
import ContactMe from './components/ContactMe.vue';

const language = ref("Español");

//Function to change the language
const handleLanguageChange = () : void =>{
        if(language.value === "English") language.value = "Español";
        else language.value = "English";
    }


</script>

<template>
    <header>
        <button
            @click="handleLanguageChange"
        >
            {{ language == "Español" ? "English" : "Español" }}
        </button>
        <NavBar :language="language" />
    </header>
    <div id="main-container">
        <Introduction :language="language" />
        <h2>{{ language === "Español"? "Habilidades" : "Skills" }}</h2>
        <Certification :language="language" />
        <ContactMe :language="language" />
    </div>
</template>

<style scoped>

header {
    position: fixed;
    width: 100%;
    top: 0;
    display:flex;
    justify-content: space-between;
    background-color: #101010;
    padding: 0.5rem;
}

#main-container {
    margin-top: 15rem;
}


</style>
