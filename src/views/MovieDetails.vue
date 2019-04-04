<template>
    <div class="pt-4 pb-3">
        <h3>Movie Details</h3>
        <div class="card" style="width: 50%;">
            <div class="card-body">
                <img :src="this.imageUrl" class="thumbnail img-fluid float-right pl-3">
                <h5 class="card-title">{{movie.title}} - {{ movie.id }}</h5>

                <p class="card-text">Rating: {{ movie.rating }}</p>
                <p class="card-text">Length: {{ movie.length }}</p>
                <p class="card-text">Description: {{ movie.description }}</p>
            </div>

        </div>

    </div>
</template>
<script>

  function Movie ({ id, title, rating, length, description }) {
    this.id = parseInt(id)
    this.title = title
    this.rating = rating
    this.length = length
    this.description = description
  }

  export default {
    data () {
      return {
        id: null,
        movie: Object
      }
    },
    methods: {
      read () {
        let url = 'https://rckennell.com/api/movies/' + this.id
        window.axios.get(url).then(({ data }) => {
          this.movie = data;
        })
      }
    },
    computed: {
      imageUrl: function () {
        return "http://rckennell.com/images/movie_" + this.id + ".jpg";
      }
   },
    components: {
    },
    created () {
      this.id = this.$route.params.userId
      this.read()
    }
  }

</script>

<style>
    .card {
        margin: auto;
    }
    .card-body {
        text-align: left;
    }
</style>
