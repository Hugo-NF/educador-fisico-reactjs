import Landing from "../pages/Auth/Landing";
import Login from "../pages/Auth/Login";

var layout = "/auth";


var routes = [
  {
    path: "/landing",
    name: "Início",
    title: "Boas vindas | Treino para todos",
    layout: layout,
    icon: "ni ni-tv-2 text-primary",
    component: Landing,
  },
  {
    path: "/login",
    name: "Entrar",
    title: "Login | Treino para todos",
    layout: layout,
    icon: "ni ni-key-25 text-primary",
    component: Login,
  }
];
  export default routes;