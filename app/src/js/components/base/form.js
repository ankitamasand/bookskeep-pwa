import React, { Component } from 'react'
import { FieldGroup } from '../../utils/field-group'
import { Button } from 'react-bootstrap'

class BookForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            formData: props.formData || {}
        }
    }

    handleChange = (e, type) => {
        let { formData } = this.state
        let data = Object.assign({}, formData)
        data[type] = e.target.value
        this.setState({ formData: data })
    }

    submitForm = (e) => {
        e.preventDefault()
        let { formData } = this.state
        let { onSubmit } = this.props
        onSubmit(formData)
        this.clearForm()
    }

    clearForm = () => {
        this.setState({ formData: {} })
    }

    render () {
        let { onClose } = this.props
        let { formData } = this.state
        return (
            <form>
                <FieldGroup
                    id='name'
                    type='text'
                    label='Name'
                    value={formData['name'] || ''}
                    onChange={ (e) => this.handleChange(e, 'name') }
                />
                <FieldGroup
                    id='author'
                    type='text'
                    label='Author'
                    value={formData['author'] || ''}
                    onChange={ (e) => this.handleChange(e, 'author') }
                />
                <FieldGroup
                    id='summary'
                    type='textarea'
                    label='Summary'
                    value={formData['summary'] || ''}
                    onChange={ (e) => this.handleChange(e, 'summary') }
                />
                <Button type='submit' bsStyle='primary' onClick={this.submitForm}>Submit</Button>
                {
                    onClose ? <Button onClick={onClose}>Close</Button> : null
                }
            </form>
        )
    }
}

export default BookForm
