// Styles
import './style.scss';

import React from 'react';

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      email: '',
      password: '',
      recoverEmail: '',

      // Validation states
      emailError: '',
      passwordError: '',
      recoverEmailError: '',
    };

    // Sets browser tab name
    const { title } = this.props;
    window.document.title = title;
  }

  // Password recovery collapsable
  toogle = async () => this.setState({ isOpen: !this.state.isOpen });

  handleLogin = async (event) => {
    event.preventDefault();

    await api.post('/users/login', {
      email: this.state.email,
      password: this.state.password,
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
            this.setState(errors);
            break;
          }
          default:
          case 500:
            break;
        }
      });
  }

  handlePasswordRecover = async (event) => {
    event.preventDefault();
    const { recoverEmail } = this.state;

    await api.post('/users/password/reset', {
      email: recoverEmail,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        const fields = error.response.data.validation.keys;
        const errors = {
          recoverEmailError: fields.includes('email') ? 'O campo deve ser um e-mail válido' : '',
        };
        switch (error.response.status) {
          case 400:
            this.setState(errors);
            break;
          default:
          case 500:
            break;
        }
      });
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary" id="login-card">
            <CardBody className="px-lg-5">
              <div className="text-center text-bold mb-4">
                <span className="text-gray">Bem vindo de volta, digite suas credenciais</span>
              </div>
              <Form role="form" onSubmit={this.handleLogin}>
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
                      onChange={(event) => this.setState({ email: event.target.value })}
                    />
                  </InputGroup>
                  <span className="error text-danger">{this.state.emailError}</span>
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
                      onChange={(event) => this.setState({ password: event.target.value })}
                    />
                  </InputGroup>
                  <span className="error text-danger">{this.state.passwordError}</span>
                </FormGroup>

                <div className="custom-control custom-control-alternative custom-checkbox">
                  <label className="custom-control-label" htmlFor="customCheckLogin">
                    <input
                      className="custom-control-input"
                      id="customCheckLogin"
                      type="checkbox"
                      onChange={(event) => this.setState({ rememberMe: event.target.checked })}
                    />
                  </label>
                  <span className="text-muted">Manter conectado</span>
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
                    <Button className="btn-outline-tertiary" onClick={this.toogle} style={{ marginBottom: '1rem' }}>Esqueci minha senha</Button>
                    <Button type="button" href="/auth/register" className="btn-outline-tertiary" style={{ marginBottom: '1rem' }}>Cadastre-se</Button>
                  </div>
                  <Collapse isOpen={this.state.isOpen}>
                    <Form onSubmit={this.handlePasswordRecover}>
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
                            onChange={(event) => this.setState({ recoverEmail: event.target.value })}
                          />

                          <Button className="btn btn-tertiary ml-2" type="submit"><i className="fas fa-paper-plane" /></Button>
                        </InputGroup>
                        <span className="error text-danger">{this.state.recoverEmailError}</span>
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
}

// PropTypes for Login page
Login.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Login;
