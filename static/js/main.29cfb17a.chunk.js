(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(8),a=n.n(r),o=n(2),c=n(3),i=n(5),l=n(4),u=n(9),h=n(1),b=n.n(h),d=n(6),p=n.n(d),j=(n(14),n(15),n(0)),y=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.goods;return Object(j.jsx)("ul",{children:t.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})}}]),n}(b.a.PureComponent),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var n=e.sortType,r=e.isReversed,a=Object(u.a)(t);return a.sort((function(t,e){switch(n){case s.ALPABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r&&a.reverse(),a}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={sortType:s.NONE,isReversed:!1},t.handleSortByAlpabet=function(){return t.setState({sortType:s.ALPABET})},t.handleSortByLength=function(){return t.setState({sortType:s.LENGTH})},t.handleReverse=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleReset=function(){return t.setState({sortType:s.NONE,isReversed:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.sortType,n=t.isReversed,r=e!==s.NONE||n;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":e!==s.ALPABET}),onClick:this.handleSortByAlpabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":e!==s.LENGTH}),onClick:this.handleSortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!n}),onClick:this.handleReverse,children:"Reverse"}),r&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)(y,{goods:v(O,this.state)})]})}}]),n}(b.a.Component);a.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.29cfb17a.chunk.js.map