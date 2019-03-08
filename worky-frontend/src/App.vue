
<template>
  <div id="app" class="container-fluid px-0">
    <b-navbar  type="dark" variant="" >
      <div class="container">
        <b-navbar-toggle target="nav_text_collapse" />
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav>
            <b-nav-item  to="/" > Home </b-nav-item>
            <b-nav-item to="/about"> About </b-nav-item>
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
    // background: #0b1616 url('/static/imgs/Pixiv.Id.7027716.full.1842814.jpg')  no-repeat;
    background-size: cover;
    height: 100%;
    padding-top: 10px;
  }
  .navbar{
    margin-bottom: 80px
  }
  h1{
    color:#fff;
    font-size: 1.6em;
    font-weight: 600;
    text-shadow: 1px 1px 1px #000;
  }
</style>
