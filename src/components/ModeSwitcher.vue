<template>
  <button @click="$emit('toggle')">
    모드 토글 (현재: {{ mode }})
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<"light" | "dark">,
      required: true,
    },
  },
});
</script>
