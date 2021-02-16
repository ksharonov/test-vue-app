<template>
  <div class="container" v-if="form">
    <div class="row">
      <div class="col-12">
        <b-card>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Email-адрес"
              label-for="input-1"
              required
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Введите ваш email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Имя" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Введите ваше имя"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Адрес" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model="form.address"
                placeholder="Введите ваш адрес"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Забронировать</b-button>
            <b-button type="reset" variant="danger">Очистить</b-button>
          </b-form>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "@/router";
import { Action } from "vuex-class";

@Component
export default class Hotels extends Vue {
  @Prop()
  hotelId?: string;

  @Action("actionCurrentState")
  public pushCurrentState!: any;

  public form?: {[param: string]: string | undefined} | undefined = {};

  public mounted(): void {
    this.initForm();
  }

  public onSubmit(event: Event) {
    event.preventDefault()
    if (!this.form) {
      return;
    }
    console.log(JSON.stringify(this.form));
    this.pushCurrentState('hotel booked');
    router.push('/');
  };

  public onReset(event: Event) {
    event.preventDefault()
    if (!this.form) {
      return;
    }
    this.form.email = ''
    this.form.name = ''
  }

  public initForm() {
    this.form = {
      hotelId: this.hotelId,
      email: '',
      name: '',
      address: '',
    };
  }

}
</script>

<style scoped>

</style>
