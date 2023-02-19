<script setup lang="ts">
import { defineProps } from 'vue'
import { ProjectsInfo } from '../assets/Info';
const props = defineProps({
    language: String
});

const projectsInfo = ProjectsInfo.find( element => element.language === props.language);

</script>


<template>
    <div id="project">
        <h2>{{ props.language === "Español" ? "Proyectos" : "Projects" }}</h2>
        <div id="container-projects">
            <article v-for="project in projectsInfo?.projects" class="project-card">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="container-links">
                    <a :href="project.link" target="_black">{{props.language === "Español" ? "Ir al sitio" : "Go to website"}}</a>
                    <a :href="project.github" target="_black">{{props.language === "Español" ? "Ir al repositorio" : "Go to repo"}}</a>
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
#project {
    padding-top: 2rem;
}

#container-projects {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 2rem;
    justify-content: center;

}

.project-card {
    padding: 1rem;
    background-color:aquamarine;
    border-radius: 2rem 0.5rem;
}

.container-links {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}

a {
    font-weight: 600;
    font-size: large;
    color: inherit;
    text-decoration: none;
}
</style>