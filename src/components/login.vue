
<template>
  <div v-if="!authReady">
    <!-- Display loading until authentication state is determined -->
    <p>Loading...</p>
  </div>

  <div v-else>
    <!-- If user is not logged in, show login/signup form -->
    <div v-if="!user">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
      <button @click="signup">Sign Up</button>
    </div>

    <!-- If the user is logged in, show logged in info -->
    <div v-else>
      <p>Logged in as {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const email = ref('')
const password = ref('')
const user = ref(null)
const authReady = ref(false)



const login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
}

const signup = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value)
}

const logout = () => {
  signOut(auth)
}
</script>