import useSWR from 'swr';
import { vehicle } from '../services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async () => {
    const response = await vehicle.get(url);

    return response.data;
  })

  return { 
    data, 
    error,
    mutate,
    isLoading: !data && !error, 
  }
}