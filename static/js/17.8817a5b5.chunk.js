(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[17],{588:function(e,t,r){"use strict";var c=r(0),a=r.n(c).a.createContext(null);a.displayName="CardContext",t.a=a},589:function(e,t,r){"use strict";var c=r(4),a=r(0),s=r.n(a),n=r(26),j=r.n(n);t.a=function(e){return s.a.forwardRef((function(t,r){return s.a.createElement("div",Object(c.a)({},t,{ref:r,className:j()(t.className,e)}))}))}},598:function(e,t,r){"use strict";var c=r(4),a=r(10),s=r(26),n=r.n(s),j=r(0),d=r.n(j),b=r(33),i=r(80),l=r(589),O=r(588),h=["bsPrefix","className","variant","as"],o=d.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,j=e.variant,i=e.as,l=void 0===i?"img":i,O=Object(a.a)(e,h),o=Object(b.a)(r,"card-img");return d.a.createElement(l,Object(c.a)({ref:t,className:n()(j?o+"-"+j:o,s)},O))}));o.displayName="CardImg",o.defaultProps={variant:null};var x=o,f=["bsPrefix","className","bg","text","border","body","children","as"],u=Object(l.a)("h5"),m=Object(l.a)("h6"),v=Object(i.a)("card-body"),p=Object(i.a)("card-title",{Component:u}),y=Object(i.a)("card-subtitle",{Component:m}),g=Object(i.a)("card-link",{Component:"a"}),N=Object(i.a)("card-text",{Component:"p"}),k=Object(i.a)("card-header"),P=Object(i.a)("card-footer"),C=Object(i.a)("card-img-overlay"),E=d.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,i=e.bg,l=e.text,h=e.border,o=e.body,x=e.children,u=e.as,m=void 0===u?"div":u,p=Object(a.a)(e,f),y=Object(b.a)(r,"card"),g=Object(j.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return d.a.createElement(O.a.Provider,{value:g},d.a.createElement(m,Object(c.a)({ref:t},p,{className:n()(s,y,i&&"bg-"+i,l&&"text-"+l,h&&"border-"+h)}),o?d.a.createElement(v,null,x):x))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=x,E.Title=p,E.Subtitle=y,E.Body=v,E.Link=g,E.Text=N,E.Header=k,E.Footer=P,E.ImgOverlay=C;t.a=E},599:function(e,t,r){"use strict";var c=r(4),a=r(10),s=r(26),n=r.n(s),j=r(0),d=r.n(j),b=r(33),i=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],l=d.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,j=e.striped,l=e.bordered,O=e.borderless,h=e.hover,o=e.size,x=e.variant,f=e.responsive,u=Object(a.a)(e,i),m=Object(b.a)(r,"table"),v=n()(s,m,x&&m+"-"+x,o&&m+"-"+o,j&&m+"-striped",l&&m+"-bordered",O&&m+"-borderless",h&&m+"-hover"),p=d.a.createElement("table",Object(c.a)({},u,{className:v,ref:t}));if(f){var y=m+"-responsive";return"string"===typeof f&&(y=y+"-"+f),d.a.createElement("div",{className:y},p)}return p}));t.a=l},866:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),s=r(598),n=r(599),j=r(1);t.default=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h5",{children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u0435 \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0456\u043d\u043e\u0437\u0435\u043c\u043d\u0438\u0445 \u043c\u043e\u0432"}),Object(j.jsx)(s.a.Body,{children:Object(j.jsx)(n.a,{responsive:!0,hover:!0,children:Object(j.jsxs)("tbody",{children:[Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:[Object(j.jsx)("b",{children:"\u041c\u0430\u0441\u043b\u044f\u043a \u0422\u0435\u0442\u044f\u043d\u0430 \u0420\u043e\u043c\u0430\u043d\u0456\u0432\u043d\u0430"})," \u2013 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0456\u043d\u043e\u0437\u0435\u043c\u043d\u0438\u0445 \u043c\u043e\u0432"]})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u041f\u0430\u043b\u0430\u043c\u0430\u0440\u0435\u043d\u043a\u043e \u0420\u043e\u043c\u0430\u043d \u0406\u0432\u0430\u043d\u043e\u0432\u0438\u0447"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u041c\u043e\u043d\u044e\u043a \u0406\u0440\u0438\u043d\u0430 \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0420\u0438\u043d\u0434\u0438\u0447 \u0421\u0442\u0435\u0444\u0430\u043d\u0456\u044f \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0406\u0432\u0430\u043d\u0443\u0441 \u041b\u044e\u0434\u043c\u0438\u043b\u0430 \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://khrystynakalyniuk.blogspot.com/",children:"\u041a\u0430\u043b\u0438\u043d\u044e\u043a \u0425\u0440\u0438\u0441\u0442\u0438\u043d\u0430 \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0422\u0440\u043e\u0449\u0443\u043a \u041c\u0430\u0440\u0456\u044f \u041c\u0438\u0445\u0430\u0439\u043b\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u041c\u0438\u0445\u0430\u0439\u043b\u044e\u043a \u041c\u0430\u0440\u0456\u044f \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0411\u0443\u043d\u044f\u043a \u0425\u0440\u0438\u0441\u0442\u0438\u043d\u0430 \u0406\u0433\u043e\u0440\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u041f\u0456\u043d\u0447\u0430\u043a \u041b\u0435\u0441\u044f \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0428\u0435\u0432\u0447\u0443\u043a \u0413\u0430\u043b\u0438\u043d\u0430 \u041f\u0435\u0442\u0440\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0412\u0430\u0441\u0438\u043b\u0435\u043d\u0447\u0443\u043a \u041d\u0430\u0442\u0430\u043b\u0456\u044f \u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u041a\u043e\u0433\u0443\u0447 \u0425\u0440\u0438\u0441\u0442\u0438\u043d\u0430 \u041e\u043b\u0435\u0433\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://myfirstenglishblogkalytchuk.blogspot.com/",children:"\u041a\u0430\u043b\u0438\u0442\u0447\u0443\u043a \u042e\u043b\u0456\u044f \u0420\u043e\u043c\u0430\u043d\u0456\u0432\u043d\u0430"})})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0412\u0438\u043d\u043d\u0438\u0447\u0443\u043a \u041b\u0435\u0441\u044f \u0419\u043e\u0441\u0438\u043f\u0456\u0432\u043d\u0430"})})}),Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)("b",{children:"\u0425\u0443\u0434\u0435\u0446\u044c\u043a\u0430 \u0406\u0440\u0438\u043d\u0430 \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})})]})})})]})}}}]);
//# sourceMappingURL=17.8817a5b5.chunk.js.map