<template>
    <div id="app">
        <div id="nav-open-button"><font-awesome-icon icon="bars" v-b-toggle.sidebar variant="link" /></div>
        <div class="sidebar-wrapper">
            <b-sidebar id="sidebar" shadow no-enforce-focus no-header>
                <b-nav vertical class="mx-auto">
                    <router-link to="/" class="route-link">home<span id="nav-close-button"><font-awesome-icon icon="times" v-b-toggle.sidebar variant="link" /></span></router-link>
                    <div v-show="$route.name == 'home'">
                        <h2 class="nav-section-header">websites</h2>
                        <b-nav-item class="nav-link" href="#cubing">cubing trainer</b-nav-item>
                        <b-nav-item class="nav-link" href="#mdc">MDC world map</b-nav-item>
                        <b-nav-item class="nav-link" href="#weather">boring weather</b-nav-item>
                        <h2 class="nav-section-header">mobile apps</h2>
                        <b-nav-item class="nav-link" href="#puppy">puppy gallery</b-nav-item>
                        <h2 class="nav-section-header">other code</h2>
                        <b-nav-item class="nav-link" href="#quant">trading algorithm</b-nav-item>
                        <b-nav-item class="nav-link" href="#goodreads">Goodreads data project</b-nav-item>
                        <h2 class="nav-section-header">podcasts</h2>
                        <b-nav-item class="nav-link" href="#bwb">Better With Books</b-nav-item>
                        <b-nav-item class="nav-link" href="#awkward">That Was Awkward</b-nav-item>
                    </div>
                    <router-link to="/blog" class="route-link">blog</router-link>
                    <router-link to="/about" class="route-link">about</router-link>
                </b-nav>
            </b-sidebar>
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
}

#nav a.router-link-exact-active {
    color: rgb(19, 19, 133);
}

#nav-open-button {
    position: fixed;
    top: 20px;
    left: 15px;
    z-index: 99;
    cursor: pointer;
    padding: 1%;
    font-size: 1.35rem;
}

#nav-close-button {
    float: right;
    padding-right: 5%;
    font-size: 1.35rem;
    color: #2c3e50;
}

#sidebar {
    background-color:#23bbf7;
    background-image: linear-gradient(#23bbf7, #ff6f00);
    background:-webkit-linear-gradient(top, #23bbf7, #ff6f00);
    background:-moz-linear-gradient(top, #23bbf7, #ff6f00);
    background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #23bbf7), color-stop(100%, #ff6f00));
    backdrop-filter: blur(5px);
    padding-top: 30px;
}

.route-link {
    margin-bottom: 5%;
}

.nav-section-header, .route-link {
    font-size: 1.25rem;
    text-align: left;
    padding-left: 5%;
    height: 30px !important;
}

.nav-link {
    padding: 1% !important;
    font-size: 0.95rem;
}

.nav-link > a {
    text-decoration: underline;
}

li > .nav-link {
    height: 45px;
    text-align: left;
    padding-left: 15% !important;
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

.section-header {
    margin-top: 5%;
    font-size: 1.5rem;
}

.stack-header {
    font-size: 1.5rem;
}

.demo {
    display: block;
    margin: 1% auto;
    padding: 2%;
    font-size: 0.95rem;
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);
    border-radius: 2%;
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

    #nav-open-button {
        top: 30px;
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
