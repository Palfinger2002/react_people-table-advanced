import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

export const CenturyFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const CENTURIES = ['16', '17', '18', '19', '20'];
  const values = searchParams.getAll('centuries');

  return (
    <div className="level is-flex-grow-1 is-mobile" data-cy="CenturyFilter">
      <div className="level-left">
        {CENTURIES.map(century => {
          return (
            <a
              key={century}
              data-cy="century"
              className={classNames('button mr-1', {
                'is-info': values.includes(century),
              })}
              href={`#/people?centuries=${century}`}
              onClick={event => {
                event.preventDefault();
                if (values.includes(century)) {
                  const newValues = values.filter(value => value !== century);

                  searchParams.delete('centuries');
                  newValues.forEach(value =>
                    searchParams.append('centuries', value),
                  );
                } else {
                  searchParams.append('centuries', century);
                }

                setSearchParams(searchParams);
              }}
            >
              {century}
            </a>
          );
        })}
      </div>

      <div className="level-right ml-4">
        <a
          data-cy="centuryALL"
          className="button is-success is-outlined"
          href="#/people"
          onClick={event => {
            event.preventDefault();
            searchParams.delete('centuries');
            setSearchParams(searchParams);
          }}
        >
          All
        </a>
      </div>
    </div>
  );
};
