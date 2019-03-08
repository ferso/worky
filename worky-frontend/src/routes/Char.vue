<template>
  <div class="char">
    <div v-if="isLoading" class="character-preview">
       <Loader />
    </div>
    <div v-else >
    <div v-if="char" class="container p-5">
      <div class="row">
        <div class="col-md-12">
          <a :href="char.link" target="_blank" class="float-right btn btn-outline-warning flink"> <i class="fas fa-link"></i> Fandom Link </a>
          <h2>{{char.name}}</h2>
        </div>
      </div>

       <div class="row">
          <div class="col-md-8">
            <CharSegments
              v-for="(segment, index) in char.content"
              :segment="segment"
              :key="segment.title + index" />
          </div>
          <div class="col-md-4">
            <div v-html="char.infobox" class="infobox"></div>
          </div>
       </div>
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
      let id  = this.$route.params.id;
      let slug = this.$route.params.slug;
      this.$store.dispatch(GET_CHAR_DATA,id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  .char{
    min-height: 100%;
    padding-top: 50px;
    background: url('/static/imgs/Pane-dirtDark.jpg');
    h2{
      color:#fff;
      margin-bottom: 30px;
    }

    a.flink{
      font-size: 11px;
      color:yellow
    }



   .infobox{
      color:#fff;
      font-size: 11px;
      .title{
        color:#fff;
      }
      table  td, table  th, {
       padding: 10px;
       border-bottom:1px solid rgba(255,255,255,0.2);
     }
     table > table > td  {
        border:0;
     }
    }
  }
</style>
