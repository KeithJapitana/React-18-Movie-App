import React from 'react'


const ListGroup = () => {
    let items = [
        'New York',
        'Tokyo',
        'San Francisco',
        'London',
        'Paris'
    ]

    items = [];

    const getMessage = () => {
    return items.length === 0 ? <p> No Items found</p> : null;
    }
   /* if (items.length === 0 )
        return <>
            <h1>List</h1>
            <p>No item found</p>
        </>*/


    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(item => <li key={item}>  {item}</li>)}
            </ul>
        </>

    )
}
export default ListGroup
