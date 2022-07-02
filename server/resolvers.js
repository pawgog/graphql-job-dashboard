import { Job, Company } from './db.js';

export const resolvers = {
    Query: {
        company:(_root, { id }) => Company.findById(id),
        job:(_root, { id }) => Job.findById(id),
        jobs: () => Job.findAll(),
    },

    Job: {
        company: ({ companyId }) => {
            return Company.findById(companyId)
        }
    },

    Company: {
        jobs: (company) => {
            return Job.findAll((job) => job.companyId === company.id)
        }
    }
} 