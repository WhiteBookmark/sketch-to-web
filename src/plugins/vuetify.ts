import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				background: colors.shades.white,
				primary: colors.pink.base,
				secondary: colors.pink.base,
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
			dark: {
				background: colors.deepPurple.base,
				primary: colors.shades.white,
				secondary: colors.deepPurple.base,
			},
		},
	},
});
