import React, { useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import { Images } from '../../../constants';

export default function Landing(props) {
  useEffect(() => {
    // Sets browser tab name
    const { title } = props;
    window.document.title = title;
  });

  return (
    <div className="landing-page">
      <div className="content">
        <div className="background" style={{ backgroundImage: `url(${require('assets/img/landingPage/alongando.jpg')})` }}>
          <div className="background-title">
            <h2>
              <b>
                TREINO
                <br />
                PARA
                <br />
                TODOS
              </b>
            </h2>
          </div>
          <p className="background-text">
            Nosso projeto visa disponibilizar treinos para quem gostaria de obter uma vida mais saudável mas não tem condições ou
            tempo disponível para frequentar uma academia regularmente.
            {' '}
            <br />
            Seja na academia, em um parque ou em sua residência, com vários equipamentos ou nenhum, é possível fazer atividade
            física e queremos te auxiliar.
          </p>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="text-center mt-5">
          <h2>Grupos especiais</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="our-services settings">
                <div className="icon">
                  {' '}
                  <img alt=" " src="http://getdrawings.com/free-icon/pregnant-woman-icon-60.png" style={{ width: 100 }} />
                  {' '}
                </div>
                <h4>Grávidas</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services speedup">
                <div className="icon">
                  {' '}
                  <img alt=" " src="https://cdn1.iconfinder.com/data/icons/medical-specialties-1-3/380/Cardiology-512.png" style={{ width: 85 }} />
                  {' '}
                </div>
                <h4>Hipertenços</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="our-services database">
                <div className="icon">
                  {' '}
                  <img alt=" " src="https://icon-library.com/images/diabetes-icon/diabetes-icon-4.jpg" style={{ width: 85 }} />
                  {' '}
                </div>
                <h4>Diabéticos</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>Como posso participar?</h2>
      </div>
      <div className="content">
        <img className="imageslayout" src={require('assets/img/landingPage/abdominal.jpg')} alt="exercicio abdominal" />
        <p>
          Para participar desse projeto com a gente é muito fácil! Basta fazer o download do nosso app, se cadastrar como aluno
          seguir os passos que o aplicativo te indicará e pronto.
          {' '}
          <br />
          {' '}
          Após o cadastro sua ficha será encaminhada a um de
          nossos professores, e criaremos um treinamento perfeito especialmente para as suas pretensões e condições.
          {' '}
          <br />
          A melhor parte é que você pode se exercitar sem sair de casa!
        </p>
      </div>

      <div className="title">
        <h2>Quem somos nós...</h2>
      </div>
      <div className="content">
        <img className="imageslayout" src={require('assets/img/landingPage/afundo.jpg')} alt="exercicio afundo" />
        <p>
          Somos graduandos com um objetivo em comum: permitir um estilo de vida mais saudável para todos, em quaisquer
          condições.
          <br />
          {' '}
          Vemos esse projeto como um forma para ganharmos experiência no mercado de trabalho além de
          estarmos apostando nesse mercado virtual e mais acessível. Clique aqui para ver mais detalhes do nosso grupo!
        </p>
      </div>
      <div className="title">
        <h2>Time</h2>
      </div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="img-box">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758981/male-2634974_640.jpg"
                alt=""
              />
            </div>
            <h5>
              Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus
              mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac,
              tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.
            </h5>
            <p className="overview">
              <b>Ailamar Alves</b>
              Faladeira
            </p>
            <div className="star-rating"> </div>
          </div>
          <div className="item carousel-item">
            <div className="img-box">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/people-875617_1280.jpg"
                alt=""
              />
            </div>
            <p className="testimonial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at,
              luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum
              scelerisque non non purus. Suspendisse varius nibh non aliquet.
            </p>
            <p className="overview">
              <b>Paula Wilson</b>
              Media Analyst
              {' '}
            </p>
            <div className="star-rating"> </div>
          </div>
          <div className="item carousel-item">
            <div className="img-box">
              <img
                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/portrait-1287413_640.jpg"
                alt=""
              />
            </div>
            <p className="testimonial">
              Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt.
              Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida
              nibh, facilisis gravida odio. Phasellus auctor velit.
            </p>
            <p className="overview">
              <b>Antonio Moreno</b>
              Web Developer
            </p>
            <div className="star-rating" />
          </div>
        </div>
        {' '}
        <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          {' '}
          <i className="fa fa-angle-left" />
          {' '}

        </a>
        {' '}
        <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          {' '}
          <i className="fa fa-angle-right" />
          {' '}

        </a>
      </div>
    </div>
  );
}

// PropTypes for Landing page
Landing.propTypes = {
  title: PropTypes.string.isRequired,
};
