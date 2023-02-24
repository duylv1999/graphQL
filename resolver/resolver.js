const {projects} = require('../data/static')
const {tasks} = require('../data/static')

const resolvers = {
    Query: {
        projects: () => projects,
        tasks: () => tasks,
        task: (par, args) => tasks.find(e => e.id == args.id),
        project: (par, args) => projects.find(e => e.id == args.id)
    },
    Task: {
        project: (par, args) =>  projects.find(e => e.id == par.projectId),
    },
    Project: {
        tasks: (par, args) => tasks.filter(e => e.project == par.id)
    },

    // MUTATION
    Mutation: {
        createProject: (par, args) => args,
        createTask: (par, args) => args,
    }
}

module.exports = resolvers