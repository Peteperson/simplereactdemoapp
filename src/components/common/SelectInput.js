import React from 'react';
import PropTypes from 'prop-types'
import { Typeahead } from 'react-bootstrap-typeahead';

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <Typeahead
          labelKey="name"
          onChange={(e) => {
              if (options.length > 0 && e.length > 0)
                onChange({ obj: options.find(x => x.id === e[0].id), name: 'authorId' });
            }
          }
          multiple={false}
          options={options}
          selected={[options.find(x => x.id === value)]}
          placeholder="Select Author" />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
