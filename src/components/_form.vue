<template>
    <div>
        <h2>Nouveau film</h2>
            Titre : <input class="form-control" type="text" v-model="movie_to_add.title" /><br />
            Année de sortie : <input class="form-control" type="number" v-model="movie_to_add.year" /><br />
            Synopsis : <textarea class="form-control" v-model="movie_to_add.synopsys"></textarea><br />
            Url du poster : <input class="form-control" v-model="movie_to_add.url" /><br />
            Langue : <select class="custom-select mb-4" v-model="movie_to_add.lang">
            <option value="FR">Français</option>
            <option value="EN">Anglais</option>
        </select> <br />
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
        Nom : <input class="form-control" v-model="movie_to_add.producer.first_name" /><br />
        Prénom : <input class="form-control" v-model="movie_to_add.producer.last_name" /><br />
        Date de naissance : <input type="date" class="form-control" v-model="movie_to_add.producer.birth_date" /><br />

        <button class="btn btn-sm btn-dark" v-on:click="save">Ajouter</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: window.movies
            }
        },

        methods: {
            //Sauvegarder un film
            save: function () {
                if (!this.$route.params["id"]) {
                    // Ajout
                    this.movie_to_add.id = this.movies[this.movies.length-1].id+1
                    this.movies.push(this.movie_to_add)
                    this.movie_to_add = {}
                }

                this.$router.go(-1)
            },
        },

        computed: {
            //On récupère un film selon l'id de l'url ou un objet vide s'il n'y en a pas
            movie_to_add: function() {
                if(this.$route.params["id"]) {
                    return this.movies.find(obj => {
                        return obj.id == this.$route.params['id'];
                    });
                } else {
                    return {
                        producer: {}
                    };
                }
            }
        }
    }
</script>