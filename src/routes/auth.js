import Landing from "../pages/Auth/Landing";
import Exercise from "../pages/Auth/Exercise";

var layout = "/auth";


var routes = [
    {
      path: "/landing",
      name: "Projeto EDUcador",
      layout: layout,
      icon: "ni ni-tv-2 text-primary",
      component: Landing,
    },
    {
      path: "/exercise",
      name: "Projeto EDUcador",
      layout: layout,
      icon: "ni ni-tv-2 text-primary",
      component: Exercise,
    }
  ];
  export default routes;