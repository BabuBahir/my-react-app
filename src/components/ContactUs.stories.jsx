import ContactUs from './ContactUs';
import { within, userEvent, expect, waitFor } from '@storybook/test';

const meta = {
  component: ContactUs,
  tags: ['ai-generated'],
};

export default meta;

export const Default = {};


// 2. Happy path: fill all fields and submit
export const FillAndSubmit = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'jane@example.com');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello, I need help with...');

    await userEvent.click(canvas.getByRole('button', { name: /send message/i }));

    // Success view should appear
    await expect(canvas.getByText('Thank You!')).toBeInTheDocument();
    await expect(
      canvas.getByText(/your message has been received/i)
    ).toBeInTheDocument();
  },
};

// 3. Reset flow: submit, then click "Send another message" and verify form is cleared
export const SubmitThenReset = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'jane@example.com');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');
    await userEvent.click(canvas.getByRole('button', { name: /send message/i }));

    await expect(canvas.getByText('Thank You!')).toBeInTheDocument();

    await userEvent.click(canvas.getByRole('button', { name: /send another message/i }));

    // Back to form, fields reset
    const nameInput = await canvas.findByLabelText('Name');
    await expect(nameInput).toHaveValue('');
    await expect(canvas.getByLabelText('Email')).toHaveValue('');
    await expect(canvas.getByLabelText('Message')).toHaveValue('');
  },
};

// 4. Validation: submitting empty form should NOT show success
// (native HTML5 `required` blocks submission, so handleSubmit never fires)
export const EmptySubmitBlockedByValidation = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: /send message/i }));

    // Success message should never appear
    await expect(canvas.queryByText('Thank You!')).not.toBeInTheDocument();

    // The name field should be the one reported invalid (first required field)
    const nameInput = canvas.getByLabelText('Name');
    await expect(nameInput).toBeInvalid();
  },
};

// 5. Partial fill (e.g. invalid email format) also blocked
export const InvalidEmailBlocked = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'not-an-email');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');

    await userEvent.click(canvas.getByRole('button', { name: /send message/i }));

    await expect(canvas.queryByText('Thank You!')).not.toBeInTheDocument();
    await expect(canvas.getByLabelText('Email')).toBeInvalid();
  },
};
