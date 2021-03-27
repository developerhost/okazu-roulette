<template>
<v-app>
  <div>
  <div>今日のオカズルーレット</div>
  <div>今日のオカズに迷った時に、ルーレットで決めよう！</div>
  <p>今日のオカズは何にしようか？</p>
  <p>{{ message[random_number] }}</p>
  <v-btn
    class="pa-5 ml-3"
    depressed
    color="blue lighten-4"
    @click="reload()">
    スタート
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
    message: ['桜空もも','安齋らら','三上悠亜'],
    random_number: null
  }),
  methods: {
    reload(){
      this.random_number = Math.floor(Math.random() * this.message.length);
    }
  }
};
</script>
