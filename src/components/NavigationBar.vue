<template>
	<v-app-bar app elevation="0">
		<v-container fluid fill-height>
			<v-row no-gutters>
				<v-col class="text-left">
					<v-toolbar-title>
						<v-btn icon color="weakPrimary">
							<v-icon x-large>{{Icons.mdiArrowLeftThick}}</v-icon>
						</v-btn>
						<small class="weakPrimary--text caption">PITCHED ROOF</small>
					</v-toolbar-title>
				</v-col>
				<v-col>
					<v-tabs slider-color="secondary" active-class="black--text" slider-size="8" grow>
						<v-tab>LOCATION</v-tab>
						<v-tab>DESIGN</v-tab>
						<v-tab>QUOTE</v-tab>
					</v-tabs>
				</v-col>
				<v-col class="text-right">
					<small class="weakPrimary--text body-2 mr-4">Warren Buffet</small>
					<v-btn fab small elevation="0" color="weakSecondary">
						<p class="white--text pa-0 ma-0">WB</p>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mdiArrowLeftThick } from "@mdi/js";

@Component
export default class NavigationBar extends Vue {
  get Icons() {
    return {
      mdiArrowLeftThick
    };
  }
}
</script>
