/*
 * component: Search
 * author: Favour George
 * Date: April 15, 2020
 * Custom search input
 */

import React from 'react';
import {MdSearch as SearchIcon} from 'react-icons/md';
import {SearchBox} from './search.styled';
import {truncate} from "../../lib/factory.lib";

const Search = ({
  name,
  type = 'text',
  handleChange,
  placeholder = 'Search ...',
  ...otherProps
}) => {
  return (
    <SearchBox {...otherProps}>
      <SearchIcon />
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={truncate(placeholder)}
      />
    </SearchBox>
  );
};

export default Search;
