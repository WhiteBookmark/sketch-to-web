import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#215B62',
				secondary: '#45959E',
				weakPrimary: '#979797',
				weakSecondary: '#C4C3C3',
			},
		},
	},
});
