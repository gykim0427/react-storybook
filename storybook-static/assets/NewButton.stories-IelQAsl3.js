import{f as S}from"./index-CsDm4jc8.js";import{j as v}from"./jsx-runtime-CLpGMVip.js";const y=({primary:f=!1,size:w="medium",backgroundColor:N,label:B,...k})=>{const h=f?"storybook-newbutton--primary":"storybook-newbutton--secondary";return v.jsx("button",{type:"button",className:["storybook-newbutton",`storybook-newbutton--${w}`,h].join(" "),style:{backgroundColor:N},...k,children:B})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"NewButton",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const q={title:"Example/NewButton",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:S()}},e={args:{primary:!0,label:"NewButton"}},r={args:{label:"NewButton"}},a={args:{size:"large",label:"NewButton"}},t={args:{size:"small",label:"NewButton"}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'NewButton'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,u,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'NewButton'
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'NewButton'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'NewButton'
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const z=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,r as Secondary,t as Small,z as __namedExportsOrder,q as default};
