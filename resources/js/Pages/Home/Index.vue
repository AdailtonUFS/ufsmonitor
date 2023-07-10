<template>
  <Layout>
    <Map :buildings="buildings"/>
  </Layout>
</template>

<script setup>
defineProps({buildings: Object})
</script>
<script>
export default {
  name: "Index.vue",
}
</script>
