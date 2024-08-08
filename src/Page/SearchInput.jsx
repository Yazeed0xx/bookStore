// src/components/SearchInput.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/slices/FilterSlice';

function SearchInput() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.productFilter.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Filter by name"
      className="px-3 py-2 border rounded-md bg-white text-blue-700 focus:outline-none"
    />
  );
}

export default SearchInput;
