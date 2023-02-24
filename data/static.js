const projects = [
    {
        id: 17,
        name: "Alcare",
        isActive: 1
    },
    {
        id: 11,
        name: "Report",
        isActive: 1
    },
]

const tasks = [
    {
        id: 1200,
        title: "task 001",
        completed: 100,
        projectId : 17,
    },
    {
        id: 1201,
        title: "task 002",
        completed: 80,
        projectId : 17,
    },
    {
        id: 1202,
        title: "task 003",
        completed: 60,
        projectId : 11
    },
]

module.exports = {tasks, projects}