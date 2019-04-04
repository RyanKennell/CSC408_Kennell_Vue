<template>
    <div class="about pt-4 pb-3">
        <h1>Movie Rentals</h1>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Rental Date</th>
                <th>Return Date</th>
            </tr>
            </thead>
            <tbody>
            <movie-rental-component
                    v-for="(rental, index) in rentals"
                    v-bind="rental"
                    :index="index"
                    :key="rental.id"
            ></movie-rental-component>

            </tbody>
        </table>
    </div>
</template>
<script>
  function Rental({id, name, email, pivot}) {
    this.id = parseInt(id)
    this.name = name
    this.email = email
    this.rent_date = pivot.rent_date
    this.return_date = pivot.return_date
  }
  import MovieRentalComponent from '@/components/MovieRentalComponent.vue'
  export default {
    data() {
      return {
        id: null,
        rentals: []
      }
    },
    methods: {
      read() {
        let url = 'https://rckennell.com/api/movies/' + this.id + '/rentals'
        window.axios.get(url).then(({data}) => {
          data[0].rentals.forEach(rental => {
            this.rentals.push(new Rental(rental))
          })
        })
      }
    },
    components: {
      MovieRentalComponent
    },
    created() {
      this.id = this.$route.params.userId
      this.read()
    }
  }
</script>

<style scoped lang="scss">
    th {
        text-align: left;
    }
</style>
