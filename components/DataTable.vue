<template>
    <div>
         <b-button variant="primary" class="mb-3" @click="add()">ADD</b-button>
          <b-field grouped group-multiline>
            <b-select v-model="defaultSortDirection">
                <option value="asc">Default sort direction: ASC</option>
                <option value="desc">Default sort direction: DESC</option>
            </b-select>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
            <div class="control">
                <b-button
                    label="Set page to 2"
                    :disabled="!isPaginated"
                    @click="currentPage = 2" />
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div>
            <!--<div class="control is-flex">
                <b-switch v-model="isPaginationRounded" :disabled="!isPaginated">Rounded pagination</b-switch>
            </div>
            <b-select v-model="paginationPosition" :disabled="!isPaginated">
                <option value="bottom">bottom pagination</option>
                <option value="top">top pagination</option>
                <option value="both">both</option>
            </b-select>
            <b-select v-model="sortIcon">
                <option value="arrow-up">Arrow sort icon</option>
                <option value="menu-up">Caret sort icon</option>
                <option value="chevron-up">Chevron sort icon </option>
            </b-select>
            <b-select v-model="sortIconSize">
                <option value="is-small">Small sort icon</option>
                <option value="">Regular sort icon</option>
                <option value="is-medium">Medium sort icon</option>
                <option value="is-large">Large sort icon</option>
            </b-select>
            <b-select v-model="paginationOrder">
                <option value="">default pagination order</option>
                <option value="is-centered">is-centered pagination order</option>
                <option value="is-right">is-right pagination order</option>
            </b-select>
            <div class="control is-flex">
                <b-switch v-model="hasInput">Input</b-switch>
            </div>
            <b-select v-model="inputPosition">
                <option value="">default input position</option>
                <option value="is-input-right">is-input-right</option>
                <option value="is-input-left">is-input-left</option>
            </b-select>
             <b-input type="number" placeholder="debounce (milliseconds)" v-model="inputDebounce" min="0"></b-input>-->
        </b-field>

        <b-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            :page-input="hasInput"
            :pagination-order="paginationOrder"
            :page-input-position="inputPosition"
            :debounce-page-input="inputDebounce">

            <b-table-column field="Id" label="ID" width="40" sortable numeric v-slot="props">
                {{ props.row.Id }}
            </b-table-column>

            <b-table-column field="Name" label="Name" sortable v-slot="props">
                {{ props.row.Name }}
            </b-table-column>

            <b-table-column field="Gender" label="Gender" sortable v-slot="props">
                {{ props.row.Gender }}
            </b-table-column>

            <b-table-column field="Phone" label="Phone" sortable centered v-slot="props">
                {{ props.row.Phone }}
            </b-table-column>
             <b-table-column field="Occupation" label="Occupation" sortable centered v-slot="props">
                {{ props.row.Occupation}}
            </b-table-column>
            <b-table-column field="Email" label="Email" sortable centered v-slot="props">
                {{ props.row.Email }}
            </b-table-column>

            <b-table-column label="Actions" v-slot="props" >
              <button class="button is-small is-light" @click="scrollToElement(props.row.Id)">
    <b-icon icon="update" size="is-small"></b-icon>
  </button>
  <button class="button is-small is-light" @click="deleteMember(props.row.Id)">
    <b-icon icon="delete" size="is-small"></b-icon>
  </button>
            </b-table-column>
        </b-table>
    </div>
</template>