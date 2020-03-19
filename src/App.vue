<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/record.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/icon.png">
          <p>Genres</p>
        </div>
      </router-link>
      <router-link to="/mail">
        <div class="menu-item">
          <img src="/images/icon.png">
          <p>Mailing</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #e50000;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin-top: 5px;
	margin-right: 10px;
}

.browse {
  margin-right: 50px;
}
</style>
