import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import { Chart } from 'chart.js'
import Chartkick from 'vue-chartkick'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  TimeScale,
  LineController,
  PointElement
} from 'chart.js'

// import 'chartjs-adapter-moment'

ChartJS.register(PointElement, LineController, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, TimeScale)

app.use(Chartkick.use(Chart))

app.use(router)
app.mount('#app')
