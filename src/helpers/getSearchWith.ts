interface SearchWithProps {
  searchParams: URLSearchParams;
  key: string;
  value: string | null;
}

export const getSearchWith = ({
  searchParams,
  key,
  value,
}: SearchWithProps) => {
  const newParams = new URLSearchParams(searchParams);

  if (!value) {
    newParams.delete(key);
  } else {
    newParams.set(key, value);
  }

  return newParams;
};
