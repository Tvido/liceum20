(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[16],{568:function(e,a,r){"use strict";var t=r(0),c=r.n(t).a.createContext(null);c.displayName="CardContext",a.a=c},569:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),l=r(0),i=r.n(l),o=r(109),d=/-(.)/g;var b=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function u(e,a){var r=void 0===a?{}:a,s=r.displayName,l=void 0===s?j(e):s,d=r.Component,u=r.defaultProps,f=i.a.forwardRef((function(a,r){var s=a.className,l=a.bsPrefix,j=a.as,u=void 0===j?d||"div":j,f=Object(c.a)(a,b),m=Object(o.a)(l,e);return i.a.createElement(u,Object(t.a)({ref:r,className:n()(s,m)},f))}));return f.defaultProps=u,f.displayName=l,f}var f=function(e){return i.a.forwardRef((function(a,r){return i.a.createElement("div",Object(t.a)({},a,{ref:r,className:n()(a.className,e)}))}))},m=r(568),h=["bsPrefix","className","variant","as"],p=i.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.variant,d=e.as,b=void 0===d?"img":d,j=Object(c.a)(e,h),u=Object(o.a)(r,"card-img");return i.a.createElement(b,Object(t.a)({ref:a,className:n()(l?u+"-"+l:u,s)},j))}));p.displayName="CardImg",p.defaultProps={variant:null};var x=p,v=["bsPrefix","className","bg","text","border","body","children","as"],O=f("h5"),N=f("h6"),y=u("card-body"),g=u("card-title",{Component:O}),k=u("card-subtitle",{Component:N}),w=u("card-link",{Component:"a"}),P=u("card-text",{Component:"p"}),C=u("card-header"),_=u("card-footer"),E=u("card-img-overlay"),T=i.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,d=e.bg,b=e.text,j=e.border,u=e.body,f=e.children,h=e.as,p=void 0===h?"div":h,x=Object(c.a)(e,v),O=Object(o.a)(r,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(m.a.Provider,{value:N},i.a.createElement(p,Object(t.a)({ref:a},x,{className:n()(s,O,d&&"bg-"+d,b&&"text-"+b,j&&"border-"+j)}),u?i.a.createElement(y,null,f):f))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=x,T.Title=g,T.Subtitle=k,T.Body=y,T.Link=w,T.Text=P,T.Header=C,T.Footer=_,T.ImgOverlay=E;a.a=T},570:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),l=r(0),i=r.n(l),o=r(109),d=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],j=i.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.as,j=void 0===l?"div":l,u=Object(c.a)(e,d),f=Object(o.a)(r,"col"),m=[],h=[];return b.forEach((function(e){var a,r,t,c=u[e];if(delete u[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,r=c.offset,t=c.order}else a=c;var n="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+f+n:""+f+n+"-"+a),null!=t&&h.push("order"+n+"-"+t),null!=r&&h.push("offset"+n+"-"+r)})),m.length||m.push(f),i.a.createElement(j,Object(t.a)({},u,{ref:a,className:n.a.apply(void 0,[s].concat(m,h))}))}));j.displayName="Col",a.a=j},657:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r.n(t),s=r(570),n=r(569),l=r.p+"static/media/one.fefe3419.jpg",i=r(1);a.default=function(){return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)("div",{class:"article__wrapper",children:[Object(i.jsx)("p",{children:"\u0413\u043e\u043b\u043e\u0432\u043d\u043e\u044e \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u044e \u0433\u043b\u043e\u0431\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e\u0433\u043e \u0441\u0432\u0456\u0442\u0443 \u0443 XXI \u0441\u0442\u043e\u043b\u0456\u0442\u0442\u0456 \u0454 \u043a\u043e\u043c\u0443\u043d\u0456\u043a\u0430\u0446\u0456\u044f. \u0421\u043f\u0456\u043b\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044f \u043c\u0456\u0436 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0438\u043c\u0438 \u0441\u0443\u0431\u2019\u0454\u043a\u0442\u0430\u043c\u0438, \u043a\u0440\u0430\u0457\u043d\u0430\u043c\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0454 \u0432\u0438\u0441\u043e\u043a\u043e\u043a\u043b\u0430\u0441\u043d\u0438\u0445 \u0444\u0430\u0445\u0456\u0432\u0446\u0456\u0432 \u0437 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443. \u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447 \u2014 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u044f, \u044f\u043a\u0430 \u043d\u0435 \u0432\u0442\u0440\u0430\u0447\u0430\u0454 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456. \u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447\u0456 \u0437\u0430\u0432\u0436\u0434\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0456 \u0432 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0441\u0442\u0432\u0430\u0445 \u0442\u0430 \u043c\u0456\u043d\u0456\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430\u0445, \u0431\u0456\u0437\u043d\u0435\u0441\u0456 \u0442\u0430 \u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0446\u0442\u0432\u0430\u0445, \u0443 \u0442\u043e\u0440\u0433\u043e\u0432\u0438\u0445 \u043c\u0435\u0440\u0435\u0436\u0430\u0445 \u0456 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0444\u0456\u0440\u043c\u0430\u0445 \u0456, \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u043e, \u0432\u0438\u0434\u0430\u0432\u043d\u0438\u0446\u0442\u0432\u0430\u0445."}),Object(i.jsx)("p",{children:"\u041e\u0442\u0440\u0438\u043c\u0430\u0432\u0448\u0438 \u0434\u0438\u043f\u043b\u043e\u043c \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0447\u0430, \u0442\u0438 \u0437\u043c\u043e\u0436\u0435\u0448 \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0441\u0435\u0431\u0435 \u0432 \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u0441\u0444\u0435\u0440\u0430\u0445: \u0432\u0456\u0434 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0432\u0430\u0436\u043b\u0438\u0432\u0438\u0445 \u043c\u0456\u0436\u043d\u0430\u0440\u043e\u0434\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u0456\u0432 \u0434\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0443 \u0445\u0443\u0434\u043e\u0436\u043d\u0456\u0445 \u0442\u0435\u043a\u0441\u0442\u0456\u0432 \u0447\u0438 \u0440\u043e\u0431\u043e\u0442\u0438 \u043d\u0430\u0434 \u0430\u0434\u0430\u043f\u0442\u0430\u0446\u0456\u0454\u044e \u0433\u043e\u043b\u043b\u0456\u0432\u0443\u0434\u0441\u044c\u043a\u0438\u0445 \u0444\u0456\u043b\u044c\u043c\u0456\u0432."}),Object(i.jsx)("p",{children:"\u0412\u0441\u0442\u0443\u043f\u0430\u0439 \u043d\u0430 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c \xab\u0424\u0456\u043b\u043e\u043b\u043e\u0433\u0456\u044f (\u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434-\u0430\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u0430 \u043c\u043e\u0432\u0430)\xbb \u0432 \u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u041a\u043e\u0440\u043e\u043b\u044f \u0414\u0430\u043d\u0438\u043b\u0430 \u0442\u0430 \u0440\u0430\u0437\u043e\u043c \u0437 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u043e\u043d\u0430\u043b\u0430\u043c\u0438 \u0442\u0438 \u0434\u043e\u0441\u044f\u0433\u043d\u0435\u0448 \u0441\u0432\u043e\u0454\u0457 \u043c\u0440\u0456\u0457!"}),Object(i.jsx)("div",{className:"cardWrapper",children:Object(i.jsx)(s.a,{md:12,children:Object(i.jsxs)(n.a,{children:[Object(i.jsx)(n.a.Header,{children:Object(i.jsx)(n.a.Title,{as:"h5",children:"\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u041a\u043e\u0440\u043e\u043b\u044f \u0414\u0430\u043d\u0438\u043b\u0430 \u2013 \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u0438\u0445"})}),Object(i.jsxs)(n.a.Body,{children:[Object(i.jsx)("blockquote",{children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:l,alt:"",className:"cardHero"})})}),Object(i.jsx)("blockquote",{children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=kynyI4wUZsU&feature=emb_imp_woyt",children:Object(i.jsx)("div",{className:"section__box",children:Object(i.jsxs)("div",{className:"section__content",children:[Object(i.jsx)("h3",{children:"\u041a\u043b\u0456\u043a\u043d\u0438, \u0449\u043e\u0431\u0438 \u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044f"}),Object(i.jsx)("p",{children:"\u0423\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u041a\u043e\u0440\u043e\u043b\u044f \u0414\u0430\u043d\u0438\u043b\u0430."})]})})})}),Object(i.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(i.jsx)(n.a.Text,{className:"mb-2",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://ukd.edu.ua/specialty/filologiya",children:"\u0424\u0456\u043b\u043e\u043b\u043e\u0433\u0456\u044f"})}),Object(i.jsx)(n.a.Text,{className:"mb-2",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://ukd.edu.ua/specialnosti-ta-osvitni-programi",children:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c"})}),Object(i.jsx)("footer",{className:"blockquote-footer",children:Object(i.jsx)("cite",{title:"Source Title",children:"\u0414\u0456\u0437\u043d\u0430\u0439\u0441\u044f \u0431\u0456\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u043e\u0441\u0432\u0456\u0442\u043d\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443 \u0442\u0430 \u0443\u043c\u043e\u0432\u0438 \u0432\u0441\u0442\u0443\u043f\u0443 \u043d\u0430 \u043d\u0430\u0448\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456"})})]})]})]})})})]})})}}}]);
//# sourceMappingURL=16.7b95d810.chunk.js.map