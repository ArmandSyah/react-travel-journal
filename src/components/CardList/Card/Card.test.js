import React from "react";
import { render, cleanup } from "@testing-library/react";

import Card from './Card';

const props = {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
}

afterEach(cleanup);

it('renders properly', () => {
    const { getByText } = render(<Card {...props} />)

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
})

it('renders', async () => {
    const { asFragment } = render(<Card {...props} />)
    expect(asFragment()).toMatchSnapshot();
});