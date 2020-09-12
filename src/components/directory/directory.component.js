import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item-component';
import './directory.style.scss'
class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },{
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id:2
            },{
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id:3
            },{
                title: 'womens',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4,
                size:'large'
            },{
                title: 'mens',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',    
                id: 5,
                size:'large'
            },]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                        
                <div className="directory-menu">
                    {
                        this.state.sections.map(({id,...propsItem}) => (
                            <MenuItem key={id} {...propsItem}/> 
                        ))
                    }
                
                
            </div>
            </div>
        );
    }
}



export default Directory;