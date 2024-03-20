import React from 'react';

const Watch = ({watch}) => {
    const {name , price} = watch;
    return (
        <div>
            <h2>watch : {name} </h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;

/*
1. client side
2. Api From Github
3. Swagger
4. Actual data
*/