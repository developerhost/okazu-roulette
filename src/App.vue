<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <v-toolbar-title class="font-weight-black">
        今日のオカズルーレット
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text href="" target="_blank">
          <span class="mr-2 font-weight-black">シェア</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <Main />
    </v-main>

  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({
  }),
};
</script>
