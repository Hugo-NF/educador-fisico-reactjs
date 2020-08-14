import React, { useState } from 'react';
import './style.scss';
import InputMask from 'react-input-mask';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';

import api from '../../../services/api';

const Register = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: new Date(),
    sex: '',
    phoneType: '',
    phoneNumber: '',
    city: '',
    state: '',
    useTerms: false,
  });

  const [validation, setValidation] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    await api.post('/users/register', {
      name: form.name,
      email: form.email,
      password: form.password,
      birthDate: form.birthDate,
      sex: form.sex,
      phone: { type: form.phoneType, number: form.phoneNumber },
      city: form.city,
      state: form.state,
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((erro) => {
        console.log(erro.response.status);
      });
  };

  return (
    <div className="Register">
      <Col lg="6" md="8">
        <Card className="bg-secondary" id="register-card">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h2>Cadastre-se.</h2>
              <small> Preencha os campos necessários</small>
            </div>

            {/*  name, email, password, birthDate, sex, phones[type, number], city, state */}

            <Form role="form" onSubmit={(event) => handleRegister(event)}>
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Nome
                </label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nome" type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Email
                </label>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="email" value={form.email} autoComplete="new-email" onChange={(event) => setForm({ ...form, email: event.target.value })} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Senha
                </label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Senha" type="password" value={form.password} autoComplete="new-password" onChange={(event) => setForm({ ...form, password: event.target.value })} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Confirmar senha
                </label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Confirmar" type="password" value={validation} onChange={(event) => setValidation(event.target.value)} />
                </InputGroup>
              </FormGroup>

              <Row>
                <Col xs="6" sm="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Data de nascimento
                    </label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Birth" type="date" onChange={(event) => setForm({ ...form, birthdate: event.target.value })} />
                    </InputGroup>
                  </FormGroup>
                </Col>

                <Col xs="6" sm="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Gênero
                    </label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Gênero" type="select" value={form.sex} onChange={(event) => setForm({ ...form, sex: event.target.value })}>
                        <option hidden>Gênero</option>
                        {' '}
                        {/* Pode dar problema no futuro */}
                        <option value="Male">Masculino</option>
                        <option value="Female">Feminino</option>
                        <option value="Other">Outros</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="5" sm="5">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Telefone
                    </label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-mobile-button" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="TelefoneType" value={form.phoneType} type="select" onChange={(event) => setForm({ ...form, phoneType: event.target.value })}>
                        <option value="Mobile">Celular</option>
                        <option value="Home">Fixo</option>
                        <option value="Work">Comercial</option>
                        <option value="Other">Outro</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>

                <Col xs="7" sm="7">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Número
                    </label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputMask id="mask" placeholder="Telefone" value={form.phoneNumber} mask="+55 (99) 99999-9999" onChange={(event) => setForm({ ...form, phoneNumber: event.target.value })} />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="6" sm="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Cidade
                    </label>
                    <InputGroup className="input-group-alternative mb-3 ">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-building" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Cidade" type="text" value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xs="6" sm="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-country">
                      Estado
                    </label>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-square-pin" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Estado" type="select" value={form.state} onChange={(event) => setForm({ ...form, state: event.target.value })}>
                        <option hidden>Estado</option>
                        <option value="AC">AC</option>
                        {' '}
                        <option value="AL">AL</option>
                        {' '}
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        {' '}
                        <option value="BA">BA</option>
                        {' '}
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        {' '}
                        <option value="ES">ES</option>
                        {' '}
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        {' '}
                        <option value="MT">MT</option>
                        {' '}
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        {' '}
                        <option value="PA">PA</option>
                        {' '}
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        {' '}
                        <option value="PE">PE</option>
                        {' '}
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        {' '}
                        <option value="RN">RN</option>
                        {' '}
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        {' '}
                        <option value="RR">RR</option>
                        {' '}
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        {' '}
                        <option value="SE">SE</option>
                        {' '}
                        <option value="TO">TO</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                      checked={form.useTerms}
                      onChange={(event) => setForm({ ...form, useTerms: event.target.checked })}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Eu aceito os
                        {' '}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Termos de Uso
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Criar conta
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>

  );
};
export default Register;
