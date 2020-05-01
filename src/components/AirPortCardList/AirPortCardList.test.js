import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {AirPortCardList} from './';

test('renders learn react link', () => {
  const airports = [{
    airportCode: 'AAA',
    city: {
      cityName: 'Sydney'
    },
    country: {
      countryName: 'Australia'
    },
    region: {
      regionName: 'NSW'
    }
  },{
    airportCode: 'BBB',
    city: {
      cityName: 'Dockland'
    },
    country: {
      countryName: 'Melbourne'
    },
    region: {
      regionName: 'ABC'
    }
  }]
  const spy = jest.fn();
  const { getByTestId } = render(<AirPortCardList  airports={airports} callback={spy} />);
  expect(getByTestId('test-content-1').textContent).toBe('City: Sydney | Country: Australia | Region: NSW');
  expect(getByTestId('test-content-2').textContent).toBe('City: Dockland | Country: Melbourne | Region: ABC');
 
});