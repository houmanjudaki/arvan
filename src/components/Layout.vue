<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="d-flex navbar-brand" href="#">Arvan Challenge</a>

    <p class=" text-light ">Welcome {{ username }}</p>
    <button type="button" class=" ms-auto btn btn-outline-primary">Logout</button>

  </div>
</nav>


<nav id="sidebarMenu" class="navbar-dark bg-primary col-lg-2 col-md-3  d-block  sidebar collapse vh-100 vw-20">
  <div class="position-sticky pt-3">
  
    <p class="fs-4 text-light px-3 ">Post</p>

    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="text-light px-5 nav-link active" href="#">
           All Articles
         </a>
      </li>
      <li class="nav-item">
        <a class="text-light px-5 nav-link" href="#">
            New Article
        </a>
      </li>
    </ul>

  </div>
</nav>










</template>

<script>
export default {


}
</script>


<style scoped>

</style>
