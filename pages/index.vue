<template>
  <v-app>
    <Button elevation="10" buttonText="Button" />
  </v-app>
</template>

<script>
import { Vue, Component } from "nuxt-property-decorator";
import Button from "../components/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class IndexPage extends Vue {}
</script>
