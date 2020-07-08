import Index from "../pages/Auth/Index";
import Register from "../pages/Auth/Register";


var routes = [
    {
      path: "/index",
      name: "Deu bom",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
    },
    {
      path: "/register",
      name: "Register",
      icon: "ni ni-tv-2 text-primary",
      component: Register,
    }
  ];
  export default routes;