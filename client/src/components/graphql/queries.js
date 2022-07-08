import { request, gql } from 'graphql-request';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export async function getJob(id) {
    const query = gql`
        query JobQuery($id: ID!) {
            job(id: $id) {
                id
                title
                company {
                    id
                    name
                }
                description
            }
        }
    `;
    const variable = { id };
    const { job } = await request(GRAPHQL_URL, query, variable);
    return job;
}

export async function getJobs() {
    const query = gql`
        query JobsQuery {
            jobs {
                id
                title
                company {
                    name
                }
            }
        }
    `;
    const { jobs } = await request(GRAPHQL_URL, query);
    return jobs;
}

export async function getCompany(id) {
    const query = gql`
        query CompanyQuery($id: ID!) {
            company(id: $id) {
                id
                name
                description
                jobs {
                    id
                    title
                }
            }
        }
    `;
    const variable = { id };
    const { company } = await request(GRAPHQL_URL, query, variable);
    return company;
}

export async function createJob(input) {
    const query = gql`
        query CreateJobMutation($input: CreateJobInput!) {
            job: createJob(input: $input) {
                id
                title
                company {
                    id
                    name
                }
            }
        }
    `;
    const variable = { input };
    const { job } = await request(GRAPHQL_URL, query, variable);
    return job;
}