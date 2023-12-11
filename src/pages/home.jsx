import React from "react";
import { Col, Row, Card } from 'antd';
import Logo from '../assets/logo-principal.jpg';
import { ModalNewRegister } from '../components/modal'
import '../styles/home.css';

export const Home = () => {
  return (
    <>
      <div className="container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={24} md={12} lg={12} order={2}>
            <div className="text-container">
              <h1>¡Bienvenido a Adopta Vida!</h1>
              <p>
                En Adopta Vida, celebramos la maravillosa conexión entre los seres humanos y
                nuestros amigos de cuatro patas. Estamos emocionados de que estés aquí y
                consideres la adopción de un compañero peludo. En nuestra comunidad, creemos
                que cada patita tiene una historia especial y que, al abrir tu corazón y tu hogar,
                estás cambiando el destino de un ser querido de cuatro patas.
              </p>
              <ModalNewRegister />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} order={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={Logo} alt="Logo Adopta Vida" width="80%" />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
        </Row>
        {/*  <div className="carousel-buttons">
          <Button onClick={handlePrev}>Anterior</Button>
          <Button onClick={handleNext}>Siguiente</Button>
        </div> */}

      </div>
    </>
  );
};
