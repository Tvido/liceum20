(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[30],{568:function(e,a,c){"use strict";var r=c(0),t=c.n(r).a.createContext(null);t.displayName="CardContext",a.a=t},569:function(e,a,c){"use strict";var r=c(7),t=c(16),s=c(75),d=c.n(s),i=c(0),l=c.n(i),n=c(109),o=/-(.)/g;var j=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e,a){var c=void 0===a?{}:a,s=c.displayName,i=void 0===s?b(e):s,o=c.Component,m=c.defaultProps,u=l.a.forwardRef((function(a,c){var s=a.className,i=a.bsPrefix,b=a.as,m=void 0===b?o||"div":b,u=Object(t.a)(a,j),x=Object(n.a)(i,e);return l.a.createElement(m,Object(r.a)({ref:c,className:d()(s,x)},u))}));return u.defaultProps=m,u.displayName=i,u}var u=function(e){return l.a.forwardRef((function(a,c){return l.a.createElement("div",Object(r.a)({},a,{ref:c,className:d()(a.className,e)}))}))},x=c(568),f=["bsPrefix","className","variant","as"],h=l.a.forwardRef((function(e,a){var c=e.bsPrefix,s=e.className,i=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(t.a)(e,f),m=Object(n.a)(c,"card-img");return l.a.createElement(j,Object(r.a)({ref:a,className:d()(i?m+"-"+i:m,s)},b))}));h.displayName="CardImg",h.defaultProps={variant:null};var p=h,O=["bsPrefix","className","bg","text","border","body","children","as"],v=u("h5"),N=u("h6"),g=m("card-body"),y=m("card-title",{Component:v}),P=m("card-subtitle",{Component:N}),C=m("card-link",{Component:"a"}),k=m("card-text",{Component:"p"}),H=m("card-header"),w=m("card-footer"),E=m("card-img-overlay"),B=l.a.forwardRef((function(e,a){var c=e.bsPrefix,s=e.className,o=e.bg,j=e.text,b=e.border,m=e.body,u=e.children,f=e.as,h=void 0===f?"div":f,p=Object(t.a)(e,O),v=Object(n.a)(c,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return l.a.createElement(x.a.Provider,{value:N},l.a.createElement(h,Object(r.a)({ref:a},p,{className:d()(s,v,o&&"bg-"+o,j&&"text-"+j,b&&"border-"+b)}),m?l.a.createElement(g,null,u):u))}));B.displayName="Card",B.defaultProps={body:!1},B.Img=p,B.Title=y,B.Subtitle=P,B.Body=g,B.Link=C,B.Text=k,B.Header=H,B.Footer=w,B.ImgOverlay=E;a.a=B},570:function(e,a,c){"use strict";var r=c(7),t=c(16),s=c(75),d=c.n(s),i=c(0),l=c.n(i),n=c(109),o=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=l.a.forwardRef((function(e,a){var c=e.bsPrefix,s=e.className,i=e.as,b=void 0===i?"div":i,m=Object(t.a)(e,o),u=Object(n.a)(c,"col"),x=[],f=[];return j.forEach((function(e){var a,c,r,t=m[e];if(delete m[e],"object"===typeof t&&null!=t){var s=t.span;a=void 0===s||s,c=t.offset,r=t.order}else a=t;var d="xs"!==e?"-"+e:"";a&&x.push(!0===a?""+u+d:""+u+d+"-"+a),null!=r&&f.push("order"+d+"-"+r),null!=c&&f.push("offset"+d+"-"+c)})),x.length||x.push(u),l.a.createElement(b,Object(r.a)({},m,{ref:a,className:d.a.apply(void 0,[s].concat(x,f))}))}));b.displayName="Col",a.a=b},645:function(e,a,c){"use strict";c.r(a);var r=c(0),t=c.n(r),s=c(570),d=c(569),i=c.p+"static/media/almanakh.b2c104e8.png",l=c.p+"static/media/tochka.7500b1cd.jpg",n=c.p+"static/media/one.085906d6.jpg",o=c.p+"static/media/two.c60a59f3.jpg",j=c.p+"static/media/three.87695796.jpg",b=c(1);a.default=function(){return Object(b.jsx)(t.a.Fragment,{children:Object(b.jsxs)("div",{class:"article__wrapper",children:[Object(b.jsx)("div",{className:"cardWrapper",children:Object(b.jsx)(s.a,{md:12,children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Header,{children:Object(b.jsx)(d.a.Title,{as:"h5",children:"\u0410\u043b\u044c\u043c\u0430\u043d\u0430\u0445 \u201c\u041f\u0440\u043e\u043b\u0456\u0441\u043e\u043a\u201d"})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:i,alt:"",className:"cardHero"})})})})]})})}),Object(b.jsx)("div",{className:"cardWrapper",children:Object(b.jsx)(s.a,{md:12,children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Header,{children:Object(b.jsx)(d.a.Title,{as:"h5",children:"\u0413\u0430\u0437\u0435\u0442\u0430 \u201c\u0422\u043e\u0447\u043a\u0430 \u0437\u043e\u0440\u0443\u201d"})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:l,alt:"",className:"cardHero"})})})})]})})}),Object(b.jsx)("div",{className:"cardWrapper",children:Object(b.jsx)(s.a,{md:12,children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Header,{children:Object(b.jsx)(d.a.Title,{as:"h5",children:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430, \u0432 \u044f\u043a\u0456\u0439 \u044f \u0445\u043e\u0447\u0443 \u0436\u0438\u0442\u0438"})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:n,alt:"",className:"cardHero"})})})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:o,alt:"",className:"cardHero"})})})}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j,alt:"",className:"cardHero"})})})})]})})})]})})}}}]);
//# sourceMappingURL=30.ebc19b93.chunk.js.map