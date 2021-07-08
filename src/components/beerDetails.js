import React from 'react'
import allBeers from './allBeers'
import axios from 'axios'
import Header from './header'


class Beerdetails extends React.Component {

    state = {}
    componentDidMount() {
        this.getBeerDetail()
    }

    getBeerDetail = () => {

        const { params } = this.props.match
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then(response => {
                console.log(response.data)
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

export default Beerdetails 