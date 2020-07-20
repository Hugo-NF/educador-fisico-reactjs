import React from "react";
import "./style.scss";

import {
  Button,
  Card,
  // CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";


class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      email : "",
      password : "",
      birthdate : new Date(),
      sex : "",
      phoneType: "", 
      phoneNumber : "",
      city : "",
      state : "",
      checked: false
    };
  }

  cadastrar = (e) => {

    e.preventDefault();
  }

  render() {
    return (
      <div className="Register">
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h2>Cadastre-se.</h2>
                <small> Preencha os campos necessários</small>
              </div>

              {/*  name, email, password, birthdate, sex, phones[type, number], city, state */}


              <Form role="form" onSubmit={event => this.cadastrar(event)}>
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
                    <Input placeholder="Nome" type="text" onChange={event => this.setState({name : event.target.value})}/>
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
                    <Input placeholder="Email" type="email" autoComplete="new-email" onChange={event => this.setState({email : event.target.value})}/>
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
                    <Input placeholder="Senha" type="password" autoComplete="new-password" onChange={event => this.setState({password : event.target.value})}/>
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
                    <Input placeholder="Confirmar" type="password" />
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
                        <Input placeholder="Birth" type="date" onChange={event => this.setState({birthdate : event.target.value})}/>
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
                        <Input placeholder="Gênero" type="select" onChange={event => this.setState({sex : event.target.value})}>
                          <option hidden>Gênero</option> {/*Pode dar problema no futuro*/}
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
                        <Input placeholder="TelefoneType" type="select" onChange={event => this.setState({phoneType : event.target.value})}>
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
                        Numero
                      </label>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input placeholder="Telefone" type="telephone" onChange={event => this.setState({phoneNumber : event.target.value})}/>
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
                        <Input placeholder="Cidade" type="text" onChange={event => this.setState({city : event.target.value})}/>
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
                        <Input placeholder="Estado" type="select" onChange={event => this.setState({state : event.target.value})}>
                          <option hidden>Estado</option>
                          <option value="AC">AC</option> <option value="AL">AL</option> <option value="AP">AP</option>
                          <option value="AM">AM</option> <option value="BA">BA</option> <option value="CE">CE</option>
                          <option value="DF">DF</option> <option value="ES">ES</option> <option value="GO">GO</option>
                          <option value="MA">MA</option> <option value="MT">MT</option> <option value="MS">MS</option>
                          <option value="MG">MG</option> <option value="PA">PA</option> <option value="PB">PB</option>
                          <option value="PR">PR</option> <option value="PE">PE</option> <option value="PI">PI</option>
                          <option value="RJ">RJ</option> <option value="RN">RN</option> <option value="RS">RS</option>
                          <option value="RO">RO</option> <option value="RR">RR</option> <option value="SC">SC</option>
                          <option value="SP">SP</option> <option value="SE">SE</option> <option value="TO">TO</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input 
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                        onChange={event => this.setState({checked : event.target.checked})}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          Eu aceito os{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
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

      
    )
  }
}
export default Register;
