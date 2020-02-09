// edit.component.js

import React, { Component } from 'react';
import axios from 'axios'
export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onChangeName(e) {
        e.preventDefault();
        this.setState({ name: e.target.value });
        console.log(e.target.value)
        console.log(this.state.name)
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }
    onSubmit(c) {
        c.preventDefault();
        const obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address
        };

        axios.put('http://localhost:3001/api/v1/users/' + this.props.match.params.id, obj)
            .then(res =>
                console.log(res.data)

            );
        this.props.history.push('/index');
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Update User Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name user: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email user: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone user: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    <div className="form-group">
                        <label>address user: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.props.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="update user infor"
                            classname="btn btn-primary"
                            onSubmit={this.onSubmit} />
                    </div>

                </form>
            </div>
        )
    }
}