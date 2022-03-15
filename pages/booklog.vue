<template>
<section class="section">
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h2 class="title is-3 has-text-grey">
      Data Book Log 
    </h2>
          <hr>
           <b-button variant="primary" class="mb-3" @click="AddBooklog()">Add</b-button>
         
        <BookLogTable :submitForm="GetId"/>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
           <h2 class="title is-3 has-text-grey">
      Edit Book Log 
    </h2>
          <hr>
           <BookLogForm :submitForm="EditBooklog" buttonText="Update" :tableId= "{IdTabs}" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</section>
</template>

<script>
import BookLogForm from '@/components/BookLogForm'
import BookLogTable from '@/components/DataTable/BookLogTable'

  export default {
    name: 'booklogPage',
    middleware:  ['auth'],
     layout:"admin",
     components:{
      BookLogForm,
      BookLogTable
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
    
      AddBooklog(){
        this.$router.push({
              name: 'createbooklog'
            })
      },
       scrollToElement(row) {
         this.$axios.get(`/items/booklog/${row}`)
        .then(response => {
            this.booklog.Id = response.data.data.Id;
            // this.booklog.StartTime = Date.parse(response.data.data.StartTime);
            // this.booklog.StartTime   = response.data.data.StartTime;
            // this.booklog.EndTime = Date.parse(response.data.data.EndTime);
            // this.booklog.EndTime   = response.data.data.EndTime;
            this.booklog.BookId   = response.data.data.BookId;
            this.booklog.MemberId   = response.data.data.MemberId;
            this.booklog.Status   = response.data.data.Status;
        })
        const el = this.$refs.scrollToMe;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
       },

       async EditBooklog(booklog) {
      
        await this.$axios.patch('/items/booklog/'+booklog.Id, {
          StartTime: booklog.StartTime,
          EndTime: booklog.EndTime,
          BookId: booklog.BookId,
          MemberId: booklog.MemberId,
          Status: booklog.Status,
          })
          .then(() => {
            
        
             this.$buefy.toast.open('Update Book Log Success!')
            //  this.$router.push({name:'booklog'})
             window.location.reload(true)
            // window.location = 'http://localhost:3000/booklog'
          })
          .catch(error => {
      
            this.validation = error.response.data
          })
      },
      
    },
    computed:{
      computedId(id) {
          return this.IdTabs
    },

    }
    
     

  }
</script>
