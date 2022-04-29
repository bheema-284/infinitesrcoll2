import React, { useState } from 'react';
import {useInfiniteScroll} from './InifiniteScroll';
import '../App.css'
const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(25).keys(), (n) => n + 1),
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(35).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <div id="data2">
        <ul className="list-group mb-2">
          {listItems.map((listItem) => (
            <li className="list-group-item">
              Masai Student Code fw14_{listItem}
            </li>
          ))}
        </ul>
        {isFetching && 'Fetching more list items...'}
      </div>
    </>
  );
};

export default List;
