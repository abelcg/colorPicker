import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap/";
import Button from 'react-bootstrap/Button';

const FormColor = () => {
  return (
    <div className="container row cards my-5 py-4">
      <Form.Group
        className="mb-3 text-light d-flex flex-column"
        controlId="formColor"
      >
        <Form.Label className="g-0 mb-3 fs-4">Busca un Color</Form.Label>
        <Row>
          <Col lg={2}>
            <div className="color-container mb-3"></div>
          </Col>
          <Col lg={8}>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Ingrese un color ej: Blue o #ffff"
            />
          </Col>
          <Col lg={2}>
            <Button className="rounded-pill mb-3  bg-button">Guardar</Button>
          </Col>
        </Row>
        <Form.Label className="g-0 mb-3 fs-4 ">Elige un Color</Form.Label>
        <Row>
          <Col lg={2}>
            <Form.Control
              className="mb-3 w-75 rounded"
              type="color"
              id="ColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </Col>
          <Col lg={8}>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Color Escogido"
            />
          </Col>
          <Col lg={2}>
            <Button className="rounded-pill mb-3 bg-button">Guardar</Button>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
};

export default FormColor;
