// React Modules
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

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

// Custom components
import notifyRedirect from '../../../components/Notifications/Redirect';

// App constants
import { ErrorCodes } from '../../../constants';

// Api service
import api from '../../../services/api';

// Styles
import './style.scss';

const Login = (props) => {
  // Collapsible is open Visual
  const [isOpen, setIsOpen] = useState(false);

  // Axios api fetch and redirects
  const [network, setNetwork] = useState({
    busy: false, redirect: false, target: '', query: '', state: { referrer: 'Login' },
  });

  // Page content
  const [form, setForm] = useState({
    email: '', password: '', remember: true,
  });
  const [errors, setErrors] = useState({
    email: '', password: '', recoverEmail: '',
  });
  const [recoverEmail, setRecoverEmail] = useState('');

  // Equivalent to ComponentDidMount
  useEffect(() => {
    // Sets browser tab name
    const { title } = props;
    window.document.title = title;

    // Displays on screen any notification incoming from redirects
    notifyRedirect(props);
  }, []);

  // Change collapsible state
  const toogle = () => setIsOpen(!isOpen);

  const handleLogin = async (event) => {
    event.preventDefault();
    let redirect = false;
    let target = '';
    let state = { referrer: 'Login' };

    setNetwork({ ...network, busy: true });

    await api.post('/users/login', {
      email: form.email,
      password: form.password,
    })
      .then((response) => {
        // Login successful
        const { data } = response.data;

        localStorage.setItem('authToken', data.authToken);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('layout', data.layout);

        redirect = true;
        target = `/${data.layout}/home`;
        state = {
          ...state,
          notifications: [
            {
              type: 'success', icon: 'ni ni-bell-55', title: 'Login autorizado', text: `Bem-vindo de volta, ${data.name}`,
            },
          ],
        };
      })
      .catch((exception) => {
        // Clears any previous errors
        setErrors({ email: '', password: '', recoverEmail: '' });
        try {
          const { status, data } = exception.response;

          switch (status) {
            case 400: {
              const fields = data.validation.keys;
              setErrors({
                ...errors,
                email: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
                password: fields.includes('password') ? 'A senha deve conter pelo menos 8 caracteres' : '',
              });
              break;
            }
            case 401:
              switch (data.errorCode) {
                case ErrorCodes.ACCOUNT_LOCK_OUT:
                  toast.error(`A sua conta está bloqueada (${data.error.lockoutReason}). Acesse o suporte para mais informações`, {
                    position: 'top-right',
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                  });
                  break;
                case ErrorCodes.ACCESS_FAILED_LIMIT_REACHED:
                  toast.error('Você errou a senha demais! Sua conta foi bloqueada até que você inicie uma verificação de conta', {
                    position: 'top-right',
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                  });
                  break;
                case ErrorCodes.WRONG_PASSWORD:
                  toast.warning('Credenciais incorretas. Errar por 10 vezes seguidas causa o bloqueio da conta', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                  });
                  break;
                default:
                  break;
              }
              break;
            case 409:
              toast.warning('E-mail não cadastrado', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
            default:
            case 500:
              toast.error('Login indisponível. Talvez isso seja um problema do lado de cá, caso o problema persista, procure o suporte.', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
          }
        } catch (exc) {
          toast.error(`Os nossos servidores não estão disponíveis no momento. Caso o problema persista, procure o suporte. Detalhes: ${exc}`, {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });

    setNetwork({
      ...network, busy: false, redirect, target, state,
    });
  };

  const handlePasswordRecover = async (event) => {
    event.preventDefault();

    await api.post('/users/password/reset', {
      email: recoverEmail,
    })
      .then(() => {
        toast.success(`E-mail enviado com sucesso para ${recoverEmail}. Abra-o e siga as instruções para recuperação de senha`, {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        setRecoverEmail('');
        setIsOpen(false);
      })
      .catch((error) => {
        try {
          setErrors({ email: '', password: '', recoverEmail: '' });
          const { status, data } = error.response;
          switch (status) {
            case 400: {
              const fields = data.validation.keys;
              setErrors({
                ...errors,
                recoverEmail: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
              });
              break;
            }
            case 401:
              toast.error('A sua conta está bloqueada, não é possível recuperar senha. Acesse o suporte para mais informações', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
            case 409:
              toast.error(`E-mail ${recoverEmail} não cadastrado`, {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
            default:
            case 500:
              toast.error('Erro ao enviar e-mail. Talvez isso seja um problema do lado de cá, caso o problema persista, procure o suporte.', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
            case 503:
              toast.error('Serviço de e-mail indisponível. Tente novamente mais tarde. Caso o problema persista, procure o suporte.', {
                position: 'top-right',
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
              break;
          }
        } catch (exc) {
          toast.error(`Os nossos servidores não estão disponíveis no momento. Caso o problema persista, procure o suporte. Detalhes: ${exc}`, {
            position: 'top-right',
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });
  };

  if (network.redirect) {
    return (
      <Redirect
        push
        to={{
          pathname: network.target,
          search: network.query,
          state: network.state,
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

                        <Button className="ml-2" color="primary" type="submit" disabled={network.busy}><i className="fas fa-paper-plane" /></Button>
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
