<template>
    <b-container id="app">
        <b-row class="text-center justify-content-center">
            <b-col align-self="center" class="bio__section">
                <h1 class="bio__section-header">
                    Hi! I'm Ruth, a full-stack web dev.
                </h1>
                <div id="nav">
                    <router-link to="/">home</router-link> |
                    <router-link to="/blog">blog</router-link> |
                    <router-link to="/about">about</router-link>
                </div>
            </b-col>
            <!-- <b-col class="bio__profile-picture-container" cols="2" align-self="center">
                <img
                    class="bio__profile-picture"
                    src="@/assets/headshot.jpg"
                    alt="profile picture"
                />
            </b-col> -->
        </b-row>
        <!-- <div id="nav-open-button"><font-awesome-icon icon="bars" v-b-toggle.sidebar variant="link" /></div>
        <div class="sidebar-wrapper">
            <b-sidebar id="sidebar" shadow no-enforce-focus no-header>
                <b-nav vertical class="mx-auto">
                    <span class="nav-close-button-wrapper">
                        <router-link @click.native="$scrollToTop()" to="/" class="route-link">home</router-link>
                        <span id="nav-close-button"><font-awesome-icon icon="times" v-b-toggle.sidebar variant="link" /></span></span>
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
                    </div>
                    <router-link @click.native="$scrollToTop()" to="/blog" class="route-link">blog</router-link>
                    <router-link @click.native="$scrollToTop()" to="/about" class="route-link">about</router-link>
                </b-nav>
            </b-sidebar>
        </div> -->
        <b-row>
            <router-view />
        </b-row>
        <b-row>
            <footer>&copy; copyright 2022 Ruth R. Oldja</footer>
        </b-row>
        <div id="scroll-to-top" @click="$scrollToTop()">
            <font-awesome-icon icon="angle-up" variant="link" />
        </div>
    </b-container>
</template>

<style>
body {
    background-color: #23bbf7;
    background-image: linear-gradient(#23bbf7, #ff6f00);
    background: -webkit-linear-gradient(top, #23bbf7, #ff6f00);
    background: -moz-linear-gradient(top, #23bbf7, #ff6f00);
    background-image: -webkit-gradient(
        linear,
        50% 0%,
        50% 100%,
        color-stop(0%, #23bbf7),
        color-stop(100%, #ff6f00)
    );
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
    bottom: 1px;
    right: 20px;
    z-index: 99;
    cursor: pointer;
    padding: 1%;
    font-size: 2.5rem;
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
    padding-right: 10%;
    font-size: 1.35rem;
    color: #2c3e50;
}

#sidebar {
    background-color: #7ad4f8;
    background-image: linear-gradient(#7ad4f8, #faad73);
    background: -webkit-linear-gradient(top, #7ad4f8, #faad73);
    background: -moz-linear-gradient(top, #7ad4f8, #faad73);
    background-image: -webkit-gradient(
        linear,
        50% 0%,
        50% 100%,
        color-stop(0%, #7ad4f8),
        color-stop(100%, #faad73)
    );
    backdrop-filter: blur(5px);
    padding-top: 30px;
}

.nav-close-button-wrapper {
    text-align: left;
    height: 30px;
    margin-bottom: 5%;
}

.route-link {
    margin-bottom: 5%;
    margin-top: 5%;
}

.nav-section-header {
    color: #2c3e50;
}

.nav-section-header,
.route-link {
    font-size: 1.25rem;
    text-align: left;
    padding-left: 10%;
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

.center {
    width: 75%;
    margin: 0px auto;
}

.bio {
    width: 50% !important;
}

.bio__profile-picture {
    margin-top: 5%;
    width: 95%;
    border-radius: 50%;
}

.bio__section-header {
    margin-top: 5%;
    font-size: 1.5rem;
}

.stack-header {
    font-size: 1.5rem;
}

.projects {
    flex-basis: 0;
    flex-grow: 999;
    font-size: 1.5rem;
    width: 50%;
    margin: 0px auto;
}

.demo {
    display: block;
    margin: 1% auto;
    padding: 2%;
    font-size: 0.95rem;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
}

.demo > div > a {
    font-size: 1rem;
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

.demo.stack {
    margin: 5% auto;
    border-radius: 0%;
}

.blog {
    width: 60%;
    margin: 0px auto;
}

.post,
.article,
.about {
    text-align: left;
    background-color: rgba(255, 255, 255, 0.15);
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

@media only screen and (max-width: 992px) {

    #nav-open-button {
        top: 30px;
    }

    .bio__profile-picture-container {
        display: none;
    }

    .projects {
        width: 90%;
        margin: 0px auto;
    }

    .demo {
        width: 90%;
    }

    .blog,
    .article {
        width: 90%;
        border-radius: 0%;
    }

    .section {
        font-size: 0.75rem;
    }
}
</style>
