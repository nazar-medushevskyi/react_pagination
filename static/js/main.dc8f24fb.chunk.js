(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),r=c(2),i=c(1);c(9);var l=c(0),o=function(e){var t=e.total,c=e.perPage,a=e.currentPage,n=void 0===a?1:a,r=e.onPageChange,i=new Array(Math.ceil(t/c)).fill("item"),o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t&&r(e)};return Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:"".concat(1===n?"disabled ":"","page-item"),children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===n,onClick:function(){return o(n-1,1!==n)},children:"\xab"})}),i.map((function(e,t){return Object(l.jsx)("li",{className:"".concat(n-1===t?"active":""," page-item"),children:Object(l.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(t+1),onClick:function(){return o(t+1)},children:t+1})})})),Object(l.jsx)("li",{className:"".concat(n===i.length?"disabled ":"","page-item"),children:Object(l.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n===i.length,onClick:function(){return o(n+1,n!==i.length)},children:"\xbb"})})]})},s=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(i.useState)(s),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(5),j=Object(r.a)(n,2),u=j[0],d=j[1],b=Object(i.useState)(1),h=Object(r.a)(b,2),p=h[0],g=h[1],m=Object(i.useState)(""),O=Object(r.a)(m,2),f=O[0],x=O[1],v=s.length;return Object(i.useEffect)((function(){var e=(p-1)*u+1,t=e+u-1;a(s.slice(e-1,t)),x("".concat(e," - ").concat(t>v?v:t))}),[p,u]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(p," (items ").concat(f," of ").concat(v,")")}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:u,onChange:function(e){return t=+e.target.value,d(t),void g((function(){return 1}));var t},children:[Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"5",children:"5"}),Object(l.jsx)("option",{value:"10",children:"10"}),Object(l.jsx)("option",{value:"20",children:"20"})]})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(o,{total:v,perPage:u,currentPage:p,onPageChange:function(e){g((function(){return e}))}}),Object(l.jsx)("ul",{children:c.map((function(e,t){return t<u&&Object(l.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.dc8f24fb.chunk.js.map