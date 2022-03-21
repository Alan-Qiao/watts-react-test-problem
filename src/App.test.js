import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Primary } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('Button initially displays click me', () => {
    render(<Primary />);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test('Button clicked changes to thanks', () => {
    render(<Primary />);
    fireEvent.click(screen.getByTestId('clicker'));
    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
})

test('Clicking button twice returns to click me', () => {
    render(<Primary />);
    fireEvent.click(screen.getByTestId('clicker'));
    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('clicker'));
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
})