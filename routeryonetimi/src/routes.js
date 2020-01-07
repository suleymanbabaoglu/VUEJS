import Home from './components/Home';
import User from './components/user/User';
import UserStart from "./components/user/UserStart";
import UserEdit from "./components/user/UserEdit";
import UserDetail from "./components/user/UserDetail";
import Header from "./components/Header";

export const routes = [
    {
        path: '/', name: 'anasayfa', components: {
            default: Home,
            'header-top': Header
        }
    },
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
    }
];