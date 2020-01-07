import Vue from 'vue';
import App from '@/App.vue';

// Import store first then router
import router from '@/router/index';

import '@/registerServiceWorker';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = true;

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
