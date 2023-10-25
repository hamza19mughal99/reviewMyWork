import React from 'react'
import './Input.css';
import { Form } from 'react-bootstrap';

const Input = ({ type, value, name, onChange, placeholder, label, rows, disable }) => {
    return (
        <Form.Group className="mb-3 input_main">
            <Form.Label>{label}</Form.Label>
            {
                type === "textarea" ? <Form.Control as="textarea" rows={rows}
                    value={value} name={name}
                    onChange={onChange} placeholder={placeholder} disabled={disable ? disable : false} className="input_field" /> :
                    <Form.Control
                        type={type} value={value} name={name} disabled={disable ? disable : false}
                        onChange={onChange} placeholder={placeholder} className="input_field" />
            }
        </Form.Group>
    )
}

export default Input