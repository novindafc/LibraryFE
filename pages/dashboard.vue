<template>
<div>
<section class="section">
  <div class="columns is-mobile">
      <card title="Member" icon="account">
      7
      </card>

      <card title="Visitor" icon="history">
        17
      </card>

     
    </div>
  <b-container fluid="md" class="mt-5 mb-5">
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h2 class="title is-3 has-text-grey">
      Data Book Log 
    </h2>
          <hr>
          <IndexTable></IndexTable>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</section>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import IndexTable from '@/components/DataTable/IndexTable.vue'

  export default {
  components: { IndexTable },
    name: 'IndexPage',
    middleware:  ['auth'],
    layout:"admin",
    component:{
      IndexTable,
    },
       
    data() {
      return {
        
        data: [],
        isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5,
                hasInput: false,
                paginationOrder: '',
                inputPosition: '',
                inputDebounce: '',
      }
    },
    mounted() {
      this.$axios.get('/items/booklog')
        .then(response => {
          this.data = response.data.data

        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
     methods: {
       async deleteBookLog(row) {
        
     
        await this.$axios.delete(`/items/booklog/${row}`)
          .then(() => {
         
            this.posts.splice(row.index, 1);
          })
      },
     
    },
    computed: {
    ...mapGetters(['this.$auth.loggedIn', 'loggedInUser']),
  },

  }
</script>

