<template>
    <div>
        <ul
            class="grid grid-cols-2 max-[920px]:grid-cols-1 place-content-center justify-items-center"
        >
            <CoursesListItem
                v-for="course in coursesList"
                :key="course.id"
                :course="course"
            />
        </ul>
    </div>
    <div class="flex flex-wrap justify-center container mx-auto my-4">
        <div
            v-for="(item, index) in numberOfPages"
            @click="page = item"
            :key="index"
            :class="[{ activePage: page === item }]"
            class="w-12 text-center rounded pagination-item"
        >
            {{ item }}
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import CoursesListItem from './CoursesListItem.vue';

const store = useStore();
const page = ref(1);
const numberOfPages = ref(0);

const fetchCoursesList = () => {
    store
        .dispatch('courses/fetchCoursesList', {
            paginator: 'paged',
            per_page: 5,
            page: page.value
        })
        .then((res) => {
            console.log(res);
            numberOfPages.value = Math.ceil(
                res?.meta?.total / res?.meta?.per_page
            );
        });
};

onMounted(() => {
    fetchCoursesList();
});

watch(page, fetchCoursesList);

const coursesList = computed(() => store.getters['courses/getCoursesList']);
</script>

<style>
.pagination-item {
    cursor: pointer;
}

.activePage {
    @apply bg-orange-700 text-white;
}
</style>
