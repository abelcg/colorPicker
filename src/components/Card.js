import React from 'react';
import Button from 'react-bootstrap/Button';

const Card = () => {
    return (
        <div className="cards my-2 p-4">
            <h5 className="my-3 text-light">Color </h5>
            <div className="color-container"></div>
            <Button className="rounded-pill my-3 bg-button w-75">Borrar</Button>
        </div>
    );
};

export default Card;