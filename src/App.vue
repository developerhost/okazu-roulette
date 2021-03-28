<template>
<v-app>
  <div>
  <div>今日のオカズルーレット</div>
  <div>今日のオカズに迷った時に、ルーレットで決めよう！</div>
  <div v-if="random_number == null">今日のオカズは何にしようか？</div>
  <div v-else>{{ message[random_number] }}</div>
  <v-img
    width="100"
    height="100"
    :src="img[random_number]"
  ></v-img>

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
    @click="stop(); active();">
    ストップ
  </v-btn>


  
  </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    message: [
      '桜空もも',
      '安齋らら',
      '三上悠亜'
      ],
    img: [
      require('./assets/img/sakura_momo4.jpg'),
      require('./assets/img/anzai_rara2.jpg'),
      require('./assets/img/mikami_yua.jpg')
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
    }

  },
  mounted: {
  },
  destroyed: {
    stop() {
      clearInterval(this.repeat);
    }
  }
};
</script>
