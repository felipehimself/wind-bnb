import React, { useContext, useState } from 'react';
import { IAppProvider } from '../interfaces/propsInterfaces';
import { IPlaces } from './../interfaces/dataInterface';
import places from './../data/data';

interface IContext {
  data: IPlaces[];
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  guests: { children: number; adults: number };
  setGuests: React.Dispatch<
    React.SetStateAction<{ children: number; adults: number }>
  >;
  optionsToFilter: { city: string; maxGuests: number };
  setOptionsToFilter: React.Dispatch<
    React.SetStateAction<{ city: string; maxGuests: number }>
  >;
}

const AppContext = React.createContext<IContext>({
  data: places,
  isFocused: false,
  setIsFocused: () => {},
  selectedCity: '',
  setSelectedCity: () => {},
  location: '',
  setLocation: () => '',
  guests: { children: 0, adults: 0 },
  setGuests: () => {},
  optionsToFilter: { city: '', maxGuests: 0 },
  setOptionsToFilter: () => {},
});

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [data, setData] = useState(places);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState({ children: 0, adults: 0 });
  const [optionsToFilter, setOptionsToFilter] = useState({
    city: '',
    maxGuests: 0,
  });

  return (
    <AppContext.Provider
      value={{
        data,
        isFocused,
        setIsFocused,
        selectedCity,
        setSelectedCity,
        location,
        setLocation,
        guests,
        setGuests,
        optionsToFilter,
        setOptionsToFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
