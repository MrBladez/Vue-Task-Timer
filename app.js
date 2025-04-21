const { createApp, onMounted } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
      newDueDate: '',
      useFlipClock: false
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        id: Date.now(),
        name: this.newTask,
        dueDate: this.newDueDate,
        editing: false
      });
      this.newTask = '';
      this.newDueDate = '';
      this.saveTasks();
      this.initFlipClocks();
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    toggleView() {
      this.useFlipClock = !this.useFlipClock;
      this.$nextTick(() => this.initFlipClocks());
    },
    countdown(dueDate) {
      const diff = new Date(dueDate) - new Date();
      if (diff <= 0) return "Past due";
      const mins = Math.floor(diff / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      return `${mins}m ${secs}s`;
    },
    formatDate(due) {
      return dayjs(due).format("MMMM D, YYYY [at] h:mm A");
    },
    saveTasks() {
      localStorage.setItem("vue-tasks", JSON.stringify(this.tasks));
    },
    loadTasks() {
      const data = localStorage.getItem("vue-tasks");
      if (data) {
        this.tasks = JSON.parse(data);
      }
    },
    enableEdit(task) {
      task.editing = true;
    },
    disableEdit(task) {
      task.editing = false;
      this.saveTasks();
    },
    initFlipClocks() {
      if (!this.useFlipClock) return;

      this.tasks.forEach(task => {
        const clockEl = document.getElementById('clock-' + task.id);
        if (clockEl) {
          clockEl.innerHTML = ''; // reset clock
          const secondsLeft = Math.floor((new Date(task.dueDate) - new Date()) / 1000);
          new FlipClock(clockEl, secondsLeft, {
            clockFace: 'HourlyCounter',
            countdown: true,
            autoStart: true
          });
        }
      });
    }
  },
  mounted() {
    this.loadTasks();
    this.initFlipClocks();
    setInterval(() => {
      if (!this.useFlipClock) this.$forceUpdate();
    }, 1000);
  }
}).mount('#app');
