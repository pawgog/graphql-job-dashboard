import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'https://jobs-board-s25o.onrender.com/graphql';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});

const JOB_DETAIL_FRAGMENT = gql`
    fragment JobDetail on Job {
        id
        title
        company {
            id
            name
        }
        description
    }
`;

export const JOB_QUERY = gql`
    query JobQuery($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`;

export const JOBS_QUERY = gql`
    query JobsQuery {
        jobs {
            id
            title
            company {
                id
                name
            }
        }
    }
`;

export const COMPANY_QUERY = gql`
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

export const CREATE_JOB_MUTATION = gql`
    mutation CreateJobMutation($input: CreateJobInput!) {
        job: createJob(input: $input) {
            ...JobDetail
        }
    }
    ${JOB_DETAIL_FRAGMENT}
`;

export const USER_QUERY = gql`
    query UserQuery {
        user {
            id
            email
            companyId
        }
    }
`;
