"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[2065],{75184:function(e,s,t){t(72791);var i=t(89743),a=t(2677),l=t(2461),n=t(80184);s.Z=function(e){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(l.Z,{className:"m-0",children:[(0,n.jsx)(l.Z.Item,{href:"/",children:"UBold"}),(e.breadCrumbItems||[]).map((function(e,s){return e.active?(0,n.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,n.jsx)(l.Z.Item,{href:e.path,children:e.label},s)}))]})}),(0,n.jsx)("h4",{className:"page-title",children:e.title})]})})})}},32065:function(e,s,t){t.r(s);var i=t(93433),a=t(29439),l=t(72791),n=t(9140),r=t(89743),c=t(2677),o=t(16657),d=t(43360),h=t(21827),m=t(82431),x=t(2469),u=t(81694),j=t.n(u),g=t(75184),Z=t(87812),b=t(80184),N=["primary","secondary","success","danger","warning","info","light","dark"],p=function(){var e=(0,l.useState)(!0),s=(0,a.Z)(e,2),t=s[0],d=s[1],h=(0,l.useState)(!0),m=(0,a.Z)(h,2),x=m[0],u=m[1],j=(0,l.useState)(!0),g=(0,a.Z)(j,2),N=g[0],p=g[1],y=(0,l.useState)([{time:"just now",desc:"See? Just like this."},{time:"2 seconds ago",desc:"Heads up, toasts will stack automatically"}]),v=(0,a.Z)(y,2),w=v[0],A=v[1];return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Bootstrap Toasts"}),(0,b.jsx)("p",{className:"text-muted font-14",children:"Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."}),(0,b.jsxs)(r.Z,{children:[(0,b.jsxs)(c.Z,{lg:6,children:[(0,b.jsx)("h5",{className:"mb-2",children:"Basic"}),(0,b.jsx)("p",{className:"text-muted font-14",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button."}),(0,b.jsx)("div",{className:"p-3",children:(0,b.jsxs)(o.Z,{onClose:function(){return d(!1)},show:t,delay:3e3,autohide:!0,children:[(0,b.jsxs)(o.Z.Header,{children:[(0,b.jsx)("img",{src:Z,alt:"brand-logo",height:"12",className:"me-1"}),(0,b.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,b.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,b.jsx)(o.Z.Body,{children:"Hello, world! This is a toast message."})]})})]}),(0,b.jsxs)(c.Z,{lg:6,children:[(0,b.jsx)("h5",{className:"mb-2",children:"Translucent"}),(0,b.jsx)("p",{className:"text-muted font-14",children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we\u2019ll also attempt to blur the elements under a toast."}),(0,b.jsx)("div",{className:"p-3 bg-light",children:(0,b.jsxs)(o.Z,{onClose:function(){return u(!1)},show:x,delay:4e3,autohide:!0,children:[(0,b.jsxs)(o.Z.Header,{children:[(0,b.jsx)("img",{src:Z,alt:"brand-logo",height:"12",className:"me-1"}),(0,b.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,b.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,b.jsx)(o.Z.Body,{children:"Hello, world! This is a toast message."})]})})]})]}),(0,b.jsxs)(r.Z,{children:[(0,b.jsxs)(c.Z,{lg:6,className:"mt-4",children:[(0,b.jsx)("h5",{className:"mb-2",children:"Stacking"}),(0,b.jsx)("p",{className:"text-muted font-14",children:"When you have multiple toasts, we default to vertiaclly stacking them in a readable manner."}),(0,b.jsx)("div",{className:"p-3",children:(0,b.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"},children:(0,b.jsx)("div",{className:"toast-container",style:{position:"absolute",top:0,right:0},children:(w||[]).map((function(e,s){return(0,b.jsxs)(o.Z,{onClose:function(){return function(e){var s=(0,i.Z)(w);s.splice(e,1),A(s)}(s)},delay:5e3,autohide:!0,children:[(0,b.jsxs)(o.Z.Header,{children:[(0,b.jsx)("img",{src:Z,alt:"brand-logo",height:"12",className:"me-1"}),(0,b.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,b.jsx)("small",{className:"ms-5",children:e.time})]}),(0,b.jsx)(o.Z.Body,{children:e.desc})]},s)}))})})})]}),(0,b.jsxs)(c.Z,{lg:6,className:"mt-4",children:[(0,b.jsx)("h5",{className:"mb-2",children:"Placement"}),(0,b.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the ",(0,b.jsx)("code",{children:".toast"}),"."]}),(0,b.jsx)("div",{className:"p-3",children:(0,b.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"d-flex justify-content-center align-items-center",style:{minHeight:"200px"},children:(0,b.jsxs)(o.Z,{onClose:function(){return p(!1)},show:N,children:[(0,b.jsxs)(o.Z.Header,{children:[(0,b.jsx)("img",{src:Z,alt:"brand-logo",height:"12",className:"me-1"}),(0,b.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,b.jsx)("small",{className:"ms-5",children:"1 mins ago"})]}),(0,b.jsx)(o.Z.Body,{children:"Heads up, toasts will stack automatically"})]})})})]})]})]})})},y=function(){var e=(0,l.useState)(!0),s=(0,a.Z)(e,2),t=s[0],i=s[1],r=(0,l.useState)(!0),c=(0,a.Z)(r,2),h=c[0],m=c[1],x=(0,l.useState)(!0),u=(0,a.Z)(x,2),j=u[0],g=u[1],Z=(0,l.useState)(!0),N=(0,a.Z)(Z,2),p=N[0],y=N[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom content"}),(0,b.jsx)("p",{className:"text-muted",children:"Alternatively, you can also add additional controls and components to toasts."}),(0,b.jsxs)(o.Z,{className:"d-flex align-items-center mt-4",show:t,onClose:function(){return i(!1)},delay:3e3,autohide:!0,children:[(0,b.jsx)(o.Z.Body,{children:"Hello, world! This is a toast message."}),(0,b.jsx)(d.Z,{variant:"",onClick:function(){return i(!1)},className:"btn-close ms-auto me-2"})]}),(0,b.jsxs)(o.Z,{className:"d-flex align-items-center text-white bg-primary border-0 mt-4",show:h,onClose:function(){return m(!1)},delay:4e3,autohide:!0,children:[(0,b.jsx)(o.Z.Body,{children:"Hello, world! This is a toast message."}),(0,b.jsx)(d.Z,{variant:"",onClick:function(){return m(!1)},className:"btn-close btn-close-white ms-auto me-2"})]}),(0,b.jsx)(o.Z,{className:"mt-4",show:j,onClose:function(){return g(!1)},delay:6e3,autohide:!0,children:(0,b.jsxs)(o.Z.Body,{children:["Hello, world! This is a toast message.",(0,b.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,b.jsx)(d.Z,{variant:"primary",className:"btn-sm me-1",children:"Take action"}),(0,b.jsx)(d.Z,{variant:"secondary",onClick:function(){return g(!1)},className:"btn-sm",children:"Close"})]})]})}),(0,b.jsx)(o.Z,{className:"text-white bg-primary mt-4",show:p,onClose:function(){return y(!1)},delay:8e3,autohide:!0,children:(0,b.jsxs)(o.Z.Body,{children:["Hello, world! This is a toast message.",(0,b.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,b.jsx)(d.Z,{variant:"light",className:"btn-sm me-1",children:"Take action"}),(0,b.jsx)(d.Z,{variant:"secondary",onClick:function(){return y(!1)},className:"btn-sm",children:"Close"})]})]})})]})})})},v=function(){var e=(0,l.useState)("top-start"),s=(0,a.Z)(e,2),t=s[0],i=s[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Placement"}),(0,b.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the",(0,b.jsx)("code",{children:".toast"}),"."]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("label",{htmlFor:"selectToastPlacement",children:"Toast placement"}),(0,b.jsx)(h.Z.Select,{id:"selectToastPlacement",className:"mt-2",onChange:function(e){return i(e.currentTarget.value)},children:(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]||[]).map((function(e){return(0,b.jsx)("option",{value:e,children:e},e)}))})]}),(0,b.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"bg-light position-relative",style:{minHeight:"294px"},children:(0,b.jsx)(m.Z,{className:"p-3",position:t,children:(0,b.jsxs)(o.Z,{children:[(0,b.jsxs)(o.Z.Header,{closeButton:!1,children:[(0,b.jsx)("img",{src:Z,className:"me-1",alt:"",height:"12"}),(0,b.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,b.jsx)("small",{children:"11 mins ago"})]}),(0,b.jsx)(o.Z.Body,{children:"Hello, world! This is a toast message."})]})})})]})})})},w=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Default Alert"}),(0,b.jsxs)("p",{className:"sub-header",children:["Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight"," ",(0,b.jsx)("code",{children:"variant"}),"s."]}),(N||[]).map((function(e,s){return(0,b.jsxs)(x.Z,{variant:e,children:["This is a ",(0,b.jsx)("strong",{children:e})," alert\u2014check it out!"]},s)}))]})})},A=function(){var e=(0,l.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),s=(0,a.Z)(e,2),t=s[0],r=s[1];return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Dismissing Alerts"}),(0,b.jsxs)("p",{className:"sub-header",children:["Add the ",(0,b.jsx)("code",{children:"dismissible"})," prop to add a functioning dismiss button to the Alert."]}),t.map((function(e,s){return(0,b.jsxs)(x.Z,{variant:e,onClose:function(){return function(e){var s=(0,i.Z)(t);s.splice(e,1),r(s)}(s)},dismissible:!0,children:[(0,b.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},s)}))]})})},f=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Custom Background Alert"}),(0,b.jsxs)("p",{className:"sub-header",children:["Use ",(0,b.jsx)("code",{children:".bg-*"}),",",(0,b.jsx)("code",{children:".border-0"})," classes."]}),(N||[]).map((function(e,s){return(0,b.jsxs)(x.Z,{variant:e,className:j()("bg-"+e,"border-0","light"===e?"text-dark":"text-white","dark"===e?"text-light":"text-white"),children:["This is a ",(0,b.jsx)("strong",{children:e})," alert\u2014check it out!"]},s)}))]})})})},B=function(){var e=(0,l.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),s=(0,a.Z)(e,2),t=s[0],r=s[1];return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Dismissing Custom Background Alert"}),(0,b.jsxs)("p",{className:"sub-header",children:["Use ",(0,b.jsx)("code",{children:".bg-*"}),",",(0,b.jsx)("code",{children:".border-0"})," classes."]}),(t||[]).map((function(e,s){return(0,b.jsxs)(x.Z,{variant:e,onClose:function(){return function(e){var s=(0,i.Z)(t);s.splice(e,1),r(s)}(s)},className:j()("bg-"+e,"border-0","light"===e?"text-dark":"text-white","dark"===e?"text-light":"text-white"),dismissible:!0,children:[(0,b.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},s)}))]})})};s.default=function(){return(0,b.jsxs)(l.Fragment,{children:[(0,b.jsx)(g.Z,{breadCrumbItems:[{label:"Base UI",path:"/ui/toasts"},{label:"Alerts & Notifications",path:"/ui/notifications",active:!0}],title:"Alerts & Notifications"}),(0,b.jsx)(r.Z,{children:(0,b.jsx)(c.Z,{children:(0,b.jsx)(p,{})})}),(0,b.jsxs)(r.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(y,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(v,{})})]}),(0,b.jsxs)(r.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(w,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(A,{})})]}),(0,b.jsxs)(r.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(f,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(B,{})})]})]})}},87812:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABMCAYAAAAoVToVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4MjYzQUJCMDgzMjExRUFBMzk2QzcwN0VCODRGMTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4MjYzQUJDMDgzMjExRUFBMzk2QzcwN0VCODRGMTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNjNBQjkwODMyMTFFQUEzOTZDNzA3RUI4NEYxMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjgyNjNBQkEwODMyMTFFQUEzOTZDNzA3RUI4NEYxMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zHGo0AAALwklEQVR42syc328cVxXH78yuvd6E0kX8ATFS/BB+bt9AgBqXVEU8JUrVjRs1nWnyUKRA6kiUX63SSLT8krCLivhVs2NI2JoUsgKEEEpxKvoIzVZC8kMs4Tz0AUTpUtqsvd6d4XvXd+zd2Tsz58zM2h3lZLwzd+7c+ey5555z7p01PM8TnO25o8+JEW6HIefUvqSONSF1yCLkutjj7Wz9rMhzLzKEN4q2SEBXFSzdOUvJPGR2r8GZI6jz/ZCvhZ30eth3REFZDgEW3B6D3OjTQqr27i00Y+ixB6QEuQZ5GmLpygze3C3j2DKkHFNvv/jXUMpaqmyVUX+kJNM0I1RKkGVIWX2uQqyhcj4wwy0HynOkrOqPKmP1lZF/zyW4j9C1PyubVoZU1b5/q6q9038wZ3TLqkuWUvQSS+3tkHNVTdd+LdiWJFsW0OIADIDLG50sgEWB0wGL/BJ3ARoLWLCxjQyB6cBFAcsMXJ5/iReERgVQVT4Xtbyj6i8TwU0yRkrZlrWkfh9f0wwv+GCC8O32+1wkYG133B432747QgHHcS2cNI5yFjaNCy72gTbcQs9GAVyzYG5MM8BRgdl7PRBkCc5ZdycGHggAmxPmelbgZlVUsdvObag4EDuFCzQEzN9wXNrCe1CmkaJ+2bb5DNy0zGPPpBrn3HaLkV0G4N4smuufwf1fSqBxdhb+Gbl7Vo9/p6yC6WP2rx9vBAYC3dZgjpLz73T3kYLwljvxn2Ju/QjCr2sMcNcZwEpqQKkn7p7O8W/7cd6k3KvPlLiwRIzlbCqw7WhCdN/AlUdwbYN4j8PE2LOk2n41LG6OjT0Xj38rCKAUE1yzgb3d3e8kMQ8SnOsZ9zLAWTHggs9WjUo4aKH9/Pg3wwCUVIWltMD+131PIhvj15E3uv/uern78PdrKcGFKYMWnBbaL+5/pgy7tQwpSfulkeB5K6Z8UOy3unckNsr9dY2Zm//qiPx9eJq/E+8t2zrX97mk2l4OKV9V12wfGxoILt3/NGiTYkM/5pQp6DnOKNbs3JlqFAuO3uNG+5+b3tjZMWOzThx8/GxHnej7DcWqZqBBa0qoycA5RgIPfpJHBgYIr06YGxVKEhTgXsYefpzXJLZFdr0bjOTnudDuefLFJ5qm8KYhDYjIUGyIYxIBjxubNzte/q62O1aDb1bpPxdxjxuq7U1imyaJ5Rqq3t5nrU2befHJpmG40xD4ZK7IQGyI4382YReipGC2b3ZF7qDZsyHCQNer7cu1Kv75mHs1VNubGbV9qL7Q0fPElQtSzacZQ3pklxw85oYKuhk0LHew/5gQnrGlca3K1rHYezZU25sp266tJ9JPq1x5Ki04DTCp4q5WJLCuZx7UncN1xqabV+C83QAXen1sRPDAlYtQS1xsYHCgDem+PAJxdOd0XXLc3Lzpqi4ZJrKrdtBVN7xChdiGhmp7k9n2yOtIsSeM31GVFaVup6MCdlO4g8Gv0ZFG/2DweJjH0YHGtUVBTJjrS4TyMg6eZqbYF1XsnCxg/80DT8Ajpmcs8F2chgr/LPJLMNxhYIbLctVg92ob7jjAbYwC3JyC5rChXa18HZ4wB5g4bcYA8zVt3GwfAKwV1zOLRA0bAocQqtb2xjHajgRc5OSLFlq98lWOhslv5RFjK30Uu6FbHcADr0Ajizmjmyo4QNBewwAhv4RdBTcE7beVr1gmD9g9Ymt9RezW9sYOoAuvYBhKqmHD4IRZwwAhR99dAzcA7XeVL3M1bFo1JHbblMA8ExomirlsgG2D86BxCNxl6LUr4Lah/f7E4xwbxgIG+wUNEyvwqIsG0USi656HzXsGmlmkaZxRQyTxOgaXV0YEbnue1JCL+v5w4kuTgr6EiQksdwAPv0J8eB/YDOzeEvasa2EnWxiJD+WN7i3ivThLJORz3/W5F767Zm7dzL0AKUWFOErgISMWE4jJ4ssKGOoDeJAVPEjP6BPEQxebQZOW1CBxC5oDCJ0W5Xqzp8neytZ949unnmOWWFbyubCtaX+cOf8mgTZLw6AhPaPP0TAMDjMw7EsaN4VVl9Q4yCFApGqcxZhBe5/5p5nZEvyrUkx6pJcy+mzte6SUEf5taZiAhomuIIiXF50ZXLOkO4/jt7A/BGlR6pP3lfeX7SCmfxyVvqKUPZyXiTjKzPS9tfkGYd5Tef2eLFtkjIC9LhlTRmrNIcgqcb5W3n9FXmNsXUtZrkCZs/2YScybzV178IvlrRx9fB4qZ7iPQmDQe39T5BvEck9C8ox6X5ddNKPc2o5Im/bSg1/I3KZB22QapyaGlrSFxq2rKD8Vcf55nD/NiINXMSBMMbSdateO5VUmoy52FsdFzT4vk8F5YqmXChIuFdxBPOhNHTgMDs/DVrGAwWWZMunL9zkDwfW8mha7iN1RgraxwKHxSxJXGnASGAYJNjDC8okkwJzDl3/QNPw3Vl4++XnOxayuCmezAj+K3FXhrqzCFk11PWiY4ZKByes2vfwouuS2c3v35R+uGf2v+fzl5KMjBNep5DnghCHdnBIHWNsbGxUwoZ71+qcv/2gw3Y0DMkU9S0wLy9npq9SZdXhQSwAxg9HHM3vee7QAcolSzuxFDt7qpshPMVLalpo9p5SVaW8bct3v8kNzBJ+69ON53YRIiExy1nAgcF/yPOO8zHJkJcIzoGHjU4xJE4vxBos/ueTETqx88tJPtid3CVKGLBOiip4UzPY8jPuC2ZsDTSfS6EtgjElrC1IlltVOnEfORn3i0k9tBKgOMZgtQ5YpQb8MrAvmxhl00gViEK8VNH91w5UaRmqfFGiYWyWWDU1MxE7hffzSgh02FUdYTaQVfy5TgoNrsBA2Dxol0uivuxMcGzbHtGHTaipPO4UXu1AZ/fjZBG/Ihdq4/u4lwXUkOEaXxP+rLQmM3iZpvx5jlI+cII+F9teHLN9ecRa7xNi4Qa2ZkODcPEnjoJn1VrfIsWFVZcc47T8XmcGJyhb87dTD6G6J32Mq90UOzUBMOjxDlds403bH5axSqCOL8wsYRM60XHLypEoIDcP8N7nZrHnPV0+doi7uY4MLm4WaMNfPyAngggYcji/I89TUVApgJHBD0G6ceigLYKHgjIiZqC1wBWnrTu8AK2wDI0JLCywW3AC0xsMn03RJEjgzJpAu5nY0TmqY/DwwMEUvYcgKWCS4/GAu3uO8ilhX2mNxwEkvO34WfuPMultwsH9leL7AywJYsy9rQwEny8/utKFv++jiLx21rixuWJbljoWtQYtyR5qdO0lfig6Y3z1D3AqLGRpR16/JMouRLsdHFmtx4ILn2eD+23lv4u6fEbAGceHf0MLGUD/tw4svyChgXuMROyriH3o3gBs5vNW9IxG4uHX+TE8/agGfPPeBYGQQ6dx+yFmaDWiQg2N2zHLROkPjqik1jaNhjQhPX6dxyZePftD5ld/1HPl3hE3pB0ddo3v07e7+akJoWQHTQYrstoIyf3jIuWIHGx0zKjUE/bVC653uPrE/d9tmQOO6Fc+KmOWggUUxayLN8tEwm5Kxn2TdRmi0z2zFgkO5ng1j1j+ngDSI4OJT90m6xwgcS6vlToiiua4Fh3O9X72S724mqJs39UiZ0+VD0wpsjLBSvh9urbsTQzYOx0oyrIMcTlG3X0f53fIOe5ahi6ViT1vFnb13MUU2Py+RmcalgVZS9iLLWK8HTqaJZNiSIbBMwfG756CzKLJIIYdMsf0j4uVVnSPqMKYe55hvsfDeWNFN/PdtdiAbEDepzPlREmrE0Ajk7CxC+WN7PRDY6odMdOfgIMrMxvaPkAQ/p5WGqq9JaIuu/J7+mIlO47TLFnJGt9n1cln8DE5Dl06P0P6w8rs6EESBi1znIcG5npkGXByAILjMgCWzadHLV2zVsMW40ck03KYrEoGjAvDBTSoblgmwrDXN32bpBtVtYkySrwn9mQiu3vfFUDZbjGAbxe/ccr8EuXT1CORiBIym8tsy1Zh3k6YlAfcGdk9Bvg+5W2be+077v6Exsvtzt/8LMADkis5ofId9twAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=2065.ace87f57.chunk.js.map