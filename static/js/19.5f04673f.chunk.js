(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[19],{568:function(e,r,t){"use strict";var a=t(0),c=t.n(a).a.createContext(null);c.displayName="CardContext",r.a=c},569:function(e,r,t){"use strict";var a=t(7),c=t(16),s=t(75),n=t.n(s),i=t(0),d=t.n(i),l=t(109),b=/-(.)/g;var o=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(r=e,r.replace(b,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function f(e,r){var t=void 0===r?{}:r,s=t.displayName,i=void 0===s?j(e):s,b=t.Component,f=t.defaultProps,u=d.a.forwardRef((function(r,t){var s=r.className,i=r.bsPrefix,j=r.as,f=void 0===j?b||"div":j,u=Object(c.a)(r,o),m=Object(l.a)(i,e);return d.a.createElement(f,Object(a.a)({ref:t,className:n()(s,m)},u))}));return u.defaultProps=f,u.displayName=i,u}var u=function(e){return d.a.forwardRef((function(r,t){return d.a.createElement("div",Object(a.a)({},r,{ref:t,className:n()(r.className,e)}))}))},m=t(568),x=["bsPrefix","className","variant","as"],O=d.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,i=e.variant,b=e.as,o=void 0===b?"img":b,j=Object(c.a)(e,x),f=Object(l.a)(t,"card-img");return d.a.createElement(o,Object(a.a)({ref:r,className:n()(i?f+"-"+i:f,s)},j))}));O.displayName="CardImg",O.defaultProps={variant:null};var h=O,v=["bsPrefix","className","bg","text","border","body","children","as"],p=u("h5"),N=u("h6"),y=f("card-body"),P=f("card-title",{Component:p}),g=f("card-subtitle",{Component:N}),C=f("card-link",{Component:"a"}),E=f("card-text",{Component:"p"}),w=f("card-header"),R=f("card-footer"),k=f("card-img-overlay"),B=d.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,b=e.bg,o=e.text,j=e.border,f=e.body,u=e.children,x=e.as,O=void 0===x?"div":x,h=Object(c.a)(e,v),p=Object(l.a)(t,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return d.a.createElement(m.a.Provider,{value:N},d.a.createElement(O,Object(a.a)({ref:r},h,{className:n()(s,p,b&&"bg-"+b,o&&"text-"+o,j&&"border-"+j)}),f?d.a.createElement(y,null,u):u))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=h,B.Title=P,B.Subtitle=g,B.Body=y,B.Link=C,B.Text=E,B.Header=w,B.Footer=R,B.ImgOverlay=k;r.a=B},570:function(e,r,t){"use strict";var a=t(7),c=t(16),s=t(75),n=t.n(s),i=t(0),d=t.n(i),l=t(109),b=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],o=d.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,i=e.striped,o=e.bordered,j=e.borderless,f=e.hover,u=e.size,m=e.variant,x=e.responsive,O=Object(c.a)(e,b),h=Object(l.a)(t,"table"),v=n()(s,h,m&&h+"-"+m,u&&h+"-"+u,i&&h+"-striped",o&&h+"-bordered",j&&h+"-borderless",f&&h+"-hover"),p=d.a.createElement("table",Object(a.a)({},O,{className:v,ref:r}));if(x){var N=h+"-responsive";return"string"===typeof x&&(N=N+"-"+x),d.a.createElement("div",{className:N},p)}return p}));r.a=o},589:function(e,r,t){"use strict";t.r(r);var a=t(0),c=t.n(a),s=t(569),n=t(570),i=t(1);r.default=function(){return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("h5",{children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u0435 \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0438 , \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u201c\u0417\u0430\u0445\u0438\u0441\u0442 \u0423\u043a\u0440\u0430\u0457\u043d\u0438\u201d, \u043e\u0441\u043d\u043e\u0432 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"}),Object(i.jsx)(s.a.Body,{children:Object(i.jsx)(n.a,{responsive:!0,hover:!0,children:Object(i.jsxs)("tbody",{children:[Object(i.jsx)("tr",{children:Object(i.jsxs)("td",{children:[Object(i.jsx)("b",{children:"\u0411\u0435\u043a\u0435\u0440 \u0420\u043e\u043c\u0430\u043d \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0438\u0447"})," \u2013 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0438, \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u201c\u0417\u0430\u0445\u0438\u0441\u0442 \u0412\u0456\u0442\u0447\u0438\u0437\u043d\u0438\u201d, \u043e\u0441\u043d\u043e\u0432 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"]})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0414\u0435\u0444\u0435\u0440 \u0422\u0430\u0440\u0430\u0441 \u041c\u0438\u043a\u043e\u043b\u0430\u0439\u043e\u0432\u0438\u0447"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0413\u0430\u0439\u0434\u0435\u0439\u0447\u0443\u043a \u041b\u0430\u0440\u0438\u0441\u0430 \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u041b\u0438\u043f\u043e\u0432\u0435\u0446\u044c\u043a\u0438\u0439 \u0421\u0442\u0435\u043f\u0430\u043d \u0406\u043b\u044c\u043a\u043e\u0432\u0438\u0447"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u041a\u0430\u0441\u043f\u0435\u0440\u0441\u044c\u043a\u0430 \u041d\u0430\u0434\u0456\u044f \u0406\u0432\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u041f\u043b\u0438\u0441\u0430\u043a \u042e\u043b\u0456\u044f \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0456\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u042f\u0446\u0443\u0449\u0430\u043a \u0421\u0432\u044f\u0442\u043e\u0441\u043b\u0430\u0432 \u041c\u0438\u0440\u043e\u0441\u043b\u0430\u0432\u043e\u0432\u0438\u0447"})})})]})})})]})}}}]);
//# sourceMappingURL=19.5f04673f.chunk.js.map