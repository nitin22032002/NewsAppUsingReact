import React, { Component } from 'react'
import loader from './ajax-loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={loader} alt="Loading....." />
            </div>
        )
    }
}
