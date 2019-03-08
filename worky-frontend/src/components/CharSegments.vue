<template>
  <div class="col-md-12">
    <div v-if="segment.content" class="segment-content">
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
<style lang="scss">
  .segment-content{
    color:#fff;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 30px 0 ;
    .tright{
      float:right;
      margin-left: 20px;
    }
    .tleft{
      float:left;
      margin-right: 20px;
    }

    .caption{
      padding-top: 10px;
      font-size: 11px;
    }
  }
</style>
