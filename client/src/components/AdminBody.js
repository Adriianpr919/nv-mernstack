import React from 'react';
import Card from './Card';
//Redux **************************************************************************
import { useSelector } from 'react-redux';

const AdminBody = () => {
    const { products } = useSelector(state => state.products);
    return (
      <>
				{products &&
					products.map((product) => (
						<Card
							key={product._id}
							product={product}
							adminPage={true}
						/>
				))}
			</>
    );
};

export default AdminBody;
