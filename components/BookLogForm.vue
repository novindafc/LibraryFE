<template>
<div>
    <b-form >
            <b-field label="Select datetime start">
        <b-datetimepicker v-model="booklog.StartTime"
            placeholder="Click to select...">

            <template #left>
                <b-button
                    label="Now"
                    type="is-primary"
                    icon-left="clock"
                    @click="datetime = new Date()" />
            </template>

            <template #right>
                <b-button
                    label="Clear"
                    type="is-danger"
                    icon-left="close"
                    outlined
                    @click="datetime = null" />
            </template>
        </b-datetimepicker>
    </b-field>
    <b-field label="Select datetime End">
        <b-datetimepicker v-model="booklog.EndTime"
            placeholder="Click to select...">

            <template #left>
                <b-button
                    label="Now"
                    type="is-primary"
                    icon-left="clock"
                    @click="datetime = new Date()" />
            </template>

            <template #right>
                <b-button
                    label="Clear"
                    type="is-danger"
                    icon-left="close"
                    outlined
                    @click="datetime = null" />
            </template>
        </b-datetimepicker>
    </b-field>
            <b-field label="Book Id">
              <b-input type="text" v-model="booklog.BookId" :class="{ 'is-invalid': validation.BookId }"
                placeholder="enter Book Id">
              </b-input>
              <div v-if="validation.BookId" class="mt-2">
                <b-alert show variant="danger">{{ validation.BookId[0] }}</b-alert>
              </div>
            </b-field>
             <b-field label="Member Id">
              <b-input type="text" v-model="booklog.MemberId" :class="{ 'is-invalid': validation.MemberId }"
                placeholder="Enter Member Id">
              </b-input>
              <div v-if="validation.MemberId" class="mt-2">
                <b-alert show variant="danger">{{ validation.MemberId[0] }}</b-alert>
              </div>
            </b-field>
            <b-field>
          <p class="content"><b>Status</b>: {{ booklog.Status }}</p>
           <b-form-group>
        <b-dropdown
            v-model="booklog.Status"
            aria-role="list">
            <template #trigger>
                <b-button
                    type="is-primary"
                    icon-right="menu-down">
                    Selected : {{ booklog.Status}}
                </b-button>
            </template>


            <b-dropdown-item value="alerted" aria-role="listitem">
                <span>alerted</span>
            </b-dropdown-item>

            <b-dropdown-item value="on process" aria-role="listitem">
                <span>on process</span>
            </b-dropdown-item>

            <b-dropdown-item value="done" aria-role="listitem">
                <span>done</span>
            </b-dropdown-item>
        </b-dropdown>
             </b-form-group>
            </b-field>

            <b-button type="submit" variant="primary"  @click="submitForm(booklog)">{{buttonText}}</b-button>

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
        booklog: {
          Id:'',
          StartTime: new Date(),
          EndTime: new Date(),
          BookId: '',
          MemberId: '',
          Status: '',
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

     await this.$axios.get(`/items/booklog/${this.tableId.IdTabs}`)
        .then(response => {
            this.booklog.Id = response.data.data.Id;
            this.booklog.StartTime = new Date(response.data.data.StartTime);
            // this.booklog.StartTime   = response.data.data.StartTime;
            this.booklog.EndTime = new Date(response.data.data.EndTime);
            // this.booklog.EndTime   = response.data.data.EndTime;
            this.booklog.BookId   = response.data.data.BookId;
            this.booklog.MemberId   = response.data.data.MemberId;
            this.booklog.Status   = response.data.data.Status;
        })
    }
  },
    
  }
</script>

