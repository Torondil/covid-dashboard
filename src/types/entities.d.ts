import { Parameter, Screen } from '@/constants/constants';

interface CountryData {
  country: string,
  countryInfo: {
    lat: number,
    long: number,
    flag: string,
  }
}

interface ServerCountryData {
  country: string,
  countryInfo: {
    _id: number,
    iso2: string,
    iso3: string,
    lat: number,
    long: number,
    flag: string,
  }
}

interface ServerGlobalExtraData {
  active:	number;
  critical:	number;
  casesPerOneMillion:	number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion:	number;
  oneCasePerPeople:	number;
  oneDeathPerPeople: number;
  oneTestPerPeople:	number;
  activePerOneMillion: number;
  recoveredPerOneMillion:	number;
  criticalPerOneMillion: number;
  affectedCountries: number;
}

export interface CountryInfo {
  name: string;
  id: string;
  count: number;
}

export interface GlobalDataInterface {
  updated: number;
  cases: number;
  todayCases:	number;
  deaths:	number;
  todayDeaths: number;
  recovered: number;
  todayRecovered:	number;
  population:	number;
}

export interface CountryDataInterface extends GlobalDataInterface, CountryData {}

export interface ServerGlobalInterface extends GlobalDataInterface, ServerGlobalExtraData {}

export interface ServerCountryInterface extends ServerGlobalInterface, ServerCountryData {}

export interface AppStateInterface {
  country: string;
  parameter: Parameter;
  activeScreen: Screen;
}

export interface DataStateInterface {
  globalData: GlobalDataInterface | {};
  countriesData: Array<CountryDataInterface> | [];
}

export interface StateInterface {
  APP: AppStateInterface;
  DATA: DataStateInterface;
}
