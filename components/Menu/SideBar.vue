 <template>
  <div>
       <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General Menu</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'dashboard' },
        },
        {
          title: 'Book',
          icon: 'book',
          to: { name: 'book' },
        },
        {
          title: 'Book Log',
          icon: 'history',
          to: { name: 'booklog' },
        },
        {
          title: 'Member',
          icon: 'human',
          to: { name: 'member' },
        },
      ],
    }
  },
}
</script>
