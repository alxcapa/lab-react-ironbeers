import React from 'react'
import { Link } from 'react-router-dom'

class Homepage extends React.Component {


    render() {
        return (
            <>
                <Link to="/beers">All beers</Link>
                <Link to="/random-beer">Random beer</Link>
                <Link to="/new-beer">New beer</Link>
            </>
        )
    }

}

export default Homepage