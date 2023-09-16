import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

const FilterDropDown = ({ filters, filterValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const select = (value) => {
    const allFiltersValue = 0;
    const filterValueArray = [...filterValues];

    const filterValueExists = filterValues.includes(value);

    if (value === allFiltersValue) {
      if (filterValueExists) {
        filterValueArray.length = 0; // Clear the array to uncheck All Filters
      } else {
        filters.forEach((filter) => {
          if (!filterValueArray.includes(filter.value)) {
            filterValueArray.push(filter.value);
          }
        });
      }
    } else {
      const allFiltersChecked = filterValueArray.includes(allFiltersValue);

      if (filterValueExists) {
        // Remove the value from the array
        filterValueArray.splice(filterValueArray.indexOf(value), 1);

        // If All Filters is checked, remove it
        if (allFiltersChecked) {
          filterValueArray.splice(filterValueArray.indexOf(allFiltersValue), 1);
        }
      } else {
        filterValueArray.push(value);

        // If all filters except All Filters are checked, add All Filters
        if (filterValueArray.length === filters.length - 1) {
          filterValueArray.push(allFiltersValue);
        }
      }
    }

    onChange(filterValueArray);
  };
  return (
    <div className="admin_journeys-header-filter">
      <div className="filter-dropdown-container">
        <Button label="Filter" icon="pi pi-filter" iconPos="left" outlined onClick={toggling} />
      </div>

      {isOpen && (
        <div className="filter-dropdown-list-container">
          <ul className="filter-dropdown-list">
            {filters.map((filter, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  select(filter.value);
                }}
                className="list-item"
              >
                <Checkbox
                  inputId={filter.text}
                  name="filter"
                  value={filter.value}
                  checked={filterValues.some((filterValue) => filterValue === filter.value)}
                />
                <label htmlFor={filter.text} className="ml-2">
                  {filter.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
