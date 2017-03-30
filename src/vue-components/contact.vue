<template>
  <div id="vc-page-contact" class="vc-page-contact">
    <p>vc-page-contact</p>
    <p>path: {{$route.path}}</p>
    <p>params: {{$route.params}}</p>
    <p>params id: {{$route.params.id}}</p>

    <p>{{ msg }}</p>
    <br>
    <br>
    <p>{{ gr }}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'contact message'
      }
    },
    computed: {
      gr: function () {
        return this.$route.params.id
      }
    },
    beforeCreate: function () {
      console.log("beforeCreate");
    },
    created: function () {
      console.log(this.$route.params.id);

    }
  }
</script>