


import React, { useState } from 'react';
import { Modal, Form, Input, Row, Col, Button } from 'antd';
import { Container, ButtonSecundary, ButtonStyle, Title } from '../../styles/modal.style';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';

export const ModalNewRegister = () => {
    const db = getFirestore();
    const storage = getStorage();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [loadingRegister, setLoadingRegister] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onFinish = (values) => {
        setLoadingRegister(true);
        setLoadingRegister(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const guardarInfo = async (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const dueñoRefugio = e.target.dueñoRefugio.value;
        const telefono = e.target.telefono.value;

        // Move the logic to create the document inside fileHandler
        const fileHandler = async (archivos) => {
            const newImages = [];

            for (const archivo of archivos) {
                const refArchivo = ref(storage, `documentos/${archivo}`);
                await uploadBytes(refArchivo, archivo);
                const urlImg = await getDownloadURL(refArchivo);
                newImages.push(urlImg);
            }

            return newImages;
        };

        // Assuming you have a file input with the id="file"
        const archivos = Array.from(e.target.file.files);

        if (archivos.length > 0) {
            const nuevasImagenes = await fileHandler(archivos);

            const newMascota = {
                nombre: nombre,
                dueñoRefugio: dueñoRefugio,
                telefono: telefono,
                imagen: nuevasImagenes,
            };

            try {
                await addDoc(collection(db, 'mascotas'), {
                    ...newMascota,
                });
            } catch (error) {
                console.log(error);
            }
        }

        e.target.nombre.value = '';
        e.target.dueñoRefugio.value = '';
        e.target.telefono.value = '';
        e.target.file.value = '';
    };

    return (
        <Container>
            <ButtonSecundary color="blue" onClick={showModal}>
                Registrar
            </ButtonSecundary>
            <Modal
                title="Registrar"
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}
                width="550px"
            >
                <form onFinish={onFinish} onSubmit={guardarInfo}>
                    <Row>
                        <Title>Nombre de la mascota:</Title>
                        <Col span={24}>
                            <Form.Item
                                name="nombre"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar nombre',
                                    },
                                ]}
                            >
                                <Input placeholder="Nombre" type="text" id="nombre" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Title>Dueño/Refugio:</Title>
                        <Col span={24}>
                            <Form.Item
                                name="dueñoRefugio"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar el nombre del dueño o refugio',
                                    },
                                ]}
                            >
                                <Input placeholder="Dueño" type="text" id="dueñoRefugio" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Title>Telefono:</Title>
                        <Col span={24}>
                            <Form.Item
                                name="telefono"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar el número de teléfono',
                                    },
                                ]}
                            >
                                <Input placeholder="Teléfono" type="number" id="telefono" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Title>Imagenes/Fotos:</Title>
                        <Col span={24}>

                            <Form.Item
                                name="file"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor ingresar al menos una foto',
                                    },
                                ]}
                            >
                                <Input type="file" accept="image/*" id="file" multiple />
                            </Form.Item>
                        </Col>
                    </Row>
                    <ButtonStyle>
                        {loadingRegister ? (
                            <p>Registrando...</p>
                        ) : (
                            <Button type="primary" htmlType="submit">
                                Registrar
                            </Button>
                        )}
                    </ButtonStyle>
                </form>
            </Modal>
        </Container>
    );
};


