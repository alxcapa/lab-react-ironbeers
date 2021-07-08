import React from 'react'
import axios from 'axios'
import Header from './header'

class Randombeer extends React.Component {

    // randomNum(arr) {

    //     let random = Math.round(Math.random() * arr.length)
    //     return random

    // }

    state = {

    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {

                this.setState(response.data)
            })


    }


    render() {
        return (
            <>
                <Header />
                <img src={this.state.image_url} alt="beer image" style={{ width: '50px' }} />
                <h2>{this.state.name}</h2>
                <p>{this.state.tagline}</p>
                <span>Created by {this.state.contributed_by}</span>
                <span>{this.state.first_brewed}</span>
                <span>{this.state.attenuation_level}</span>
                <p>{this.state.description}</p>
            </>
        )
    }
}

export default Randombeer