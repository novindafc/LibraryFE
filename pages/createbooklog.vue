<template>
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h2 class="title is-3 has-text-grey">
      Add Book Log 
    </h2>
          <router-view></router-view>
          <hr>
 
          <BookLogForm :submitForm="Add" buttonText="Add"/>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BookLogForm from '@/components/BookLogForm'

  export default {
      name: 'CreateBookLog',
      middleware:  ['auth'],
      layout:"admin",
      components:{
      BookLogForm,
    },
    data() {
      return {

      }
    },
    methods: {
      
      async Add(booklog) {
       
        
        await this.$axios.post('/items/booklog', {
          StartTime: booklog.StartTime,
          EndTime: booklog.EndTime,
          BookId: booklog.BookId,
          MemberId: booklog.MemberId,
          Status: booklog.Status,
            
          })
          .then(() => {
            this.$buefy.toast.open('Add Book Log Success!')
            this.$router.push({name:'booklog'})
            // window.location = 'http://localhost:3000/booklog'
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      }
    }
  }
</script>
<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
