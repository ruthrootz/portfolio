<template>
    <div>
        <h1>websites</h1>
        <ul>
            <li>
                <a href="https://boringweather.netlify.app/">boring weather</a>
            </li>
            <li>
                <a href="https://cubingtrainer.netlify.app/">cubing trainer</a>
            </li>
        </ul>
        <h1>podcasts</h1>
        <ul>
            <li>
                <a href="https://betterwithbooks.transistor.fm/">Better With Books</a>
            </li>
            <li>
                <a href="https://wasawkwardpod.transistor.fm/">That Was Awkward</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>
