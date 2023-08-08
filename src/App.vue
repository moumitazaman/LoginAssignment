<script setup>
import { ref, reactive, computed } from 'vue'
import router from './router/index'

const data = reactive({
  isLogin: true,
  isRegister: false,
  users: [],
  isloggedIn: false,
  isLoginpage: true,
})


const users = reactive({})

let registeredUser =reactive([
  {  name:"" ,email: "",username: "", password: "" },
])

function Register() {
  if (registeredUser.username == '' ||  registeredUser.password == '') {
    alert("Please Fill Up Form")
  }
  else {
    /*data.users.push({
     name: registeredUser.name,
      email: registeredUser.email,
      username: registeredUser.username,
      password: registeredUser.password
    })*/
    localStorage.setItem('users', JSON.stringify(registeredUser))
    alert("User Registered");
    registeredUser[0].name = ''
    registeredUser[0].email = ''
    registeredUser[0].username = ''
    registeredUser[0].password = ''
    

  }
}

function SignIn() {
 data.users=JSON.parse(localStorage.getItem('users'))
 let userlogin = data.users.find((user) => {
 // console.log(user.username)
 // console.log(registeredUser[0].username)

      return (user.username === registeredUser[0].username && user.password === registeredUser[0].password);
    })
    if (userlogin) {   
   
      data.isloggedIn = true
      alert("User Logged In");
      
      data.isLoginpage = false      
    }
    else{
    alert("Credentials Does not Match");

  }
}



</script>

<template>
  <section v-show="data.isLoginpage==true" class="flex h-screen w-full">
    
    <div class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Kosmos!</h1>
    </div>
    
    <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl" v-show="data.isRegister == true">Registration Form</h2>
      <h2 class="mb-5 text-xl" v-show="data.isLogin == true">Login</h2>

      
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4" v-show="data.isRegister == true">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  v-model="registeredUser[0].name">
          </div>
          <div class="mb-4" v-show="data.isRegister == true">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email"  v-model="registeredUser[0].email">
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  v-model="registeredUser[0].username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="registeredUser[0].password" id="password" type="password" >
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
       
          <div class="flex items-center justify-between" v-show="data.isRegister == true">
         
            <button @click="Register()"  class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Register
            </button>
            <a  @click="data.isLogin = true,
                data.isRegister = false" class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#">
              Or Sign In
            </a>
           
          </div>
          <div class="flex items-center justify-between" v-show="data.isLogin == true">
            <button @click="SignIn()" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a @click="data.isLogin = false,
                data.isRegister = true" class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#" >
              Or Register
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
   
  </section>
  <section v-show="data.isLoginpage==false" class="flex h-screen w-full">
    <div class="w-1/2" style="background-color:mediumseagreen; background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Dashboard</h1>
    </div>
    
    <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
<h1>Welcome !</h1>
</div>
  </section>
</template>
<style scoped></style>
