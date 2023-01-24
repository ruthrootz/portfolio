<template>
  <div>
    <div class="article">
      <h3>{{ article.title }}</h3>
      <h5>{{ article.publishDate }}</h5>
      <div v-html="article.text"></div>
    </div>
  </div>
</template>
<script lang="ts" src="./Article.ts" />
