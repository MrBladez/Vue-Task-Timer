<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const email = ref('')
const password = ref('')
const user = ref(auth.currentUser)

auth.onAuthStateChanged(u => user.value = u)

const login = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value)
}

const signup = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value)
}

const logout = () => signOut(auth)
</script>

<template>
  <div v-if="!user">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <button @click="signup">Sign Up</button>
  </div>
  <div v-else>
    Logged in as {{ user.email }}
    <button @click="logout">Logout</button>
  </div>
</template>
