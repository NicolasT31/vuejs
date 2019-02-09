import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import HomeComponent from './components/home.vue'
import EditComponent from './components/edit.vue'
import AddComponent from './components/add.vue'
import MovieItemComponent from './components/movieitem.vue'
import Form from './components/_form'

Vue.use(VueRouter);
Vue.component('movie-item', MovieItemComponent);
Vue.component('form-v', Form);

window.movies = [
    {
        id: 1,
        title: "L'étrange noël de M. Jack",
        year: 1994,
        synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.",
        url: "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/62/89/46/18923316.jpg",
        notes: null,
        producer: {
            first_name: "Henry",
            last_name: "Selick",
            nationality: "Américain",
            birth_date: "1952-11-30"
        },
        lang: "EN",
        kind: "Horreur"
    },
    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver.",
        url: "http://fr.web.img2.acsta.net/c_215_290/pictures/14/09/24/12/08/158828.jpg",
        notes: null,
        producer: {
            first_name: "Christopher",
            last_name: "Nolan",
            nationality: "Britanno-Américain",
            birth_date: "1970-07-30"
        },
        lang: "EN",
        kind: "Science-fiction"
    }
]

const routes = [
    { path: '/', name: "home", component: HomeComponent },
    { path: '/edit/:id', name: 'edit', component: EditComponent },
    { path: '/add', name: 'add', component: AddComponent },
    { path: '/movie/:id', name: 'movie', component: MovieItemComponent }
];

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
    router,
  render: h => h(app)
})