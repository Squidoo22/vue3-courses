<template>
    <button :type="type" :disabled="disabled" class="core-btn">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'submit'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.core-btn {
    @apply inline-block px-7 py-3 bg-orange-600 
	text-white font-medium
	text-sm leading-snug uppercase rounded shadow-md
	hover:bg-orange-900 hover:shadow-lg
	focus:bg-orange-700 focus:shadow-lg 
	focus:outline-none focus:ring-0
	active:bg-orange-800 active:shadow-lg 
    disabled:opacity-50
	transition duration-150 ease-in-out;
}
</style>
