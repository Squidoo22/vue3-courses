<template>
    <HeaderComponent class="header" />

    <div class="content-wrapper">
        <router-view />
    </div>

    <FooterComponent class="footer" />
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style scoped>
.header {
    background-color: #474747;
    flex-grow: 0; /*Запрещаем увеличиваться*/
    flex-shrink: 0; /*Запрещаем сжиматься*/
    flex-basis: auto;
}

.content-wrapper {
    overflow-y: auto;
    padding: 10px;
    flex-grow: 1;
    min-height: calc(100vh - 64px - 181px);
}

.footer {
    background-color: #474747;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}
</style>
