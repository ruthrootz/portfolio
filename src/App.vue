<template>
    <div id="app">
        <font-awesome-icon icon="bars" v-b-toggle.sidebar variant="link" class="nav-toggle-button" />
        <div id="nav">
            <router-link to="/">home</router-link> |
            <router-link to="/blog">blog</router-link> |
            <router-link to="/about">about</router-link>
        </div>
        <router-view />
        <footer>&copy; copyright 2021 Ruth R. Oldja</footer>
    </div>
</template>

<style>

body {
    background-color:#23bbf7;
    background-image: linear-gradient(#23bbf7, #ff6f00);
    background:-webkit-linear-gradient(top, #23bbf7, #ff6f00);
    background:-moz-linear-gradient(top, #23bbf7, #ff6f00);
    background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #23bbf7), color-stop(100%, #ff6f00));
    background-attachment: fixed;
    scroll-behavior: smooth;
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
    margin: 0px 10px;
}

a {
    color: #2c3e50 !important;
    font-weight: bold;
    font-size: 1.5rem;
}

p > a {
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

.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.nav-toggle-button {
    float: left;
    margin: 5%;;
    display: inline;
    font-size: 5rem;
}

.nav-header {
    float: relative;
    display: inline;
}

.sidebar {
    /* flex-grow: 1;
    flex-basis: 300px;
    align-self: start;
    position: sticky;
    position: -webkit-sticky;
    top: 0; */
    font-size: 0.50rem;
}

.sidebar > ul {
    margin: 3%;
}

.sidebar > h2 {
    margin: 1%;
}

.sidebar > ul > li {
    padding-bottom: 5%;
    display: block;
}

.nav-link {
    padding: 5%;
}

.projects {
    flex-basis: 0;
    flex-grow: 999;
    font-size: 1.5rem;
}

.center {
    width: 75%;
    margin: 0px auto;
}

.foggy-glass {
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    border-radius: 2%;
    padding: 2%;
    margin: 3%;
}

.stack {
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    margin-bottom: 0% !important;
    padding: 0.5%;
}

.stack > h1 {
    margin: 1%;
}

.blog {
    width: 60%;
    margin: 0px auto;
}

.post, .article, .about {
    text-align: left;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    margin: 5% auto;
    padding: 2%;
}

.about {
    text-align: center;
}

.article {
    margin: 0px auto;
    width: 60%;
}

.section {
    margin-bottom: 5%;
}

.demo {
    width: 90%;
    margin: 0px auto;
    display: block;
    margin: 1% auto;
}

.demo-image {
    width: 90%;
    border-radius: 3%;
}

.icon {
    width: 97px;
    display: block;
    margin: 0px auto;
    padding: 13px;
}

.r-icon {
    margin: 1%;
}

.li-icon {
    width: 6%;
}

@media only screen and (max-width: 800px) {

    .demo {
        width: 90%;
    }

    .blog, .article {
        width: 90%;
        border-radius: 0%;
    }

    .section {
        font-size: 0.75rem;
    }

}

@media only screen and (max-width: 490px) {

    .sidebar {
        position: relative;
        font-size: 0.75rem;
    }

}

</style>
