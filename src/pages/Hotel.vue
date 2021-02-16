<template>
  <div class="about">
    <h1>Страница отеля {{id}}</h1>
    <StateViewer></StateViewer>
    <HotelOrder v-bind:hotel-id="id"></HotelOrder>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StateViewer from "@/components/StateViewer/StateViewer.vue";
import HotelOrder from "@/components/HotelOrder/HotelOrder.vue";
import { Action } from "vuex-class";

@Component({
  components: {
    StateViewer,
    HotelOrder
  }
})
export default class Hotel extends Vue {
  @Prop()
  id!: string;

  @Action("actionCurrentState")
  public pushCurrentState!: any;

  public mounted(): void {
    this.pushCurrentState('open hotel');
  }
}
</script>
