<template>
	<v-container fluid>
		<v-row>
			<v-col>
				<h1>Home</h1>
				<p>This is a simple home page.</p>
			</v-col>
		</v-row>
	</v-container>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
