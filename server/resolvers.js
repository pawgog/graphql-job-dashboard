import { Job, Company } from './db.js';

export const resolvers = {
    Query: {
        job:(_root, { id }) => Job.findById(id),
        jobs: () => Job.findAll(),
    },

    Job: {
        company: ({ companyId }) => {
            return Company.findById(companyId)
        }
    }
} 