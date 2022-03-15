<template>
<section class="section">
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h2 class="title is-3 has-text-grey">
      Data Book
    </h2>
          <hr>
          <b-button variant="primary" class="mb-3" @click="AddBook()">Add</b-button>
        <BookTable :submitForm="GetId" />
        </b-card>
           
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
    <h2 class="title is-3 has-text-grey">
      Edit Book 
    </h2>
          <hr>
          <BookForm :submitForm="EditBook" buttonText="Update" :tableId= "{IdTabs}" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>
import BookTable from '@/components/DataTable/BookTable.vue'
import BookForm from '@/components/BookForm'
export default {
  
    name: 'BookPage',
    middleware:   ['auth'],
     layout:"admin",
     components:{
      BookForm,
      BookTable
    },
    data() {
      return {
       
        IdTabs : null,
        validation: [],
      }
    },
   
     methods: {
       GetId(id) {
          this.IdTabs = id;
    },
      
      AddBook(){
        this.$router.push({
              name: 'createbook'
            })
      },
      scrollToElement(row) {
        this.$axios.get(`/items/book/${row}`)
        .then(response => {
            this.book.Id   = response.data.data.Id;
            this.book.Title   = response.data.data.Title;
            this.book.Author   = response.data.data.Author;
            this.book.Position   = response.data.data.Position;
            this.book.Qty   = response.data.data.Qty;
            this.book.Remains   = response.data.data.Remains;
            
        })

    const el = this.$refs.scrollToMe;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
  },

  async EditBook(book){
        await this.$axios.patch('/items/book/'+book.Id, {
          Title: book.Title,
          Author: book.Author,
          Position: book.Position,
          Qty: book.Qty,
          Remains: book.Remains,
          })
          .then((res) => {
          
            this.$buefy.toast.open('Update Book Success!')
            // this.$router.app.refresh()
            window.location.reload(true)
            // window.location = 'http://localhost:3000/book'
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      
      },
    }

  }
</script>

