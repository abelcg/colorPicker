import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap/";
import Button from "react-bootstrap/Button";

const FormColor = () => {
  const colorInicial = "";
  const colorPicker = "";
  let coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
  const [color, setColor] = useState(colorInicial);
  const [colorElegido, setColorElegido] = useState(colorPicker);
  const [colores, setColores] = useState([coloresGuardados]);
 
  useEffect(() => {
    localStorage.setItem('colores', JSON.stringify(colores))
  }, [colores])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores,colorElegido]);
    //limpiar el input 
    setColor('');
    setColorElegido('');
};

  return (
    <Form className="container row cards my-5 py-4">
      <Form.Group
        className="mb-3 text-light d-flex flex-column"
        controlId="formColor"
        onSubmit={handleSubmit}
      >
        <Form.Label className="g-0 mb-3 fs-4">Busca un Color</Form.Label>
        <Row>
          <Col lg={2}>
            <div
              className="color-container mb-3"
              style={{ background: color }}
            ></div>
          </Col>
          <Col lg={8}>
            <Form.Control
              className="mb-3 bg-transparent rounded text-light"
              type="text"
              placeholder="Ingrese un color ej: Blue o #ffff"
              onChange={(e) => setColor(e.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button
              className="rounded-pill mb-3  bg-button" type="submit"
            >
              Guardar
            </Button>
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
              title="Elige un color"
              onChange = {(e) => setColorElegido(e.target.value)}
            />
          </Col>
          <Col lg={8}>
            <Form.Control
              className="mb-3  bg-transparent rounded text-light"
              type="text"
              placeholder="Color Escogido"
              value={colorElegido}
            />
          </Col>
          <Col lg={2}>
            <Button className="rounded-pill mb-3 bg-button" type="submit">Guardar</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default FormColor;
