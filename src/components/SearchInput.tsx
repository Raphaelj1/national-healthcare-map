import { useRef } from 'react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { LuSearch } from 'react-icons/lu';

interface Props {
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props) {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				// if (ref.current) onSearch(ref.current.value);
			}}
		>
			<InputGroup width="100%" startElement={<LuSearch />}>
				<Input
					ref={ref}
					size="sm"
					borderRadius={5}
					placeholder="Search hospitals by name..."
				/>
			</InputGroup>
		</form>
	);
}

export default SearchInput;
