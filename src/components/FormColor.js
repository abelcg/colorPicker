import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap/";
import Button from "react-bootstrap/Button";
import CardSection from "./CardSection";

const FormColor = () => {
  const inicialColor = {
    colorInicial: "",
    colorPicker: "",
  };

  let coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
  const [color, setColor] = useState(inicialColor);
  const [colores, setColores] = useState([coloresGuardados]);

  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(colores));
  }, [colores]);

  const handleChange = (event) => {
    const value = event.target.value;

    setColor({ ...color, [event.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    //limpiar el input
    setColor(inicialColor);
  };
  
  const borrarColor = (nombre)=> {
    let arregloMofificado = colores.filter((color) => (color.colorPicker || color.colorInicial) !== nombre);
   setColores(arregloMofificado);
 }

  return (
    <>
      <Form className="container row cards my-5 py-4" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 text-light d-flex flex-column"
          controlId="formColor"
        >
          <Form.Label className="g-0 mb-3 fs-4">Busca un Color</Form.Label>
          <Row>
            <Col lg={2}>
              <div
                className="color-container mb-3"
                style={{ background: color.colorInicial }}
              ></div>
            </Col>
            <Col lg={8}>
              <Form.Control
                className="mb-3 bg-transparent rounded text-light"
                type="text"
                placeholder="Ingrese un color ej: Blue o #ffff"
                name="colorInicial"
                value={color.colorInicial}
                onChange={handleChange}
              />
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
                name="colorPicker"
                onChange={handleChange}
              />
            </Col>
            <Col lg={8}>
              <Form.Control
                className="mb-3  bg-transparent rounded text-light"
                type="text"
                placeholder="Color Escogido"
                value={color.colorPicker}
              />
            </Col>
            <Col lg={2}>
              <Button className="rounded-pill mb-3 bg-button" type="submit">
                Guardar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <CardSection arrayColor={colores} borrarColor={borrarColor}></CardSection>
    </>
  );
};

export default FormColor;
