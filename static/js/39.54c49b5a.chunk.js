(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[39],{568:function(e,r,a){"use strict";var t=a(0),c=a.n(t).a.createContext(null);c.displayName="CardContext",r.a=c},569:function(e,r,a){"use strict";var t=a(7),c=a(16),s=a(75),n=a.n(s),i=a(0),d=a.n(i),l=a(109),o=/-(.)/g;var b=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(r=e,r.replace(o,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function f(e,r){var a=void 0===r?{}:r,s=a.displayName,i=void 0===s?j(e):s,o=a.Component,f=a.defaultProps,u=d.a.forwardRef((function(r,a){var s=r.className,i=r.bsPrefix,j=r.as,f=void 0===j?o||"div":j,u=Object(c.a)(r,b),m=Object(l.a)(i,e);return d.a.createElement(f,Object(t.a)({ref:a,className:n()(s,m)},u))}));return u.defaultProps=f,u.displayName=i,u}var u=function(e){return d.a.forwardRef((function(r,a){return d.a.createElement("div",Object(t.a)({},r,{ref:a,className:n()(r.className,e)}))}))},m=a(568),h=["bsPrefix","className","variant","as"],v=d.a.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.variant,o=e.as,b=void 0===o?"img":o,j=Object(c.a)(e,h),f=Object(l.a)(a,"card-img");return d.a.createElement(b,Object(t.a)({ref:r,className:n()(i?f+"-"+i:f,s)},j))}));v.displayName="CardImg",v.defaultProps={variant:null};var x=v,O=["bsPrefix","className","bg","text","border","body","children","as"],p=u("h5"),N=u("h6"),y=f("card-body"),g=f("card-title",{Component:p}),P=f("card-subtitle",{Component:N}),C=f("card-link",{Component:"a"}),w=f("card-text",{Component:"p"}),E=f("card-header"),k=f("card-footer"),R=f("card-img-overlay"),B=d.a.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,o=e.bg,b=e.text,j=e.border,f=e.body,u=e.children,h=e.as,v=void 0===h?"div":h,x=Object(c.a)(e,O),p=Object(l.a)(a,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return d.a.createElement(m.a.Provider,{value:N},d.a.createElement(v,Object(t.a)({ref:r},x,{className:n()(s,p,o&&"bg-"+o,b&&"text-"+b,j&&"border-"+j)}),f?d.a.createElement(y,null,u):u))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=x,B.Title=g,B.Subtitle=P,B.Body=y,B.Link=C,B.Text=w,B.Header=E,B.Footer=k,B.ImgOverlay=R;r.a=B},571:function(e,r,a){"use strict";var t=a(7),c=a(16),s=a(75),n=a.n(s),i=a(0),d=a.n(i),l=a(109),o=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],b=d.a.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,i=e.striped,b=e.bordered,j=e.borderless,f=e.hover,u=e.size,m=e.variant,h=e.responsive,v=Object(c.a)(e,o),x=Object(l.a)(a,"table"),O=n()(s,x,m&&x+"-"+m,u&&x+"-"+u,i&&x+"-striped",b&&x+"-bordered",j&&x+"-borderless",f&&x+"-hover"),p=d.a.createElement("table",Object(t.a)({},v,{className:O,ref:r}));if(h){var N=x+"-responsive";return"string"===typeof h&&(N=N+"-"+h),d.a.createElement("div",{className:N},p)}return p}));r.a=b},586:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a.n(t),s=a(569),n=a(571),i=a(1);r.default=function(){return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)("div",{class:"article__wrapper",children:[Object(i.jsx)("h5",{children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u0435 \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0456\u0457, \u0431\u0456\u043e\u043b\u043e\u0433\u0456\u0457, \u0445\u0456\u043c\u0456\u0457"}),Object(i.jsx)(s.a.Body,{children:Object(i.jsx)(n.a,{responsive:!0,hover:!0,children:Object(i.jsxs)("tbody",{children:[Object(i.jsx)("tr",{children:Object(i.jsxs)("td",{children:[Object(i.jsx)("b",{children:"\u0412\u0430\u043d\u0437\u0456\u043b\u044f\u043a \u041d\u0430\u0434\u0456\u044f \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\u043d\u0430"})," \u2013 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0456\u0457, \u0431\u0456\u043e\u043b\u043e\u0433\u0456\u0457, \u0445\u0456\u043c\u0456\u0457"]})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0421\u043c\u043e\u043b\u044f\u043a \u041d\u0430\u0442\u0430\u043b\u0456\u044f \u0406\u0432\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0420\u0443\u0431\u043b\u0438\u043a \u041b\u044e\u0431\u043e\u0432 \u0410\u0434\u0430\u043c\u0456\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0413\u043e\u043b\u0454\u0432\u0430 \u0412\u0456\u0440\u0430 \u0410\u043d\u0430\u0442\u043e\u043b\u0456\u0457\u0432\u043d\u0430"})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://katrych-irina.blogspot.com/",children:"\u041a\u0430\u0442\u0440\u0438\u0447 \u0406\u0440\u0438\u043d\u0430 \u0411\u043e\u0433\u0434\u0430\u043d\u0456\u0432\u043d\u0430"})})})}),Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("b",{children:"\u0413\u0430\u0440\u0456\u0434\u0436\u0443\u043a \u0421\u0432\u0456\u0442\u043b\u0430\u043d\u0430 \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})})]})})})]})})}}}]);
//# sourceMappingURL=39.54c49b5a.chunk.js.map