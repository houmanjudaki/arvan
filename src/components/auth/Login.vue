<template>
  <div class="card Rectangle-272">
    <div class="card-body">
      <form>
        <span class="LOGIN">
          LOGIN
        </span>
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
        <router-link to="/">
          <button
            class="btn btn-primary btn-block Rectangle-104"
            type="submit"
          >
            Submit
          </button>
        </router-link>
        <span class="Dont-have-account Text-Style">
          Don’t have account?
        </span>

        <router-link to="/Auth/Register">
          <span class="Register-Now">
            Register Now
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
.Rectangle-272 {
  width: 450px;
  height: 423px;
  margin: 0 0 194px 451px;
  padding: 37px 20px 19px;
  border-radius: 4px;
  background-color: #eceeef;
}
.LOGIN {
  width: 144px;
  height: 55px;
  margin: 0 133px 27px 34px;
  font-family: HelveticaNeue;
  font-size: 47px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
}
.Rectangle-104 {
  width: 410px;
  height: 40px;
  margin: 28px 0 14px;
  border-radius: 4px;

}
.Dont-have-account {
  width: 148px;
  height: 18px;
  margin: 15px 11px 0 8px;
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #373a3c;
}
.Register-Now {
  width: 103px;
  height: 19px;
  margin: 14px 140px 0 11px;
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color:#373a3c;
}
</style>
