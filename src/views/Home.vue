<template>
  <div class="home">
    {{ response}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="addWork()">addWork</button>
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
    },
    addWork () {
      const test = {
        category: '5d988b5f7c213e55613a960a',
        conractor: '',
        date: '5.10.2019 15:30',
        details: [],
        guarantee: 12,
        name: 'Замена масла312'
      }
      http.post(`/works`, test)
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
