import { useSearchParams } from 'react-router-dom';

export const NameFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <input
      data-cy="NameFilter"
      type="search"
      className="input"
      placeholder="Search"
      value={query}
      onChange={event => {
        const value = event.target.value;

        if (value === '') {
          searchParams.delete('query');
          setSearchParams(searchParams);
        } else {
          setSearchParams({ query: value });
        }
      }}
    />
  );
};
