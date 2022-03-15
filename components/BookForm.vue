<template>
<div>
   <b-form >
            <b-field label="Book Title">
              <b-input type="text" v-model="book.Title" :class="{ 'is-invalid': validation.Title }"
                placeholder="Enter Book Title">
              </b-input>
              <div v-if="validation.Title" class="mt-2">
                <b-alert show variant="danger">{{ validation.Title[0] }}</b-alert>
              </div>
            </b-field>

             <b-field label="Book Author">
              <b-input type="text" v-model="book.Author" :class="{ 'is-invalid': validation.Author }"
                placeholder="Enter Book Author">
              </b-input>
              <div v-if="validation.Author" class="mt-2">
                <b-alert show variant="danger">{{ validation.Author[0] }}</b-alert>
              </div>
            </b-field>

             <b-field label="Book Position">
              <b-input type="text" v-model="book.Position" :class="{ 'is-invalid': validation.Position }"
                placeholder="Enter Book Position">
              </b-input>
              <div v-if="validation.Position" class="mt-2">
                <b-alert show variant="danger">{{ validation.Position[0] }}</b-alert>
              </div>
            </b-field>

             <b-field label="Book Qty">
              <b-input type="text" v-model="book.Qty" :class="{ 'is-invalid': validation.Qty }"
                placeholder="Enter Book Qty">
              </b-input>
              <div v-if="validation.Qty" class="mt-2">
                <b-alert show variant="danger">{{ validation.Qty[0] }}</b-alert>
              </div>
            </b-field>

             <b-field label="Book Remains">
              <b-input type="text" v-model="book.Remains" :class="{ 'is-invalid': validation.Remains }"
                placeholder="Enter Book Remains">
              </b-input>
              <div v-if="validation.Remains" class="mt-2">
                <b-alert show variant="danger">{{ validation.Remains[0] }}</b-alert>
              </div>
            </b-field>
            <b-button type="submit" variant="primary" @click="submitForm(book)">{{buttonText}}</b-button>
          </b-form>
    
</div>
</template>


<script>

  export default {
    props: ["submitForm","buttonText", "tableId"],
    data() {
      return {
        // valid: false,
        // showPassword: false,
        // hasName: false,
        book: {
          Id:'',
          Title: '',
          Author: '',
          Position: '',
          Qty: '',
          Remains: ''
        },
        validation: [],
        tabsId:this.tableId
    
      }
   },
    watch: {
      tableId(){
        this.getId()
      }   
  },

  methods: {
    async getId() {
      if (!this.tableId) {
        return;
      }
      await this.$axios.get(`/items/book/${this.tableId.IdTabs}`)
        .then(response => {
            this.book.Id   = response.data.data.Id;
            this.book.Title   = response.data.data.Title;
            this.book.Author   = response.data.data.Author;
            this.book.Position   = response.data.data.Position;
            this.book.Qty   = response.data.data.Qty;
            this.book.Remains   = response.data.data.Remains;
            
        })
    }
    
  },
  }
</script>

