<template>
    <div>
        <h1>blog</h1>
        <div class="center">
            <div v-for="article in articles" :key="article.id">
                <div class="article">
                    <h3><router-link :to="{ name: 'article', params: { id: article.id } }">{{ article.title }}</router-link></h3>
                    <h5>{{ article.publishDate }}</h5>
                    <div v-html="article.previewText"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Blog.ts" />
