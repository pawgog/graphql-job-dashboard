import { useQuery } from '@apollo/client';
import { JOB_QUERY, JOBS_QUERY, COMPANY_QUERY } from './queries';

export function useJob(id) {
    const { data, loading, error } = useQuery(JOB_QUERY, {
        variables: { id }
    });

    return {
        job: data?.job,
        loading,
        error: Boolean(error)
    }
};

export function useJobs() {
    const { data, loading, error } = useQuery(JOBS_QUERY, {
        fetchPolicy: 'network-only'
    });

    return {
        jobs: data?.jobs,
        loading,
        error: Boolean(error)
    }
};

export function useCompany(id) {
    const { data, loading, error } = useQuery(COMPANY_QUERY, {
        variables: { id }
    });

    return {
        company: data?.company,
        loading,
        error: Boolean(error)
    }
};
