"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[203],{75184:function(e,r,s){s(72791);var a=s(89743),l=s(2677),n=s(2461),t=s(80184);r.Z=function(e){return(0,t.jsx)(a.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"page-title-box",children:[(0,t.jsx)("div",{className:"page-title-right",children:(0,t.jsxs)(n.Z,{className:"m-0",children:[(0,t.jsx)(n.Z.Item,{href:"/",children:"UBold"}),(e.breadCrumbItems||[]).map((function(e,r){return e.active?(0,t.jsx)(n.Z.Item,{active:!0,children:e.label},r):(0,t.jsx)(n.Z.Item,{href:e.path,children:e.label},r)}))]})}),(0,t.jsx)("h4",{className:"page-title",children:e.title})]})})})}},38459:function(e,r,s){s.d(r,{y:function(){return p},J:function(){return i}});var a=s(1413),l=s(72791),n=s(87705),t=s(80184),i=function(e){var r=e.defaultValues,s=e.resolver,i=e.children,c=e.onSubmit,o=e.formClass,d=(0,n.cI)({defaultValues:r,resolver:s}),m=d.handleSubmit,h=d.register,x=d.control,u=d.formState.errors;return(0,t.jsx)("form",{onSubmit:m(c),className:o,noValidate:!0,children:Array.isArray(i)?i.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,a.Z)({},(0,a.Z)((0,a.Z)({},e.props),{},{register:h,key:e.props.name,errors:u,control:x}))):e})):i})},c=s(45987),o=s(29439),d=s(99410),m=s(21827),h=s(81694),x=s.n(h),u=["label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","refCallback","children","rows"],j=function(e){var r=e.name,s=e.placeholder,n=e.refCallback,i=e.errors,c=(e.control,e.register),h=e.className,u=(0,l.useState)(!1),j=(0,o.Z)(u,2),p=j[0],Z=j[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(d.Z,{className:"mb-0",children:[(0,t.jsx)(m.Z.Control,(0,a.Z)((0,a.Z)({type:p?"text":"password",placeholder:s,name:r,id:r,as:"input",ref:function(e){n&&n(e)},className:h,isInvalid:!(!i||!i[r])},c?c(r):{}),{},{autoComplete:r})),(0,t.jsx)("div",{className:x()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:(0,t.jsx)("span",{className:"password-eye",onClick:function(){Z(!p)}})})]})})},p=function(e){var r=e.label,s=e.type,l=e.name,n=e.placeholder,i=e.register,o=e.errors,d=(e.control,e.className),h=e.labelClassName,x=e.containerClass,p=e.refCallback,Z=e.children,b=e.rows,f=(0,c.Z)(e,u),y="textarea"===s?"textarea":"select"===s?"select":"input";return(0,t.jsx)(t.Fragment,{children:"hidden"===s?(0,t.jsx)("input",(0,a.Z)((0,a.Z)({type:s,name:l},i?i(l):{}),f)):(0,t.jsx)(t.Fragment,{children:"password"===s?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(m.Z.Group,{className:x,children:[r?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(m.Z.Label,{className:h,children:r})," ",Z," "]}):null,(0,t.jsx)(j,{name:l,placeholder:n,refCallback:p,errors:o,register:i,className:d}),o&&o[l]?(0,t.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[l].message}):null]})}):(0,t.jsx)(t.Fragment,{children:"checkbox"===s||"radio"===s?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(m.Z.Group,{className:x,children:[(0,t.jsx)(m.Z.Check,(0,a.Z)((0,a.Z)({type:s,label:r,name:l,id:l,ref:function(e){p&&p(e)},className:d,isInvalid:!(!o||!o[l])},i?i(l):{}),f)),o&&o[l]?(0,t.jsx)(m.Z.Control.Feedback,{type:"invalid",children:o[l].message}):null]})}):(0,t.jsxs)(m.Z.Group,{className:x,children:[r?(0,t.jsx)(m.Z.Label,{className:h,children:r}):null,(0,t.jsx)(m.Z.Control,(0,a.Z)((0,a.Z)((0,a.Z)({type:s,placeholder:n,name:l,id:l,as:y,ref:function(e){p&&p(e)},className:d,isInvalid:!(!o||!o[l])},i?i(l):{}),{},{rows:b},f),{},{autoComplete:l,children:Z||null})),o&&o[l]?(0,t.jsx)(m.Z.Control.Feedback,{type:"invalid",children:o[l].message}):null]})})})})}},89030:function(e,r,s){s.r(r);var a=s(72791),l=s(87705),n=s(9140),t=s(89743),i=s(2677),c=s(21827),o=s(73053),d=s(99410),m=s(29546),h=s(55353),x=s(43360),u=s(81694),j=s.n(u),p=s(75184),Z=s(38459),b=s(80184),f=function(){var e=(0,l.cI)({defaultValues:{password:"12345",statictext:"email@example.com",color:"#727cf5"}}),r=e.handleSubmit,s=e.register,a=e.control,o=e.formState.errors;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Input Types"}),(0,b.jsxs)("p",{className:"sub-header",children:["Most common form control, text-based input fields. Includes support for all HTML5 types: ",(0,b.jsx)("code",{children:"text"}),", ",(0,b.jsx)("code",{children:"password"}),","," ",(0,b.jsx)("code",{children:"datetime"}),", ",(0,b.jsx)("code",{children:"datetime-local"}),","," ",(0,b.jsx)("code",{children:"date"}),", ",(0,b.jsx)("code",{children:"month"}),", ",(0,b.jsx)("code",{children:"time"}),","," ",(0,b.jsx)("code",{children:"week"}),", ",(0,b.jsx)("code",{children:"number"}),", ",(0,b.jsx)("code",{children:"email"}),","," ",(0,b.jsx)("code",{children:"url"}),", ",(0,b.jsx)("code",{children:"search"}),", ",(0,b.jsx)("code",{children:"tel"}),", and"," ",(0,b.jsx)("code",{children:"color"}),"."]}),(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsxs)("form",{onSubmit:r((function(){})),children:[(0,b.jsx)(Z.y,{label:"Text",type:"text",name:"text",containerClass:"mb-3",register:s,errors:o,control:a},"text"),(0,b.jsx)(Z.y,{label:"Email",type:"email",name:"email",placeholder:"Email",containerClass:"mb-3",register:s,errors:o,control:a},"email"),(0,b.jsx)(Z.y,{label:"Show/Hide Password",type:"password",name:"password",placeholder:"password placeholder",containerClass:"mb-3",register:s,errors:o,control:a},"password"),(0,b.jsx)(Z.y,{label:"Placeholder",type:"text",name:"placeholder",placeholder:"placeholder",containerClass:"mb-3",register:s,errors:o,control:a},"placeholder"),(0,b.jsx)(Z.y,{label:"Text Area",type:"textarea",name:"textarea",rows:"5",containerClass:"mb-3",register:s,errors:o,control:a},"textarea"),(0,b.jsx)(Z.y,{label:"Read only",type:"text",name:"text1",id:"text1",placeholder:"Readonly value",readOnly:!0,containerClass:"mb-3",register:s,errors:o,control:a},"text1"),(0,b.jsx)(Z.y,{label:"Disabled",type:"text",name:"text2",id:"text2",placeholder:"Disabled value",disabled:!0,containerClass:"mb-3",register:s,errors:o,control:a},"text2"),(0,b.jsx)(Z.y,{label:"Static control",type:"text",name:"statictext",placeholder:"Disabled",readOnly:!0,containerClass:"mb-3",register:s,errors:o,control:a},"statictext"),(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"text3",className:"form-label",children:"Helping text"}),(0,b.jsx)(c.Z.Control,{type:"text",name:"text",id:"text3",placeholder:"Helping text"}),(0,b.jsx)(c.Z.Text,{children:"A block of help text that breaks onto a new line and may extend beyond one line."})]})]})}),(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsxs)("form",{onSubmit:r((function(){})),children:[(0,b.jsxs)(Z.y,{name:"select",label:"Input Select",type:"select",containerClass:"mb-3",className:"form-select",register:s,errors:o,control:a,children:[(0,b.jsx)("option",{children:"1"}),(0,b.jsx)("option",{children:"2"}),(0,b.jsx)("option",{children:"3"}),(0,b.jsx)("option",{children:"4"}),(0,b.jsx)("option",{children:"5"})]},"select"),(0,b.jsxs)(Z.y,{name:"selectMulti",label:"Multiple Select",type:"select",multiple:!0,containerClass:"mb-3",className:"form-select",register:s,errors:o,control:a,children:[(0,b.jsx)("option",{children:"1"}),(0,b.jsx)("option",{children:"2"}),(0,b.jsx)("option",{children:"3"}),(0,b.jsx)("option",{children:"4"}),(0,b.jsx)("option",{children:"5"})]},"selectMulti"),(0,b.jsx)(Z.y,{label:"Default file input",type:"file",name:"file",containerClass:"mb-3",register:s,errors:o,control:a},"file"),(0,b.jsx)(Z.y,{label:"Date",type:"date",name:"date",containerClass:"mb-3",register:s,errors:o,control:a},"date"),(0,b.jsx)(Z.y,{label:"Month",type:"month",name:"month",containerClass:"mb-3",register:s,errors:o,control:a},"month"),(0,b.jsx)(Z.y,{label:"Time",type:"time",name:"time",containerClass:"mb-3",register:s,errors:o,control:a},"time"),(0,b.jsx)(Z.y,{label:"Week",type:"week",name:"week",containerClass:"mb-3",register:s,errors:o,control:a},"week"),(0,b.jsx)(Z.y,{label:"Number",type:"number",name:"number",placeholder:"number placeholder",containerClass:"mb-3",register:s,errors:o,control:a},"number"),(0,b.jsx)(Z.y,{label:"Color",type:"color",name:"color",className:"w-100",placeholder:"color placeholder",containerClass:"mb-3",register:s,errors:o,control:a},"color"),(0,b.jsxs)(c.Z.Group,{className:"mb-0",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"exampleRange",className:"form-label",children:"Range"}),(0,b.jsx)(c.Z.Range,{})]})]})})]})]})})})},y=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Floating labels"}),(0,b.jsxs)("p",{className:"sub-header",children:["Wrap a ",(0,b.jsx)("code",{children:"<Form.Control>"})," element in"," ",(0,b.jsx)("code",{children:"<FloatingLabel>"}),"to enable floating labels with Bootstrap\u2019s textual form fields. A"," ",(0,b.jsx)("code",{children:"placeholder"}),"is required on each ",(0,b.jsx)("code",{children:"<Form.Control>"})," as our method of CSS-only floating labels uses the ",(0,b.jsx)("code",{children:":placeholder-shown"})," ","pseudo-element."]}),(0,b.jsxs)(t.Z,{children:[(0,b.jsxs)(i.Z,{lg:6,children:[(0,b.jsx)("h5",{className:"mb-3",children:"Floating Example"}),(0,b.jsx)(o.Z,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:(0,b.jsx)(c.Z.Control,{type:"email",placeholder:"name@example.com"})}),(0,b.jsx)(o.Z,{controlId:"floatingPassword",label:"Password",className:"mb-3",children:(0,b.jsx)(c.Z.Control,{type:"password",placeholder:"Password"})}),(0,b.jsx)(o.Z,{controlId:"floatingTextarea2",label:"Comments",children:(0,b.jsx)(c.Z.Control,{as:"textarea",placeholder:"Leave a comment here",style:{height:"100px"}})})]}),(0,b.jsxs)(i.Z,{lg:6,children:[(0,b.jsx)("h5",{className:"mb-3",children:"Selects"}),(0,b.jsx)(o.Z,{controlId:"floatingSelect",label:"Works with selects",className:"mb-3",children:(0,b.jsxs)(c.Z.Select,{"aria-label":"Floating label select example",children:[(0,b.jsx)("option",{children:"Open this select menu"}),(0,b.jsx)("option",{value:"1",children:"One"}),(0,b.jsx)("option",{value:"2",children:"Two"}),(0,b.jsx)("option",{value:"3",children:"Three"})]})}),(0,b.jsxs)(t.Z,{className:"g-2",children:[(0,b.jsx)(i.Z,{md:!0,children:(0,b.jsx)(o.Z,{controlId:"floatingInputGrid",label:"Email address",children:(0,b.jsx)(c.Z.Control,{type:"email",placeholder:"name@example.com",defaultValue:"name@example.com"})})}),(0,b.jsx)(i.Z,{md:!0,children:(0,b.jsx)(o.Z,{controlId:"floatingSelectGrid",label:"Works with selects",children:(0,b.jsxs)(c.Z.Select,{"aria-label":"Floating label select example",children:[(0,b.jsx)("option",{children:"Open this select menu"}),(0,b.jsx)("option",{value:"1",children:"One"}),(0,b.jsx)("option",{value:"2",children:"Two"}),(0,b.jsx)("option",{value:"3",children:"Three"})]})})})]})]})]})]})})})},g=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Select menu"}),(0,b.jsxs)("p",{className:"sub-header",children:["Custom ",(0,b.jsx)("code",{children:"<select>"})," menus need only a custom class,"," ",(0,b.jsx)("code",{children:".custom-select"})," to trigger the custom styles."]}),(0,b.jsx)(c.Z.Group,{children:(0,b.jsxs)(c.Z.Select,{className:"mt-3","aria-label":"Default select example",children:[(0,b.jsx)("option",{defaultValue:"0",children:"Open this select menu"}),(0,b.jsx)("option",{value:"1",children:"One"}),(0,b.jsx)("option",{value:"2",children:"Two"}),(0,b.jsx)("option",{value:"3",children:"Three"})]})})]})},v=function(){return(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title mt-4",children:"Switches"}),(0,b.jsxs)("p",{className:"text-muted",children:["A switch has the markup of a custom checkbox but uses the"," ",(0,b.jsx)("code",{children:".custom-switch"})," class to render a toggle switch. Switches also support the ",(0,b.jsx)("code",{children:"disabled"})," attribute."]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(c.Z.Check,{type:"switch",id:"custom-switch",label:"Toggle this switch element"}),(0,b.jsx)(c.Z.Check,{disabled:!0,type:"switch",label:"Disabled switch element",id:"disabled-custom-switch",className:"mt-1"})]})]})},C=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.Z.Check,{type:"checkbox",id:"default-checkbox1",label:"Check this custom checkbox"}),(0,b.jsx)(c.Z.Check,{type:"checkbox",id:"default-checkbox2",label:"Check this custom checkbox"})]})},N=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.Z.Check,{type:"radio",id:"default-radio1",name:"customRadio",label:"Toggle this custom radio"}),(0,b.jsx)(c.Z.Check,{type:"radio",id:"default-radio2",name:"customRadio",label:"Or toggle this other custom radio"})]})},k=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Input Sizes"}),(0,b.jsxs)("p",{className:"sub-header",children:["Use size on ",(0,b.jsx)("code",{children:"<FormControl>"})," and"," ",(0,b.jsx)("code",{children:"<FormLabel>"})," to change the size of inputs and labels respectively."]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"small",children:"Small"}),(0,b.jsx)(c.Z.Control,{type:"text",name:"small",id:"small",placeholder:"Small",size:"sm"})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"Normal",children:"Normal"}),(0,b.jsx)(c.Z.Control,{type:"text",name:"Normal",id:"Normal",placeholder:"Normal"})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"Large",children:"Large"}),(0,b.jsx)(c.Z.Control,{type:"text",name:"Large",id:"Large",placeholder:"Large",size:"lg"})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-0",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"grid",children:"Grid Sizes"}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{sm:4,children:(0,b.jsx)(c.Z.Control,{type:"text",name:"grid",id:"grid",placeholder:".col-sm-4"})})})]})]})]})})},w=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Input Group"}),(0,b.jsx)("p",{className:"sub-header",children:"Easily extend form conrols by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs"}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(c.Z.Group,{children:[(0,b.jsx)(c.Z.Label,{htmlFor:"Static",children:"Static"}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsx)(d.Z.Text,{id:"basic-addon1",children:"@"}),(0,b.jsx)(c.Z.Control,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})]})]}),(0,b.jsxs)(c.Z.Group,{children:[(0,b.jsx)(c.Z.Label,{htmlFor:"Dropdown",children:"Dropdown"}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsxs)(m.Z,{variant:"primary",title:"Dropdown",id:"input-group-dropdown-1",children:[(0,b.jsx)(h.Z.Item,{href:"#",children:"Action"}),(0,b.jsx)(h.Z.Item,{href:"#",children:"Another action"}),(0,b.jsx)(h.Z.Item,{href:"#",children:"Something else here"}),(0,b.jsx)(h.Z.Divider,{}),(0,b.jsx)(h.Z.Item,{href:"#",children:"Separated link"})]}),(0,b.jsx)(c.Z.Control,{"aria-label":"Text input with dropdown button"})]})]}),(0,b.jsxs)(c.Z.Group,{children:[(0,b.jsx)(c.Z.Label,{htmlFor:"Button",children:"Button"}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsx)(c.Z.Control,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),(0,b.jsx)(x.Z,{variant:"dark",id:"button-addon2",children:"Button"})]})]}),(0,b.jsxs)(t.Z,{className:"g-2",children:[(0,b.jsx)(i.Z,{sm:6,children:(0,b.jsxs)(c.Z.Group,{children:[(0,b.jsx)(c.Z.Label,{htmlFor:"file",children:"Default file input"}),(0,b.jsx)(c.Z.Control,{type:"file"})]})}),(0,b.jsx)(i.Z,{sm:6,children:(0,b.jsxs)(c.Z.Group,{children:[(0,b.jsx)(c.Z.Label,{htmlFor:"formFileMultiple01",children:"Multiple input"}),(0,b.jsx)(c.Z.Control,{type:"file",multiple:!0})]})})]})]})]})})},F=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"mb-3 header-title",children:"Basic Example"}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"exampleEmail2",children:"Email"}),(0,b.jsx)(c.Z.Control,{type:"email",name:"email",id:"exampleEmail2",placeholder:"Enter your email"}),(0,b.jsx)(c.Z.Text,{children:"We'll never share your email with anyone else."})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"examplePassword2",children:"Password"}),(0,b.jsx)(c.Z.Control,{type:"password",name:"password",id:"examplePassword2",placeholder:"password placeholder",defaultValue:"12345"})]}),(0,b.jsx)(c.Z.Group,{className:"mb-3",id:"formGridCheckbox",children:(0,b.jsx)(c.Z.Check,{type:"checkbox",id:"formGridCheckbox",label:"Check me out"})}),(0,b.jsx)(x.Z,{variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"mb-3 header-title",children:"Horizontal Form"}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(c.Z.Group,{as:t.Z,className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"exampleEmail3",column:!0,sm:3,children:"Email"}),(0,b.jsx)(i.Z,{sm:9,children:(0,b.jsx)(c.Z.Control,{type:"email",name:"email",id:"exampleEmail3",placeholder:"Email"})})]}),(0,b.jsxs)(c.Z.Group,{as:t.Z,className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"examplePassword3",column:!0,sm:3,children:"Password"}),(0,b.jsx)(i.Z,{sm:9,children:(0,b.jsx)(c.Z.Control,{type:"password",name:"password",id:"examplePassword3",placeholder:"Password"})})]}),(0,b.jsxs)(c.Z.Group,{as:t.Z,className:"mb-3",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"examplePassword4",column:!0,sm:3,children:"Re-Password"}),(0,b.jsx)(i.Z,{sm:9,children:(0,b.jsx)(c.Z.Control,{type:"password",name:"password",id:"examplePassword4",placeholder:"Retype Password"})})]}),(0,b.jsx)(c.Z.Group,{as:t.Z,className:"mb-3",controlId:"formHorizontalCheck",children:(0,b.jsx)(i.Z,{sm:{span:9,offset:3},children:(0,b.jsx)(c.Z.Check,{label:"Check me out !",id:"checkmeout"})})}),(0,b.jsx)(c.Z.Group,{as:t.Z,className:"mb-0",controlId:"formHorizontalCheck",children:(0,b.jsx)(i.Z,{sm:{span:9,offset:3},children:(0,b.jsx)(x.Z,{variant:"info",type:"submit",children:"Sign in"})})})]})]})})},S=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Column sizing"}),(0,b.jsxs)("p",{className:"sub-header",children:["As shown in the previous examples, our grid system allows you to place any number of ",(0,b.jsx)("code",{children:".col"}),"s within a ",(0,b.jsx)("code",{children:".row"}),"."]}),(0,b.jsxs)(c.Z,{className:"row row-cols-lg-auto g-3 align-items-center",children:[(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(c.Z.Group,{className:"mb-2 me-sm-2 mb-sm-0",children:(0,b.jsx)(c.Z.Control,{readOnly:!0,type:"email",name:"email",id:"exampleEmail4",bsPrefix:"form-control-plaintext",placeholder:"email@example.com"})})}),(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(c.Z.Group,{className:"mb-2 me-sm-2 mb-sm-0",children:(0,b.jsx)(c.Z.Control,{type:"password",name:"password",id:"examplePassword5",placeholder:"Password"})})}),(0,b.jsx)("div",{className:"col-12",children:(0,b.jsx)(x.Z,{color:"primary",type:"submit",children:"Confirm identity"})})]}),(0,b.jsx)("h6",{className:"font-13 mt-3",children:"Auto-sizing"}),(0,b.jsx)(c.Z,{children:(0,b.jsxs)(t.Z,{className:"align-items-center",children:[(0,b.jsxs)(i.Z,{xs:"auto",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"inlineFormInput",visuallyHidden:!0,children:"Name"}),(0,b.jsx)(c.Z.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Jane Doe"})]}),(0,b.jsxs)(i.Z,{xs:"auto",children:[(0,b.jsx)(c.Z.Label,{htmlFor:"inlineFormInputGroup",visuallyHidden:!0,children:"Username"}),(0,b.jsxs)(d.Z,{className:"mb-2",children:[(0,b.jsx)(d.Z.Text,{children:"@"}),(0,b.jsx)(c.Z.Control,{id:"inlineFormInputGroup",placeholder:"Username"})]})]}),(0,b.jsx)(i.Z,{xs:"auto",children:(0,b.jsx)(c.Z.Check,{type:"checkbox",id:"autoSizingCheck",className:"mb-2",label:"Remember me"})}),(0,b.jsx)(i.Z,{xs:"auto",children:(0,b.jsx)(x.Z,{type:"submit",className:"mb-2",children:"Submit"})})]})})]})})},I=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Gutters"}),(0,b.jsx)("p",{className:"text-muted font-13",children:"More complex layouts can also be created with the grid system."}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)(t.Z,{className:"mb-3",children:[(0,b.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridEmail",children:[(0,b.jsx)(c.Z.Label,{children:"Email"}),(0,b.jsx)(c.Z.Control,{type:"email",placeholder:"Enter email"})]}),(0,b.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridPassword",children:[(0,b.jsx)(c.Z.Label,{children:"Password"}),(0,b.jsx)(c.Z.Control,{type:"password",placeholder:"Password"})]})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formGridAddress1",children:[(0,b.jsx)(c.Z.Label,{children:"Address"}),(0,b.jsx)(c.Z.Control,{placeholder:"1234 Main St"})]}),(0,b.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formGridAddress2",children:[(0,b.jsx)(c.Z.Label,{children:"Address 2"}),(0,b.jsx)(c.Z.Control,{placeholder:"Apartment, studio, or floor"})]}),(0,b.jsxs)(t.Z,{className:"mb-3",children:[(0,b.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridCity",children:[(0,b.jsx)(c.Z.Label,{children:"City"}),(0,b.jsx)(c.Z.Control,{})]}),(0,b.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridState",children:[(0,b.jsx)(c.Z.Label,{children:"State"}),(0,b.jsxs)(c.Z.Select,{defaultValue:"Choose...",children:[(0,b.jsx)("option",{children:"Choose..."}),(0,b.jsx)("option",{children:"..."})]})]}),(0,b.jsxs)(c.Z.Group,{as:i.Z,controlId:"formGridZip",children:[(0,b.jsx)(c.Z.Label,{children:"Zip"}),(0,b.jsx)(c.Z.Control,{})]})]}),(0,b.jsx)(c.Z.Group,{className:"mb-3",id:"formGridCheckbox",children:(0,b.jsx)(c.Z.Check,{type:"checkbox",label:"Check me out",id:"formGridCheckbox"})}),(0,b.jsx)(x.Z,{variant:"primary",type:"submit",className:"waves-effect waves-light",children:"Sign in"})]})]})})})},P=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom checkbox - Basic"}),(0,b.jsxs)("p",{className:"sub-header",children:["Supports bootstrap brand colors: ",(0,b.jsx)("code",{children:".form-check"}),",",(0,b.jsx)("code",{children:".form-check-*"})," etc."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"blue",name:"Blue"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}]||[]).map((function(e,r){return(0,b.jsx)(c.Z.Check,{label:e.name,type:"checkbox",id:"basic-checkbox-".concat(r),className:j()("mb-2","form-check-"+e.variant),"aria-label":"option 1",defaultChecked:r%2===0},r)}))]})},L=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom checkbox - Circled"}),(0,b.jsxs)("p",{className:"sub-header",children:[(0,b.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"blue",name:"Blue"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}]||[]).map((function(e,r){return(0,b.jsxs)(c.Z.Check,{id:"circle-checkbox-".concat(r),className:j()("mb-2","form-check","form-check-"+e.variant),children:[(0,b.jsx)(c.Z.Check.Input,{type:"checkbox",className:"rounded-circle",defaultChecked:r%3===0}),(0,b.jsxs)(c.Z.Check.Label,{children:[e.name," "]})]},r)}))]})},E=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom radio - Circled"}),(0,b.jsxs)("p",{className:"sub-header",children:[(0,b.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"}]||[]).map((function(e,r){return(0,b.jsx)(c.Z.Check,{label:e.name,id:"circled-radio-".concat(r),type:"radio",className:j()("mb-2","form-check-"+e.variant),"aria-label":"option 1",disabled:!0,defaultChecked:r%3===0},r)}))]})},B=function(){var e=[{variant:"primary",name:"Primary"},{variant:"success",name:"Success"},{variant:"danger",name:"Danger"},{variant:"warning",name:"Warning"},{variant:"pink",name:"Pink"},{variant:"blue",name:"Blue"},{variant:"info",name:"Info"},{variant:"dark",name:"Dark"}];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom radio - Basic"}),(0,b.jsxs)("p",{className:"sub-header",children:["Supports bootstrap brand colors: ",(0,b.jsx)("code",{children:".form-check"}),",",(0,b.jsx)("code",{children:".form-check-*"})," etc."]}),(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{sm:6,children:(e||[]).map((function(e,r){return(0,b.jsx)(c.Z.Check,{type:"radio",id:"basic-radio-".concat(r),label:e.name,className:j()("mb-2","form-check-"+e.variant),"aria-label":"option 1",name:"customradio1",defaultChecked:2===r},r)}))}),(0,b.jsx)(i.Z,{sm:6,children:(e||[]).map((function(e,r){return(0,b.jsx)(c.Z.Check,{type:"radio",id:"basic-radio2-".concat(r),label:e.name,className:j()("mb-2","form-check-"+e.variant),"aria-label":"option 1",defaultChecked:r%3===0},r)}))})]})]})},D=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom checkbox - Circled"}),(0,b.jsxs)("p",{className:"sub-header",children:[(0,b.jsx)("code",{children:".rounded-circle"})," for roundness."]}),([{variant:"danger",name:"Danger"},{variant:"dark",name:"Dark"},{variant:"blue",name:"Blue"},{variant:"pink",name:"Pink"}]||[]).map((function(e,r){return(0,b.jsx)(c.Z.Check,{id:"custom-checkbox-"+e.variant,type:"radio",label:e.name,className:j()("mb-2","form-check-"+e.variant),"aria-label":"option 1",disabled:!0,defaultChecked:!0},r)}))]})};r.default=function(){return(0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(p.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/basic"},{label:"Basic Elements",path:"/forms/basic",active:!0}],title:"Basic Elements"}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(f,{})})}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(n.Z,{children:(0,b.jsx)(n.Z.Body,{children:(0,b.jsxs)(t.Z,{children:[(0,b.jsxs)(i.Z,{md:6,children:[(0,b.jsx)(g,{}),(0,b.jsx)(v,{})]}),(0,b.jsxs)(i.Z,{md:6,children:[(0,b.jsx)("h4",{className:"header-title mt-5 mt-sm-0",children:"Checkboxes and radios"}),(0,b.jsx)("div",{className:"mt-3",children:(0,b.jsx)(C,{})}),(0,b.jsx)("div",{className:"mt-3",children:(0,b.jsx)(N,{})})]})]})})})})}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(y,{})})}),(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsx)(k,{})}),(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsx)(w,{})})]}),(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsx)(F,{})}),(0,b.jsx)(i.Z,{lg:6,children:(0,b.jsx)(G,{})})]}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(S,{})})}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(I,{})})}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(n.Z,{children:(0,b.jsx)(n.Z.Body,{children:(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{md:4,children:(0,b.jsx)(P,{})}),(0,b.jsx)(i.Z,{md:4,children:(0,b.jsx)(L,{})}),(0,b.jsx)(i.Z,{md:4,children:(0,b.jsx)(E,{})})]})})})})}),(0,b.jsx)(t.Z,{children:(0,b.jsx)(i.Z,{children:(0,b.jsx)(n.Z,{children:(0,b.jsx)(n.Z.Body,{children:(0,b.jsxs)(t.Z,{children:[(0,b.jsx)(i.Z,{md:4,children:(0,b.jsx)(B,{})}),(0,b.jsx)(i.Z,{md:4,children:(0,b.jsx)(D,{})})]})})})})})]})}},73201:function(e,r,s){var a=s(72791),l=function(e){return e&&"function"!==typeof e?function(r){e.current=r}:e};r.Z=function(e,r){return(0,a.useMemo)((function(){return function(e,r){var s=l(e),a=l(r);return function(e){s&&s(e),a&&a(e)}}(e,r)}),[e,r])}},3070:function(e,r,s){var a=s(97357),l=!1,n=!1;try{var t={get passive(){return l=!0},get once(){return n=l=!0}};a.Z&&(window.addEventListener("test",t,t),window.removeEventListener("test",t,!0))}catch(i){}r.ZP=function(e,r,s,a){if(a&&"boolean"!==typeof a&&!n){var t=a.once,i=a.capture,c=s;!n&&t&&(c=s.__once||function e(a){this.removeEventListener(r,e,i),s.call(this,a)},s.__once=c),e.addEventListener(r,c,l?a:i)}e.addEventListener(r,s,a)}},97357:function(e,r){r.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},92899:function(e,r,s){var a=s(3070),l=s(36382);r.Z=function(e,r,s,n){return(0,a.ZP)(e,r,s,n),function(){(0,l.Z)(e,r,s,n)}}},78376:function(e,r,s){function a(e){return e&&e.ownerDocument||document}s.d(r,{Z:function(){return a}})},36382:function(e,r){r.Z=function(e,r,s,a){var l=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(r,s,l),s.__once&&e.removeEventListener(r,s.__once,l)}},9140:function(e,r,s){s.d(r,{Z:function(){return I}});var a=s(1413),l=s(45987),n=s(81694),t=s.n(n),i=s(72791),c=s(10162),o=s(66543),d=s(27472),m=s(80184),h=["bsPrefix","className","variant","as"],x=i.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,i=e.variant,o=e.as,d=void 0===o?"img":o,x=(0,l.Z)(e,h),u=(0,c.vE)(s,"card-img");return(0,m.jsx)(d,(0,a.Z)({ref:r,className:t()(i?"".concat(u,"-").concat(i):u,n)},x))}));x.displayName="CardImg";var u=x,j=s(96040),p=["bsPrefix","className","as"],Z=i.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,h=(0,l.Z)(e,p),x=(0,c.vE)(s,"card-header"),u=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return(0,m.jsx)(j.Z.Provider,{value:u,children:(0,m.jsx)(d,(0,a.Z)((0,a.Z)({ref:r},h),{},{className:t()(n,x)}))})}));Z.displayName="CardHeader";var b=Z,f=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,d.Z)("h5"),g=(0,d.Z)("h6"),v=(0,o.Z)("card-body"),C=(0,o.Z)("card-title",{Component:y}),N=(0,o.Z)("card-subtitle",{Component:g}),k=(0,o.Z)("card-link",{Component:"a"}),w=(0,o.Z)("card-text",{Component:"p"}),F=(0,o.Z)("card-footer"),G=(0,o.Z)("card-img-overlay"),S=i.forwardRef((function(e,r){var s=e.bsPrefix,n=e.className,i=e.bg,o=e.text,d=e.border,h=e.body,x=e.children,u=e.as,j=void 0===u?"div":u,p=(0,l.Z)(e,f),Z=(0,c.vE)(s,"card");return(0,m.jsx)(j,(0,a.Z)((0,a.Z)({ref:r},p),{},{className:t()(n,Z,i&&"bg-".concat(i),o&&"text-".concat(o),d&&"border-".concat(d)),children:h?(0,m.jsx)(v,{children:x}):x}))}));S.displayName="Card",S.defaultProps={body:!1};var I=Object.assign(S,{Img:u,Title:C,Subtitle:N,Body:v,Link:k,Text:w,Header:b,Footer:F,ImgOverlay:G})},29546:function(e,r,s){s.d(r,{Z:function(){return Z}});var a=s(1413),l=s(45987),n=s(72791),t=s(52007),i=s.n(t),c=s(55353),o=s(5107),d=s(34247),m=i().oneOf(["start","end"]),h=i().oneOfType([m,i().shape({sm:m}),i().shape({md:m}),i().shape({lg:m}),i().shape({xl:m}),i().shape({xxl:m})]),x=s(80184),u=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],j={id:i().string,href:i().string,onClick:i().func,title:i().node.isRequired,disabled:i().bool,align:h,menuRole:i().string,renderMenuOnMount:i().bool,rootCloseEvent:i().string,menuVariant:i().oneOf(["dark"]),bsPrefix:i().string,variant:i().string,size:i().string},p=n.forwardRef((function(e,r){var s=e.title,n=e.children,t=e.bsPrefix,i=e.rootCloseEvent,m=e.variant,h=e.size,j=e.menuRole,p=e.renderMenuOnMount,Z=e.disabled,b=e.href,f=e.id,y=e.menuVariant,g=(0,l.Z)(e,u);return(0,x.jsxs)(c.Z,(0,a.Z)((0,a.Z)({ref:r},g),{},{children:[(0,x.jsx)(o.Z,{id:f,href:b,size:h,variant:m,disabled:Z,childBsPrefix:t,children:s}),(0,x.jsx)(d.Z,{role:j,renderOnMount:p,rootCloseEvent:i,variant:y,children:n})]}))}));p.displayName="DropdownButton",p.propTypes=j;var Z=p},27472:function(e,r,s){var a=s(1413),l=s(72791),n=s(81694),t=s.n(n),i=s(80184);r.Z=function(e){return l.forwardRef((function(r,s){return(0,i.jsx)("div",(0,a.Z)((0,a.Z)({},r),{},{ref:s,className:t()(r.className,e)}))}))}}}]);
//# sourceMappingURL=203.b2cbec0c.chunk.js.map