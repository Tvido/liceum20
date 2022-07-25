(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[21],{588:function(e,r,t){"use strict";var a=t(0),c=t.n(a).a.createContext(null);c.displayName="CardContext",r.a=c},589:function(e,r,t){"use strict";var a=t(4),c=t(0),s=t.n(c),n=t(26),d=t.n(n);r.a=function(e){return s.a.forwardRef((function(r,t){return s.a.createElement("div",Object(a.a)({},r,{ref:t,className:d()(r.className,e)}))}))}},598:function(e,r,t){"use strict";var a=t(4),c=t(10),s=t(26),n=t.n(s),d=t(0),i=t.n(d),b=t(33),l=t(80),j=t(589),o=t(588),O=["bsPrefix","className","variant","as"],h=i.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,d=e.variant,l=e.as,j=void 0===l?"img":l,o=Object(c.a)(e,O),h=Object(b.a)(t,"card-img");return i.a.createElement(j,Object(a.a)({ref:r,className:n()(d?h+"-"+d:h,s)},o))}));h.displayName="CardImg",h.defaultProps={variant:null};var x=h,u=["bsPrefix","className","bg","text","border","body","children","as"],f=Object(j.a)("h5"),m=Object(j.a)("h6"),v=Object(l.a)("card-body"),p=Object(l.a)("card-title",{Component:f}),N=Object(l.a)("card-subtitle",{Component:m}),y=Object(l.a)("card-link",{Component:"a"}),g=Object(l.a)("card-text",{Component:"p"}),P=Object(l.a)("card-header"),C=Object(l.a)("card-footer"),E=Object(l.a)("card-img-overlay"),w=i.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,l=e.bg,j=e.text,O=e.border,h=e.body,x=e.children,f=e.as,m=void 0===f?"div":f,p=Object(c.a)(e,u),N=Object(b.a)(t,"card"),y=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return i.a.createElement(o.a.Provider,{value:y},i.a.createElement(m,Object(a.a)({ref:r},p,{className:n()(s,N,l&&"bg-"+l,j&&"text-"+j,O&&"border-"+O)}),h?i.a.createElement(v,null,x):x))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=x,w.Title=p,w.Subtitle=N,w.Body=v,w.Link=y,w.Text=g,w.Header=P,w.Footer=C,w.ImgOverlay=E;r.a=w},599:function(e,r,t){"use strict";var a=t(4),c=t(10),s=t(26),n=t.n(s),d=t(0),i=t.n(d),b=t(33),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=i.a.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,d=e.striped,j=e.bordered,o=e.borderless,O=e.hover,h=e.size,x=e.variant,u=e.responsive,f=Object(c.a)(e,l),m=Object(b.a)(t,"table"),v=n()(s,m,x&&m+"-"+x,h&&m+"-"+h,d&&m+"-striped",j&&m+"-bordered",o&&m+"-borderless",O&&m+"-hover"),p=i.a.createElement("table",Object(a.a)({},f,{className:v,ref:r}));if(u){var N=m+"-responsive";return"string"===typeof u&&(N=N+"-"+u),i.a.createElement("div",{className:N},p)}return p}));r.a=j},868:function(e,r,t){"use strict";t.r(r);var a=t(0),c=t.n(a),s=t(598),n=t(599),d=t(1);r.default=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("h5",{children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u0435 \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0438 , \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u201c\u0417\u0430\u0445\u0438\u0441\u0442 \u0423\u043a\u0440\u0430\u0457\u043d\u0438\u201d, \u043e\u0441\u043d\u043e\u0432 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"}),Object(d.jsx)(s.a.Body,{children:Object(d.jsx)(n.a,{responsive:!0,hover:!0,children:Object(d.jsxs)("tbody",{children:[Object(d.jsx)("tr",{children:Object(d.jsxs)("td",{children:[Object(d.jsx)("b",{children:"\u0411\u0435\u043a\u0435\u0440 \u0420\u043e\u043c\u0430\u043d \u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0438\u0447"})," \u2013 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0444\u0456\u0437\u0438\u0447\u043d\u043e\u0457 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0438, \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u201c\u0417\u0430\u0445\u0438\u0441\u0442 \u0412\u0456\u0442\u0447\u0438\u0437\u043d\u0438\u201d, \u043e\u0441\u043d\u043e\u0432 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"]})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0414\u0435\u0444\u0435\u0440 \u0422\u0430\u0440\u0430\u0441 \u041c\u0438\u043a\u043e\u043b\u0430\u0439\u043e\u0432\u0438\u0447"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0413\u0430\u0439\u0434\u0435\u0439\u0447\u0443\u043a \u041b\u0430\u0440\u0438\u0441\u0430 \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041b\u0438\u043f\u043e\u0432\u0435\u0446\u044c\u043a\u0438\u0439 \u0421\u0442\u0435\u043f\u0430\u043d \u0406\u043b\u044c\u043a\u043e\u0432\u0438\u0447"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041a\u0430\u0441\u043f\u0435\u0440\u0441\u044c\u043a\u0430 \u041d\u0430\u0434\u0456\u044f \u0406\u0432\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041f\u043b\u0438\u0441\u0430\u043a \u042e\u043b\u0456\u044f \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u042f\u0446\u0443\u0449\u0430\u043a \u0421\u0432\u044f\u0442\u043e\u0441\u043b\u0430\u0432 \u041c\u0438\u0440\u043e\u0441\u043b\u0430\u0432\u043e\u0432\u0438\u0447"})})})]})})})]})}}}]);
//# sourceMappingURL=21.1cab1c0d.chunk.js.map