const {gql} = require('apollo-server-express');

// ! prevents the object from having a null value
// Tutor, student and class are all object types

// query fields are executed in parallel, mutation fields run in series, one after the other
// if we send two mutations in one request, the first is guaranteed to finish before the second begins


// define types for graphql
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
        student: Student
        tutor: Tutor
        classes: [Class]
        students: [Student]
        tutors: [Tutor]
    }


`