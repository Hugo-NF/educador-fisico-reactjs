import Index from "../pages/Auth/Index";

var layout = "/auth";


var routes = [
    {
      layout: layout,
      path: "/index",
      name: "Deu bom",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
    }
  ];
  export default routes;