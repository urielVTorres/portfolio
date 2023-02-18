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

#technologies {
    display:grid;
    grid-template-columns: repeat(5, 20%);
    justify-content: center;

}

</style>