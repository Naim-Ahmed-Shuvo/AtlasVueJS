<template lang="">
  <section className="py-32">
    <div className="container mx-auto">
      <div
        className="profilemain card border  text-center mx-auto p-6 dark:border dark:border-gray-600"
        v-if="getUser"
      >
        <div>
          <img
            :src="getUser.image"
            alt="img"
            className="rounded"
            style="height: 200px; width: 200px; margin: 0 auto"
            v-if="getUser.image"
          />
        </div>

        <div className="usertext mt-5">
          <h5 className=" text-gray-700 dark:text-gray-200 font-semibold">
            {{ getUser.name }}
          </h5>
          <p className=" text-gray-700 dark:text-gray-200 ">
            {{ getUser.email }}
          </p>
          <button
            className="bg-blue-500 text-white hover:shadow transition-all ease-in-out px-5 py-2 rounded mt-5 flex items-center justify-center mx-auto"
            @click="signOut"
          >
            <span>Sign Out</span> <span class='loader ml-2' v-show="loading"></span>
          </button>
        </div>
      </div>
      <div
        className="profilemain card border  text-center mx-auto p-6 dark:border dark:border-slate-600"
        v-else
      >
        No user
      </div>
    </div>
  </section>
</template>
<script>
export { getAuth, signOut } from "firebase/auth";

export default {
  name: "Profile",
  data(){
    return {
      loading:false,
    }
  },
  created() {
    console.log("created");
  },
  computed: {
    getUser() {
      console.log("computed");
      const user = JSON.parse(localStorage.getItem("USER"));
      // console.log(user);
      return user;
    },
  },
  methods: {
    signOut() {
      this.loading = true
      setTimeout(() => {
        localStorage.clear();
        this.loading = false
        this.$router.push("/login");
      }, 1000);
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
<style>
.loader {
  
  border-radius: 50%;
  border-top: 1px solid rgb(250, 250, 250);
  border-bottom: 1px solid rgb(255, 255, 255);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
