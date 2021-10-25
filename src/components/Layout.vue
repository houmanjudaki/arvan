<template>
  <nav class=" navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="Arvan-Challenge navbar-brand">Arvan Challenge</a>

    <span class="Welcome-username-">
        Welcome {{ username }}
    </span>
    <router-link to="/Login">
    <button type="button" class=" ms-auto btn btn-outline-primary">Logout</button>
    </router-link>
  </div>
</nav>


<nav id="sidebarMenu"  class=" navbar-dark bg-primary col-lg-2 col-md-3 col-sm-12  d-block  sidebar collapse vh-100 vw-20">
  <div class="position-sticky pt-3">
  
    <p class="fs-4 text-light px-3 ">Post</p>

    <ul class="nav flex-column">
      <li class="nav-item ">
        <router-link  class="dropdown-item text-light px-5 nav-link" to="/">
           All Articles
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="dropdown-item text-light px-5 nav-link" to="/NewArticle">
            New Article
        </router-link>
      </li>
    </ul>

  </div>
</nav>

</template>

<script>
export default {


}
</script>


<style>
.router-link-active {
    background-color: rgba(255, 255, 255, 0.15) !important;

}
.Arvan-Challenge {
 
  font-family: HelveticaNeue;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  color: #fff;
}
.Welcome-username- {
  width: 172px;
  height: 18px;
  margin: 11px 951px 11px 20px;
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}


</style>
