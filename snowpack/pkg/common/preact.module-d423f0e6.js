var E,d,M,S,W,H,T={},F=[],X=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(_,e){for(var t in e)_[t]=e[t];return _}function I(_){var e=_.parentNode;e&&e.removeChild(_)}function O(_,e,t){var o,l,r,c={};for(r in e)r=="key"?o=e[r]:r=="ref"?l=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?E.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)c[r]===void 0&&(c[r]=_.defaultProps[r]);return N(_,c,o,l,null)}function N(_,e,t,o,l){var r={type:_,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++M};return l==null&&d.vnode!=null&&d.vnode(r),r}function P(_){return _.children}function w(_,e){this.props=_,this.context=e}function x(_,e){if(e==null)return _.__?x(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?x(_):null}function R(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return R(_)}}function $(_){(!_.__d&&(_.__d=!0)&&S.push(_)&&!U.__r++||H!==d.debounceRendering)&&((H=d.debounceRendering)||W)(U)}function U(){for(var _;U.__r=S.length;)_=S.sort(function(e,t){return e.__v.__b-t.__v.__b}),S=[],_.some(function(e){var t,o,l,r,c,a;e.__d&&(c=(r=(t=e).__v).__e,(a=t.__P)&&(o=[],(l=k({},r)).__v=r.__v+1,L(a,r,l,t.__n,a.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c??x(r),r.__h),J(o,r),r.__e!=c&&R(r)))})}function B(_,e,t,o,l,r,c,a,p,u){var n,v,s,i,f,b,h,y=o&&o.__k||F,m=y.length;for(t.__k=[],n=0;n<e.length;n++)if((i=t.__k[n]=(i=e[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?N(null,i,null,null,i):Array.isArray(i)?N(P,{children:i},null,null,null):i.__b>0?N(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=t,i.__b=t.__b+1,(s=y[n])===null||s&&i.key==s.key&&i.type===s.type)y[n]=void 0;else for(v=0;v<m;v++){if((s=y[v])&&i.key==s.key&&i.type===s.type){y[v]=void 0;break}s=null}L(_,i,s=s||T,l,r,c,a,p,u),f=i.__e,(v=i.ref)&&s.ref!=v&&(h||(h=[]),s.ref&&h.push(s.ref,null,i),h.push(v,i.__c||f,i)),f!=null?(b==null&&(b=f),typeof i.type=="function"&&i.__k===s.__k?i.__d=p=j(i,p,_):p=z(_,i,s,y,f,p),typeof t.type=="function"&&(t.__d=p)):p&&s.__e==p&&p.parentNode!=_&&(p=x(s))}for(t.__e=b,n=m;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=x(o,n+1)),Q(y[n],y[n]));if(h)for(n=0;n<h.length;n++)K(h[n],h[++n],h[++n])}function j(_,e,t){for(var o,l=_.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=_,e=typeof o.type=="function"?j(o,e,t):z(t,o,o,l,o.__e,e));return e}function z(_,e,t,o,l,r){var c,a,p;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(t==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==_)_.appendChild(l),c=null;else{for(a=r,p=0;(a=a.nextSibling)&&p<o.length;p+=2)if(a==l)break e;_.insertBefore(l,r),c=r}return c!==void 0?c:l.nextSibling}function Y(_,e,t,o,l){var r;for(r in t)r==="children"||r==="key"||r in e||A(_,r,null,t[r],o);for(r in e)l&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||t[r]===e[r]||A(_,r,e[r],t[r],o)}function G(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||X.test(e)?t:t+"px"}function A(_,e,t,o,l){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)t&&e in t||G(_.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||G(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?o||_.addEventListener(e,r?q:V,r):_.removeEventListener(e,r?q:V,r);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t??"";break e}catch(c){}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?_.setAttribute(e,t):_.removeAttribute(e))}}function V(_){this.l[_.type+!1](d.event?d.event(_):_)}function q(_){this.l[_.type+!0](d.event?d.event(_):_)}function L(_,e,t,o,l,r,c,a,p){var u,n,v,s,i,f,b,h,y,m,C,g=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,a=e.__e=t.__e,e.__h=null,r=[a]),(u=d.__b)&&u(e);try{e:if(typeof g=="function"){if(h=e.props,y=(u=g.contextType)&&o[u.__c],m=u?y?y.props.value:u.__:o,t.__c?b=(n=e.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?e.__c=n=new g(h,m):(e.__c=n=new w(h,m),n.constructor=g,n.render=ee),y&&y.sub(n),n.props=h,n.state||(n.state={}),n.context=m,n.__n=o,v=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,g.getDerivedStateFromProps(h,n.__s))),s=n.props,i=n.state,v)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&h!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(h,m),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(h,n.__s,m)===!1||e.__v===t.__v){n.props=h,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(D){D&&(D.__=e)}),n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(h,n.__s,m),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,i,f)})}n.context=m,n.props=h,n.state=n.__s,(u=d.__r)&&u(e),n.__d=!1,n.__v=e,n.__P=_,u=n.render(n.props,n.state,n.context),n.state=n.__s,n.getChildContext!=null&&(o=k(k({},o),n.getChildContext())),v||n.getSnapshotBeforeUpdate==null||(f=n.getSnapshotBeforeUpdate(s,i)),C=u!=null&&u.type===P&&u.key==null?u.props.children:u,B(_,Array.isArray(C)?C:[C],e,t,o,l,r,c,a,p),n.base=e.__e,e.__h=null,n.__h.length&&c.push(n),b&&(n.__E=n.__=null),n.__e=!1}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Z(t.__e,e,t,o,l,r,c,p);(u=d.diffed)&&u(e)}catch(D){e.__v=null,(p||r!=null)&&(e.__e=a,e.__h=!!p,r[r.indexOf(a)]=null),d.__e(D,e,t)}}function J(_,e){d.__c&&d.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(o){o.call(t)})}catch(o){d.__e(o,t.__v)}})}function Z(_,e,t,o,l,r,c,a){var p,u,n,v=t.props,s=e.props,i=e.type,f=0;if(i==="svg"&&(l=!0),r!=null){for(;f<r.length;f++)if((p=r[f])&&(p===_||(i?p.localName==i:p.nodeType==3))){_=p,r[f]=null;break}}if(_==null){if(i===null)return document.createTextNode(s);_=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),r=null,a=!1}if(i===null)v===s||a&&_.data===s||(_.data=s);else{if(r=r&&E.call(_.childNodes),u=(v=t.props||T).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!a){if(r!=null)for(v={},f=0;f<_.attributes.length;f++)v[_.attributes[f].name]=_.attributes[f].value;(n||u)&&(n&&(u&&n.__html==u.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(Y(_,s,v,l,a),n)e.__k=[];else if(f=e.props.children,B(_,Array.isArray(f)?f:[f],e,t,o,l&&i!=="foreignObject",r,c,r?r[0]:t.__k&&x(t,0),a),r!=null)for(f=r.length;f--;)r[f]!=null&&I(r[f]);a||("value"in s&&(f=s.value)!==void 0&&(f!==_.value||i==="progress"&&!f)&&A(_,"value",f,v.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==_.checked&&A(_,"checked",f,v.checked,!1))}return _}function K(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(o){d.__e(o,t)}}function Q(_,e,t){var o,l;if(d.unmount&&d.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||K(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,e)}o.base=o.__P=null}if(o=_.__k)for(l=0;l<o.length;l++)o[l]&&Q(o[l],e,typeof _.type!="function");t||_.__e==null||I(_.__e),_.__e=_.__d=void 0}function ee(_,e,t){return this.constructor(_,t)}function _e(_,e,t){var o,l,r;d.__&&d.__(_,e),l=(o=typeof t=="function")?null:t&&t.__k||e.__k,r=[],L(e,_=(!o&&t||e).__k=O(P,null,[_]),l||T,T,e.ownerSVGElement!==void 0,!o&&t?[t]:l?null:e.firstChild?E.call(e.childNodes):null,r,!o&&t?t:l?l.__e:e.firstChild,o),J(r,_)}E=F.slice,d={__e:function(_,e){for(var t,o,l;e=e.__;)if((t=e.__c)&&!t.__)try{if((o=t.constructor)&&o.getDerivedStateFromError!=null&&(t.setState(o.getDerivedStateFromError(_)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(_),l=t.__d),l)return t.__E=t}catch(r){_=r}throw _}},M=0,w.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof _=="function"&&(_=_(k({},t),this.props)),_&&k(t,_),_!=null&&this.__v&&(e&&this.__h.push(e),$(this))},w.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),$(this))},w.prototype.render=P,S=[],W=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0;export{_e as S,w as _,P as d,d as l,O as v};
