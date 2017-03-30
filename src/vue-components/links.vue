<template>
<div id="vc-router-links" class="vc-router-links">
  <div class="menubar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-bind:to="'/contact/:' + msg">{{ msg }}</router-link>
    
  </div>
  <router-view class="router-view"></router-view>
</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'fdfdff'
      }
    },
    computed: {
      gr: function () {
        // return this.$route
      }
    }
  }
</script>