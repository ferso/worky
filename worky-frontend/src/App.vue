<template>
  <div id="app" class="container-fluid px-0">
    <b-navbar type="dark" variant="" fixed="top">
      <div class="container">
        <b-navbar-toggle target="nav_text_collapse" />
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav>
            <b-nav-item  to="/" > <i class="fas fa-home"></i> Home </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
  html,body{
    height: 100%;
  }
  #app{
    font-family: 'Montserrat', sans-serif;
    background-size: cover;
    height: 100%;
  }

  h1{
    color:#fff;
    font-size: 1.6em;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;
  }
</style>
