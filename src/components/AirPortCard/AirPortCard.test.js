import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {AirPortCard} from './';

test('renders learn react link', () => {
  const airport = {
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
  }
  const spy = jest.fn();
  const { getByTestId } = render(<AirPortCard  airport={airport} callback={spy}  idx={1}/>);
  expect(getByTestId('test-content-1').textContent).toBe('City: Sydney | Country: Australia | Region: NSW');
  fireEvent.click(getByTestId('test-button'));
  expect(spy).toHaveBeenCalledTimes(1);
});
