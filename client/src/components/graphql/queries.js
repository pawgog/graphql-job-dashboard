// import { ApolloClient, InMemoryCache } from '@apollo/client';
import { request, gql } from 'graphql-request';
import { getAccessToken } from '../../auth';

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
    // const { data: { job } } = await client.query({ query: JOB_QUERY, variable });
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
    // const { data: { jobs } } = await client.query({ query, fetchPolicy: 'no-cache' });
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
    // const { data: { company } } = await client.query({ query, variable });
    return company;
}

export async function createJob(input) {
    const mutation = gql`
        mutation CreateJobMutation($input: CreateJobInput!) {
            job: createJob(input: $input) {
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
    const variable = { input };
    const headers = {'Authorization': `Bearer ${getAccessToken()}`}
    // const context = {
    //     headers: {'Authorization': `Bearer ${getAccessToken()}`}
    // }
    const { job } = await request(GRAPHQL_URL, mutation, variable, headers)
    return job;
}