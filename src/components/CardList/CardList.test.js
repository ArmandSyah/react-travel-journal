import React from "react";
import { render, cleanup } from "@testing-library/react";

import CardList from './CardList';

afterEach(cleanup);

it('renders all the cards in the list', async () => {
    const { getAllByTestId } = render(<CardList />)

    const cards = getAllByTestId("card");
    expect(cards).toHaveLength(3);
});

it('renders', async () => {
    const { asFragment } = render(<CardList />)
    expect(asFragment()).toMatchSnapshot();
});