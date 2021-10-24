<template>
  <h2>AllArticle Page</h2>
  {{ count }}
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const count = computed(()=> store.state.count)
    
    return{
      count
    }

  }
}
</script>

