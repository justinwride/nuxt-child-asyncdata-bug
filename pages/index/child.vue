<template>
    <div>{{$store.state.childData.value}}</div>
</template>

<script>
export default {
    asyncData({ store }) {
        const id = store.state.parentData.id;
        console.log("parentData ID:", id);
        store.commit("childData", { value: id });
    }
};
</script>