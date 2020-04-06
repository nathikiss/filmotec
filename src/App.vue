<template>
  <div id="app">
    <nav class="topnav">
    </nav>
    <MoviesList msg="Bienvenue sur APNOTPAN" />
    <router-view />
  </div>
</template>
<script>
import MoviesList from './components/MoviesList'
export default {
 name: 'App',
 components: {
  MoviesList }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: -35px;
}
.topnav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.topnav li {
  float: left;
}

.topnav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 17px 20px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.topnav li a:hover {
  background-color: #111;
}
</style>
