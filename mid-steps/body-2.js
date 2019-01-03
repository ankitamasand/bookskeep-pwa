import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { BooksHeaders } from '../constants/books-headers'
import BookForm from './base/form'
import { IndexedDbWrapper } from '../utils/indexeddb'

class Body extends Component {

    constructor (props) {
        super(props)
        this.state = {
            booksData: []
        }
    }

    getTableMarkup = () => {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>{this.getTableHeaders()}</tr>
                </thead>
                <tbody>
                    {this.getTableData()}
                </tbody>
            </Table>
        )
    }

    getTableHeaders = () => {
        return BooksHeaders.map ((header, index) => {
            return <th width={header.width} key={header.apiKey}>{header.displayName}</th>
        })
    }

    getTableData = () => {
        let { booksData } = this.state
        return booksData.map ((book, index) => {
            return (
                <tr key={book.name}>
                    {
                        BooksHeaders.map ((header, subIndex) => {
                            let value = book[header.apiKey]
                            if (header.apiKey === '#') {
                                value = index+1
                            }
                            return <td width={header.width} key={header.apiKey}>{value}</td>
                        })
                    }
                </tr>
            )
        })
    }

    onSubmit = (formData) => {
        let { booksData} = this.state
        let newBooksData = [ ...booksData ]
        IndexedDbWrapper.update('books', formData, (data) => {
            newBooksData.push(formData)
            this.setState({ booksData: newBooksData })
        })
    }

    render () {
        return (
            <div>
                <h4>Your Books &hearts;</h4>
                {this.getTableMarkup()}
                <h4>
                    <span>Reading something new? Add it to your store </span>
                </h4>
                <BookForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }

    initializeDB = () => {
        IndexedDbWrapper.getAll('books', (booksData) => {
            this.setState({ booksData })
        })
    }

    initializeSW = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
                .then ( () => {
                    console.log('Service Worker registered successfully!')
                })

        } else {
            console.log('Service Worker is not supported in your browser')
        }
    }

    componentDidMount () {
        IndexedDbWrapper.initialize(this.initializeDB)
        this.initializeSW()
    }
}

export default Body
