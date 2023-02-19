<script setup lang="ts">
    import {AboutMeInfo} from '../assets/Info';
    import { computed, defineProps } from 'vue';

    const props = defineProps({
        language: String
    });
    //Stores the content in the language selected.
    const aboutMe = computed(()=> AboutMeInfo.find( element => element.language === props.language ));

</script>


<template>
    <div id="about-me">
        <h1>{{ aboutMe?.greeting }}</h1>
        <p>{{ aboutMe?.about }}</p>
    </div>
</template>


<style scoped>
#about-me {
    margin: 0 10rem;
    padding-top: 15rem;
}
</style>