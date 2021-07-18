<template>
    <NuxtChild v-if="$store.state.parentData" />
    <div v-else>No data to show</div>
</template>

<script>
export default {
    async asyncData({ store }) {
        // using setTimeout to simulate waiting for a request to finish
        await new Promise(resolve => setTimeout(resolve, 100));
        await store.commit("parentData", { text: "Hello World!" });
    }
};
</script>