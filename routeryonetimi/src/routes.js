import Home from './components/Home';
import User from './components/user/User';
import UserStart from "./components/user/UserStart";
import UserEdit from "./components/user/UserEdit";
import UserDetail from "./components/user/UserDetail";

export const routes = [
    {path: '/', component: Home, name: 'anasayfa'},
    {
        path: '/user', component: User, name: 'kullanicilar', children: [
            {path: '/', component: UserStart},
            {path: 'edit/:id', component: UserEdit , name: "userEdit"},
            {path: ':id', component: UserDetail},
        ]
    }
];