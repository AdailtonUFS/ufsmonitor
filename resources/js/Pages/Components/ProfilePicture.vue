<template>
    <img :src="'../storage/images/avatar.jpg'" alt="avatar" :class="style">
</template>

<script>
export default {
    name: "ProfilePicture",
    props: {
        style: String
    }
}
</script>

<style scoped>

</style>
