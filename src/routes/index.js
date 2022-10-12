import {createWebHistory, createRouter} from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Privacy from "../components/Privacy.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	},
	{
		path: "/privacy",
		name: "Privacy",
		component: Privacy
	},
	{
		path: "/login",
		name: "Login",
		component: Login
	},
	{
		path: "/register",
		name: "Register",
		component: Register
	}
];

const router = createRouter ({
	history: createWebHistory(),
	routes
});

export default router;