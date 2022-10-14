<template>
    <div class="container m-5">
        <table class="table">
          <tr>
            <th>Nama</th>
            <th>UserId</th>
          </tr>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{user.name}}</td> 
            <td>{{user.userId}}</td>    
          </tr>
        </table>
    </div>
    
</template>

<script>
    import axios from 'axios'
    
    export default{
        data(){
            return {
                info: null,
                users: []
            }
        },

        mounted () {
            axios
                .get('https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users')
                .then(response => {
                    console.log(response.data.data.Items);
                    this.users = response.data.data.Items
                })
                
        },
    }
</script>