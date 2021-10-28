<template>
  <div class="card Rectangle-273">
    <div class="card-body">
      <form>
        <span class="Register">
          Register
        </span>
        <div class="form-group">
          <label for="name">User </label>
          <input
            id="name"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group">
          <label for="email">Email </label>
          <input
            id="email"
            class="form-control"
            type="email"
          >
          <small class="form-text text-danger">Required Field </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            class="form-control"
            type="password"
          >
          <small class="form-text text-danger">Required Field  </small>
        </div>
        <button
          class="btn btn-primary btn-block Rectangle-104"
          type="submit"
        >
          Register
        </button>
        <span class="Dont-have-account Text-Style">
          Already Registered?
        </span>

        <router-link to="/auth/Login">
          <span class="Already-Registered Text-Style">
            Login
          </span>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.Rectangle-273 {
  width: 450px;
  height: 528px;
  margin: 0 0 142px 451px;
  padding: 35px 20px 20px;
  border-radius: 4px;
  background-color: #eceeef;
}
.Register {
  width: 174px;
  height: 55px;
  margin: 0 118px 49px 19px;
  font-family: HelveticaNeue;
  font-size: 47px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
}

</style>
