import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import router from '@/router/index.js'
import CompaniesIndex from '@/components/companies/CompaniesIndex.vue'
import Something from '@/components/companies/Something.vue'

createApp({
    components: {
        CompaniesIndex, 
        Something
    }
}).use(router).mount('#app')
