import Home from '../pages/Admin/Home';

const layout = '/admin';

const routes = [
  {
    layout,
    path: '/home',
    name: 'Início',
    title: 'Dashboard | Treino para todos',
    icon: 'ni ni-tv-2 text-primary',
    component: Home,
  },
];
export default routes;
