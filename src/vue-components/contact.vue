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
        msg: ''
      }
    },
    computed: {
      gr: function () {
        return this.$route.params.id
      }
    },
    beforeCreate: function () {
      // console.log("todo: insert preloader v-if");
    },
    created: function () {
      console.log(this.$route.params.id);
      this.prepare(this.$route.params.id);
    },
    methods: {
      prepare: function(url) {
        // convert to array to remove the " : "
        let urlArray = url.split("");
        urlArray.splice(0, 1);
        
        // convert back to str
        let urlString = urlArray.join("");
        
        // send to outside store to fetch data
        console.log(urlString);
        this.msg = "urlString: " + urlString;


        
      }
    }
  }
</script>