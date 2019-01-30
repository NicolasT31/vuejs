<template>
    <p v-if="movie_to_edit">
        Titre : <input class="form-control" type="text" v-model="movie_to_edit.title" /><br />
        Année de sortie : <input class="form-control" type="text" v-model="movie_to_edit.year" /><br />
        Synopsis : <textarea class="form-control" v-model="movie_to_edit.synopsys"></textarea><br />
        Url : <input class="form-control" v-model="movie_to_edit.url" /><br />
        Langue : <input class="form-control" v-model="movie_to_edit.lang" /> <br />
        Genre : <select class="custom-select" v-model="movie_to_edit.kind">
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
                </select><br /><br />

        Nom du réalisateur: <input class="form-control" v-model="movie_to_edit.producer.first_name" /><br />
        Prénom : <input class="form-control" v-model="movie_to_edit.producer.last_name" /><br />
        Date de naissance : <input class="form-control" v-model="movie_to_edit.producer.birth_date" /><br />

        <button class="btn btn-sm btn-dark" v-on:click="save">Save</button>
    </p>
</template>

<script>
    export default {
        data() {
            return {
                movies: window.movies,
            }
        },

        created: function() {

        },

        methods: {
            save() {
               this.$router.go(-1)
            }
        },

        computed: {
            movie_to_edit: function() {
                return this.movies.find(obj => {
                    return obj.id == this.$route.params['id'];
                })
            }
        }
    }
</script>