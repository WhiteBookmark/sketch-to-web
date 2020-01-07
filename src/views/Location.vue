<template>
	<v-container fluid pt-0>
		<v-row>
			<v-col class="text-center primary white--text">
				<p class="my-auto pa-6 headline font-weight-light">Let's get some info about your project.</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="text-center d-flex justify-center">
				<v-card flat tile width="600">
					<v-window v-model="currentSlide">
						<v-window-item v-for="n in length" :key="`card-${n}`">
							<v-card elevation="0">
								<v-card-title class="font-weight-light">BASICS</v-card-title>
								<v-card-text>
									<v-text-field placeholder="Project Name" color="secondary" class="py-7"></v-text-field>
									<v-text-field placeholder="Zip Code" color="secondary" class="py-7"></v-text-field>
									<v-btn
										color="primary"
										class="text-capitalize"
										depressed
										x-large
										tile
										width="200"
										height="60"
									>Continue</v-btn>
								</v-card-text>
							</v-card>
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
		</v-row>
		<v-divider class="mt-12"></v-divider>
		<v-row>
			<v-col>
				<v-card flat tile>
					<v-card-actions class="justify-center">
						<v-btn large icon color="secondary">
							<v-icon>{{Icons.mdiArrowLeftThick}}</v-icon>
						</v-btn>
						<v-item-group v-model="currentSlide" mandatory>
							<v-item
								v-for="n in length"
								:key="`btn-${n}`"
								v-slot:default="{ active, toggle }"
								class="ma-0"
							>
								<v-btn :input-value="active" icon text @click="toggle" x-small>
									<v-icon v-if="active" color="primary">{{Icons.mdiRecord}}</v-icon>
									<v-icon v-else x-small>{{Icons.mdiCheckboxBlankCircleOutline}}</v-icon>
								</v-btn>
							</v-item>
						</v-item-group>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  mdiRecord,
  mdiArrowLeftThick,
  mdiCheckboxBlankCircleOutline
} from "@mdi/js";

@Component
export default class Location extends Vue {
  private length: Number = 15;
  private currentSlide: Number = 0;

  get Icons() {
    return {
      mdiRecord,
      mdiArrowLeftThick,
      mdiCheckboxBlankCircleOutline
    };
  }
}
</script>
