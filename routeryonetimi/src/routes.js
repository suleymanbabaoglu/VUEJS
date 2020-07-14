import Home from './components/Home';
import Header from "./components/Header";


const User = resolve=>{
    require.ensure(["./components/user/User.vue"],()=>{
        resolve(require("./components/user/User.vue"))
    }, "User")
}
const UserDetail = resolve=>{
    require.ensure(["./components/user/UserDetail.vue"],()=>{
        resolve(require("./components/user/UserDetail.vue"))
    }, "User")
}

const UserEdit = resolve=>{
    require.ensure(["./components/user/UserEdit.vue"],()=>{
        resolve(require("./components/user/UserEdit.vue"))
    }, "User")
}

const UserStart = resolve=>{
    require.ensure(["./components/user/UserStart.vue"],()=>{
        resolve(require("./components/user/UserStart.vue"))
    }, "User")
}



export const routes = [
    {
        path: '/', name: 'anasayfa', components: {
            default: Home,
            'header-top': Header
        }
    },// components içinde eğer isimlendirme varsa, bu işlem çağırıldığı yerde öncelikli çalışır. İsim ile çağırılmadığı takdirde default değer çalışır.
    {
        path: '/user', name: 'kullanicilar',
        components: {
            default: User,
            'header-top': Header
        }, children: [
            {path: '/', component: UserStart},
            {path: 'edit/:id', component: UserEdit, name: "userEdit"},
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    //Route Bazında Kontrol
                    next();
                }
            },
        ]
    },
    {path: '*', redirect : '/'} // yukarıdaki adımları geçer ve karşılık gelen route bulunamazsa buraya düşecektir ve / route una yönlenecektir.
];