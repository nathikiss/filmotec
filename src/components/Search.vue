<template>
  <div class="search">
    <h1 v-on="getResult(query)">Films sorties ce mois</h1>
    <div v-for="result in results" :key="result.id" class="enLigne">
      <p>{{result.title}}</p>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width="100px" />
      <p>{{result.release_date}}</p>
      <p>{{result.overview}}</p>
    </div>
    <p>{{leJson}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      query: "2020-03-01",
      results: "",
      leJson: ""
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=" +
            query +
            "&primary_release_date.lte=2020-03-31&api_key=267e254ca239fe35a8561240834856f7"
        )
        .then(response => {
          this.results = response.data.results;
          this.leJson = response;

        });
      console.log(this.results);
    },
  }
};
</script>
<style scoped>
.enLigne {
  display: inline-block;
  margin-left: 55px;
}
.table-multiplication {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
}
</style>
