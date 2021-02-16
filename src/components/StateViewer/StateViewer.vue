<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-on:click="clickOnState()">{{ current }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component
export default class StateViewer extends Vue {
  @Prop() private msg!: string;

  @State("current")
  public current!: any;

  @Action("actionCurrentState")
  public pushCurrentState!: any;

  @Getter("getCurrentState")
  public getCurrent!: string;

  public name: string = "";

  public clickOnState() {
    this.pushCurrentState('click state');
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
