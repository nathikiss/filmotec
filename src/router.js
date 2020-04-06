import Vue from "vue";
import Router from "vue-router";
import Accueil from "./components/Accueil.vue"
import MoviesList from "./components/MoviesList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Movie from "./components/Movie.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name:"accueil", component:Accueil},
    { path: "/movieslist", name: "movieslist", component: MoviesList },
    { path: "/helloworld", name: "Helloworld", component: HelloWorld },
    { path: "/movie", name: "movie", component: Movie },
  ],
});
