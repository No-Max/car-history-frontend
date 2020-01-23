<template>
  <div class="home">
    {{ response}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { http } from '../api/http-service.js'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      resp: []
    }
  },
  computed: {
    response () {
      return this.resp[0]
    }
  },
  mounted () {
    this.getWorks()
  },
  methods: {
    getWorks () {
      http.get(`/works`)
        .then((response) => {
          this.resp = response.data
          console.log(this.resp)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
