<template>
  <div class="row ">
    <div class="col-md-12">
      <div v-if="segment.content" class="segment-content">
        <h3>{{segment.title}}</h3>
        <span v-html="segment.content"></span>
      </div>
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
    h3{
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 10px 0 20px 0 ;
      margin-bottom: 20px;
    }
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
