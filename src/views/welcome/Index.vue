<template>
  <div class="text">Hello {{ name }} v2</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const name = ref("vue");
    return {
      name,
    };
  },
});
</script>
<style lang="scss" scoped>
.text {
  font-size: 24px;
  text-align: center;
  margin-top: 60px;
}
</style>
