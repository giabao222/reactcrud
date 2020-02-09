import React, { Component } from 'react';
import axios from 'axios';
export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = { show: true };
        this.state = { name: '' };
        this.state = { phone: '' };
        this.state = { address: '' };
        this.state = { email: '' };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    address: response.data.address,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <h3 align="center">User List</h3>
                <table className="table table-stripedd" style={{ marginTop: 20 }}>
                <thead>
                    <tr>

                            <th>Name  <td>{this.state.name}</td></th>
                            <th>Email <td>{this.state.email}</td></th>
                            <th>Phone <td>{this.state.phone}</td></th>
                            <th>Address  <td>{this.state.address}</td></th>
                            
                    </tr>
                </thead>
                </table>
            </div>
        );
    }

}