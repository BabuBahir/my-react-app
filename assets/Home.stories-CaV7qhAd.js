import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Home-Dr76DzqE.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{expect:r,fn:i}=__STORYBOOK_MODULE_TEST__,a={component:n,tags:[`ai-generated`],args:{count:0,setCount:i()}},o={},s={args:{count:5}},c={args:{count:0},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:/count is 0/i}),n=getComputedStyle(t);await r(n.color).toBe(`rgb(170, 59, 255)`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button', {
      name: /count is 0/i
    });
    // Assuming .counter style defines this background
    const style = getComputedStyle(button);
    await expect(style.color).toBe('rgb(170, 59, 255)'); // var(--accent) in index.css
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`CounterClicked`,`CssCheck`]})))()}u();export{s as CounterClicked,c as CssCheck,o as Default,l as __namedExportsOrder,a as default};