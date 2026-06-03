import { NameFilter } from './NameFilter';
import { CenturyFilter } from './CenturyFilter';
import { useSearchParams } from 'react-router-dom';

export const PeopleFilters = () => {
  const [searchParams] = useSearchParams();
  const sex = searchParams.get('sex');

  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <p className="panel-tabs" data-cy="SexFilter">
        <a
          className={sex !== 'm' && sex !== 'f' ? 'is-active' : ''}
          href="#/people"
        >
          All
        </a>
        <a className={sex === 'm' ? 'is-active' : ''} href="#/people?sex=m">
          Male
        </a>
        <a className={sex === 'f' ? 'is-active' : ''} href="#/people?sex=f">
          Female
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left">
          <NameFilter />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="panel-block">
        <CenturyFilter />
      </div>

      <div className="panel-block">
        <a className="button is-link is-outlined is-fullwidth" href="#/people">
          Reset all filters
        </a>
      </div>
    </nav>
  );
};
