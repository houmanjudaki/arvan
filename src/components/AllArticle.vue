<template>
  <div class=" d-flex flex-column  ">
    <span class="All-Posts">
      All Posts
    </span>     
    <table class="w-100 h-100">
      <thead class="Rectangle-27 Excerpt">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Title
          </th>
          <th scope="col">
            Author
          </th>
          <th scope="col">
            Tags
          </th>
          <th scope="col">
            except
          </th>
          <th scope="col">
            Created
          </th>
        </tr>
      </thead>
      <tbody
        v-for="post in posts.slice(0,10)"
        :key="post.id"
        class="Article-title"
      >
        <tr>
          <th
            scope="row"
          >
            {{ post.id }}
          </th>
          <td>{{ post.title }}</td>
          <td>{{ post.id }}</td>
          <td>@mdo</td>
          <td>{{ post.userId }}</td>
          <td>
            <div class="dropdown">
              <button
                id="dropdownMenuButton1"
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ...
              </button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <router-link to="/NewArticle">
                    <a
                      class="dropdown-item"
                    >Edit</a>
                  </router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <delete :id="post.id" />
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class=" ">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >1</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >2</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
            >3</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Delete from './post/Delete.vue';
export default {
 
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters['post/allPosts']);
   
    function fetchPosts() {
      store.dispatch('post/fetchPosts');
     
    }
    fetchPosts();

    return {
      posts,
      Delete
    };
  }
};
</script>
<style scoped>
  .Rectangle-27 {

  background-color: #eceeef;
}
.Excerpt {
  
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #55595c;
}
.Article-title {
 
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color:#55595c ;
}
.All-Posts {

  font-family: HelveticaNeue;
  font-size: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}


</style>
