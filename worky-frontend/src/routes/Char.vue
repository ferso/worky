<template>
  <div class="char">
    <div v-if="char" class="container p-5">
      <h2>{{char.name}}</h2>
      <div class="row ">
        <CharSegments
          v-for="(segment, index) in char.content"
          :segment="segment"
          :key="segment.title + index" />
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters }       from "vuex";
import Loader               from "@/components/Loader";
import CharSegments         from "@/components/CharSegments";
import {GET_CHAR_DATA}      from '@/store/characters.module'

export default {
  name: 'Char',
  mounted(){
    this.loadChar()
  },
  computed: {
    ...mapGetters(["char", "isLoading","error"])
  },
  components: {
    Loader,
    CharSegments
  },
  methods: {
    loadChar(){
      let id = this.$route.params.id;
      this.$store.dispatch(GET_CHAR_DATA,id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .char{
    background: url('/static/imgs/Pane-dirtDark.jpg');
    h2{
      color:#fff;
    }
  }
</style>
