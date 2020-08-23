import React from 'react';

// reactstrap components
import {
  Button, Container, Row, Col,
} from 'reactstrap';

import { Images } from '../../constants';

export default function UserHeader() {
  return (
    <div
      className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{
        minHeight: '600px',
        backgroundImage:
            `url(${Images.ProfileBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Mask */}
      <span className="mask bg-gradient-indigo opacity-8" />
      {/* Header container */}
      <Container className="d-flex align-items-center" fluid>
        <Row>
          <Col lg="7" md="10">
            <h1 className="display-2 text-white">Hello Jesse</h1>
            <p className="text-white mt-0 mb-5">
              Essa é a sua pagina de perfil. Aqui você pode ver seus progressos 
              ao longo do tempo.
            </p>
            <Button
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Edit profile
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
