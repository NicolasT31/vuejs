<template>
    <div>
        <h2>Nouveau film</h2>
        <p>
            Titre : <input class="form-control" type="text" v-model="movie_to_add.title" /><br />
            Année de sortie : <input class="form-control" type="text" v-model="movie_to_add.year" /><br />
            Synopsis : <textarea class="form-control" v-model="movie_to_add.synopsys"></textarea><br />
            Url : <input class="form-control" v-model="movie_to_add.url" /><br />
            Langue : <input class="form-control" v-model="movie_to_add.lang" /> <br />
            Genre : <select class="custom-select" v-model="movie_to_add.kind">
                        <option value="" disabled selected>Sélectionnez le genre</option>
                        <option>Comédie</option>
                        <option>Drame</option>
                        <option>Romance</option>
                        <option>Thriller</option>
                        <option>Science-fiction</option>
                        <option>Aventure</option>
                        <option>Western</option>
                        <option>Policier</option>
                        <option>Fantastique</option>
                        <option>Horreur</option>
                    </select>
            <hr>
            <h3> Réalisateur </h3><br />
                Nom : <input class="form-control" v-model="producer.first_name" /><br />
                Prénom : <input class="form-control" v-model="producer.last_name" /><br />
                Date de naissance : <input class="form-control" v-model="producer.birth_date" /><br />

            <button class="btn btn-sm btn-dark" v-on:click="newmovie">Ajouter</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movie_to_add: {},
                producer: {},
                movies: window.movies
            }
        },

        methods: {
            newmovie: function () {
                this.movie_to_add.id = this.movies[this.movies.length-1].id+1
                this.movie_to_add.notes = []
                this.movie_to_add.producer = this.producer
                this.movies.push(this.movie_to_add)
                this.movie_to_add = {}

                this.$router.go(-1)
            },
        }
    }
</script>