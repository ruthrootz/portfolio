<template>
    <div id="app">
        <div id="nav-toggle-button"><font-awesome-icon icon="bars" v-b-toggle.sidebar variant="link" /></div>
        <div id="nav">
            <router-link to="/">home</router-link> |
            <router-link to="/blog">blog</router-link> |
            <router-link to="/about">about</router-link>
        </div>
        <router-view />
        <div id="scroll-to-top" @click="$scrollToTop()"><font-awesome-icon icon="angle-up" variant="link" /></div>
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
    padding: 0 !important;
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

#scroll-to-top {
    position: fixed;
    bottom: 5px;
    right: 15px;
    z-index: 99;
    cursor: pointer;
    padding: 1%;
    font-size: 2rem;
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

#nav-toggle-button {
    position: fixed;
    top: 24px;
    left: 15px;
    z-index: 99;
    cursor: pointer;
    padding: 1%;
    font-size: 1.35rem;
}

.b-nav > h2 {
    margin: 1%;
    font-size: 0.25rem !important;
}

.nav-link {
    padding: 5%;
    font-size: 0.95rem;
}

.projects {
    flex-basis: 0;
    flex-grow: 999;
    font-size: 1.5rem;
    width: 50%;
    margin: 0px auto;
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
    display: block;
    margin: 1% auto;
    font-size: 0.95rem;
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

.li-icon {
    width: 6%;
}

@media only screen and (max-width: 800px) {

    #scroll-to-top {
        bottom: 1px;
        right: 5px;
        font-size: 1.35rem;
    }

    #nav-toggle-button {
        top: 35px;
        font-size: 1rem;
    }

    .projects {
        width: 90%;
        margin: 0px auto;
    }

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

</style>
