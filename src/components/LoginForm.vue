<template>
    <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
            <div
                class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
                <div
                    class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="w-full"
                        alt="Sample image"
                    />
                </div>
                <div
                    class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
                >
                    <Form :validation-schema="schema" @submit="submit">
                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        ></div>

                        <div class="mb-6">
                            <InputComponent
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                v-model="email"
                            />
                        </div>

                        <div class="mb-6">
                            <InputComponent
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                v-model="password"
                            />
                        </div>

                        <div class="text-center lg:text-left">
                            <ButtonComponent> Login </ButtonComponent>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import ButtonComponent from './uiKit/ButtonComponent.vue';
import InputComponent from './uiKit/InputComponent.vue';

const store = useStore();
const router = useRouter();

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
});

const email = ref('');
const password = ref('');

const submit = async () => {
    await store.dispatch('users/userLogin', {
        login: email.value,
        password: password.value
    });

    router.push('/');
};
</script>
