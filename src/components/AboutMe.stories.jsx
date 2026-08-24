import { fn } from 'storybook/test';
import AboutMe from './AboutMe';

const meta = {
  component: AboutMe,
  tags: ['ai-generated'],
  args: {
    onNavigate: fn(),
  },
};

export default meta;

export const Default = {};
