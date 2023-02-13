<template>
    <li class="my-6 flex justify-center items-center">
        <div class="w-1/3 h-auto object-cover">
            <img
                v-if="course.thumbnail_url && !isCourseImageBroken"
                :src="course.thumbnail_url"
                class="h-50"
                alt="course-image"
                @error="handleBrokenImage"
            />
            <img v-else src="../assets/img/no-image.png" alt="no-image" />
        </div>
        <div class="w-2/3 pl-6">
            <h3 class="font-medium text-lg">{{ course.name }}</h3>
            <p class="mt-2 text-gray-700">${{ course.price }}</p>
            <ButtonComponent
                class="max-w-fit"
                @click="navigateToCourse(course.id)"
            >
                Detail about course
            </ButtonComponent>
        </div>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComponent from './uiKit/ButtonComponent.vue';

const props = defineProps({
    course: {
        type: Object,
        default: () => {}
    }
});

const router = useRouter();

const navigateToCourse = (id) => router.push(`/course/${id}`);

const isCourseImageBroken = ref(false);

const handleBrokenImage = () => {
    isCourseImageBroken.value = true;
};
</script>
