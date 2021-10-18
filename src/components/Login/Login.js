import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (

        <>
            <Form>
                <Form.Group className="mb-3 mt-3 w-50 mx-auto" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-50  mx-auto" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>

    );
};

export default Login;