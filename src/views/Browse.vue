<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('R&B')" href="#" class="pure-menu-link">R&B</a></li>
      <li class="pure-menu-item"><a @click="select('Post-Rock')" href="#" class="pure-menu-link">Post-Rock</a></li>
      <li class="pure-menu-item"><a @click="select('Electronic')" href="#" class="pure-menu-link">Electronic</a></li>
      <li class="pure-menu-item"><a @click="select('Goth')" href="#" class="pure-menu-link">Goth</a></li>
			<li class="pure-menu-item"><a @click="select('Pop-Rock')" href="#" class="pure-menu-link">Pop-Rock</a></li>
			<li class="pure-menu-item"><a @click="select('Electronic-Pop')" href="#" class="pure-menu-link">Electronic-Pop</a></li>
    </ul>
  </div>
  <BandList :bands="bands" />
</div>
</template>

<script>
import BandList from "../components/BandList.vue"
export default {
  name: 'Browse',
  components: {
    BandList
  },
  data() {
    return {
      genre: '',
    }
  },
  computed: {
    bands() {
      return this.$root.$data.bands.filter(band => band.genre === this.genre);
    }
  },
  methods: {
    select(genre) {
      this.genre = genre;
    }
  }
}
</script>
