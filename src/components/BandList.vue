<template>
<div class="wrapper">
  <div class="bands">
    <div class="band" v-for="band in bands" :key="band.id">
      <div class="info">
        <h1>{{band.name}}</h1>
        <p>{{band.genre}}</p>

      </div>


      <div class="image">
        <img :src="'/images/artists/'+band.image">
      </div>

			<div class="bio">
        <button class="auto" v-on:click="addToBio(band)">View Artist Bio</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BandList',
  props: {
    bands: Array
  },
	methods: {
    addToBio(band) {
			this.$root.$data.bandBio = [];
			this.$root.$data.bandBio.push(band);
			this.$router.push("/bio")
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

.bands {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.band {
  margin: 10px;
  margin-top: 50px;
  width: 350px;
}

.band img {
  border: 2px solid #333;
  height: 350px;
  width: 375px;
  object-fit: cover;
}

.band .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #a5b0b5;
  color: #000;
  padding: 2px 30px;
  height: 90px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 15px;
}

.bio {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}



.auto {
  margin-left: auto;
}

</style>
