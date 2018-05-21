import Vue from "vue";

Vue.component("example", require("./components/Example.vue"));

window.app = new Vue({
  el: "#app",
});
