<template>
    <div class="about pt-4 pb-3">
        <h1>Yellow Box Movies</h1>

        <table class="table table-striped">
            <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Rating</th>
                <th>Length</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <movie-component
                    v-for="(movie, index) in movies"
                    v-bind="movie"
                    :index="index"
                    :key="movie.id"
                    @view="view"
                    @rentals="rentals"
            ></movie-component>
			</tbody>
        </table>
    </div>
</template>
<script>

  function Movie ({ id, title, rating, length }) {
    this.id = parseInt(id)
    this.title = title
    this.rating = rating
    this.length = length
  }

  /* Go get the code for the customer-component tag that is in the template */
  import MovieComponent from '@/components/MovieComponent.vue'

  export default {
    data () {
      return {
        movies: []
      }
    },
    methods: {
      read () {
        this.movies = []
        window.axios.get('https://rckennell.com/api/movies').then(({ data }) => {
          data.forEach(movie => {
                this.movies.push(new Movie(movie))
            })
        })
      },
      view (id) {
      },
      rentals (id) {
      }
    },
    components: {
      MovieComponent
    },
    created () {
      this.read()
    }
  }
</script>

<style>

</style>
