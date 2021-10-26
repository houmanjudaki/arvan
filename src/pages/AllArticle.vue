<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9 ">
        <div class="row">
          <span class="All-Posts">
            All Posts
          </span>
          <table class="">
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
              v-for="post in posts.slice(0,20)"
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
                      class="btn Rectangle-160 dropdown-toggle"
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
                        <a
                          class="dropdown-item"
                          href="#"
                        >Edit</a>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li>
                        <a
                          class="dropdown-item "
                          href="#"
                        >Delete</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
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
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters.allPosts);

    function fetchPosts() {
      store.dispatch('fetchPosts');
    }
    fetchPosts();

    return {
      posts
    };
  }
};
</script>
<style scoped>
  .Rectangle-27 {
  width: 1130px;
  height: 40px;
  margin: 27px 30px 15px;
  padding: 10px 29px 0 1px;
  background-color: #eceeef;
}
.Excerpt {
  width: 59px;
  height: 19px;
  margin: 0 361px 11px 144px;
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
  width: 75px;
  height: 18px;
  margin: 4px 75px 23px 34px;
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
.Rectangle-160 {
  background-color: #5bc0de;
}
.All-Posts {

  font-family: HelveticaNeue;
  font-size: 40px;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
</style>
