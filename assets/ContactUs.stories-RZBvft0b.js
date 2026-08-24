import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i}from"./iframe-BqkaOvsX.js";import{n as a,t as o}from"./ContactUs-D_vsumb_.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{a(),i(),s={component:o,tags:[`ai-generated`]},c={},l={play:async({canvasElement:e})=>{let i=t(e);await n.type(i.getByLabelText(`Name`),`Jane Doe`),await n.type(i.getByLabelText(`Email`),`jane@example.com`),await n.type(i.getByLabelText(`Message`),`Hello, I need help with...`),await n.click(i.getByRole(`button`,{name:/send message/i})),await r(i.getByText(`Thank You!`)).toBeInTheDocument(),await r(i.getByText(/your message has been received/i)).toBeInTheDocument()}},u={play:async({canvasElement:e})=>{let i=t(e);await n.type(i.getByLabelText(`Name`),`Jane Doe`),await n.type(i.getByLabelText(`Email`),`jane@example.com`),await n.type(i.getByLabelText(`Message`),`Hello!`),await n.click(i.getByRole(`button`,{name:/send message/i})),await r(i.getByText(`Thank You!`)).toBeInTheDocument(),await n.click(i.getByRole(`button`,{name:/send another message/i}));let a=await i.findByLabelText(`Name`);await r(a).toHaveValue(``),await r(i.getByLabelText(`Email`)).toHaveValue(``),await r(i.getByLabelText(`Message`)).toHaveValue(``)}},d={play:async({canvasElement:e})=>{let i=t(e);await n.click(i.getByRole(`button`,{name:/send message/i})),await r(i.queryByText(`Thank You!`)).not.toBeInTheDocument();let a=i.getByLabelText(`Name`);await r(a).toBeInvalid()}},f={play:async({canvasElement:e})=>{let i=t(e);await n.type(i.getByLabelText(`Name`),`Jane Doe`),await n.type(i.getByLabelText(`Email`),`not-an-email`),await n.type(i.getByLabelText(`Message`),`Hello!`),await n.click(i.getByRole(`button`,{name:/send message/i})),await r(i.queryByText(`Thank You!`)).not.toBeInTheDocument(),await r(i.getByLabelText(`Email`)).toBeInvalid()}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'jane@example.com');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello, I need help with...');
    await userEvent.click(canvas.getByRole('button', {
      name: /send message/i
    }));

    // Success view should appear
    await expect(canvas.getByText('Thank You!')).toBeInTheDocument();
    await expect(canvas.getByText(/your message has been received/i)).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'jane@example.com');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');
    await userEvent.click(canvas.getByRole('button', {
      name: /send message/i
    }));
    await expect(canvas.getByText('Thank You!')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /send another message/i
    }));

    // Back to form, fields reset
    const nameInput = await canvas.findByLabelText('Name');
    await expect(nameInput).toHaveValue('');
    await expect(canvas.getByLabelText('Email')).toHaveValue('');
    await expect(canvas.getByLabelText('Message')).toHaveValue('');
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /send message/i
    }));

    // Success message should never appear
    await expect(canvas.queryByText('Thank You!')).not.toBeInTheDocument();

    // The name field should be the one reported invalid (first required field)
    const nameInput = canvas.getByLabelText('Name');
    await expect(nameInput).toBeInvalid();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe');
    await userEvent.type(canvas.getByLabelText('Email'), 'not-an-email');
    await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');
    await userEvent.click(canvas.getByRole('button', {
      name: /send message/i
    }));
    await expect(canvas.queryByText('Thank You!')).not.toBeInTheDocument();
    await expect(canvas.getByLabelText('Email')).toBeInvalid();
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`FillAndSubmit`,`SubmitThenReset`,`EmptySubmitBlockedByValidation`,`InvalidEmailBlocked`]})))()}m();export{c as Default,d as EmptySubmitBlockedByValidation,l as FillAndSubmit,f as InvalidEmailBlocked,u as SubmitThenReset,p as __namedExportsOrder,s as default};