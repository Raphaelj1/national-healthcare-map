import { useState } from 'react';
import apiClient from '../services/api-client';

interface PostResponse<T> {
	code: number;
	message: string;
	data: T;
}

export interface GridCodeInfo {
	gridCode: string;
	lat: string;
	lng: string;
	country: string;
	city: string;
	state: string;
	address: string;
}

const usePost = <T>(endpoint: string) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState('');
	const [message, setMessage] = useState<string>('');
	const [isLoading, setIsLoading] = useState(false);

	const reset = () => {
		setData(null);
		setError('');
		setIsLoading(false);
	};

	const post = async (params: any) => {
		setIsLoading(true);

		try {
			const response = await apiClient.post<PostResponse<T>>(endpoint, params);
			if (response.data.code === 200) {
				setData(response.data.data);
			} else {
				setMessage(response.data.message);
				setError(response.data.message || 'Error');
			}
		} catch (err: any) {
			setMessage(err.response.data?.message || 'An error occurred');
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return { data, error, message, isLoading, post, reset };
};

export default usePost;
