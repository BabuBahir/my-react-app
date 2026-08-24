import { fn } from 'storybook/test';
import UserInput from './UserInput';

const meta = {
  component: UserInput,
  tags: ['ai-generated'],
  args: {
    onSave: fn(),
  },
};

export default meta;

export const Default = {};
