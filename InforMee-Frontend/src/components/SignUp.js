import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, Dropdown } from 'semantic-ui-react'
import stateOptions from '../statesDB'

class SignUp extends Component {
    render() {
        return (
            <Form>
                <Form.Group unstackable widths={2}>
                    <Form.Input label='User Name' placeholder='User Name' />
                    <Form.Input label='Password' placeholder='Password' />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Zip Code' placeholder='Zip Code' />
                    <Form.Input label='Political Party' placeholder='Political Party' />
                </Form.Group>
                <Dropdown placeholder='State' search selection options={stateOptions} />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Link to="/searchbills"><Button type='submit'>Submit</Button></Link>
            </Form>
        );
    }
}

export default SignUp;
