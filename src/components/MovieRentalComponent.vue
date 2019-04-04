<template>

    <tr>
        <td> {{ name }}</td>
        <td>{{ email }}</td>
        <td>{{ rent_date }}</td>
        <td>{{ return_date }}</td>
    </tr>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
    },
    computed: {
      /* Build URL for image */
      imageUrl: function(){
        console.log(this.transaction.movie_id)
        return   "http://rckennell.com/images/movie_" + this.transaction.movie_id + ".jpg";
      },
      /* MAke a pretty date for showing last_update */
      rented: function(){
        var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        var day  = new Date(this.transaction.rent_date);
        return day.toLocaleString("en-US", options);
      },
      /* MAke a pretty date for showing last_update */
      returned: function(){
        if (this.transaction.return_date == null) return null;
        var options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        var day  = new Date(this.transaction.return_date);
        return day.toLocaleString("en-US", options);
      }
    },
    props: ['id', 'name', 'email', 'rent_date', 'return_date']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .thumbnail {
        width: 75px;
    }
    td {
        text-align: left;
    }
</style>
