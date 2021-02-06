<template>
  <div>
    <img alt="small R logo" src="@/assets/r.png" />
    <Blog />
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";

export default {
  name: "BlogView",
  components: {
    Blog
  }
};
</script>
