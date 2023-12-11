import React from 'react';
import { NavbarStyle, ButtonPrimary, ButtonSecundary } from '../../styles/navbar.style'
import { Col, Row } from 'antd';

export const Navbar = () => {
    return (
        <NavbarStyle>
            <div>
                Adoptavida.pe
            </div>
            <Row gutter={6}>
                <Col span={12}>
                    <ButtonPrimary color="#1CC00E">Inicio</ButtonPrimary>
                </Col>
                <Col span={12}>
                    <ButtonSecundary color="#2B7125">Adopta</ButtonSecundary>
                </Col>
            </Row>
        </NavbarStyle>
    )
}