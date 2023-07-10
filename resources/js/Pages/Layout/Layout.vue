<template>
  <Header/>
  <Main>
    <slot>

    </slot>
  </Main>
</template>

<script>

import Header from "./Header.vue";
import Main from "./Main.vue";

export default {
  name: "Layout.vue",
  components: {Main, Header},
}
</script>
