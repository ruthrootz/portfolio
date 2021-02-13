<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">home</router-link> |
            <router-link to="/about">about</router-link> |
            <router-link to="/blog">blog</router-link>
        </div>
        <router-link to="/"><img class="r-icon" alt="small R logo" src="@/assets/r.png" /></router-link>
        <router-view />
        <footer>&copy; copyright 2021 Ruth R. Oldja</footer>
    </div>
</template>

<style>
html {
    background-image: linear-gradient(rgb(15, 129, 173), rgb(255, 208, 0));
    background-attachment: fixed;
}

footer {
    margin-top: 5%;
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

.section {
    margin-bottom: 5%;
}

.demo {
    width: 40%;
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

.r-icon {
    margin: 1%;
}

.li-icon {
    width: 6%;
}
</style>
