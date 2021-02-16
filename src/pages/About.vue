<template>
  <div class="about">
    <h1>Страница об организации</h1>
    <StateViewer></StateViewer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StateViewer from "@/components/StateViewer/StateViewer.vue";
import { Action } from "vuex-class";

@Component({
  components: {
    StateViewer,
  }
})
export default class About extends Vue {
  @Prop()
  id!: string;

  @Action("actionCurrentState")
  public pushCurrentState!: any;

  public mounted(): void {
    this.pushCurrentState('open about');
  }
}
</script>
