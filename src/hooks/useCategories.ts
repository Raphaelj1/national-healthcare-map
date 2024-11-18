import categories from '../data/categories';
// import useData from './useData';

interface Category {
	categoryId: string;
	description: string;
}

const useCategories = () => ({ data: categories, isLoading: false, error: null })

// const useCategories = () => useData<Category>('/gridcode/api/categories');

export default useCategories;
