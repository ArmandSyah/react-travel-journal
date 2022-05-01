import React from "react";
import { render, cleanup } from "@testing-library/react";

import Navbar from './Navbar';

afterEach(cleanup);

it('renders properly', async () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('my travel journal.')).toBeInTheDocument();  
});

it('renders', async () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot();
});