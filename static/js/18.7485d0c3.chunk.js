(this.webpackJsonpliceum20=this.webpackJsonpliceum20||[]).push([[18],{568:function(e,a,r){"use strict";var c=r(0),t=r.n(c).a.createContext(null);t.displayName="CardContext",a.a=t},569:function(e,a,r){"use strict";var c=r(7),t=r(16),s=r(75),i=r.n(s),n=r(0),d=r.n(n),l=r(109),o=/-(.)/g;var j=["className","bsPrefix","as"],b=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e,a){var r=void 0===a?{}:a,s=r.displayName,n=void 0===s?b(e):s,o=r.Component,m=r.defaultProps,u=d.a.forwardRef((function(a,r){var s=a.className,n=a.bsPrefix,b=a.as,m=void 0===b?o||"div":b,u=Object(t.a)(a,j),f=Object(l.a)(n,e);return d.a.createElement(m,Object(c.a)({ref:r,className:i()(s,f)},u))}));return u.defaultProps=m,u.displayName=n,u}var u=function(e){return d.a.forwardRef((function(a,r){return d.a.createElement("div",Object(c.a)({},a,{ref:r,className:i()(a.className,e)}))}))},f=r(568),p=["bsPrefix","className","variant","as"],x=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,n=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(t.a)(e,p),m=Object(l.a)(r,"card-img");return d.a.createElement(j,Object(c.a)({ref:a,className:i()(n?m+"-"+n:m,s)},b))}));x.displayName="CardImg",x.defaultProps={variant:null};var v=x,O=["bsPrefix","className","bg","text","border","body","children","as"],h=u("h5"),N=u("h6"),g=m("card-body"),y=m("card-title",{Component:h}),P=m("card-subtitle",{Component:N}),C=m("card-link",{Component:"a"}),k=m("card-text",{Component:"p"}),w=m("card-header"),E=m("card-footer"),B=m("card-img-overlay"),H=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.bg,j=e.text,b=e.border,m=e.body,u=e.children,p=e.as,x=void 0===p?"div":p,v=Object(t.a)(e,O),h=Object(l.a)(r,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return d.a.createElement(f.a.Provider,{value:N},d.a.createElement(x,Object(c.a)({ref:a},v,{className:i()(s,h,o&&"bg-"+o,j&&"text-"+j,b&&"border-"+b)}),m?d.a.createElement(g,null,u):u))}));H.displayName="Card",H.defaultProps={body:!1},H.Img=v,H.Title=y,H.Subtitle=P,H.Body=g,H.Link=C,H.Text=k,H.Header=w,H.Footer=E,H.ImgOverlay=B;a.a=H},570:function(e,a,r){"use strict";var c=r(7),t=r(16),s=r(75),i=r.n(s),n=r(0),d=r.n(n),l=r(109),o=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],b=d.a.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,n=e.as,b=void 0===n?"div":n,m=Object(t.a)(e,o),u=Object(l.a)(r,"col"),f=[],p=[];return j.forEach((function(e){var a,r,c,t=m[e];if(delete m[e],"object"===typeof t&&null!=t){var s=t.span;a=void 0===s||s,r=t.offset,c=t.order}else a=t;var i="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+u+i:""+u+i+"-"+a),null!=c&&p.push("order"+i+"-"+c),null!=r&&p.push("offset"+i+"-"+r)})),f.length||f.push(u),d.a.createElement(b,Object(c.a)({},m,{ref:a,className:i.a.apply(void 0,[s].concat(f,p))}))}));b.displayName="Col",a.a=b},644:function(e,a,r){"use strict";r.r(a);var c=r(0),t=r.n(c),s=r(570),i=r(569),n=r.p+"static/media/one.5d500785.jpg",d=r.p+"static/media/two.e60a8ac2.jpg",l=r.p+"static/media/three.e7324bde.jpg",o=r.p+"static/media/four.62097401.jpg",j=r.p+"static/media/five.65e66ecc.jpg",b=r(1);a.default=function(){return Object(b.jsx)(t.a.Fragment,{children:Object(b.jsxs)("div",{class:"article__wrapper",children:[Object(b.jsx)("h5",{children:"\u0414\u042e\u041f-2019"}),Object(b.jsx)("p",{children:"18 \u043a\u0432\u0456\u0442\u043d\u044f 2019\u0440. \u043d\u0430 \u0431\u0430\u0437\u0456 \u041d\u0412\u041a \u201c\u0428\u043a\u043e\u043b\u0430-\u0433\u0456\u043c\u043d\u0430\u0437\u0456\u044f \u21163\u201d \u0432\u0456\u0434\u0431\u0443\u0432\u0441\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u043b\u044c\u043d\u0438\u0439 (\u0444\u0456\u043d\u0430\u043b\u044c\u043d\u0438\u0439) \u0435\u0442\u0430\u043f \u043c\u0456\u0441\u044c\u043a\u0438\u0445 \u0437\u043c\u0430\u0433\u0430\u043d\u044c \u0434\u0440\u0443\u0436\u0438\u043d\u0438 \u044e\u043d\u0438\u0445 \u043f\u043e\u0436\u0435\u0436\u043d\u0438\u0445 \u043d\u0430 \u041a\u0443\u0431\u043e\u043a \u043c\u0456\u0441\u044c\u043a\u043e\u0433\u043e \u0433\u043e\u043b\u043e\u0432\u0438 \u0456\u043c\u0435\u043d\u0456 \u0420\u043e\u043c\u0430\u043d\u0430 \u0428\u0443\u0445\u0435\u0432\u0438\u0447\u0430. \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \xab\u0421\u043f\u0430\u043b\u0430\u0445\xbb \u041d\u0412\u041a \xab\u0428\u043a\u043e\u043b\u0430-\u0433\u0456\u043c\u043d\u0430\u0437\u0456\u044f \u21163\xbb \u0443 \u043d\u0435\u043b\u0435\u0433\u043a\u0456\u0439 \u0431\u043e\u0440\u043e\u0442\u044c\u0431\u0456 \u0437\u0434\u043e\u0431\u0443\u043b\u0430 I \u043c\u0456\u0441\u0446\u0435 \u0456 \u043e\u0442\u0440\u0438\u043c\u0430\u043b\u0430 \u0431\u0435\u0437\u043b\u0456\u0447 \u0447\u0443\u0434\u043e\u0432\u0438\u0445 \u043f\u043e\u0434\u0430\u0440\u0443\u043d\u043a\u0456\u0432"}),Object(b.jsx)("div",{className:"cardWrapper",children:Object(b.jsx)(s.a,{md:12,children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(i.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:n,alt:"",className:"cardHero"})})})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:d,alt:"",className:"cardHero"})})})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:l,alt:"",className:"cardHero"})})})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:o,alt:"",className:"cardHero"})})})}),Object(b.jsx)(i.a.Body,{children:Object(b.jsx)("blockquote",{children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:j,alt:"",className:"cardHero"})})})})]})})})]})})}}}]);
//# sourceMappingURL=18.7485d0c3.chunk.js.map