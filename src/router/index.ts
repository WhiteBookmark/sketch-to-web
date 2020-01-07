import Vue from 'vue';
import VueRouter from 'vue-router';

import Location from '@/views/Location.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'location',
		component: Location,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
