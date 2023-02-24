const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        id: ID
        name: String
        isActive: Int
        tasks: [Task]
    }

    type Task {
        id: ID
        title: String
        completed: Int
        project: Project
    }

    #ROOT TYPE
    type Query {
        projects: [Project]
        tasks: [Task]
        task (id: ID!): Task
        project (id: ID!): Project
    }

    type Mutation {
        createProject(id: ID!, name: String, isActive: Int) : Project
        createTask(id: ID!, title: String, completed: Int, projectId: ID!) : Task
    }
`


module.exports = typeDefs;