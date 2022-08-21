import PropTypes from 'prop-types';
import styles from './SearchFilter.module.css'

export const SearchFilter = ({ searchByName }) => {
  const { search, label, input } = styles
  return (
    <div className={search}>
      <label className={label}>
        Find contacts by name
        <input className={input} type="text" onChange={searchByName} />
      </label>
    </div>
  );
};

SearchFilter.propTypes = {
  searchByName: PropTypes.func.isRequired,
};