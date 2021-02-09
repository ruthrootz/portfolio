<template>
    <div>
        <h1>blog</h1>
        <div class="center">
            <div v-for="article in articles" :key="article.id">
            <h3>{{ article.title }}</h3>
            <h5>{{ article.publishDate }}</h5>
            <article class="article">
                <div v-html="article.text"></div>
            </article>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Blog.ts" />
