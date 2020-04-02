<template>
  <div class="leftcolumn">
    <h1 v-on="getResult(query)" class="card">Films sorties ce mois</h1>
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
      </div>
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
    }
  }
};
</script>
<!--<style scoped>
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
-->
<style>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  padding: 20px;
  background: rgb(159, 199, 252);
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 85%;
  padding-left: 85px;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: rgb(159, 199, 252);
  width: 25%;
  padding: 20px;
}
img {
  vertical-align: top;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>