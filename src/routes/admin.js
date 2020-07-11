import Home from "../pages/Admin/Home";

var layout = "/admin";

var routes = [
  {
    layout: layout,
    path: "/home",
    name: "Início",
    title: "Dashboard | Treino para todos",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
  },
];
export default routes;
