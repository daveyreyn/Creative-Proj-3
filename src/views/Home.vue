<template>
<div>

  <div class="wrapper">
  </div>
  <BandList :bands="bands" />
</div>
</template>

<script>

import BandList from "../components/BandList.vue"
export default {
  name: 'Home',
  components: {
    BandList
  },
  computed: {
		bands() {
			return this.$root.$data.bands;
		}
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
