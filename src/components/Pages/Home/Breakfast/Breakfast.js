import React from 'react';
import useFoods from '../../../../hooks/useFoods';
import Items from '../Items/Items';

const Breakfast = () => {
    const [breakfast] = useFoods();
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                breakfast.map(food => <Items key={food.id} food={food}></Items>)
            }
            </div>

        </div>
    );
};

export default Breakfast;