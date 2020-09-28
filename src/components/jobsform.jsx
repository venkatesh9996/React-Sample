import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Jobsform extends Component {
    constructor(props) {
        super(props);
        this.intialState = {
            name: '',
            job: '',
            isEdit: false,
            isRemove: false
        }
        this.state = this.intialState;
    }
    onformValueChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onpostSubmit = (event) => {
        event.preventDefault();
        const dataformData = {
            name: this.state.name,
            job: this.state.job,
            isRemove: true,
            isEdit: true
        }
        this.props.handleformsSumbit(dataformData);
        this.setState(this.intialState);

    }
    render() {
        return (
            <form onSubmit={(event) => this.onpostSubmit(event)}>
                <label htmlFor="Title">Name</label><br />
                <input type="text" name="name" required value={this.state.name} onChange={(event) => this.onformValueChange(event)} />

                <br />
                <br />
                <label htmlFor="Body">Job</label>   <br />
                <textarea name="job" required cols="20" rows="5" value={this.state.job} onChange={(event) => this.onformValueChange(event)} ></textarea>
                <br />
                <Button variant="primary" type="submit">Sumbit</Button>
            </form>
        )
    }

}