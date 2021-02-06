<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/blog">BLOG</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  background: #909fad;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2c3e50;
  font-weight: bold;
  font-size: 1.25em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(19, 19, 133);
}

.blog {
  width: 50%;
  margin: 0 auto;
}

.article {
  text-align: left;
}
</style>
