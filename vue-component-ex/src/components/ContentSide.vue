<template>
  <div class="col-xl-4 m-2 p-au" id="content">
    <div class="input-group input-group-lg mb-4 mt-4 ">
      <input
        type="email"
        class="form-control"
        placeholder="Email address or phone number"
      />
    </div>

    <div class="input-group input-group-lg">
      <input
        size="10"
        type="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div class="d-grid gap-2 col-6 mx-auto mt-4">
      <!-- <a href="./LogIn/HomeLogin.vue">
        <button class="btn btn-primary btn-lg mt-3" type="button">
          Log In
        </button>
      </a> -->
      <button class="btn btn-primary btn-lg mt-3">Log In</button>
      <a
        href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
        class="text-center "
        >Forgetten password?</a
      >
    </div>
    <hr />
    <div class="d-grid gap-2 col-6 mx-auto mt-4">
      <button class="btn btn-success btn-lg" type="button">
        Create new one
      </button>
    </div>

    <p class="text-center mt-4">
      <b>Create a Page</b> for a celebrity, brand or business.
    </p>

  </div>
</template>



<script>
</script>

<style scoped>
#content {
  background-color: white;
  border-radius: 10px;
}
</style>
