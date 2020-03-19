<template>


<div class="wrapper">

	<div v-if= !checkIfEmpty >


    <div class="band" v-for="band in this.$root.$data.bandBio" :key="band.id">
      <div class="info">
			<h1 style="text-align:center;">About the Band</h1>
				<p style="text-align:center;">{{band.bio}}</p>
				<br/>
				<h3 style="text-align:center;">*** Note: this information is a fake placeholder and not representative of the actual history of this band. ***</h3>
      </div>

	</div>

	</div>

	<div v-else>
		<router-link to="/home">
		</router-link>

	</div>

	<div class="footer">
		<button class="gitButton" v-on:click="onClickButton">Github</button>
	</div>

</div>
</template>


<script>
export default {
  name: 'Bio',
	computed: {
    checkIfEmpty() {
      if(this.$root.$data.bandBio.length === 0) {
				return true;
			}
			else {
				return false;
			}
    }
  },
	methods: {
		onClickButton(){
			location.href = "https://github.com/daveyreyn/Creative-Proj-3";
		}
	}
}
</script>



<style scoped>
.wrapper {
  display: flex;
	justify-content: center;
}


.band {
	background: #a5b0b5;
  width: 800px;
	height: 400px;
	justify-content: center;
}



.info {
	padding: 10px;
  color: #000;
	width: 800px;
  height: 400px;


}

.info h1 {
  font-size: 30px;
}

.info h2 {
  font-size: 14px;
}
.info h3 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 20px;
}

.footer {
	position: fixed;
	left: 0;
	bottom: 0;
	height: 42px;
	line-height: 32px;
	width: 100%;
	background-color: grey;
	color: gainsboro;
	text-align: center;
}

.gitButton {
	background-color: #848484;
	height: 50px;
  background: #848484;
  color: white;
  border: none;
}


</style>
