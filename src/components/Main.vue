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
        @click="reload(); active();">
        ストップ
      </v-btn>

      
    </v-layout>
    </v-col>

    <v-col
        class="mb-5"
        cols="12"
    >
    <v-layout justify-center>

    <v-btn
    v-if="isActive == true && this.random_number"
    large 
    class="mb-2 
    font-weight-bold" 
    color="primary" 
    @click="tweet()"
    >
    ツイートする
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
      '三上悠亜',
      '朝田ひまり',
      '高橋しょう子',
      '木下ひまり',
      '相沢みなみ',
      '姫咲はな',
      '篠田ゆう',
      '松本いちか',
      '松下紗栄子',
      '二階堂夢',
      '山岸逢花',
      'はやのうた',
      '橋本ありな',
      '藤森里穂',
      'JULIA',
      '桃乃木かな',
      '石原希望',
      '神宮寺ナオ',
      ],
    img: [
      require('../assets/img/sakura_momo4.jpg'),
      require('../assets/img/anzai_rara2.jpg'),
      require('../assets/img/mikami_yua.jpg'),
      require('../assets/img/asada_himari.jpg'),
      require('../assets/img/takahasi_syouko.jpg'),
      require('../assets/img/kinosita_himari.jpg'),
      require('../assets/img/aizawa_minami.jpg'),
      require('../assets/img/himesaki_hana.jpg'),
      require('../assets/img/sinoda_yuu.jpg'),
      require('../assets/img/matumoto_itika.jpg'),
      require('../assets/img/matusita_saeko.jpg'),
      require('../assets/img/nikaido_yume.jpg'),
      require('../assets/img/yamagishi_aika.jpg'),
      require('../assets/img/hayano_uta.jpg'),
      require('../assets/img/hasimoto_arina.jpg'),
      require('../assets/img/huzimori_riho.jpg'),
      require('../assets/img/julia.jpg'),
      require('../assets/img/isihara_nozomi2.jpg'),
      require('../assets/img/zinguuzi_nao.jpg'),
      
      ],
    random_number: null,
    isActive: true,
    stop: false
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
    // shuffle(){
    //   if(this.isActive == false){
    //     var repeat = setInterval(function loop() {
    //       this.random_number = Math.floor(Math.random() * this.message.length);
    //     }.bind(this), 100);
    //     repeat;

    //   }else{
    //     clearInterval(repeat);
    //     this.random_number = Math.floor(Math.random() * this.message.length);
    //   }
    // },

    shuffle(){
    var repeat = setInterval(function loop() {
        if(this.isActive == false){
          this.random_number = Math.floor(Math.random() * this.message.length);
        }else{
          clearInterval(repeat);
        }
        }.bind(this), 100);
        repeat;
    },
    tweet() {
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "今日のオカズは" + this.message[this.random_number] + "でした" +
        "%20%23今日のオカズルーレット" +
        "&url=" +
        "https://okazu-roulette.web.app";
      location.href = shareURL;
    },
  },
};
</script>
