<template>
    <div>
        <h1>websites</h1>
        <ul>
            <li>
                <a href="https://boringweather.netlify.app/" target="_blank">boring weather
                <div><img class="demo-image" src="@/assets/boringweather.png" alt="screenshot of weather web app" /></div></a>
            </li>
            <li>
                <a href="https://cubingtrainer.netlify.app/" target="_blank">cubing trainer
                <div><img class="demo-image" src="@/assets/cubingtrainer.png" alt="screenshot of cubing timer web app" /></div></a>
            </li>
        </ul>
        <h1>podcasts</h1>
        <ul>
            <li>
                <a href="https://betterwithbooks.transistor.fm/" target="_blank">Better With Books
                <div><img class="demo-image" src="@/assets/books.jpg" alt="better with books podcast cover art" /></div></a>
            </li>
            <li>
                <a href="https://wasawkwardpod.transistor.fm/" target="_blank">That Was Awkward
                <div><img class="demo-image" src="@/assets/awkward.jpg" alt="that was awkward podcast cover art" /></div></a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>
