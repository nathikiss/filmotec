<template>
 <div class='search'>
  <h1>Search</h1>
  <input type='text' v-model='query' @keyup='getResult(query)'>
  <div v-for='result in results' :key='result.id'>
   <p>{{result.title}}</p>
   <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
  <p>{{result.release_date}}</p>
  <p>{{result.overview}}</p>
  </div>
 </div>
</template>
<script>
import axios from 'axios'
export default {
 name: 'search',
 data () {
  return {
   query: '',
   results: ''
  }
 },
 methods: {
  getResult(query) {
   axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte='+query+'&primary_release_date.lte=2020-03-27&api_key=267e254ca239fe35a8561240834856f7').then(response => { this.results = response.data.results })
     console.log(this.results)
   }
 }
}
</script>