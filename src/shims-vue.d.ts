import Vue from 'vue';

declare module '*.vue' {
	export default Vue;
}

declare module 'vue/types/vue' {
	interface Vue {
		$globalEvent: any;
	}
}

declare global {
	var store: any;
	interface Window {
		store: any;
	}
	interface Navigations {
		name: string;
		to: string;
		requiresAuth: boolean;
	}
	interface User {
		authenticated: boolean;
		session: string | null;
		data: string | null;
	}

	interface Settings {
		isThemeDark: boolean;
	}
}
