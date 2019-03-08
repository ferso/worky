<template>
  <div class="col-md-12">

    <div v-if="segment.content" class="content">
        <span v-html="segment.content"></span>
    </div>
 </div>
</template>
<script>
export default {
  name: "CharSegments",
  props: {
    segment: { type: Object, required: true }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  .content{
    color:#fff;
  }
</style>
