<template>
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
            <h2 class="title is-3 has-text-grey">
      Add Book 
    </h2>
          <hr>
          <BookForm :submitForm="AddBook" buttonText="Add"/>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BookForm from '@/components/BookForm'
  export default {
      name: 'CreateBook',
      middleware: ['auth'],
       layout:"admin",
      components:{
      BookForm,
    },
    data() {
      return {

   
      }
    },
    
    methods: {
      
      async AddBook(book) {
     
        
        await this.$axios.post('/items/book', {
        
          Title: book.Title,
          Author: book.Author,
          Position: book.Position,
          Qty: book.Qty,
          Remains: book.Remains,
            
          })
          .then(() => {
            this.$buefy.toast.open('Add Book Success!')
            this.$router.push({name:'book'})
            // window.location = 'http://localhost:3000/book'
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      
    }
  }}
</script>

