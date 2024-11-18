import { useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosError } from 'axios';

interface Response {
	code: number;
	message: string;
	data: GridCode;
}

export interface GridCode {
	gridCode: string;
	countryCode: string;
	isValid: boolean;
}

const useVerify = () => {
	const [data, setData] = useState<GridCode | null>(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const reset = () => {
		setData(null);
		setError('');
		setIsLoading(false);
	};

	const verify = async (gridQuery: Omit<GridCode, 'isValid'>) => {
		setIsLoading(true);

		try {
			const response = await apiClient.get<Response>('/external/api/verify-gridcode', {
				params: {
					gridCode: gridQuery.gridCode,
					countryCode: gridQuery.countryCode,
				},
			});

			if (response.data.code === 200) {
				setData(response.data.data);
				setIsLoading(false);
			} else {
				setError(response.data.message);
			}
		} catch (err: any) {
			setError(err.message);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	return { data, error, isLoading, verify, reset };
};

export default useVerify;
