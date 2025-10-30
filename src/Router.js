import { createWebHistory, createRouter} from 'vue-router'
import ComicsComponent from './components/ComicsComponent.vue'
import PadreDeportes from "./components/PadreDeportes.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import NumeroDoble from './components/NumeroDoble.vue'
const myRoutes = [
    { path:"/", component:PadreDeportes},
    { path:"/comics", component:ComicsComponent},
    { path:"/numeros", component:PadreNumeros},    
    { path:"/numerodoble/:numero?", component:NumeroDoble},    
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;