import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';

describe("<List/>", () => {
    const items = ["one", "two", "three"];
    test('it renders all the items', () => {
        render(
          <List items={items}/>
        );
        items.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        })
    });

    test('calls onClick with correct index', async () => {
        const onClick = jest.fn();
        render(
          <List items={items} onClick={onClick} />
        );
       
        const itemOne = await screen.findByText("one");
        fireEvent.click(itemOne);
        expect(onClick).toHaveBeenCalledWith(0);
    });
})
