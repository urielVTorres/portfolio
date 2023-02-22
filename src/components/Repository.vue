<script setup lang="ts">
import { defineProps, computed, CSSProperties } from 'vue'
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
            <article v-for="project in projectsInfo?.projects" class="project-card" :style="{ 'background-image': `url(${project.img})` }">
                <div class="card-info" >
                    <div class="desc">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.description }}</p>
                    </div>
                    <div class="container-links">
                        <a :href="project.link" target="_black">{{props.language === "Español" ? "Ir al sitio" : "Go to website"}}</a>
                        <a :href="project.github" target="_black">{{props.language === "Español" ? "Ir al repositorio" : "Go to repo"}}</a>
                    </div>
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
    border-radius: 0.5rem 0.5rem;
    background-size: 100% 100%;
    background-position-x: center;
}

.desc {
    overflow-y: auto;
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

.card-info {
    width: full;
    height: 11rem;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem;
    background-color: rgb(43, 43, 43, 0);
    color:rgb(255, 255, 255, 0);
    
}

.card-info:hover {
    background-color: rgb(43, 43, 43, .7);
    color:rgb(255, 255, 255);
    backdrop-filter: blur(2px);
}


</style>