(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[19],{568:function(e,a,r){"use strict";var t=r(0),c=r.n(t).a.createContext(null);c.displayName="CardContext",a.a=c},569:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),i=r(0),d=r.n(i),l=r(109),o=/-(.)/g;var b=["className","bsPrefix","as"],j=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e,a){var r=void 0===a?{}:a,s=r.displayName,i=void 0===s?j(e):s,o=r.Component,m=r.defaultProps,u=d.a.forwardRef((function(a,r){var s=a.className,i=a.bsPrefix,j=a.as,m=void 0===j?o||"div":j,u=Object(c.a)(a,b),f=Object(l.a)(i,e);return d.a.createElement(m,Object(t.a)({ref:r,className:n()(s,f)},u))}));return u.defaultProps=m,u.displayName=i,u}var u=function(e){return d.a.forwardRef((function(a,r){return d.a.createElement("div",Object(t.a)({},a,{ref:r,className:n()(a.className,e)}))}))},f=r(568),p=["bsPrefix","className","variant","as"],v=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.variant,o=e.as,b=void 0===o?"img":o,j=Object(c.a)(e,p),m=Object(l.a)(r,"card-img");return d.a.createElement(b,Object(t.a)({ref:a,className:n()(i?m+"-"+i:m,s)},j))}));v.displayName="CardImg",v.defaultProps={variant:null};var x=v,O=["bsPrefix","className","bg","text","border","body","children","as"],h=u("h5"),N=u("h6"),g=m("card-body"),y=m("card-title",{Component:h}),P=m("card-subtitle",{Component:N}),C=m("card-link",{Component:"a"}),w=m("card-text",{Component:"p"}),k=m("card-header"),E=m("card-footer"),B=m("card-img-overlay"),H=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.bg,b=e.text,j=e.border,m=e.body,u=e.children,p=e.as,v=void 0===p?"div":p,x=Object(c.a)(e,O),h=Object(l.a)(r,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return d.a.createElement(f.a.Provider,{value:N},d.a.createElement(v,Object(t.a)({ref:a},x,{className:n()(s,h,o&&"bg-"+o,b&&"text-"+b,j&&"border-"+j)}),m?d.a.createElement(g,null,u):u))}));H.displayName="Card",H.defaultProps={body:!1},H.Img=x,H.Title=y,H.Subtitle=P,H.Body=g,H.Link=C,H.Text=w,H.Header=k,H.Footer=E,H.ImgOverlay=B;a.a=H},570:function(e,a,r){"use strict";var t=r(7),c=r(16),s=r(75),n=r.n(s),i=r(0),d=r.n(i),l=r(109),o=["bsPrefix","className","as"],b=["xl","lg","md","sm","xs"],j=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.as,j=void 0===i?"div":i,m=Object(c.a)(e,o),u=Object(l.a)(r,"col"),f=[],p=[];return b.forEach((function(e){var a,r,t,c=m[e];if(delete m[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,r=c.offset,t=c.order}else a=c;var n="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+u+n:""+u+n+"-"+a),null!=t&&p.push("order"+n+"-"+t),null!=r&&p.push("offset"+n+"-"+r)})),f.length||f.push(u),d.a.createElement(j,Object(t.a)({},m,{ref:a,className:n.a.apply(void 0,[s].concat(f,p))}))}));j.displayName="Col",a.a=j},647:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r.n(t),s=r(570),n=r(569),i=r.p+"static/media/one.e8b02251.jpg",d=r.p+"static/media/two.1b12fb80.jpg",l=r.p+"static/media/three.dbb11414.jpg",o=r.p+"static/media/four.02838d2b.jpg",b=r(1);a.default=function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("div",{class:"article__wrapper",children:[Object(b.jsx)("h5",{children:"\u0414\u0435\u043d\u044c \u043e\u0431\u2019\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u041d\u0456\u043c\u0435\u0447\u0447\u0438\u043d\u0438"}),Object(b.jsx)("div",{className:"cardWrapper",children:Object(b.jsx)(s.a,{md:12,children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(n.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:i,alt:"",className:"cardHero"})})})}),Object(b.jsx)(n.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:d,alt:"",className:"cardHero"})})})}),Object(b.jsx)(n.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:l,alt:"",className:"cardHero"})})})}),Object(b.jsx)(n.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:o,alt:"",className:"cardHero"})})})})]})})})]})})}}}]);
//# sourceMappingURL=19.518f9e65.chunk.js.map