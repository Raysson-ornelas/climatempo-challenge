import { useContext, useState } from 'react';

import { AppCtx } from '../../../context/ForecastContext';
import Magnifier from '../../atoms/icons/Magnifier';
import { Locale } from '../../../context/weather';

export function SearchInput() {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState<Locale[]>([]);
  const { search, localeList } = useContext(AppCtx);

  const onChangeHandler = (text: string) => {
    let matches: Locale[] = [];
    if (text.length > 0) {
      matches = localeList.filter((locale) => {
        const regex = new RegExp(`${text}`, 'gi');
        return locale.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
    if (text.length == 0) {
      search('');
    }
  };

  const onSuggestHandler = (text: string) => {
    setText(text);
    setSuggestions([]);
    search(text);
  };

  return (
    <div className='relative max-w-2xl'>
      <input
        type='email'
        id='UserEmail'
        placeholder='Search'
        className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-2'
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      />

      <span className='absolute inset-y-0 right-0 p-1 grid place-content-center text-black'>
        <Magnifier />
      </span>
      {suggestions ? (
        <div className='absolute z-10 w-full origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'>
          {suggestions.map((suggestion) => (
            <div
              className='block border-b px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              key={Math.random()}
              onClick={() => onSuggestHandler(suggestion.name)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
