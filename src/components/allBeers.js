import React from 'react'
import Header from './header'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Allbeers extends React.Component {

    state = { beers: [] }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                this.setState({ beers: response.data })
            })


    }

    render() {
        return (
            <>
                <Header />
                <div className="allbeers">
                    {this.state.beers.map(beer => {
                        return (
                            <div key={beer._id} className="beer">
                                <img src={beer.image_url} alt="beer image" style={{ width: '50px' }} />
                                <h2>{beer.name}</h2>
                                <p>{beer.tagline}</p>
                                <span>Created by {beer.contributed_by}</span>
                                <Link to={`/beers/${beer._id}`}>Lire les détails</Link>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Allbeers