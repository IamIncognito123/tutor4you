const {gql} = require('apollo-server-express');

// ! prevents the object from having a null value
const typeDefs = gql `
    type Tutor {
        _id: ID!
        firstName: String!
        lastName: String!
        major: String!
        subjects: String!
        age: Int!
    }

    type Student {
        _id: ID!
        firstName: String!
        lastName: String!
        classes: [Class]
        gradeLevel: Int!
        age: Int!
    }

    type Class {
        _id: ID! 
        courseName: String!
    }

    type Query {
        
    }
`