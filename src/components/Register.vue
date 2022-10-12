<template>
	<div class="container min-width: 576px max-width: 575.98px card text-center bg-secondary center-block">
		<form @submit.prevent="Register">
			<div>
				<label class="text-white">Nama</label>
				<input type="text" v-model="name" class="form-control" placeholder="enter name">
			</div>
			<div>
				<label  class="text-white">password</label>
				<input type="text" v-model="password" class="form-control" placeholder="enter password">
			</div>
			<br>
			<div>
				<button type="submit" class="btn btn-outline-light btn-lg">Submit</button>
			</div>
			<h2>{{user}}</h2>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
			name: '',
			password: '',
			user: '',
			}
		},
		methods: {
			Register(){
				axios.post("https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/register", 
				{name: this.name, password: this.password})

				.then ((response) => {
					console.log(response)
					alert('selamat anda sudah terdaftar')
					this.$router.push(
					{path: "/login"})
				});
			}
		}
	}
</script>