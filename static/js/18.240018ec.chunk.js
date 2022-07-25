(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[18],{588:function(e,t,r){"use strict";var c=r(0),a=r.n(c).a.createContext(null);a.displayName="CardContext",t.a=a},589:function(e,t,r){"use strict";var c=r(4),a=r(0),s=r.n(a),n=r(26),d=r.n(n);t.a=function(e){return s.a.forwardRef((function(t,r){return s.a.createElement("div",Object(c.a)({},t,{ref:r,className:d()(t.className,e)}))}))}},598:function(e,t,r){"use strict";var c=r(4),a=r(10),s=r(26),n=r.n(s),d=r(0),j=r.n(d),b=r(33),i=r(80),l=r(589),O=r(588),o=["bsPrefix","className","variant","as"],h=j.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,d=e.variant,i=e.as,l=void 0===i?"img":i,O=Object(a.a)(e,o),h=Object(b.a)(r,"card-img");return j.a.createElement(l,Object(c.a)({ref:t,className:n()(d?h+"-"+d:h,s)},O))}));h.displayName="CardImg",h.defaultProps={variant:null};var x=h,u=["bsPrefix","className","bg","text","border","body","children","as"],f=Object(l.a)("h5"),m=Object(l.a)("h6"),v=Object(i.a)("card-body"),p=Object(i.a)("card-title",{Component:f}),N=Object(i.a)("card-subtitle",{Component:m}),y=Object(i.a)("card-link",{Component:"a"}),g=Object(i.a)("card-text",{Component:"p"}),P=Object(i.a)("card-header"),C=Object(i.a)("card-footer"),E=Object(i.a)("card-img-overlay"),w=j.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,i=e.bg,l=e.text,o=e.border,h=e.body,x=e.children,f=e.as,m=void 0===f?"div":f,p=Object(a.a)(e,u),N=Object(b.a)(r,"card"),y=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return j.a.createElement(O.a.Provider,{value:y},j.a.createElement(m,Object(c.a)({ref:t},p,{className:n()(s,N,i&&"bg-"+i,l&&"text-"+l,o&&"border-"+o)}),h?j.a.createElement(v,null,x):x))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=x,w.Title=p,w.Subtitle=N,w.Body=v,w.Link=y,w.Text=g,w.Header=P,w.Footer=C,w.ImgOverlay=E;t.a=w},599:function(e,t,r){"use strict";var c=r(4),a=r(10),s=r(26),n=r.n(s),d=r(0),j=r.n(d),b=r(33),i=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],l=j.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,d=e.striped,l=e.bordered,O=e.borderless,o=e.hover,h=e.size,x=e.variant,u=e.responsive,f=Object(a.a)(e,i),m=Object(b.a)(r,"table"),v=n()(s,m,x&&m+"-"+x,h&&m+"-"+h,d&&m+"-striped",l&&m+"-bordered",O&&m+"-borderless",o&&m+"-hover"),p=j.a.createElement("table",Object(c.a)({},f,{className:v,ref:t}));if(u){var N=m+"-responsive";return"string"===typeof u&&(N=N+"-"+u),j.a.createElement("div",{className:N},p)}return p}));t.a=l},862:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),s=r(598),n=r(599),d=r(1);t.default=function(){return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("h5",{children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u0435 \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0457 \u043c\u043e\u0432\u0438 \u0456 \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438, \u0437\u0430\u0440\u0443\u0431\u0456\u0436\u043d\u043e\u0457 \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438"}),Object(d.jsx)(s.a.Body,{children:Object(d.jsx)(n.a,{responsive:!0,hover:!0,children:Object(d.jsxs)("tbody",{children:[Object(d.jsx)("tr",{children:Object(d.jsxs)("td",{children:[Object(d.jsx)("b",{children:"\u041d\u0435\u0441\u0442\u0435\u0440\u0443\u043a \u0413\u0430\u043d\u043d\u0430 \u0410\u043d\u0442\u043e\u043d\u0456\u0432\u043d\u0430"})," \u2013 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a \u043c\u0435\u0442\u043e\u0434\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0432\u0447\u0438\u0442\u0435\u043b\u0456\u0432 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0457 \u043c\u043e\u0432\u0438 \u0456 \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438, \u0437\u0430\u0440\u0443\u0431\u0456\u0436\u043d\u043e\u0457 \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0438"]})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0422\u0443\u0433\u0430\u0439 \u0406\u0440\u0438\u043d\u0430 \u041c\u0438\u0445\u0430\u0439\u043b\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041b\u0438\u043f\u0435\u0446\u044c\u043a\u0430 \u0421\u0432\u0456\u0442\u043b\u0430\u043d\u0430 \u0419\u043e\u0441\u0438\u0444\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0413\u0443\u0440\u043e\u0432\u0430 \u041e\u043a\u0441\u0430\u043d\u0430 \u0410\u043d\u0434\u0440\u0456\u0457\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0428\u0435\u0433\u0434\u0430 \u041c\u0430\u0440\u2019\u044f\u043d\u0430 \u0404\u0433\u043e\u0440\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0424\u0435\u0434\u043e\u0440\u0447\u0443\u043a \u041d\u0430\u0442\u0430\u043b\u0456\u044f \u0412\u0430\u0441\u0438\u043b\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041a\u0456\u043d\u0434\u0456\u0439 \u0422\u0435\u0442\u044f\u043d\u0430 \u0411\u043e\u0433\u0434\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041f\u0430\u0432\u043b\u0456\u043a\u043e\u0432\u0430 \u0413\u0430\u043b\u0438\u043d\u0430 \u0410\u043d\u0430\u0442\u043e\u043b\u0456\u0457\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0421\u0442\u0435\u043b\u044c\u043c\u0430\u0445 \u041d\u0430\u0442\u0430\u043b\u0456\u044f \u042e\u0440\u0456\u0457\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0421\u043a\u0438\u0434\u0430\u043d\u0447\u0443\u043a \u0414\u043c\u0438\u0442\u0440\u043e \u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0413\u0440\u0435\u043a\u0443\u043b \u0413\u0430\u043b\u0438\u043d\u0430 \u0406\u0432\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0425\u0438\u0431\u0456\u043d\u044c \u041e\u043a\u0441\u0430\u043d\u0430 \u0417\u0456\u043d\u043e\u0432\u0456\u0457\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u0421\u043a\u0440\u0438\u043f\u043d\u0438\u043a \u041c\u0430\u0440\u2019\u044f\u043d\u0430 \u0406\u0432\u0430\u043d\u0456\u0432\u043d\u0430"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("b",{children:"\u041b\u0438\u0441 \u0406\u0440\u0438\u043d\u0430 \u0412\u043e\u043b\u043e\u0434\u0438\u043c\u0438\u0440\u0456\u0432\u043d\u0430"})})})]})})})]})}}}]);
//# sourceMappingURL=18.240018ec.chunk.js.map