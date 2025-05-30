<template>
  <main>
    <h1>📝 My Tasks</h1>
    <TaskForm @add-task="addTask" />
    <Login />
    <select v-model="selectedSubject">
      <option value="">All Subjects</option>
      <option
        v-for="subject in uniqueSubjects"
        :key="subject"
        :value="subject"
      >
      {{ subject }}
      </option>
    </select>

    <TaskList
      :tasks="filteredTasks"
      :useFlip="useFlip"
      @remove-task="removeTask"
      @edit-task="editTask"
    />
    <!-- <button @click="toggleView">
      {{ useFlip ? 'Switch to Text View' : 'Switch to FlipClock' }}
    </button> -->
  </main>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import { auth, db } from '@/firebase'
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import Login from './components/login.vue'
import dayjs from 'dayjs'

const tasks = ref([])
const user = ref(auth.currentUser)

let unsubscribe = null
const authReady = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u
    authReady.value = true
    if (u) loadTasks() // <--- Only call when user is available
  })

  requestNotificationPermission()
  startNotificationCheck()
})

function loadTasks() {
  if (!user.value) return

  const tasksRef = collection(db, 'users', user.value.uid, 'tasks')
  unsubscribe = onSnapshot(tasksRef, snapshot => {
    console.log("Loaded tasks for:", user.value.email)
    console.log("Snapshot size:", snapshot.size)

    tasks.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
}


async function addTask(task) {
  if (!authReady.value || !user.value) return
  console.log('Adding task for user:', user.value?.email, task)
  const tasksRef = collection(db, 'users', user.value.uid, 'tasks')
  await addDoc(tasksRef, task)
}

async function removeTask(id) {
  if (!authReady.value || !user.value) return
  const taskRef = doc(db, 'users', user.value.uid, 'tasks', id)
  try {
    await addDoc(tasksRef, task)
  } catch (e) {
    console.error('Firebase addDoc error:', e)
  }
}

async function editTask(id, updates) {
  if (!authReady.value || !user.value) return
  const taskRef = doc(db, 'users', user.value.uid, 'tasks', id)
  await updateDoc(taskRef, updates)
}
const toggleView = () => {
  //useFlip.value = !useFlip.value
}
const selectedSubject = ref('')

const uniqueSubjects = computed(() => {
  const subjects = tasks.value.map(task => task.subject || 'General')
  return [...new Set(subjects)]
})

const filteredTasks = computed(() => {
  if (!selectedSubject.value) return tasks.value
  return tasks.value.filter(task => task.subject === selectedSubject.value)
})

const notifiedTasks = new Set()

const requestNotificationPermission = () => {
  if ('Notification' in window) {
    Notification.requestPermission()
  }
}

const startNotificationCheck = () => {
  setInterval(() => {
    const now = dayjs()
    tasks.value.forEach(task => {
      const due = dayjs(task.dueDate)
      const minutesLeft = due.diff(now, 'minute')

      if (
        minutesLeft <= 10 &&
        minutesLeft >= 0 &&
        !notifiedTasks.has(task.id)
      ) {
        notifiedTasks.add(task.id)
        showNotification(task.name, due)
      }
    })
  }, 1000) // every 1 minute
}

const showNotification = (taskName, due) => {
  if (Notification.permission === 'granted') {
    new Notification('⏰ Task Due Soon', {
      body: `${taskName} is due at ${due.format('h:mm A')}`,
    })
  }
}

</script>
