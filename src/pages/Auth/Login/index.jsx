// Styles
import './style.scss';

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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

const Login = (props) => {
  // Collapsible is open Visual
  const [isOpen, setIsOpen] = useState(false);

  // Axios api fetch and redirects
  const [network, setNetwork] = useState({
    busy: false, redirect: false, target: '',
  });

  // Page content
  const [form, setForm] = useState({ email: '', password: '', remember: true });
  const [errors, setErrors] = useState({ email: '', password: '', recoverEmail: '' });
  const [recoverEmail, setRecoverEmail] = useState('');

  // Equivalent to ComponentDidMount
  useEffect(() => {
    // Sets browser tab name
    const { title } = props;
    window.document.title = title;
  });

  // Change collapsible state
  const toogle = () => setIsOpen(!isOpen);

  const handleLogin = async (event) => {
    event.preventDefault();
    let redirect = false;
    let target = '';

    setNetwork({ ...network, busy: true });

    await api.post('/users/login', {
      email: form.email,
      password: form.password,
    })
      .then((response) => {
        setNetwork({ ...network, busy: true });
        const { data } = response.data;

        localStorage.setItem('auth-token', data['auth-token']);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.roles[0]);

        redirect = true;
        target = '/admin/home';
      })
      .catch((error) => {
        console.log(error);
        setErrors({ email: '', password: '', recoverEmail: '' });
        switch (error.response.status) {
          case 400: {
            const fields = error.response.data.validation.keys;
            setErrors({
              ...errors,
              email: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
              password: fields.includes('password') ? 'A senha deve conter pelo menos 8 caracteres' : '',
            });
            break;
          }
          case 401: {
            toast.error('E-mail ou senha incorretos', {
              position: 'bottom-right',
              autoClose: false,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
            break;
          }
          case 409: {
            toast.error('E-mail ou senha incorretos', {
              position: 'bottom-right',
              autoClose: false,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
            break;
          }
          default:
          case 500:
            break;
        }
      });
    // setNetwork({ ...network, busy: false });
    setNetwork({
      ...network, busy: false, redirect, target,
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
            setErrors({
              ...errors,
              recoverEmail: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
            });
            break;
          }
          default:
          case 500:
            break;
        }
      });
  };

  if (network.redirect) {
    return (
      <Redirect
        push
        to={{
          pathname: network.target,
          search: '',
          state: { referrer: 'Login' },
        }}
      />
    );
  }

  return (
    <>
      <ToastContainer />
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
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </InputGroup>
                <span className="error text-danger">{errors.email}</span>
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
                    value={form.password}
                    onChange={(event) => setForm({ ...form, password: event.target.value })}
                  />
                </InputGroup>
                <span className="error text-danger">{errors.password}</span>
              </FormGroup>

              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin"
                  type="checkbox"
                  onChange={(event) => setForm({ ...form, remember: event.target.checked })}
                  checked={form.remember}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin"
                >
                  <span className="text-muted">Manter conectado</span>
                </label>
              </div>

              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" disabled={network.busy}>
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

                        <Button className="btn btn-tertiary ml-2" type="submit" disabled={network.busy}><i className="fas fa-paper-plane" /></Button>
                      </InputGroup>
                      <span className="error text-danger">{errors.recoverEmail}</span>
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
};

// PropTypes for Login page
Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Login;
