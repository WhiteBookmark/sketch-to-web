import Vue from 'vue';
import App from '@/App.vue';

// Import store first then router
import store from '@/store/index';
import router from '@/router/index';

import '@/registerServiceWorker';
import vuetify from '@/plugins/vuetify';
import '@/styles/rotate.css';

Vue.prototype.$globalEvent = new Vue(); // Global event bus

Vue.config.productionTip = true;
window.store = store;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
