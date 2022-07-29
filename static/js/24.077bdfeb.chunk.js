(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[24],{568:function(e,a,t){"use strict";var r=t(0),c=t.n(r).a.createContext(null);c.displayName="CardContext",a.a=c},569:function(e,a,t){"use strict";var r=t(7),c=t(16),s=t(75),n=t.n(s),o=t(0),l=t.n(o),i=t(109),d=/-(.)/g;var b=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,s=t.displayName,o=void 0===s?u(e):s,d=t.Component,f=t.defaultProps,m=l.a.forwardRef((function(a,t){var s=a.className,o=a.bsPrefix,u=a.as,f=void 0===u?d||"div":u,m=Object(c.a)(a,b),j=Object(i.a)(o,e);return l.a.createElement(f,Object(r.a)({ref:t,className:n()(s,j)},m))}));return m.defaultProps=f,m.displayName=o,m}var m=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(r.a)({},a,{ref:t,className:n()(a.className,e)}))}))},j=t(568),p=["bsPrefix","className","variant","as"],h=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.variant,d=e.as,b=void 0===d?"img":d,u=Object(c.a)(e,p),f=Object(i.a)(t,"card-img");return l.a.createElement(b,Object(r.a)({ref:a,className:n()(o?f+"-"+o:f,s)},u))}));h.displayName="CardImg",h.defaultProps={variant:null};var v=h,x=["bsPrefix","className","bg","text","border","body","children","as"],O=m("h5"),N=m("h6"),g=f("card-body"),y=f("card-title",{Component:O}),P=f("card-subtitle",{Component:N}),C=f("card-link",{Component:"a"}),k=f("card-text",{Component:"p"}),w=f("card-header"),E=f("card-footer"),q=f("card-img-overlay"),T=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,b=e.text,u=e.border,f=e.body,m=e.children,p=e.as,h=void 0===p?"div":p,v=Object(c.a)(e,x),O=Object(i.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return l.a.createElement(j.a.Provider,{value:N},l.a.createElement(h,Object(r.a)({ref:a},v,{className:n()(s,O,d&&"bg-"+d,b&&"text-"+b,u&&"border-"+u)}),f?l.a.createElement(g,null,m):m))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=v,T.Title=y,T.Subtitle=P,T.Body=g,T.Link=C,T.Text=k,T.Header=w,T.Footer=E,T.ImgOverlay=q;a.a=T},571:function(e,a,t){"use strict";var r=t(7),c=t(16),s=t(75),n=t.n(s),o=t(0),l=t.n(o),i=t(109),d=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,u=void 0===o?"div":o,f=Object(c.a)(e,d),m=Object(i.a)(t,"col"),j=[],p=[];return b.forEach((function(e){var a,t,r,c=f[e];if(delete f[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,t=c.offset,r=c.order}else a=c;var n="xs"!==e?"-"+e:"";a&&j.push(!0===a?""+m+n:""+m+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),j.length||j.push(m),l.a.createElement(u,Object(r.a)({},f,{ref:a,className:n.a.apply(void 0,[s].concat(j,p))}))}));u.displayName="Col",a.a=u},638:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),s=t(571),n=t(569),o=t.p+"static/media/tomyn.af730726.png",l=t(1);a.default=function(){return Object(l.jsx)(c.a.Fragment,{children:Object(l.jsx)("div",{className:"cardWrapper",children:Object(l.jsx)(s.a,{md:12,children:Object(l.jsxs)(n.a,{children:[Object(l.jsx)(n.a.Header,{children:Object(l.jsx)(n.a.Title,{as:"h5",children:"\u0422\u043e\u043c\u0438\u043d \u041c\u0430\u0440\u0456\u044f \u0421\u0442\u0435\u043f\u0430\u043d\u0456\u0432\u043d\u0430"})}),Object(l.jsxs)(n.a.Body,{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:o,alt:"",className:"cardHero"})})}),Object(l.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(l.jsx)(n.a.Text,{className:"mb-2",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://psychologisttomun.blogspot.com/?fbclid=IwAR1wp84WZBJqE0TQ2Oue5uqbwI93oFCtfFFgPboYVu_9UCrvfPQhBNqXyh0",children:"\u0411\u043b\u043e\u0433 \u0422\u043e\u043c\u0438\u043d \u041c\u0430\u0440\u0456\u0457 \u0421\u0442\u0435\u043f\u0430\u043d\u0456\u0432\u043d\u0438"})}),Object(l.jsx)("footer",{className:"blockquote-footer",children:Object(l.jsx)("cite",{title:"Source Title",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: 0665272854"})}),Object(l.jsx)("footer",{className:"blockquote-footer",children:Object(l.jsx)("cite",{title:"Source Title",children:"Email: tomunm92@gmail.com"})})]})]})]})})})})}}}]);
//# sourceMappingURL=24.077bdfeb.chunk.js.map