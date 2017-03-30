<template>
  <div id="vc-page-contact" class="vc-page-contact">
    <p>vc-page-contact</p>
    <p>path: {{$route.path}}</p>
    <p>params: {{$route.params}}</p>
    <p>params id: {{$route.params.id}}</p>

    <p>{{ msg }}</p>
    <p>{{ gr }}</p>
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