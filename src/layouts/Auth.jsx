import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import AuthNavbar from '../components/Navbars/AuthNavbar';
import AuthFooter from '../components/Footers/AuthFooter';

import routes from '../routes/auth';

/* eslint-disable */
export default function Auth() {
  useEffect(() => {
    document.body.classList.add('bg-default');
    return function unMount() {
      document.body.classList.remove('bg-default');
    };
  });

  const renderPage = (props, prop) => {
    props.title = prop.title;
    return (<prop.component {...props} />);
  };

  const getRoutes = () => routes.map((prop, key) => (
    <Route
      path={prop.layout + prop.path}
      render={(props) => renderPage(props, prop)}
      key={key}
    />
  ));

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-indigo py-7">
          <Container>
            <div className="header-body text-center">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Projeto EDUcador!</h1>
                  <h3 className="text-lead text-light">
                    Treino sem sair de casa
                  </h3>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt-7 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes()}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}
