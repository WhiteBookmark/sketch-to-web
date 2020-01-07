<template>
	<v-app>
		<navigation-bar></navigation-bar>

		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavigationBar from "@/components/NavigationBar.vue";

@Component({
  components: {
    NavigationBar
  }
})
export default class App extends Vue {}
</script>
