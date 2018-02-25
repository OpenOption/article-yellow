import App from "./App.vue";
import AyAbout from "./pages/AyAbout.vue";
import AyHighscore from "./pages/AyHighscore.vue";
import AyIndex from "./pages/AyIndex.vue";
import AyNotfound from "./pages/AyNotfound.vue";
import AyWrite from "./pages/AyWrite.vue";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueRipple from "vue-ripple-directive";

import "./less/index.less";


Vue.use(Vuex);
Vue.use(VueRouter);
Vue.directive("ripple", VueRipple);

const store = new Vuex.Store({
	state: {}
});

const router = new VueRouter({
	routes: [
		{path: '/', component: AyIndex},
		{path: '/about', component: AyAbout},
		{path: '/highscore', component: AyHighscore},
		{path: '/write', component: AyWrite},
		{path: '*', component: AyNotfound}
	]
});

new Vue({
	el: "#app",
	render: h => h(App),
	store,
	router
});
