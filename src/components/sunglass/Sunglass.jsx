import React from 'react';
import './Sunglass.css';
import Watch from '../watch/Watch';
import { add, multiply , divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55 ;
    const second = 199 ;
    const sum = add(first ,second);
    const multiplication = multiply(first , second);
    const vagg = divide(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;