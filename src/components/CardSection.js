import React from 'react';
import Card from './Card';

const CardSection = (props) => {
    return (
        <section className="card-section container">
           {props.arrayColor.map((elemento, indice) => (
        <Card
          key={indice}
          dato={elemento.colorInicial}
          dat={elemento.colorPicker}
          borrarColor={props.borrarColor}
        ></Card>
      ))}
        </section>
    );
};

export default CardSection;