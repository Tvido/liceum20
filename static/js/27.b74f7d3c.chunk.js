(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[27],{568:function(e,a,r){"use strict";var c=r(0),t=r.n(c).a.createContext(null);t.displayName="CardContext",a.a=t},569:function(e,a,r){"use strict";var c=r(7),t=r(16),i=r(75),l=r.n(i),s=r(0),n=r.n(s),d=r(109),j=/-(.)/g;var o=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(a=e,a.replace(j,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var r=void 0===a?{}:a,i=r.displayName,s=void 0===i?b(e):i,j=r.Component,u=r.defaultProps,x=n.a.forwardRef((function(a,r){var i=a.className,s=a.bsPrefix,b=a.as,u=void 0===b?j||"div":b,x=Object(t.a)(a,o),f=Object(d.a)(s,e);return n.a.createElement(u,Object(c.a)({ref:r,className:l()(i,f)},x))}));return x.defaultProps=u,x.displayName=s,x}var x=function(e){return n.a.forwardRef((function(a,r){return n.a.createElement("div",Object(c.a)({},a,{ref:r,className:l()(a.className,e)}))}))},f=r(568),h=["bsPrefix","className","variant","as"],O=n.a.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,s=e.variant,j=e.as,o=void 0===j?"img":j,b=Object(t.a)(e,h),u=Object(d.a)(r,"card-img");return n.a.createElement(o,Object(c.a)({ref:a,className:l()(s?u+"-"+s:u,i)},b))}));O.displayName="CardImg",O.defaultProps={variant:null};var m=O,p=["bsPrefix","className","bg","text","border","body","children","as"],v=x("h5"),N=x("h6"),y=u("card-body"),g=u("card-title",{Component:v}),P=u("card-subtitle",{Component:N}),C=u("card-link",{Component:"a"}),E=u("card-text",{Component:"p"}),w=u("card-header"),k=u("card-footer"),R=u("card-img-overlay"),B=n.a.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,j=e.bg,o=e.text,b=e.border,u=e.body,x=e.children,h=e.as,O=void 0===h?"div":h,m=Object(t.a)(e,p),v=Object(d.a)(r,"card"),N=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return n.a.createElement(f.a.Provider,{value:N},n.a.createElement(O,Object(c.a)({ref:a},m,{className:l()(i,v,j&&"bg-"+j,o&&"text-"+o,b&&"border-"+b)}),u?n.a.createElement(y,null,x):x))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=m,B.Title=g,B.Subtitle=P,B.Body=y,B.Link=C,B.Text=E,B.Header=w,B.Footer=k,B.ImgOverlay=R;a.a=B},571:function(e,a,r){"use strict";var c=r(7),t=r(16),i=r(75),l=r.n(i),s=r(0),n=r.n(s),d=r(109),j=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],b=n.a.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,s=e.as,b=void 0===s?"div":s,u=Object(t.a)(e,j),x=Object(d.a)(r,"col"),f=[],h=[];return o.forEach((function(e){var a,r,c,t=u[e];if(delete u[e],"object"===typeof t&&null!=t){var i=t.span;a=void 0===i||i,r=t.offset,c=t.order}else a=t;var l="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+x+l:""+x+l+"-"+a),null!=c&&h.push("order"+l+"-"+c),null!=r&&h.push("offset"+l+"-"+r)})),f.length||f.push(x),n.a.createElement(b,Object(c.a)({},u,{ref:a,className:l.a.apply(void 0,[i].concat(f,h))}))}));b.displayName="Col",a.a=b},639:function(e,a,r){"use strict";r.r(a);var c=r(0),t=r.n(c),i=r(571),l=r(569),s=r.p+"static/media/one.989ca7dc.jpg",n=r(1);a.default=function(){return Object(n.jsxs)(t.a.Fragment,{children:[Object(n.jsx)("h5",{children:"\u041f\u041e\u0420\u0410\u0414\u0418 \u0411\u0410\u0422\u042c\u041a\u0410\u041c \u044f\u043a \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 \u0434\u0438\u0442\u0438\u043d\u0456 \u0432 \u043f\u0435\u0440\u0456\u043e\u0434 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u0457"}),Object(n.jsx)("p",{children:"\u0411\u0443\u0434\u044c \u2013 \u044f\u043a\u0456 \u043f\u0435\u0440\u0435\u0445\u0456\u0434\u043d\u0456 \u043f\u0435\u0440\u0456\u043e\u0434\u0438 \u0436\u0438\u0442\u0442\u044f \u0456 \u0434\u0456\u044f\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0434\u0456\u0442\u0435\u0439 \u0432\u0438\u0441\u0443\u0432\u0430\u044e\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0444\u0456\u0447\u043d\u0456 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438, \u0449\u043e \u043f\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u0456 \u0437\u0456 \u0437\u043c\u0456\u043d\u043e\u044e \u0432 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u043e\u0457 \u0434\u0456\u044f\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0443 \u0441\u0435\u0440\u0435\u0434\u043d\u0456\u0445 \u043a\u043b\u0430\u0441\u0430\u0445. \u0423\u043c\u043e\u0432\u0438, \u044f\u043a\u0456 \u0437\u043c\u0456\u043d\u0438\u043b\u0438\u0441\u044f, \u043f\u0440\u0435\u0434\u2019\u044f\u0432\u043b\u044f\u044e\u0442\u044c \u0431\u0456\u043b\u044c\u0448 \u0432\u0438\u0441\u043e\u043a\u0456 \u0432\u0438\u043c\u043e\u0433\u0438 \u0434\u043e \u0456\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0456 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0456\u0441\u043d\u043e\u0433\u043e \u0440\u043e\u0437\u0432\u0438\u0442\u043a\u0443, \u0434\u043e \u0441\u0442\u0443\u043f\u0435\u043d\u044f \u0441\u0444\u043e\u0440\u043c\u043e\u0432\u0430\u043d\u043e\u0441\u0442\u0456 \u0443 \u0434\u0456\u0442\u0435\u0439 \u043f\u0435\u0432\u043d\u0438\u0445 \u0443\u0447\u0431\u043e\u0432\u0438\u0445 \u0437\u043d\u0430\u043d\u044c, \u0434\u0456\u0439, \u043d\u0430\u0432\u0438\u0447\u043e\u043a. \u041f\u0440\u043e\u0446\u0435\u0441 \u0437\u0432\u0438\u043a\u0430\u043d\u043d\u044f \u0434\u043e \u0448\u043a\u0456\u043b\u044c\u043d\u0438\u0445 \u0432\u0438\u043c\u043e\u0433 \u0456 \u043f\u043e\u0440\u044f\u0434\u043a\u0456\u0432, \u043d\u043e\u0432\u043e\u0433\u043e \u0434\u043b\u044f \u043f\u2019\u044f\u0442\u0438\u043a\u043b\u0430\u0441\u043d\u0438\u043a\u0456\u0432 \u043e\u0442\u043e\u0447\u0435\u043d\u043d\u044f, \u043d\u043e\u0432\u0438\u0445 \u0443\u043c\u043e\u0432 \u0436\u0438\u0442\u0442\u044f \u0440\u043e\u0437\u0443\u043c\u0456\u0454\u0442\u044c\u0441\u044f \u044f\u043a \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u044f. \u0410\u0434\u0436\u0435 \u0434\u0438\u0442\u0438\u043d\u0430 \u0432 \u0448\u043a\u043e\u043b\u0456 \u0430\u0434\u0430\u043f\u0442\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0435 \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043e \u0441\u0432\u043e\u0454\u0457 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u043e\u043b\u0456, \u0430\u043b\u0435 \u043f\u0435\u0440\u0448 \u0437\u0430 \u0432\u0441\u0435 \u0434\u043e \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 \u0437\u0430\u0441\u0432\u043e\u0454\u043d\u043d\u044f \u0437\u043d\u0430\u043d\u044c \u0443 \u043d\u043e\u0432\u0438\u0445 \u0443\u043c\u043e\u0432\u0430\u0445."}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"\u042f\u043a\u0449\u043e \u0412\u0430\u0441 \u0449\u043e\u0441\u044c \u0442\u0443\u0440\u0431\u0443\u0454 \u0432 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u0446\u0456 \u0434\u0438\u0442\u0438\u043d\u0438, \u044f\u043a\u043e\u043c\u043e\u0433\u0430 \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0443\u0441\u0442\u0440\u0456\u043d\u044c\u0442\u0435\u0441\u044f \u0456 \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u0456\u0442\u044c \u0446\u0435 \u0456\u0437 \u043a\u043b\u0430\u0441\u043d\u0438\u043c \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a\u043e\u043c, \u0448\u043a\u0456\u043b\u044c\u043d\u0438\u043c \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u043e\u043c."}),Object(n.jsx)("li",{children:"\u042f\u043a\u0449\u043e \u0432 \u0440\u043e\u0434\u0438\u043d\u0456 \u0432\u0456\u0434\u0431\u0443\u043b\u0438\u0441\u044f \u043f\u043e\u0434\u0456\u0457, \u0449\u043e \u0432\u043f\u043b\u0438\u043d\u0443\u043b\u0438 \u043d\u0430 \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0434\u0438\u0442\u0438\u043d\u0438, \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u0442\u0435 \u043f\u0440\u043e \u0446\u0435 \u043a\u043b\u0430\u0441\u043d\u043e\u0433\u043e \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a\u0430. \u0421\u0430\u043c\u0435 \u0437\u043c\u0456\u043d\u0438 \u0432 \u0441\u0456\u043c\u0435\u0439\u043d\u043e\u043c\u0443 \u0436\u0438\u0442\u0442\u0456 \u0447\u0430\u0441\u0442\u043e \u043f\u043e\u044f\u0441\u043d\u044e\u044e\u0442\u044c \u0440\u0430\u043f\u0442\u043e\u0432\u0456 \u0437\u043c\u0456\u043d\u0438 \u0432 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u0446\u0456 \u0434\u0456\u0442\u0435\u0439."}),Object(n.jsx)("li",{children:"\u0426\u0456\u043a\u0430\u0432\u0442\u0435\u0441\u044f \u0448\u043a\u0456\u043b\u044c\u043d\u0438\u043c\u0438 \u0441\u043f\u0440\u0430\u0432\u0430\u043c\u0438, \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u044e\u0439\u0442\u0435 \u0441\u043a\u043b\u0430\u0434\u043d\u0456 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457, \u0440\u0430\u0437\u043e\u043c \u0448\u0443\u043a\u0430\u0439\u0442\u0435 \u0432\u0438\u0445\u0456\u0434 \u0456\u0437 \u043a\u043e\u043d\u0444\u043b\u0456\u043a\u0442\u0456\u0432."}),Object(n.jsx)("li",{children:"\u0414\u043e\u043f\u043e\u043c\u043e\u0436\u0456\u0442\u044c \u0434\u0438\u0442\u0438\u043d\u0456 \u0432\u0438\u0432\u0447\u0438\u0442\u0438 \u0456\u043c\u0435\u043d\u0430 \u043d\u043e\u0432\u0438\u0445 \u0443\u0447\u0438\u0442\u0435\u043b\u0456\u0432, \u0437\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0439\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u0442\u0438 \u0457\u0445, \u0432\u0438\u0434\u0456\u043b\u0438\u0442\u0438 \u044f\u043a\u0456\u0441\u044c \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u0456 \u0440\u0438\u0441\u0438."}),Object(n.jsx)("li",{children:"\u041f\u043e\u0440\u0430\u0434\u044c\u0442\u0435 \u0434\u0438\u0442\u0438\u043d\u0456 \u0432 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044f\u0445 \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044f \u0437\u0430 \u043f\u043e\u0440\u0430\u0434\u043e\u044e \u0434\u043e \u043a\u043b\u0430\u0441\u043d\u043e\u0433\u043e \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u043a\u0430, \u0448\u043a\u0456\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0430."}),Object(n.jsx)("li",{children:"\u041d\u0435 \u0441\u043b\u0456\u0434 \u0432\u0456\u0434\u0440\u0430\u0437\u0443 \u043e\u0441\u043b\u0430\u0431\u043b\u044f\u0442\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0437\u0430 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u043e\u044e \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044e, \u044f\u043a\u0449\u043e \u0432 \u043f\u0435\u0440\u0456\u043e\u0434 \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0432 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0456\u0439 \u0448\u043a\u043e\u043b\u0456 \u0432\u043e\u043d\u0430 \u0437\u0432\u0438\u043a\u043b\u0430 \u0434\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u0437 \u0432\u0430\u0448\u043e\u0433\u043e \u0431\u043e\u043a\u0443. \u041f\u0440\u0438\u0432\u0447\u0430\u0439\u0442\u0435 \u0434\u0438\u0442\u0438\u043d\u0443 \u0434\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u0456\u0439\u043d\u043e\u0441\u0442\u0456 \u043f\u043e\u0441\u0442\u0443\u043f\u043e\u0432\u043e: \u0432\u043e\u043d\u0430 \u043c\u0430\u0454 \u0441\u0430\u043c\u0430 \u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c, \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u043e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u043d\u0438\u043a\u0430\u043c \u0456 \u043f\u0438\u0442\u0430\u0442\u0438 \u043f\u0440\u043e \u0443\u0440\u043e\u043a\u0438 \u0442\u043e\u0449\u043e."}),Object(n.jsx)("li",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0438\u043c\u0438 \u043f\u043e\u043c\u0456\u0447\u043d\u0438\u043a\u0430\u043c\u0438 \u0443 \u0441\u043a\u043b\u0430\u0434\u043d\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044f\u0445 \u0454 \u0442\u0435\u0440\u043f\u0456\u043d\u043d\u044f, \u0443\u0432\u0430\u0433\u0430, \u0440\u043e\u0437\u0443\u043c\u0456\u043d\u043d\u044f."}),Object(n.jsx)("li",{children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0435 \u043d\u043e\u0432\u043e\u0443\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u043e\u0432\u043e\u0433\u043e \u0432\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0435\u0440\u0456\u043e\u0434\u0443 \u2013 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u0442\u044f \u0441\u0432\u043e\u0454\u0457 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456, \u0441\u0432\u043e\u0433\u043e \xab\u042f\xbb. \u041f\u0456\u0434\u0432\u0438\u0449\u0443\u0454\u0442\u044c\u0441\u044f \u0456\u043d\u0442\u0435\u0440\u0435\u0441 \u0434\u043e \u0441\u0432\u043e\u0433\u043e \u0442\u0456\u043b\u0430, \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u043e\u0441\u0442\u0456."}),Object(n.jsx)("li",{children:"\u0417\u0440\u043e\u0441\u0442\u0430\u0454 \u0434\u0443\u0445 \u043d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456, \u044f\u043a\u0438\u0439 \u0432\u043f\u043b\u0438\u0432\u0430\u0454 \u043d\u0430 \u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0438 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0430 \u0432 \u0440\u043e\u0434\u0438\u043d\u0456, \u0448\u043a\u043e\u043b\u0456."}),Object(n.jsx)("li",{children:"\u0423 \u0434\u0456\u0442\u0435\u0439 \u043d\u0430\u0441\u0442\u0430\u0454 \u043a\u0440\u0438\u0437\u0430, \u043f\u043e\u0432\u2019\u044f\u0437\u0430\u043d\u0430 \u0437 \u0431\u0430\u0436\u0430\u043d\u043d\u044f\u043c \u0437\u0434\u043e\u0431\u0443\u0442\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u0456\u0439\u043d\u0456\u0441\u0442\u044c, \u0437\u0432\u0456\u043b\u044c\u043d\u0438\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u0431\u0430\u0442\u044c\u043a\u0456\u0432\u0441\u044c\u043a\u043e\u0457 \u043e\u043f\u0456\u043a\u0438, \u0437\u2019\u044f\u0432\u043b\u044f\u0454\u0442\u044c\u0441\u044f \u0441\u0442\u0440\u0430\u0445 \u043f\u0435\u0440\u0435\u0434 \u043d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u043c \u0434\u043e\u0440\u043e\u0441\u043b\u0438\u043c \u0436\u0438\u0442\u0442\u044f\u043c."}),Object(n.jsx)("li",{children:"\u0411\u0430\u0436\u0430\u043d\u043d\u044f \u0437\u0432\u0456\u043b\u044c\u043d\u0438\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u043f\u043e\u0454\u0434\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u0456 \u0437\u0440\u043e\u0441\u0442\u0430\u043d\u043d\u044f\u043c \u0441\u0430\u043c\u043e\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u0439 \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u043c \u0441\u0432\u0456\u0434\u043e\u043c\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u0432\u0438\u0445\u043e\u0432\u0430\u043d\u043d\u044f."}),Object(n.jsx)("li",{children:"\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439 \u0441\u0432\u0456\u0442 \u0434\u0438\u0442\u0438\u043d\u0438 \u0449\u0435 \u043d\u0435\u0441\u0442\u0430\u0431\u0456\u043b\u044c\u043d\u0438\u0439, \u0442\u043e\u043c\u0443 \u0431\u0430\u0442\u044c\u043a\u0430\u043c \u043d\u0435 \u0441\u043b\u0456\u0434 \u0437\u0430\u043b\u0438\u0448\u0430\u0442\u0438 \u0441\u0432\u043e\u0457\u0445 \u0434\u0456\u0442\u0435\u0439 \u0431\u0435\u0437 \u043d\u0430\u0433\u043b\u044f\u0434\u0443. \u041f\u0456\u0434\u043b\u0456\u0442\u043e\u043a \u0434\u0443\u0436\u0435 \u0432\u0440\u0430\u0437\u043b\u0438\u0432\u0438\u0439 \u0456 \u043b\u0435\u0433\u043a\u043e \u043f\u0456\u0434\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u043f\u043b\u0438\u0432\u0430\u043c \u044f\u043a \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u043c, \u0442\u0430\u043a \u0456 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u0438\u043c."}),Object(n.jsx)("li",{children:"\u0420\u043e\u0437\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u043a\u043e\u043b\u043e \u0441\u043f\u0456\u043b\u043a\u0443\u0432\u0430\u043d\u043d\u044f, \u0437\u2019\u044f\u0432\u043b\u044f\u044e\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u0456 \u0430\u0432\u0442\u043e\u0440\u0438\u0442\u0435\u0442\u0438."}),Object(n.jsx)("li",{children:"\u041d\u0435\u0434\u043e\u043b\u0456\u043a\u0438 \u0439 \u0441\u0443\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0441\u0442\u0456 \u0432 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u0446\u0456 \u0431\u043b\u0438\u0437\u044c\u043a\u0438\u0445 \u0456 \u0441\u0442\u0430\u0440\u0448\u0438\u0445 \u0441\u043f\u0440\u0438\u0439\u043c\u0430\u044e\u0442\u044c\u0441\u044f \u0433\u043e\u0441\u0442\u0440\u043e."}),Object(n.jsx)("li",{children:"\u0423 \u0431\u0430\u0442\u044c\u043a\u0430\u0445 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0438 \u0445\u043e\u0447\u0443\u0442\u044c \u0431\u0430\u0447\u0438\u0442\u0438 \u0434\u0440\u0443\u0437\u0456\u0432 \u0456 \u043f\u043e\u0440\u0430\u0434\u043d\u0438\u043a\u0456\u0432, \u0430 \u043d\u0435 \u0434\u0438\u043a\u0442\u0430\u0442\u043e\u0440\u0456\u0432."})]}),Object(n.jsx)("div",{className:"cardWrapper",children:Object(n.jsx)(i.a,{md:12,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(l.a.Body,{children:Object(n.jsx)("blockquote",{children:Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:s,alt:"",className:"cardHero"})})})})})})}),Object(n.jsx)("h5",{children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0456\u0457 \u0434\u043b\u044f \u0431\u0430\u0442\u044c\u043a\u0456\u0432 \u0449\u043e\u0434\u043e \u0441\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0433\u0440\u0435\u0441\u0438\u0432\u043d\u043e\u0457 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0438 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0456\u0432"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"\u041f\u0440\u043e\u044f\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u043e \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0430 \u0431\u0456\u043b\u044c\u0448\u0435 \u0443\u0432\u0430\u0433\u0438, \u043b\u044e\u0431\u043e\u0432\u0456 \u0442\u0430 \u043b\u0430\u0441\u043a\u0438."}),Object(n.jsx)("li",{children:"\u0411\u0430\u0442\u044c\u043a\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0441\u0442\u0435\u0436\u0438\u0442\u0438 \u0437\u0430 \u0441\u0432\u043e\u0454\u044e \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u043e\u044e \u0432 \u0441\u0456\u043c\u2019\u0457. \u041a\u0440\u0430\u0449\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u0432\u0438\u0445\u043e\u0432\u0430\u043d\u043d\u044f \u0434\u0456\u0442\u0435\u0439 \u2013 \u0454\u0434\u043d\u0456\u0441\u0442\u044c \u0457\u0445\u043d\u0456\u0445 \u0434\u0456\u0439."}),Object(n.jsx)("li",{children:"\u041d\u0435 \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u0439\u0442\u0435 \u0444\u0456\u0437\u0438\u0447\u043d\u0456 \u043f\u043e\u043a\u0430\u0440\u0430\u043d\u043d\u044f."}),Object(n.jsx)("li",{children:"\u0414\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0439\u0442\u0435 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0443 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0438 \u0434\u0440\u0443\u0437\u0456\u0432. \u0417\u0430\u043e\u0445\u043e\u0447\u0443\u0432\u0430\u0442\u0438 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0445 \u0430\u0441\u043f\u0435\u043a\u0442\u0456\u0432 \u0430\u0433\u0440\u0435\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0456, \u0430 \u0441\u0430\u043c\u0435 \u0437\u0430\u0432\u0437\u044f\u0442\u043e\u0441\u0442\u0456, \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456, \u0456\u043d\u0456\u0446\u0456\u0430\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456, \u043f\u0435\u0440\u0435\u0448\u043a\u043e\u0434\u0436\u0430\u0442\u0438 \u0457\u0457 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u0438\u043c \u0440\u0438\u0441\u0430\u043c, \u0437\u043e\u043a\u0440\u0435\u043c\u0430 \u0432\u043e\u0440\u043e\u0436\u043e\u0441\u0442\u0456, \u0441\u043a\u0443\u0442\u043e\u0441\u0442\u0456."}),Object(n.jsx)("li",{children:"\u041f\u043e\u044f\u0441\u043d\u044e\u0439\u0442\u0435 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0443 \u043d\u0430\u0441\u043b\u0456\u0434\u043a\u0438 \u0430\u0433\u0440\u0435\u0441\u0438\u0432\u043d\u043e\u0457 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0438."}),Object(n.jsx)("li",{children:"\u0412\u0440\u0430\u0445\u043e\u0432\u0443\u0439\u0442\u0435 \u0443 \u0432\u0438\u0445\u043e\u0432\u0430\u043d\u043d\u0456 \u0442\u0430 \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u0456 \u043e\u0441\u043e\u0431\u0438\u0441\u0442\u0456\u0441\u043d\u0456 \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0430."}),Object(n.jsx)("li",{children:"\u041d\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0443 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u044c\u043d\u0438\u0442\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0432 \u0441\u0430\u043c\u043e\u0432\u0438\u0440\u0430\u0436\u0435\u043d\u043d\u0456 \u0439 \u0441\u0430\u043c\u043e\u0441\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u0456."}),Object(n.jsx)("li",{children:"\u041e\u0431\u043c\u0435\u0436\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0432\u0456\u0434\u0435\u043e\u0444\u0456\u043b\u044c\u043c\u0456\u0432 \u0442\u0430 \u043a\u043e\u043c\u043f\u2019\u044e\u0442\u0435\u0440\u043d\u0438\u0445 \u0456\u0433\u043e\u0440 \u0437\u0456 \u0441\u0446\u0435\u043d\u0430\u043c\u0438 \u043d\u0430\u0441\u0438\u043b\u044c\u0441\u0442\u0432\u0430."}),Object(n.jsx)("li",{children:"\u0421\u043f\u0440\u044f\u043c\u043e\u0432\u0443\u0439\u0442\u0435 \u0435\u043d\u0435\u0440\u0433\u0456\u044e \u043f\u0456\u0434\u043b\u0456\u0442\u043a\u0430 \u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0435 \u0440\u0443\u0441\u043b\u043e. \u0417\u0430\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043e \u0437\u0430\u043d\u044f\u0442\u044c \u0443 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0438\u0445 \u0441\u0435\u043a\u0446\u0456\u044f\u0445; \u0437\u0430\u043e\u0445\u043e\u0447\u0443\u0439\u0442\u0435 \u0434\u043e \u0443\u0447\u0430\u0441\u0442\u0456 \u0432 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u0438\u0445 \u0437\u0430\u0445\u043e\u0434\u0430\u0445."})]})]})}}}]);
//# sourceMappingURL=27.b74f7d3c.chunk.js.map