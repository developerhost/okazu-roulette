<template>  
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="title font-weight-bold mb-3">今日のオカズに迷った時に、ルーレットで決めよう！</h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 v-if="random_number == null">
          今日のオカズは何にしようか？
        </h2>
        <h2 v-else>
          {{ message[random_number] }}
        </h2>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      <v-layout justify-center>
        <v-avatar
          size="100%"
        >
        <v-img
          max-width="100"
          max-height="100"
          :src="img[random_number]"
        ></v-img>
          
        </v-avatar>

      </v-layout>
      </v-col>
    </v-row>

    <v-row
    justify="center"
    align-content="center"
    >

    
    <v-col
        class="mb-5"
        cols="12"
        
    >
    <v-layout justify-center>
      <v-btn
        v-if="isActive == true"
        class="pa-5 ml-3"
        depressed
        color="blue lighten-4"
        @click="shuffle(); active();">
        スタート
      </v-btn>

      <v-btn
        v-else
        class="pa-5 ml-3"
        depressed
        color="red lighten-4"
        @click="beforeDestroy(); active();">
        ストップ
      </v-btn>
    </v-layout>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
  name: 'Main',

  data: () => ({
    message: [
      '桜空もも',
      '安齋らら',
      '三上悠亜'
      ],
    img: [
      require('../assets/img/sakura_momo4.jpg'),
      require('../assets/img/anzai_rara2.jpg'),
      require('../assets/img/mikami_yua.jpg')
      ],
    random_number: null,
    isActive: true
  }),
  methods: {
    reload(){
      const self = this
      clearInterval(self.repeat);
      console.log("reload");
      
    },
    active(){
      this.isActive = !this.isActive;
    },
    shuffle(){
      var repeat = setInterval(function loop() {
        this.random_number = Math.floor(Math.random() * this.message.length);
      }.bind(this), 100);
      repeat;
    },
    beforeDestroy() {
    clearInterval(this.repeat);
    this.random_number = Math.floor(Math.random() * this.message.length);
    console.log("reload");
    }

  },
};
</script>
