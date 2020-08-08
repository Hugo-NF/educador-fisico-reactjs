import Exercise from '../pages/Auth/Exercise';
import Login from '../pages/Auth/Login';
import Landing from '../pages/Auth/Landing';

const layout = '/auth';

const routes = [
  {
    path: '/landing',
    name: 'Início',
    title: 'Boas vindas | Treino para todos',
    layout,
    icon: 'ni ni-tv-2 text-primary',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Entrar',
    title: 'Login | Treino para todos',
    layout,
    icon: 'ni ni-key-25 text-primary',
    component: Login,
  },
  {
    path: '/exercise',
    name: 'Projeto EDUcador',
    title: 'Exercícios | Treino para todos',
    layout,
    icon: 'ni ni-tv-2 text-primary',
    component: Exercise,
  },
];
export default routes;
