<template>
    <div>
        <input class="form-control" type="text" v-model="search" placeholder="Effectuer une recherche" />
        <span class="badge badge-secondary">{{movies.length}} films</span>

        <div class="text-center">
            <router-link class="btn btn-primary" v-bind:to="{name:'add'}"> <i class="fas fa-plus"></i> Ajouter un film</router-link>
        </div>

        <ul>
            <div class="list-group mt-4">
                <li class="list-group-item list-group-item-action" v-for="movie in movies_search">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{ movie.title }}</h5>
                        <small>{{ movie.kind }}</small>
                    </div>
                    <p class="mb-1">{{ movie.synopsys }}</p>
                    <router-link class="btn btn-sm btn-outline-primary" v-bind:to="{name:'movie', params:{id: movie.id}}">Détails</router-link>
                </li>
            </div>

        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movie_to_add: {},
                search: "",
                movies : window.movies
            }
        },

        methods: {
            remove: function(index) {
                this.movies.splice(index, 1)
            }
        },
        
        computed: {
            movies_search: function() {
                return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
            }
        }
    }
</script>

<style>
</style>

