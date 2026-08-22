import GenderModal from './GenderModal';
import MaleQuestions from './MaleQuestions';
import FemaleQuestions from './FemaleQuestions';
import { fn } from 'storybook/test';

const meta = {
  component: GenderModal,
  tags: ['ai-generated'],
};

export default meta;

export const MaleModal = {
  args: {
    isOpen: true,
    title: 'Male Questions',
    userName: 'John',
    onClose: fn(),
    children: <MaleQuestions onSave={fn()} />,
  },
};

export const FemaleModal = {
  args: {
    isOpen: true,
    title: 'Female Questions',
    userName: 'Jane',
    onClose: fn(),
    children: <FemaleQuestions onSave={fn()} />,
  },
};
