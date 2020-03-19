<template>
<div>
  <h1>Subscribe to our Mailing List to get updates on our label and upcoming shows</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="email" placeholder="Email Address"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for subscribing to our mailing list!</p>
    <p><a @click="toggleForm" href="#">Submit another email</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      name: '',
      email: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addTicket() {
      this.name = "";
      this.problem = "";
      this.creating = false;
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.2em;
  width: 30%;
  max-width: 500px;
  height: 50px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
