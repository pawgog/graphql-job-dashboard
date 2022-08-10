import { Job, Company } from './db.js';

export const resolvers = {
    Query: {
        company:(_root, { id }) => Company.findById(id),
        job:(_root, { id }) => Job.findById(id),
        jobs: () => Job.findAll(),
    },

    Mutation: {
        createJob: (_root, { input }, { user }) => {
            if (!user) {
                throw new Error ('Unauthorized user!');
            }
            return Job.create({ ...input, companyId: user.companyId });
        },
        deleteJob: async (_root, { id }, { user }) => {
            if (!user) {
                throw new Error ('Unauthorized user!');
            }
            const job = Job.findById(id);
            if (job.companyId !== user.companyId ) {
                throw new Error ('Unauthorized user!');
            }
            return Job.delete(id)
        },
        updateJob: (_root, { input }) => Job.update(input),
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