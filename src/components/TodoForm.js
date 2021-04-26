import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
    state = {
        inputField: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.inputField,
            complete: false
        })
        this.setState({ inputField: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="inputField" placeholder="Enter todo..." value={this.state.inputField} onChange={this.handleChange}></input>
                <button type="submit">add</button>
            </form>
        )
    }
}