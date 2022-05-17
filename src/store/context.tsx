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
}

const AppContext = React.createContext<IContext>({
  data: places,
  isFocused: false,
  setIsFocused: () => {},
  selectedCity: '',
  setSelectedCity: () => {},
});

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [data, setData] = useState(places);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <AppContext.Provider
      value={{ data, isFocused, setIsFocused, selectedCity, setSelectedCity }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
