import React, { Component } from 'react'
const GRIDSIZE = {
    xsmall: '5%',
    small: '25%',
    medium: '40%'
}

export const BooksHeaders = [
    {
        displayName: '#',
        apiKey: '#',
        width: GRIDSIZE.xsmall
    },
    {
        displayName: 'Name',
        apiKey: 'name',
        width: GRIDSIZE.small
    },
    {
        displayName: 'Author',
        apiKey: 'author',
        width: GRIDSIZE.small
    },
    {
        displayName: 'Summary',
        apiKey: 'summary',
        width: GRIDSIZE.medium
    },
    {
        displayName: 'Actions',
        apiKey: 'actions',
        width: GRIDSIZE.xsmall
    }
]
