<template>
  <div class="col-md-3">
    <router-link :to="getLink" >
      <b-card
      overlay
       :title="character.name"
       :img-src="character.img"
       img-alt="Image"
       img-top
       class="mb-3 mt-3 mr-1 ml-1 shadow-sm card-char ">
      </b-card>
    </router-link>
 </div>

</template>
<script>
export default {
  name: "ListChars",
  props: {
    character: { type: Object, required: true }
  },
  computed: {
    getLink() {
      return  `/char/${this.character.id}/${this.character.slug}`
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  .card-char{
    transition: all 500ms ease-in-out;
    border-width: 2px;
    opacity: 0.9;
    border-color:#ccc !important;
    cursor:pointer;
    .card-body{
      display: flex !important;
      align-items: flex-end !important;
      h4{
        border-left: 2px solid #087d7f;
        font-size: 14px !important;
        color:#0b1616 !important;
        background: rgba(255,255,255,0.8);
        padding:3px 5px;
      }
    }
    .card-img-top{
     height: 15vw;
     object-fit: cover;
     border-top-left-radius: 0;
     border-top-right-radius: 0;
    }
    &:hover{
      opacity: 1;
      border-color:#333 !important;
    }
  }
</style>
