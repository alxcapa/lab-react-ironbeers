import React from 'react'
import axios from 'axios'
import Header from './header'

class Newbeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',

    }
    render() {
        return (
            <>
                <Header />
                <form></form>
            </>
        )
    }
}

export default Newbeer

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text