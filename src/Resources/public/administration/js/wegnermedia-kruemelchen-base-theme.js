!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/bundles/administration/",r(r.s="YADo")}({"6BTX":function(e,t,r){var n=r("ZfIX");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("SZ7m").default)("e7f5e7ec",n,!0,{})},SZ7m:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}r.r(t),r.d(t,"default",(function(){return m}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){c=r,u=o||{};var s=n(e,t);return v(s),function(t){for(var r=[],o=0;o<s.length;o++){var a=s[o];(l=i[a.id]).refs--,r.push(l)}t?v(s=n(e,t)):s=[];for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function v(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(h(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(h(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(p){var o=l++;n=a||(a=g()),t=_.bind(null,n,o,!1),r=_.bind(null,n,o,!0)}else n=g(),t=y.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function y(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(f,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},YADo:function(e,t,r){"use strict";r.r(t);var n=r("khAb"),o=r.n(n);r("pFLR");Shopware.Component.register("sw-cms-block-my-image-text-reversed",{template:o.a});var i=r("t55v"),s=r.n(i);r("6BTX");Shopware.Component.register("sw-cms-preview-image-text-reversed",{template:s.a}),Shopware.Service("cmsService").registerCmsBlock({name:"my-image-text-reversed",category:"text-image",label:"Image next to text",component:"sw-cms-block-image-text-reversed",previewComponent:"sw-cms-preview-image-text-reversed",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{left:"text",right:"image"}})},ZfIX:function(e,t,r){},jF22:function(e,t,r){},khAb:function(e,t){e.exports='{% block sw_cms_block_image_text_reversed %}\n    <div class="sw-cms-block-image-text-reversed">\n        <slot name="left">{% block sw_cms_block_image_text_reversed_slot_left %}{% endblock %}</slot>\n        <slot name="right">{% block sw_cms_block_image_text_reversed_slot_right %}{% endblock %}</slot>\n    </div>\n{% endblock %}'},pFLR:function(e,t,r){var n=r("jF22");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("SZ7m").default)("996af196",n,!0,{})},t55v:function(e,t){e.exports='{% block sw_cms_block_image_text_reversed_preview %}\n    <div class="sw-cms-preview-image-text-reversed">\n        <div>\n            <h2>KK Lorem ipsum dolor</h2>\n            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>\n        </div>\n        <img :src="\'/administration/static/img/cms/preview_mountain_small.jpg\' | asset">\n    </div>\n{% endblock %}'}});