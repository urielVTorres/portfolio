<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { ContactInfo } from '../assets/Info';
    const props = defineProps({
        language: String
    })
</script>

<template>
    <div id="contact-me">
        <p><span>LinkedIn</span>: <a target="_blank" href="https://www.linkedin.com/in/marco-uriel-vargas-torres-40180a204">{{ ContactInfo.linkedIn }}</a></p>
        <p><span>{{ props.language === "Español"? "Número de teléfono" : "Phone Number" }}</span>: {{ ContactInfo.phoneNumber }}</p>
        <p><span>Email</span>: {{ ContactInfo.email }}</p>
    </div>
</template>

<style scoped>
    div {
        max-width: 100rem;
        min-width: 20rem;
        margin: 2rem 2rem;
        padding: 2rem;
        text-align: right;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        background-color: #F05454;
        border-radius: .5rem;
        color:#222831;
        font-size: larger;

    }
    p {
        margin:0%;
        font-size: larger;
        font-weight: 600;
    }

    span {
        font-weight: 900;
    }

    a {
        color:inherit;
        text-decoration: none;
    }

    a:hover {
        color:#30475E;
    }
</style>