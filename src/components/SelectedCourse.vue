<template>
    <div v-if="!selectedCourse">Loading...</div>
    <div v-else class="flex flex-col mt-10">
        <ButtonComponent class="my-3 w-36" @click="router.go(-1)">
            Go back
        </ButtonComponent>
        <h1 class="text-3xl font-bold text-center text-orange-700 my-6">
            {{ selectedCourse.name }}
        </h1>
        <div class="w-1/2 flex justify-center image-wrapper">
            <img
                v-if="selectedCourse.thumbnail_url && !isCourseImageBroken"
                :src="selectedCourse.thumbnail_url"
                @error="handleBrokenImage"
            />
            <img v-else src="../assets/img/no-image.png" alt="no-image" />
        </div>
        <p class="mt-5 text-lg text-orange-500 leading-relaxed">
            Price: {{ selectedCourse.price }} $
        </p>
        <p
            v-if="selectedCourse.description"
            class="my-5 text-lg text-orange-500 leading-relaxed"
            v-html="selectedCourse.description"
        />
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { onMounted, computed, onUnmounted } from 'vue';
import ButtonComponent from '../components/uiKit/ButtonComponent.vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

const selectedCourseId = route.params.id;
const isCourseImageBroken = ref(false);

const handleBrokenImage = () => {
    isCourseImageBroken.value = true;
};

onMounted(() => {
    store.dispatch('courses/fetchSelectedCourse', selectedCourseId);
});

const selectedCourse = computed(
    () => store.getters['courses/getSelectedCourse']
);

onUnmounted(() => store.commit('courses/setSelectedCourse', null));
</script>

<style scoped>
.image-wrapper {
    margin: 0 auto;
}
</style>
