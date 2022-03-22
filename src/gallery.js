import React from 'react';
import Posting from './posting.js';

function Gallery(props) {
    return (
        <div className="gallery">
            {props.postings.map((post, i) => {
                return <Posting posting={post} key={i} />
            })}
        </div>
    )
}

export default Gallery;
