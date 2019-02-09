<template>
    <li v-if="movie" class=" mt-3 ml-0 list-unstyled">
        <router-link class="btn btn-sm btn-outline-primary mt-2 mb-2" v-bind:to="{name:'home'}">Retourner à l'index</router-link>

        <div class="card">
            <div class="card-header">
                {{ movie.title }}
            </div>
            <div class="card-body row">
                <div class="col-6">
                    <small> {{ movie.synopsys }} </small>
                    <div class="mt-4">
                        <h2>Informations</h2>
                        <div class="mt-3 mb-3">
                            <div>Paru en <b>{{ movie.year }}</b></div>
                            <div>Genre : {{ movie.kind }}</div>
                            <div>Langue : {{ movie.lang }}</div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h2>Réalisateur</h2>
                        {{ movie.producer.first_name }} {{ movie.producer.last_name }} (Né le {{ showDate(movie.producer.birth_date) }})
                    </div>
                    <div class="mt-4">
                        <h2>Evaluer</h2>
                        <div class="mt-3 mb-3 evaluate">
                            <i v-for="n in 5" class="fas fa-star ml-2 mr-2" v-on:click="addNote(movie, n)"></i>
                        </div>
                    </div>
                    <h2>Notes</h2>
                    <div class="mb-3">
                       <b>Votre note :</b> {{ movie.notes }}/5
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-center"> <img :src="movie.url" style="max-width: 100%;" /> </div>
                </div>
                <div class="col-12">
                    <router-link class="btn btn-sm btn-outline-primary" v-bind:to="{name:'edit', params:{id: movie.id}}">Edit</router-link>
                    <button class="btn btn-sm btn-outline-danger" v-on:click="remove()"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    </li>
</template>

<script type="text/javascript">
    export default {
        data: function() {
            return {
                movies: window.movies,
            };
        },
        methods: {
            //Supprimer un film
            remove: function() {
                let i = this.movies.findIndex(obj => {
                    return obj.id == this.$route.params['id'];
                });

                this.movies.splice(i, 1);
                this.$router.go(-1)
            },

            //Ajouter une note
            addNote: function(movie, n) {
                movie.notes = (n-5)*-1+1;
                this.$forceUpdate()
            },

            //Afficher une date au bon format
            showDate: function(date) {
                var d = new Date(date);
                return d.toLocaleDateString("fr-FR");
            }
        },

        computed: {
            //On retourne le film correspondant à l'id de l'url
            movie: function() {
                return this.movies.find(obj => {
                    return obj.id == this.$route.params['id'];
                })
            },
        }
    }
</script>`