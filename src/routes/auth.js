import Landing from "../pages/Auth/Landing";

var layout = "/auth";


var routes = [
    {
      path: "/landing",
      name: "Projeto EDUcador",
      layout: layout,
      icon: "ni ni-tv-2 text-primary",
      component: Landing,
    }
  ];
  export default routes;