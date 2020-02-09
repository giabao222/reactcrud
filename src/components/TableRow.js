import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(c) {
        c.preventDefault();

        axios.delete('http://localhost:3001/api/v1/users/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

    }
    render() {
        return (
            <tr>

                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>

                    <button onClick={this.delete} className="btn btn-primary">Detele</button>
                </td>
                <td>

                    <Link to={"/show/" + this.props.obj.id} className="btn btn-primary">Show</Link>
                </td>
            </tr>
        );
    }
}
export default TableRow;