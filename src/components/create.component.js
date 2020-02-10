import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',

            // fields: {},
            err_name: '',
            err_phone: '',
            err_address: '',
            err_email: ''
        }

    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        let flag = true;
        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        let address = this.state.address;


        if (!name) {
            this.setState({
                err_name: "Nhap name"
            })
            flag = false
        }
        if (!email) {
            this.setState({
                err_phone: "Nhap email"
            })
            flag = false
        }

        if (!phone) {
            this.setState({
                err_phone: "Nhap phone"
            })
            flag = false
        }
        if (!address) {
            this.setState({
                err_address: "Nhap address"
            })
            flag = false
        }

        if (flag) {
            const obj = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address
            };
            axios.post('http://localhost:3001/api/v1/users', obj)
                .then(res => console.log(res.data));

            window.location.reload(true);
        }
    }




    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group" >{this.state.err_name}</div>
                    <div>
                        <label>Add Name:  </label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >{this.state.err_email}</div>
                    <div>
                        <label>Add Mail : </label>
                        <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="form-group">{this.state.err_phone}</div>
                    <div>
                        <label>Add Phone: </label>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">{this.state.err_address}</div>
                    <div>
                        <label>Add Address: </label>
                        <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}