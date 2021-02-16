<template>
  <div class="container">
    <div class="row">
      <div class="col-3" v-for="hotel in hotels" v-bind:key="hotel">
          <b-card
            v-bind:title="'Название отеля - ' + hotel"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Описание отеля
            </b-card-text>
            <router-link v-bind:to="'/hotel/' + hotel">
              <b-button variant="primary">Посмотреть</b-button>
            </router-link>
          </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Hotels extends Vue {
  public hotels: any[] = [1, 2, 3, 4, 5, 6, 7];
}
</script>

<style scoped>

</style>
