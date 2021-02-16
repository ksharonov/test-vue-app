<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <StateViewer></StateViewer>
    <Hotels></Hotels>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hotels from "@/components/Hotels/Hotels.vue";
import StateViewer from "../components/StateViewer/StateViewer.vue";

@Component({
  components: {
    StateViewer,
    Hotels,
  }
})
export default class Home extends Vue {
  @Prop()
  id!: string;
}
</script>
