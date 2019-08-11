<template>
  <div class="item-list">
    <item1 v-for="item in displayItems" :key="item.id  "></item1>
  </div>
</template>
<script>
import Item1 from '../components/Item1.vue'

export default {
  components: {
    Item1
  },
  data() {
    return {
      displayItems: window.items
    }
  }
}
</script>
