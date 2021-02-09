<template>
    <div>
        <img alt="small R logo" src="@/assets/r.png" />
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
};
</script>
