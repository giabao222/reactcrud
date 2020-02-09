import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {


    state = {
        query: '',
        results: []

    }


    getInfo = (search) => {
        axios.get('http://localhost:3001/api/v1/users')
            .then(({ data }) => {
                let results = [];
                data.forEach(element => {
                    if (element.name.search(search) !== -1)
                        results.push(element);
                });
                this.setState({
                    results,
                })
                this.props.keydown(results);
            })
    }
    handleInputChange = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                query: this.search.value
            }, () => {
                this.getInfo(this.search.value)
            })
        }

    }

    render() {
        return (
            <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onKeyDown={this.handleInputChange}
            />
        )
    }
}


