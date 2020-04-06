<template>
<div class="liste">
  <div class="leftcolumn">
    <h1 v-on="getResult()" class="card">Films sorties ce mois</h1>
    <div v-for="result in results" :key="result.id" class="card">
      <h2>{{result.title}}</h2>
      <div class="container">
        <div class="img-col">
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path"
            width="100px"
            class="fakeimg"
          />
        </div>
        {{result.overview}}
        <br>
        <router-link to="/movie">En savoir plus</router-link>
        <router-view />

      </div>
    </div>
    <p>{{leJson}}</p>
  </div>
</div>
</template>
<script>
/*import MoviesList from "./components/MoviesList.vue";*/
export default {
  name: "Movie",
  props: {
    msg: String
    
  }
};
</script>