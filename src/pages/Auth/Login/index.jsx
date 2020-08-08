// Styles
import './style.scss';

import React, { useState, useEffect } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Collapse,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
} from 'reactstrap';

import PropTypes from 'prop-types';
import api from '../../../services/api';

export default function Login(props) {
  const [isOpen, toogle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [recoverEmail, setRecoverEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [recoverEmailError, setRecoverEmailError] = useState('');

  // Equivalent to ComponentDidMount
  useEffect(() => {
    // Sets browser tab name
    const { title } = props;
    window.document.title = title;
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    await api.post('/users/login', {
      email,
      password,
    })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400: {
            const fields = error.response.data.validation.keys;
            const errors = {
              emailError: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
              passwordError: fields.includes('password') ? 'A senha deve conter pelo menos 8 caracteres' : '',
            };
            setEmailError(errors.emailError);
            setPasswordError(errors.passwordError);
            break;
          }
          default:
          case 500:
            break;
        }
      });
  };

  const handlePasswordRecover = async (event) => {
    event.preventDefault();

    await api.post('/users/password/reset', {
      email: recoverEmail,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400: {
            const fields = error.response.data.validation.keys;
            const errors = {
              recoverEmailError: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
            };
            setRecoverEmailError(errors.recoverEmailError);
            break;
          }
          default:
          case 500:
            break;
        }
      });
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary" id="login-card">
          <CardBody className="px-lg-5">
            <div className="text-center text-bold mb-4">
              <span className="text-gray">Bem vindo de volta, digite suas credenciais</span>
            </div>
            <Form role="form" onSubmit={handleLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="new-email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </InputGroup>
                <span className="error text-danger">{emailError}</span>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </InputGroup>
                <span className="error text-danger">{passwordError}</span>
              </FormGroup>

              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                  onChange={(event) => setRemember(event.target.checked)}
                  checked={remember}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin"
                >
                  <span className="text-muted">Manter conectado</span>
                </label>
              </div>

              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Entrar
                </Button>
              </div>
            </Form>
          </CardBody>
          <CardFooter className="bg-secondary py-lg-5">
            <Row className="mt-3">
              <Col>
                <div className="d-flex justify-content-center">
                  <Button className="btn-outline-tertiary" onClick={toogle} style={{ marginBottom: '1rem' }}>Esqueci minha senha</Button>
                  <Button type="button" href="/auth/register" className="btn-outline-tertiary" style={{ marginBottom: '1rem' }}>Cadastre-se</Button>
                </div>
                <Collapse isOpen={isOpen}>
                  <Form onSubmit={handlePasswordRecover}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="E-mail"
                          type="email"
                          autoComplete="new-email"
                          onChange={(event) => setRecoverEmail(event.target.value)}
                        />

                        <Button className="btn btn-tertiary ml-2" type="submit"><i className="fas fa-paper-plane" /></Button>
                      </InputGroup>
                      <span className="error text-danger">{recoverEmailError}</span>
                    </FormGroup>
                  </Form>
                </Collapse>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
}

// PropTypes for Login page
Login.propTypes = {
  title: PropTypes.string.isRequired,
};
