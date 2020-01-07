<template>
    <v-app id="inspire">

        <v-app-bar
                app
                clipped-right
                color="#37474f"
                dark
                fluid
        >
            <v-app-bar-nav-icon @click.stop="left = !left"/>
            <v-row justify="end">
                <h2>
                    <router-link tag="a" to="/"><a style="color: white">Miracle</a></router-link>
                </h2>
            </v-row>
            <v-spacer/>
            <v-btn
                    color="#767676"
                    class="ma-2 white--text"
            >
                <v-icon left dark>mdi-logout</v-icon>
                Logout
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary
                color="#37474f"
                width="10%"
        >
            <template>
                <div class="text-center">
                    <template>
                        <router-link tag="a" to="/"><a id="a" class="d-flex flex-column">
                            <v-icon color="white" large>mdi-home</v-icon>
                            Home</a></router-link>
                    </template>

                </div>
            </template>

            <template>
                <div class="text-center">
                    <template>
                        <router-link tag="a" to="/"><a id="a" class="d-flex flex-column">
                            <v-icon color="white" large>mdi-domain</v-icon>
                            Company</a></router-link>
                    </template>

                </div>
            </template>

            <template>
                <div class="text-center">
                    <template>
                        <router-link tag="a" to="/"><a id="a" class="d-flex flex-column">
                            <v-icon color="white" large>mdi-account</v-icon>
                            Person</a></router-link>
                    </template>

                </div>
            </template>

            <template>
                <div class="text-center">
                    <template>
                        <router-link tag="a" to="/"><a id="a" class="d-flex flex-column">
                            <v-icon color="white" large>mdi-apple-icloud</v-icon>
                            Cloud</a></router-link>
                    </template>

                </div>
            </template>

            <template>
                <div class="text-center">
                    <v-menu top :offset-x="true">
                        <template v-slot:activator="{ on }">
                            <router-link tag="a" v-on="on"><a id="a" class="d-flex flex-column">
                                <v-icon color="white" large>mdi-mouse</v-icon>
                                Application</a></router-link>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in items" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </template>

            <template>
                <div class="text-center">
                    <template>
                        <router-link tag="a" to="/"><a id="a" class="d-flex flex-column">
                            <v-icon color="white" large>mdi-newspaper-plus</v-icon>
                            News</a></router-link>
                    </template>

                </div>
            </template>
        </v-navigation-drawer>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        justify="center"
                        align="center"
                >


                </v-row>
            </v-container>
        </v-content>

        <v-footer
                app
                color="blue-grey"
                class="white--text"
        >

            <v-spacer/>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            left: false,
            items: [
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me'},
                {title: 'Click Me 2'},
            ],

        }),
    }
</script>

<style scoped>
    #a {
        font-family: sans-serif;
        font-size: small;
        color: white;
        margin: 10px 0;
        border-bottom: 1px solid #666666;
        align-content: center;
        justify-content: center;
    }
</style>