<template>
<div id="vc-router-links" class="vc-router-links">
  <div class="menubar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-bind:to="'/contact/:' + msg +'user/:'+  msg2">{{ msg }}</router-link>
    
  </div>
  <router-view class="router-view"></router-view>
</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'id-msg',
        msg2: 'user-msg2'
      }
    },
    computed: {
      gr: function () {
        // return this.$route
      }
    }
  }
</script>