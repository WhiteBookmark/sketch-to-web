<template>
	<v-btn large tile text color="primary" @click="buttonClick">{{buttonText}}</v-btn>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Get } from "vuex-pathify";

@Component
export default class AuthButton extends Vue {
  @Get("user@authenticated") private isAuthenticated!: boolean;

  get buttonText() {
    if (this.isAuthenticated) {
      return "Sign Out";
    }
    return "Sign In";
  }

  private async buttonClick() {
    if (this.isAuthenticated) {
      window.store.set("user@session", null);
      window.store.set("user@authenticated", false);
      // Perform logout
      return;
    }
    // Perform login
    window.store.set("user@session", 'e67d8302-8995-4e51-a705-8cb263c9615f');
    window.store.set("user@authenticated", true);
  }
}
</script>