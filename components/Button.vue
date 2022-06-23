<template>
  <div>
    <v-btn :elevation="elevation" :color="color"> {{ buttonText }} </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: Number, default: 2 }) elevation?: number;
  @Prop({ type: String, default: "BUTTON" }) buttonText?: string;
  @Prop({ type: String, default: "primary" }) color?: string;
}
</script>

<style>
</style>