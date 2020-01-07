<template>
    <v-container>
        <v-layout text-center wrap>
            <v-flex mb-4>
                <v-data-table
                        :headers="headers"
                        :items="users"
                        :items-per-page="5"
                        class="elevation-1"
                >
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                name: "DataTable",
                headers: [
                    {text: "ID", value: "id"},
                    {text: "User Name", value: "userName"},
                    {text: "Password", value: "password"},
                    {text: "Role ID", value: "roleId"}
                ],
                users: [
                    {
                        id: "",
                        userName: "",
                        password: "",
                        roleId: ""
                    }
                ]
            };
        },
        methods: {
            getUser() {
                axios.get("/api/vue/users").then(response => {
                    this.users = response.data;
                });
            }
        },
        beforeMount() {
            this.getUser();
        },
        mounted() {
        }
    };
</script>
