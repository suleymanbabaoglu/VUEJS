<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-1 font-weight-bold mb-3">
          USERS
        </h1>        
       
        <template>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Id</th>
                  <th class="text-left">UserName</th>
                  <th class="text-left">Password</th>
                  <th class="text-left">RoleId</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in users" :key="item.id" track-by="item.id">
                  <td class="text-left">{{ item.id }}</td>
                  <td class="text-left">{{ item.userName }}</td>
                  <td class="text-left">{{ item.password }}</td>
                  <td class="text-left">{{ item.roleId }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      users: null,
      valid: true,
      username: "",
      usernameRules: [
        v => !!v || "UserName is required",
        v =>
          (v && v.length <= 10) || "User Name must be less than 10 characters"
      ],

      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      select: null,
      selectedValue: 0,
      roles: []
    };
  },
  methods: {   
    getUser() {
      axios.get("/api/vue/users").then(response => {
        this.users = response.data;
      });
      axios.get("/api/vue/roles").then(response => {
        this.roles = response.data;
      });
    }  
  },
  beforeMount() {
    this.getUser();
  },
  computed: {}
};
</script>
