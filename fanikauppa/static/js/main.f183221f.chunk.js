(this.webpackJsonpfanikauppa=this.webpackJsonpfanikauppa||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),A=c.n(n),i=c(7),s=c.n(i),a=(c(13),c(8)),r=c(3),d=c(2),l=c(0);function j(e){return Object(l.jsx)("header",{className:"row block center",children:Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("h1",{children:"Ostosk\xe4rry"})})})})}function o(e){var t=e.product,c=e.onAdd;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("div",{children:["$",t.price]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})})]})}function u(e){var t=e.products,c=e.onAdd;return Object(l.jsxs)("main",{className:"block col-2",children:[Object(l.jsx)("h2",{children:"Products"}),Object(l.jsx)("div",{className:"row",children:t.map((function(e){return Object(l.jsx)(o,{product:e,onAdd:c},e.id)}))})]})}function b(e){var t=e.cartItems,c=e.onAdd,n=e.onRemove,A=e.CartClear,i=e.setPage,s=t.reduce((function(e,t){return e+t.qty*t.price}),0);return Object(l.jsxs)("aside",{className:"block col-1",children:[Object(l.jsx)("h2",{children:"Cart Items"}),Object(l.jsxs)("div",{children:[0===t.length&&Object(l.jsx)("div",{children:"Cart is empty"}),t.map((function(e){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:e.name}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("button",{onClick:function(){return n(e)},className:"remove",children:"-"})," ",Object(l.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"})]}),Object(l.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x $",e.price.toFixed(2)]})]},e.id)})),0!==t.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("strong",{children:"Total Price"})}),Object(l.jsx)("div",{className:"col-1 text-right",children:Object(l.jsxs)("strong",{children:["$",s.toFixed(2)]})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:A,children:" Clear"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return i(2)},className:"",children:"checkout"})})]})]})]})}var O=[{id:"1",name:"Muki",price:549,image:"data:image/jpeg;base64,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"},{id:"2",name:"Lippis",price:500,image:"https://cdn.s-cloud.fi/v1/w435h400/assets/dam-id/62-HEAC8a_N8A24l3C6e9z.jpg"},{id:"3",name:"T-paita",price:817,image:"https://image.spreadshirtmedia.net/image-server/v1/mp/products/T461A1MPA1086PT17X37Y36D151772280FS3244/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=2588,crop=list/suomi-suomi-naisten-luomu-t-paita.jpg"},{id:"4",name:"Juliste",price:17,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png"}],x=function(e){var t=e.link;return Object(l.jsxs)("aside",{className:"block col-1",children:[Object(l.jsx)("h2",{children:"Toimitustiedot"}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"line",children:[Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("h3",{children:" Etunimi "}),0===t.FirstName.length&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Nimi tarvitaan"})}),t.FirstName]}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("h3",{children:" Sukunimi "}),0===t.LastName.length&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Sukunimi tarvitaan"})}),t.LastName]}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("h3",{children:" Osoite "}),0===t.Address.length&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Osoite tarvitaan"})}),t.Address]}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("h3",{children:" Postinumero "}),0===t.PostalCode.length&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Postinumero tarvitaan"})}),t.PostalCode]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{class:"button",href:"/",onClick:function(){alert("Ostos on vahvistettu!")},children:"vahvista ostos"})}),(t.PostalCode,t.Address,t.FirstName,0===t.LastName.length&&Object(l.jsx)("div",{}))]})})]})},h=function(e){var t=e.submitHandler,c=Object(n.useState)(""),A=Object(d.a)(c,2),i=A[0],s=A[1],a=Object(n.useState)(""),r=Object(d.a)(a,2),j=r[0],o=r[1],u=Object(n.useState)(""),b=Object(d.a)(u,2),O=b[0],x=b[1],h=Object(n.useState)(""),m=Object(d.a)(h,2),v=m[0],p=m[1];return Object(l.jsxs)("form",{onSubmit:function(e){t(e,{FirstName:i,LastName:j,Address:O,PostalCode:v}),s(""),o(""),x(""),p("")},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Etunimi"}),Object(l.jsx)("input",{class:"row",name:"FirstName",required:!0,value:i,onChange:function(e){return s(e.target.value)},type:"text",id:"FirstName"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Sukunimi"}),Object(l.jsx)("input",{class:"row",name:"LastName",required:!0,value:j,onChange:function(e){return o(e.target.value)},type:"text",id:"LastName"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Osoite"}),Object(l.jsx)("input",{class:"row",name:"Address",required:!0,value:O,onChange:function(e){return x(e.target.value)},type:"text",id:"Address"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Postinumero"}),Object(l.jsx)("input",{class:"row",name:"PostalCode",required:!0,value:v,onChange:function(e){return p(e.target.value)},type:"text",id:"PostalCode"})]}),Object(l.jsx)("input",{type:"submit"})]})},m=function(e){var t=e.links,c=e.setLinks;return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{submitHandler:function(e,n){e.preventDefault(),c(t.concat(n))}}),t.map((function(e){return Object(l.jsx)(x,{link:e},e.id)}))]})};var v=function(){var e=Object(n.useState)(O),t=Object(d.a)(e,1)[0],c=Object(n.useState)([]),A=Object(d.a)(c,2),i=A[0],s=A[1],o=Object(n.useState)(1),x=Object(d.a)(o,2),h=x[0],v=x[1],p=Object(n.useState)([]),g=Object(d.a)(p,2),S=g[0],f=g[1],k=function(e){var t=i.find((function(t){return t.id===e.id}));s(t?i.map((function(c){return c.id===e.id?Object(r.a)(Object(r.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(a.a)(i),[Object(r.a)(Object(r.a)({},e),{},{qty:1})]))};return Object(l.jsxs)(l.Fragment,{children:[1===h&&Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{countCartItems:i.length}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u,{products:t,onAdd:k}),Object(l.jsx)(b,{cartItems:i,onAdd:k,onRemove:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.qty?s(i.filter((function(t){return t.id!==e.id}))):s(i.map((function(c){return c.id===e.id?Object(r.a)(Object(r.a)({},t),{},{qty:t.qty-1}):c})))},CartClear:function(){s([])},setPage:v})]})]}),2===h&&Object(l.jsxs)("div",{class:"block col-3",children:[Object(l.jsx)("h3",{children:"Toimitustiedot"}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)(m,{links:S,setLinks:f})})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,A=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),A(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(A.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.f183221f.chunk.js.map