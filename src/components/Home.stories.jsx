import { expect, fn } from 'storybook/test';
import Home from './Home';

const meta = {
  component: Home,
  tags: ['ai-generated'],
  args: {
    count: 0,
    setCount: fn(),
  },
};

export default meta;

export const Default = {};

export const CounterClicked = {
  args: {
    count: 5,
  },
};

// Single CssCheck for the project
export const CssCheck = {
  args: { count: 0 },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /count is 0/i });
    // Assuming .counter style defines this background
    const style = getComputedStyle(button);
    await expect(style.color).toBe('rgb(170, 59, 255)'); // var(--accent) in index.css
  },
};
