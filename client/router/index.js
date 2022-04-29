import FormAddParcel from '../src/components/FormAddParcel.vue'
import CheckStatus from '../src/components/CheckStatus.vue'
import ParcelReturn from '../src/components/ParcelReturn.vue'
import ReturnFinish from '../src/components/ReturnFinish.vue'
import Login from "../src/components/Login.vue"
import Register from '../src/components/Register.vue'
import CollectParcel from "../src/components/CollectParcel.vue"
import OverdueParcel from '../src/components/OverdueParcel.vue'
import {createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/FormAddParcel', component: FormAddParcel },
    { path: '/CheckStatus', component: CheckStatus },
    { path: '/ParcelReturn', component: ParcelReturn },
    { path: '/ReturnFinish', component: ReturnFinish },
    { path: '/Register', component: Register },
    { path: '/CollectParcel', component: CollectParcel },
    { path: '/OverdueParcel', component: OverdueParcel },
    { path: '/Login', component: Login }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
