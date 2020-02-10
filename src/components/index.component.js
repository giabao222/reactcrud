// index.component.js
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Search from './search.component';
import Pagination from "react-js-pagination";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_users: [],
            users: [],
            activePage: 1
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/users')
            .then(response => {
                this.setState({ users: response.data, display_users: response.data.slice((this.state.activePage - 1) * 5, this.state.activePage * 5) });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    keydown = (result) => {
        this.setState({ users: result, display_users: result });
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber, display_users: this.state.users.slice((pageNumber - 1) * 5, pageNumber * 5) });
    }

    tabRow() {
        return this.state.display_users.map(function (object, i) {
            return <TableRow obj={object} key={i} />
        });
    }


    render() {
        return (

            <div>
                <div>
                    <Search keydown={this.keydown} />
                </div>
                <h3 align="center">User List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.state.users.length}
                        pageRangeDisplayed={this.state.users.length / 5 + 1}
                        onChange={this.handlePageChange}
                    />
                </table>
            </div>
        );
    }
}
