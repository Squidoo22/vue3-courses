<template>
    <div>
        <label v-if="label">
            {{ label }}
        </label>
        <Field
            class="core-input"
            :type="type"
            :id="id"
            :placeholder="placeholder"
            :invalid="invalid"
            :value="modelValue"
            :name="name"
            @change="$emit('update:modelValue', $event.target.value)"
            @blur="onBlur($event)"
        />
        <ErrorMessage class="text-red-400" :name="name" />
    </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Your Placeholder'
    },
    label: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: '',
        required: true
    },
    invalid: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    },
    id: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue', 'blur']);

const onBlur = (e) => {
    emit('blur', e);
};
</script>

<style scoped>
.core-input {
    @apply block w-full px-4 
	py-2 text-xl font-normal text-gray-700 
	bg-white bg-clip-padding border border-solid 
	border-gray-300 rounded transition ease-in-out 
	m-0 focus:text-gray-700 
	focus:bg-white 
	focus:border-blue-600 
	focus:outline-none;
}
</style>
