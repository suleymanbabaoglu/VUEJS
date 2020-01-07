<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="usernameRules"
            label="UserName"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-select
            v-model="select"
            :items="roles"
            :rules="[v => !!v || 'Role is required']"
            label="Role"
            item-text="roleName"
            item-value="Id"
            required
            @change="selectedChange()"
          ></v-select>

          <v-btn text block color="purple" x-large outlined @click="addUser()">
            Add User
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "UserForm",
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
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    addUser() {
      if (this.validate()) {
        axios({
          method: "post",
          url: "/api/vue/useradd",
          data: {
            UserName: this.username,
            Password: this.password,
            RoleId: this.selectedValue
          }
        })
          .then()
          .catch(error => {
            alert(error);
          });
      }
    },
    selectedChange() {
      this.select === "admin"
        ? (this.selectedValue = 1)
        : (this.selectedValue = 2);
    }
  },
  beforeMount() {
    axios.get("/api/vue/roles").then(response => {
      this.roles = response.data;
    });
  },
  computed: {}
};
</script>
