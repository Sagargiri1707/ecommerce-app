import React from 'react';
import Collection from '../collection-item/collection-item.component';
import './preview-collection.style.scss'


function CollectionPreview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({id,...itemProps}) => (
                        <Collection key={id} {...itemProps}/>
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;