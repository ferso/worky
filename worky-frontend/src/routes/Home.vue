<template>
  <div class="home">
    <div class="display">
      <div v-if="characters.length > 0"  class="overflow-auto">
        <b-pagination-nav
        limit="15"
        size="sm"
        align="center"
        :hide-ellipsis=true
        :link-gen="linkGen"
        :number-of-pages="this.pages"
        :use-router=true
        :value="this.page" />
      </div>
      <div v-if="isLoading" class="character-preview">
         <Loader />
      </div>
      <div v-else class="container">
        <div v-if="characters.length === 0" class="character-preview">
            No characters found
        </div>
        <div v-if="error" class="character-preview">
            {{error.message}}
        </div>
        <div class="row list-chars ">
          <ListChars
            v-for="(character, index) in characters"
            :character="character"
            :key="character.name + index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters }       from "vuex";
import ListChars            from "@/components/ListChars";
import Loader               from "@/components/Loader";
import {GET_ALL_CHARACTERS,RESET_CHARS_DATA} from '@/store/characters.module'

export default {
  name: 'Home',
  mounted(){
    this.page = this.$route.query.page ? this.$route.query.page : this.page;
    this.loadCharacters()
  },
  watch:{
    $route (to, from){
      this.page = to.query.page;
      this.loadCharacters()
    }
  },
  computed: {
    ...mapGetters(["characters", "isLoading","pages","error"])
  },
  components: {
    Loader,
    ListChars
  },
  data() {
    return {
      page: this.$route.query.page
    }
  },
  beforeRouteLeave(to, from, next){
    this.$store.dispatch(RESET_CHARS_DATA);
    next()
  },
  methods: {
    loadCharacters(){
      let page = this.$route.query.page ? this.$route.query.page : this.page;
      this.$store.dispatch(GET_ALL_CHARACTERS,page);
    },
    linkGen(pageNum) {
      return {
         path:'/?page=' + pageNum
       }
    }
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
  padding-bottom: 100px;
}
.display{
  height: 90%;
}
.page-link{
  border-color:#0f8789;
  background-color: #0f8789;
  color:#fff;
  &:hover{
    color:#fff;
    background-color: #0da8aa;
    border-color:#0da8aa;
  }
}

.page-item.active{
  .page-link{
    border-color:#0da8aa;
    background-color: #0da8aa;
  }
}

.page-item.disabled{
  .page-link{
    color:#fff;
    border-color:#146868;
    background-color: #146868;
  }
}

</style>
