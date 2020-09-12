import React, { Component } from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import { shopData } from './shop.data';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections:shopData
        }
    }

   

    render() {
        const {collections}=this.state
        return (
            <div>
                {
                    collections.map(({ id, ...otherCollection })=>(
                        <CollectionPreview key={id} {...otherCollection}/>
                    ))
                }
                
            </div>
        );
    }
}


export default Shop;