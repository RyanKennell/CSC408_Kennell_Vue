<template>
        <div class="col-md-4 pb-5">
            <div class="card shadow-lg" style="width: 50%;">
                <img :src="this.imageUrl" class="thumbnail img-fluid rounded-lg">
                <div class="card-body text-center">
                    <div class="btn btn-sm btn-success"><router-link :to="'/movies/' + this.id">View</router-link></div>
                    <div class="btn btn-sm btn-dark"><router-link :to="'/movies/' + this.id + '/rentals'">Rentals</router-link></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data () {
      return {}
    },
    methods: {
      view () {
        // this.$emit('view', this.id);
        console.log('Component Viewing id:' + this.id)

        // this.$router.push({ name: 'customer-details', params: { id: 3 } })
        let myRoute = '/customer-details/3';
        this.$router.push(myRoute);
      },
      rentals () {
        this.$emit('rentals', this.id);
      }
    },
    computed: {
      /* Build URL for image */
      imageUrl: function () {
        return "http://rckennell.com/images/movie_" + this.id + ".jpg";
      }
    },

    props: ['id', 'title', 'rating', 'length']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
