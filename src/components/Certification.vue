<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { Skills } from '../assets/Info';

    const props = defineProps({
        language: String
    });
    //Stores the content in the language selected.
    const skills = computed(()=> Skills.find(element => element.language === props.language))
    
</script>

<template>
    <div id="skills">
        <h2>{{ props.language === "Español"? "Habilidades" : "Skills" }}</h2>
        <div id="certification">
            <div class="ability" v-for="ability in skills?.info">
                <h3>{{ ability.title }}</h3>
                <p>{{ ability.description }}</p>
            </div>
        </div>
        <h2>{{ language === "Español" ? "Tecnologías que conozco" : "Technologies I know" }}</h2>
        <div id="technologies">
            <h3 v-for="tec in skills?.tec">{{ tec }}</h3>
        </div>
    </div>
</template>

<style scoped>
#certification{
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 30%) ;
    gap: 3%;
}

.ability {
    border-radius: 2rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 0.3rem 1.5rem;
    background-color: #222831;
    color:#ffffff;
}

.ability p {
    text-align: justify;
}

#technologies {
    display:grid;
    grid-template-columns: repeat(5, 20%);
    justify-content: center;

}

#skills {
    padding-top: 2rem;
    background-color: #ffffff;
    margin: 2rem;
    border-radius: 0.5rem;
    color: #222831;
    padding-bottom: 3rem;
}
</style>