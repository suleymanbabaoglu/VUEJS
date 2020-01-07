<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input
                      type="text"
                      id="username"
                      v-model="userData.username"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      v-model.lazy.trim="userData.password"
                    />
                    <!--girilen değeri lazy ile işlem bittikten sonra yansıtma işlemi, trim ise boşlukları siler-->
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input
                      type="number"
                      id="age"
                      class="form-control"
                      v-model="userData.age"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br />
                  <textarea
                    id="message"
                    rows="3"
                    class="form-control"
                    v-model="userData.description"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input
                        v-model="userData.interests"
                        type="checkbox"
                        value="yazilim"
                      />
                      Yazılım
                    </label>
                    <label>
                      <input
                        v-model="userData.interests"
                        type="checkbox"
                        value="donanim"
                      />
                      Donanım
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input
                      v-model="userData.gender"
                      type="radio"
                      value="erkek"
                    />
                    Erkek
                  </label>
                  <label>
                    <input
                      v-model="userData.gender"
                      type="radio"
                      value="kadin"
                    />
                    Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select v-model="userData.selectedCity" class="form-control">
                    <option
                      v-for="(city, index) in userData.cities"
                      :key="index"
                      >{{ city }}</option
                    >
                  </select>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-12 form-group">
                  <app-switch v-model="switched"></app-switch>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button
                  @click.prevent="submit()" 
                  class="btn btn-primary">Gönder!</button> <!--click.prevent butonun varsayılan submit özelliğini engeller-->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Form Verileri</h4>
          </div>
          <div class="panel-body">
            <p>Kullanıcı Adı: {{ userData.username }}</p>
            <p>Şifre: {{ userData.password }}</p>
            <p>Yaş:{{ userData.age }}</p>
            <p style="white-space:pre;">Açıklama:{{ userData.description }}</p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="(item, index) in userData.interests" :key="index">
                {{ item }}
              </li>
            </ul>
            <p>Cinsiyet: {{ userData.gender }}</p>
            <p>Şehir: {{ userData.selectedCity }}</p>
            <p>Toggle: {{ switched ? "AÇIK": "KAPALI" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch";
export default {
  components: {
    appSwitch: Switch
  },
  data() {
    return {
      userData: {
        username: "",
        password: "",
        age: 25,
        description: "",
        interests: [],
        gender: "",
        cities: [
          "Bursa",
          "İstanbul",
          "Ankara",
          "İzmir",
          "Rize",
          "Trabzon",
          "Artvin"
        ],
        selectedCity: ""
      },
      switched: true,
      isSubmitted: false

    };
  },
  methods: {
    submit(e){
      this.isSubmitted = true;
    }
  },
};
</script>

<style></style>
