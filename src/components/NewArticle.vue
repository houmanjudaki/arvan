<template>
  <create />
  <update :post="post" />
</template>

<script>
import Create from '../components/post/Create.vue';
import Update from '../components/post/Update.vue';
export default {
  components:{
    Create,
    Update
  }

};
</script>

<style >

</style>
