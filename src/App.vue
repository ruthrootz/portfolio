<template>
    <div id="app">
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

html {
    background-color:#23bbf7;
    background-image: linear-gradient(#23bbf7, #ff6f00);
    background:-webkit-linear-gradient(top, #23bbf7, #ff6f00);
    background:-moz-linear-gradient(top, #23bbf7, #ff6f00);
    background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #23bbf7), color-stop(100%, #ff6f00));
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
    padding: 2%;
}

.blog {
    width: 60%;
    margin: 0 auto;
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
    margin: 0 auto;
    width: 60%;
}

.section {
    margin-bottom: 5%;
}

.demo {
    width: 40%;
}

.demo-image {
    width: 90%;
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

@media only screen and (max-width: 800px) {
    .demo {
        width: 90%;
    }

    .stack-text {
        display: none;
    }

    .blog, .article {
        width: 90%;
        border-radius: 0%;
    }
}

 .gr_custom_container_1621862472 {
    border: 1px solid gray;
    border-radius:10px;
    padding: 10px 5px 10px 5px;
    background-color: transparent;
    color: #2c3e50;
    width: 300px
}

.gr_custom_header_1621862472 {
    border-bottom: 1px solid gray;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-size: 120%
}

.gr_custom_each_container_1621862472 {
    width: 100%;
    clear: both;
    margin-bottom: 10px;
    overflow: auto;
    padding-bottom: 4px;
    border-bottom: 1px solid #aaa;
}

.gr_custom_book_container_1621862472 {
    overflow: hidden;
    height: 60px;
    float: left;
    margin-right: 4px;
    width: 39px;
}

.gr_custom_author_1621862472 {
    font-size: 10px;
}

.gr_custom_tags_1621862472 {
    font-size: 10px;
    color: gray;
}

.gr_custom_rating_1621862472 {
    float: right;
}

</style>
