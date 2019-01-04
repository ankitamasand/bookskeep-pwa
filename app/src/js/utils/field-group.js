import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export const FieldGroup = ({ id, label, helpText, ...props }) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    )
}
