<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">home</router-link> |
            <router-link to="/about">about</router-link> |
            <router-link to="/blog">blog</router-link>
        </div>
        <router-link to="/"><img alt="small R logo" src="@/assets/r.png" /></router-link>
        <router-view />
    </div>
</template>

<style>
html {
    background: #a4b8ca;
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
    font-size: 1.5rem;
}

p>a {
    font-size: 1.2rem;
}

p {
    font-size: 1.25rem;
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

.center {
    width: 75%;
    margin: 0 auto;
}

.blog {
    width: 50%;
    margin: 0 auto;
}

.article {
    text-align: left;
}

.demo-image {
    width: 350px;
    border-radius: 3%;
}

.icon {
    width: 97px;
    display: block;
    margin: 0 auto;
    padding: 13px;
}

.li-icon {
    width: 5%;
}
</style>
