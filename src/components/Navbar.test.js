import React from 'react';
import * as rtl from '@testing-library/react';
import Navbar from './Navbar';
import { useDarkMode } from '../hooks/useDarkMode';

test('renders Navbar without crashing', () => {
  rtl.render(<Navbar />);
});
