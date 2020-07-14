<template>
  <div>
    <v-row>
      <v-col cols="12" md="12" class="mt-10">
        <v-card elevation="10" class="mb-10" width="100%">
          <v-data-table :items="users" :headers="headers">
            <template v-slot:item.actions="{item}">
                <v-btn @click="getById(item.id)" color="warning">GÜNCELLE</v-btn>
                <v-btn @click="userDelete(item.id)" color="red">SİL</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="text-align:-webkit-center">
      <v-col cols="12" md="12">
        <v-text-field
          style="width:50%"
          outlined
          placeholder="USERNAME"
          v-model="user.username"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-text-field
          style="width:50%"
          outlined
          placeholder="PASSWORD"
          v-model="user.password"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-text-field
          style="width:50%"
          outlined
          placeholder="NAME"
          v-model="user.name"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-text-field
          style="width:50%"
          outlined
          placeholder="EMAIL"
          v-model="user.email"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-btn
          style="width:100%;margin-bottom:50px;font-size:40px"
          x-large
          outlined
          color="success"
          @click="userCreate"
          >EKLE</v-btn
        >
        <v-btn
          style="width:100%;margin-bottom:50px;font-size:40px"
          x-large
          outlined
          color="primary"
          @click="userUpdate"
          >GÜNCELLE</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    created() {
      this.initialize();
    },
    data(){
      return{
        user:{},
        users:[],
        headers:[
          {text:"ID",value:"id"},
          {text:"AD SOYAD",value:"name"},
          {text:"USERNAME",value:"username"},
          {text:"PASSWORD",value:"password"},
          {text:"EMAIL",value:"email"},
          {text:"İşlemler",value:"actions"},
        ]
      }
    },
    methods:{
      initialize(){
        this.getUsers();
      },
      getById(id){
        return axios({
          method: "get",
          url: "http://localhost:5000/api/user/getUser/"+id,
          headers: { "Content-Type": "application/json" },
        })
         .then((response) => {
              this.user = response.data;
        })
         .catch(() => {});
      },
      getUsers(){
        return axios({
          method: "get",
          url: "http://localhost:5000/api/user/getUsers",
          headers: { "Content-Type": "application/json" },
        })
                .then((response) => {
                  this.users=response.data;
                })
                .catch(() => {});
      },
      userCreate(){
        return axios({
          method: "post",
          url: "http://localhost:5000/api/user/create",
          headers: { "Content-Type": "application/json" },
          data: this.user
        })
                .then((response) => {
                  if(response){
                    alert("BAŞARIYLA KAYDEDİLDİ");
                    this.initialize();
                  }

                })
                .catch((err) => {
                  alert(err);
                });
      },
      userUpdate(){
        return axios({
          method: "put",
          url: "http://localhost:5000/api/user/update",
          headers: { "Content-Type": "application/json" },
          data: this.user
        })
                .then((response) => {
                  if(response){
                    alert("BAŞARIYLA KAYDEDİLDİ");
                    this.initialize();
                  }

                })
                .catch((err) => {
                  alert(err);
                });
      },
      userDelete(id){
        return axios({
          method: "delete",
          url: "http://localhost:5000/api/user/delete/"+id,
          headers: { "Content-Type": "application/json" }
        })
                .then((response) => {
                  if(response){
                    alert("BAŞARIYLA SİLİNDİ");
                    this.initialize();
                  }

                })
                .catch((err) => {
                  alert(err);
                });
      }

    }
  }
</script>

