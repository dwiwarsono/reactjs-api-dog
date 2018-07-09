import React from 'react';
import Dog from './Dog';
import './DogList.css';

const DogList = (props) => {

    const dogArray = props.dogs.map((dogUrl) =>{
        return <Dog url={dogUrl} />
    })
    return (
        <div className="container">
            {dogArray}
        </div>
    )
}

export default DogList;