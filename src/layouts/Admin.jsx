import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import routes from '../routes/admin';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import AdminFooter from '../components/Footers/AdminFooter';
import AdminSidebar from '../components/Sidebars/AdminSidebar';

import { Images } from '../constants';

/* eslint-disable */
export default function Admin(props) {
  useEffect(() => {
    document.scrollingElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const renderPage = (props, prop) => {
    props.title = prop.title;
    return (<prop.component {...props} />);
  };

  const getRoutes = () => routes.map((route) => (
    <Route
      path={route.layout + route.path}
      render={(props) => renderPage(props, route)}
      key={route.key}
    />
  ));

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (props.location.pathname.indexOf(
        routes[i].layout + routes[i].path,
      ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  return (
    <>
      {/* sidebar */}
      <AdminSidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/admin/home',
          imgSrc: Images.ArgonLogo,
          imgAlt: 'Brand Logo',
        }}
      />
      <div className="main-content">
        {/* navbar */}
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        {/* conteudo */}
        <Switch>
          {getRoutes()}
          <Redirect from="*" to="/admin/home" />
        </Switch>
        {/* footer */}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}
