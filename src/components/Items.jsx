import React, { useEffect, useState } from 'react';
import './Items.css';
import Item from './Item';


const Items = () => {
    const [shoes, setShoes] = useState([]);
    useEffect(() => {
        const apiURL= "https://store-api-a7c49-default-rtdb.firebaseio.com/shoes.json"

        // fetch fresh data
        fetch(apiURL).then((response)=> {
            return response.json();
        }).then((data)=> {
            setShoes(data);
        });
    }, []);

  return (
    <div className="grid-items">
        {shoes.map(shoe=><Item key={shoe.name} {...shoe} />)}
    </div>
  );
}

export default Items;
