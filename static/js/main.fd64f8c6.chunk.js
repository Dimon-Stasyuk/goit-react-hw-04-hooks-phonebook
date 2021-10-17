(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=n(9),s=n(2),u=(n(14),n(15),n(0));function l(e){var t=e.submit,n=e.contacts,c=Object(a.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),d=b[0],j=b[1],m=function(){o(""),j("")},f=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"number":j(e.target.value);break;default:return}};return Object(u.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),function(e){return n.map((function(e){return e.name.toLowerCase()})).includes(e.toLowerCase())}(i)?alert("".concat(i," is already in contacts.")):(t(i,d),m())},children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{type:"text",name:"name",onChange:f,value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",onChange:f,value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(u.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})}n(17);var b=function(e){var t=e.value,n=e.onChange;return Object(u.jsx)("div",{className:"filter-container",children:Object(u.jsxs)("label",{className:"filter-lable",children:["Find contacts by name",Object(u.jsx)("input",{className:"filter-input",value:t,onChange:n,type:"text",name:"filter",required:!0})]})})},d=(n(18),function(e){var t=e.contacts,n=e.removeContact;return Object(u.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{className:"name",children:[" ",t,":"]}),Object(u.jsxs)("span",{className:"tel",children:[" ",a]}),Object(u.jsx)("button",{type:"button",className:"contact-btn btn",onClick:function(){return n(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c)}))})}),j=n(8),m=n.n(j);function f(){var e,t=Object(a.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),j=Object(s.a)(i,2),f=j[0],h=j[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var O=c.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Phoneboock"}),Object(u.jsx)(l,{submit:function(e,t){var n={id:m.a.generate(),name:e,number:t};r((function(e){return[].concat(Object(o.a)(e),[n])}))},contacts:c}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(b,{value:f,onChange:function(e){h(e.target.value)}}),Object(u.jsx)(d,{contacts:O,removeContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fd64f8c6.chunk.js.map