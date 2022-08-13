(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[42],{568:function(e,a,r){"use strict";var t=r(0),c=r.n(t).a.createContext(null);c.displayName="CardContext",a.a=c},569:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),l=r(0),o=r.n(l),i=r(109),d=/-(.)/g;var b=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(d,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var r=void 0===a?{}:a,s=r.displayName,l=void 0===s?u(e):s,d=r.Component,f=r.defaultProps,m=o.a.forwardRef((function(a,r){var s=a.className,l=a.bsPrefix,u=a.as,f=void 0===u?d||"div":u,m=Object(c.a)(a,b),j=Object(i.a)(l,e);return o.a.createElement(f,Object(t.a)({ref:r,className:n()(s,j)},m))}));return m.defaultProps=f,m.displayName=l,m}var m=function(e){return o.a.forwardRef((function(a,r){return o.a.createElement("div",Object(t.a)({},a,{ref:r,className:n()(a.className,e)}))}))},j=r(568),p=["bsPrefix","className","variant","as"],h=o.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.variant,d=e.as,b=void 0===d?"img":d,u=Object(c.a)(e,p),f=Object(i.a)(r,"card-img");return o.a.createElement(b,Object(t.a)({ref:a,className:n()(l?f+"-"+l:f,s)},u))}));h.displayName="CardImg",h.defaultProps={variant:null};var v=h,x=["bsPrefix","className","bg","text","border","body","children","as"],O=m("h5"),N=m("h6"),g=f("card-body"),y=f("card-title",{Component:O}),P=f("card-subtitle",{Component:N}),C=f("card-link",{Component:"a"}),w=f("card-text",{Component:"p"}),k=f("card-header"),E=f("card-footer"),q=f("card-img-overlay"),T=o.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,d=e.bg,b=e.text,u=e.border,f=e.body,m=e.children,p=e.as,h=void 0===p?"div":p,v=Object(c.a)(e,x),O=Object(i.a)(r,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return o.a.createElement(j.a.Provider,{value:N},o.a.createElement(h,Object(t.a)({ref:a},v,{className:n()(s,O,d&&"bg-"+d,b&&"text-"+b,u&&"border-"+u)}),f?o.a.createElement(g,null,m):m))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=v,T.Title=y,T.Subtitle=P,T.Body=g,T.Link=C,T.Text=w,T.Header=k,T.Footer=E,T.ImgOverlay=q;a.a=T},570:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),l=r(0),o=r.n(l),i=r(109),d=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.as,u=void 0===l?"div":l,f=Object(c.a)(e,d),m=Object(i.a)(r,"col"),j=[],p=[];return b.forEach((function(e){var a,r,t,c=f[e];if(delete f[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,r=c.offset,t=c.order}else a=c;var n="xs"!==e?"-"+e:"";a&&j.push(!0===a?""+m+n:""+m+n+"-"+a),null!=t&&p.push("order"+n+"-"+t),null!=r&&p.push("offset"+n+"-"+r)})),j.length||j.push(m),o.a.createElement(u,Object(t.a)({},f,{ref:a,className:n.a.apply(void 0,[s].concat(j,p))}))}));u.displayName="Col",a.a=u},658:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r.n(t),s=r(570),n=r(569),l=r.p+"static/media/tomyn.af730726.png",o=r(1);a.default=function(){return Object(o.jsx)(c.a.Fragment,{children:Object(o.jsx)("div",{class:"article__wrapper",children:Object(o.jsx)("div",{className:"cardWrapper",children:Object(o.jsx)(s.a,{md:12,children:Object(o.jsxs)(n.a,{children:[Object(o.jsx)(n.a.Header,{children:Object(o.jsx)(n.a.Title,{as:"h5",children:"\u0422\u043e\u043c\u0438\u043d \u041c\u0430\u0440\u0456\u044f \u0421\u0442\u0435\u043f\u0430\u043d\u0456\u0432\u043d\u0430"})}),Object(o.jsxs)(n.a.Body,{children:[Object(o.jsx)("blockquote",{children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:l,alt:"",className:"cardHero"})})}),Object(o.jsxs)("blockquote",{className:"blockquote text-right",children:[Object(o.jsx)(n.a.Text,{className:"mb-2",children:Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://psychologisttomun.blogspot.com/?fbclid=IwAR1wp84WZBJqE0TQ2Oue5uqbwI93oFCtfFFgPboYVu_9UCrvfPQhBNqXyh0",children:"\u0411\u043b\u043e\u0433 \u0422\u043e\u043c\u0438\u043d \u041c\u0430\u0440\u0456\u0457 \u0421\u0442\u0435\u043f\u0430\u043d\u0456\u0432\u043d\u0438"})}),Object(o.jsx)("footer",{className:"blockquote-footer",children:Object(o.jsx)("cite",{title:"Source Title",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: 0665272854"})}),Object(o.jsx)("footer",{className:"blockquote-footer",children:Object(o.jsx)("cite",{title:"Source Title",children:"Email: tomunm92@gmail.com"})})]})]})]})})})})})}}}]);
//# sourceMappingURL=42.ce41ba23.chunk.js.map