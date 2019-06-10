import React from 'react';

function Results(props) {
    return (
        <div>
            <img src={props.i.images.downsized_large.url} alt="default"/>
        </div>
    )
}

export default Results;

