!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("kxiHE");var o=i("bpxeT"),c=i("2TvXO"),a=i("dIxxU"),u="https://tasty-treats-backend.p.goit.global/api/recipes";function s(){var e=window.innerWidth;return e>=1280?"per_page=9&limit=9":e>=768&&e<1280?"per_page=8&limit=8":e<768?"per_page=6&limit=6":void 0}function l(e,t){return d.apply(this,arguments)}function d(){return d=e(o)(e(c).mark((function t(n,r){var i,o,l,d,p,f=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]?f[2]:"",o=f.length>3&&void 0!==f[3]?f[3]:"",l=f.length>4&&void 0!==f[4]?f[4]:"",d="".concat(u,"?title=").concat(n,"&page=").concat(r,"&").concat(s(),"&time=").concat(i,"&area=").concat(o,"&ingredient=").concat(l),e.prev=2,e.next=5,a.default.get(d);case 5:return p=e.sent.data,e.abrupt("return",p);case 9:throw e.prev=9,e.t0=e.catch(2),new Error("An error occurred while fetching images.");case 12:case"end":return e.stop()}}),t,null,[[2,9]])}))),d.apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=e(o)(e(c).mark((function t(n,r){var i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="".concat(u,"?category=").concat(n,"&page=").concat(r,"&").concat(s()),e.prev=1,e.next=4,a.default.get(i);case 4:return o=e.sent.data,e.abrupt("return",o);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("An error occurred while fetching images.");case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}i("5IDkG");o=i("bpxeT"),c=i("2TvXO");var v,m=i("8dCdE"),y=i("kxiHE"),h=(o=i("bpxeT"),i("8nrFW")),g=(c=i("2TvXO"),i("l5bVx")),b=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,k=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,T=L||S||Function("return this")(),q=Object.prototype.toString,C=Math.max,N=Math.min,O=function(){return T.Date.now()};function j(t){var n=void 0===t?"undefined":e(g)(t);return!!t&&("object"==n||"function"==n)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(g)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==q.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var r=w.test(t);return r||x.test(t)?k(t.slice(2),r?2:8):E.test(t)?NaN:+t}v=function(e,t,n){var r,i,o,c,a,u,s=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,s=t,c=e.apply(o,n)}function v(e){return s=e,a=setTimeout(y,t),l?f(e):c}function m(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-s>=o}function y(){var e=O();if(m(e))return h(e);a=setTimeout(y,function(e){var n=t-(e-u);return d?N(n,o-(e-s)):n}(e))}function h(e){return a=void 0,p&&r?f(e):(r=i=void 0,c)}function g(){var e=O(),n=m(e);if(r=arguments,i=this,u=e,n){if(void 0===a)return v(u);if(d)return a=setTimeout(y,t),f(u)}return void 0===a&&(a=setTimeout(y,t)),c}return t=A(t)||0,j(n)&&(l=!!n.leading,o=(d="maxWait"in n)?C(A(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),g.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=u=i=a=void 0},g.flush=function(){return void 0===a?c:h(O())},g};var M=i("6JpON"),H=i("7Mtae"),I=i("5IDkG"),U=i("6PU4E"),_=(y=i("kxiHE"),document.querySelector(".search-input")),$=document.querySelector("#image-container"),B=document.getElementById("pagination"),D=document.getElementById("spinner"),J=document.querySelector(".list-area"),P=document.querySelector(".list-ingred"),R=document.querySelector(".input-section"),W=document.querySelector(".list-time");document.querySelector(".clear-button").addEventListener("click",(function(e){var t=e.target;document.querySelector(".list-time").value="",document.querySelector(".search-input").value="",document.querySelector(".list-area").value="",document.querySelector(".list-ingred").value="",be(t)}));var X="",F="",G="",z="",V="";function Z(){return K.apply(this,arguments)}function K(){return(K=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.fetchAreaRecipes)();case 3:return n=e.sent,e.abrupt("return",n.reduce((function(e,t){return e+ee(t)})));case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Q(){return Y.apply(this,arguments)}function Y(){return(Y=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.fetchIngredientsRecipes)();case 3:return n=e.sent,e.abrupt("return",n.reduce((function(e,t){return e+te(t)})));case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ee(e){var t=e.name;return'<option value="'.concat(t,'">').concat(t,"</option>")}function te(e){var t=e.name,n=e._id;return'<option value="'.concat(n,'">').concat(t,"</option>")}function ne(){return re.apply(this,arguments)}function re(){return(re=e(o)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:ce(e.sent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ie(){return oe.apply(this,arguments)}function oe(){return(oe=e(o)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q();case 3:ae(e.sent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ce(e){J.insertAdjacentHTML("beforeend",e)}function ae(e){P.insertAdjacentHTML("beforeend",e)}de(),$.addEventListener("click",(function(t){var n=t.target;if(n.closest("button")){var r=n.closest("button");"favorite"===r.name&&function(t){var n,r=JSON.parse(t.dataset.info);t.classList.toggle("active");var i=null!==(n=JSON.parse(localStorage.getItem("favorites")))&&void 0!==n?n:[];t.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify(e(h)(i).concat([r]))):localStorage.setItem("favorites",JSON.stringify(e(h)(i.filter((function(e){return e.id!==r.id})))))}(r),"details"===r.name&&(0,U.OpenModal)(r)}}));var ue=e(v)((function(e){var t=e.target.value;if(e.target.classList.contains("search-input")){if(!t)return _.value="";n=t.trim(),F="".concat(n[0].toUpperCase()).concat(n.slice(1,n.length))}var n;e.target.classList.contains("list-area")&&(V=t);e.target.classList.contains("list-ingred")&&(z=t);e.target.classList.contains("list-time")&&(G=t);$.innerHTML="",Ee(),de(),console.log(F,V,G,z)}),300);function se(){D.style.display="block"}function le(){D.style.display="none"}function de(){return pe.apply(this,arguments)}function pe(){return pe=e(o)(e(c).mark((function t(){var n,r,i,o,a,u,s,d,p=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>0&&void 0!==p[0]?p[0]:1,r=p.length>1&&void 0!==p[1]?p[1]:l,t.prev=1,se(),ne(),ie(),t.next=7,r(F,n,G,V,z);case 7:if(i=t.sent,o=i.page,a=i.perPage,u=i.totalPages,(s=i.results).length){t.next=14;break}throw new Error("No result");case 14:return t.next=16,e(h)(s.map((function(e){var t=e.title,n=e.description,r=e.preview,i=e.rating,o=e._id,c=e.category;return(0,H.default)(t,n,r,i,o,c)}))).join("");case 16:d=t.sent,u>1?(B.style.display="block",(0,I.default)(o,a,u,(function(e){de(e,r)}))):B.style.display="none",$.innerHTML=d,X=F,t.next=36;break;case 22:t.prev=22,t.t0=t.catch(1),W.firstElementChild.setAttribute("selected","selected"),J.firstElementChild.setAttribute("selected","selected"),P.firstElementChild.setAttribute("selected","selected"),B.style.display="none",e(M).Notify.warning("No result for your request, please try again!"),G="",z="",V="",X===(F="")&&(X=""),F=X||"",de();case 36:return t.prev=36,W.firstElementChild.removeAttribute("selected","selected"),J.firstElementChild.removeAttribute("selected","selected"),P.firstElementChild.removeAttribute("selected","selected"),le(),t.finish(36);case 42:case"end":return t.stop()}}),t,null,[[1,22,36,42]])}))),pe.apply(this,arguments)}function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";F=e}function ve(e,t){var n=document.createElement("button");return n.textContent=e,n.classList.add("button-category"),n.addEventListener("click",t),n}function me(){return(me=e(o)(e(c).mark((function t(){var n,r,i,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("categoriesContainer"),(r=n.querySelector(".scroll-content")).innerHTML="",e.next=5,(0,y.fetchCategories)();case 5:i=e.sent,o=[],i.forEach((function(e){var t=ve(e.name,(function(){fe(e.name),$.innerHTML="",de(1,p),document.querySelectorAll(".isUse").forEach((function(e){e.classList.remove("isUse")})),t.classList.add("isUse")}));o.push(t),r.appendChild(t)})),m.default.init(n,{alwaysShowTracks:!0});case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}R.addEventListener("input",ue);var ye=document.getElementById("categoriesContainer"),he=document.createElement("div");he.className="scroll-content",ye.appendChild(he);var ge=document.getElementById("allCategoriesButton");function be(e){Ee(e.target),fe(),$.innerHTML="",de(1,p),Array.from(document.querySelectorAll(".scroll-content button")).forEach((function(e){e.classList.remove("isUse")}))}function Ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=document.querySelectorAll(".isUse");t.forEach((function(e){return e.classList.remove("isUse")})),e.classList.add("isUse")}ge.addEventListener("click",be),function(){me.apply(this,arguments)}(),i("7Mtae"),i("7mS1x");o=i("bpxeT"),c=i("2TvXO"),y=i("kxiHE");var we=document.querySelector(".popular-recipes-list");function xe(){return(xe=e(o)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.getPopularRecipes)();case 3:ke(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error while rendering popular recipes:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ke(e){var t=e.map((function(e){return'<li class="popular-recipes-item">\n      <img class="popular-recipes-image" src="'.concat(e.preview,'" alt="').concat(e.title,'" />\n      <div>\n      <p class="popular-recipes-item-title">').concat(e.title,'</p>\n      <p class="popular-recipes-item-description">').concat(e.description,"</p>\n      </div>\n    </li>")})).join("");we.innerHTML=t}!function(){xe.apply(this,arguments)}();M=i("6JpON");var Le={form:document.querySelector(".js-order-form"),inputs:document.querySelectorAll(".order-now-input"),inputName:document.querySelector(".js-input-name"),inputTel:document.querySelector(".js-input-tel"),inputEmail:document.querySelector(".js-input-email"),inputComment:document.querySelector(".js-input-comment"),btn:document.querySelector(".js-order-btn"),btnsOpen:document.querySelectorAll(".js-open-order"),backdrop:document.querySelector(".backdrop-recipes")};function Se(){var e,t,n,r=!1,i=!1,o=!1;e=Le.inputName.value,/^[a-zA-Zа-яА-Я\s]{2,30}$/.test(e)?(Le.inputName.style.borderColor="#9bb537",r=!0):Le.inputName.style.borderColor="#b83245",t=Le.inputEmail.value,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?(Le.inputEmail.style.borderColor="#9bb537",i=!0):Le.inputEmail.style.borderColor="#b83245",n=Le.inputTel.value,/^\d{10}$/.test(n)?(Le.inputTel.style.borderColor="#9bb537",o=!0):Le.inputTel.style.borderColor="#b83245",Le.btn.disabled=!(r&&i&&o)}function Te(){Le.backdrop.classList.remove("is-hidden-modal"),Le.form.classList.remove("is-hidden-modal"),je(),Le.backdrop.addEventListener("click",Ne),window.addEventListener("keydown",qe)}function qe(e){if("Escape"===e.code)return Ce(),void Oe()}function Ce(){Le.backdrop.classList.add("is-hidden-modal"),Le.form.classList.add("is-hidden-modal"),je()}function Ne(e){var t=e.currentTarget,n=e.target;if(t===n||n.closest(".close-modal"))return Ce(),void Oe()}function Oe(){Le.backdrop.removeEventListener("click",Ne),window.removeEventListener("keydown",qe)}function je(){document.body.classList.toggle("overflow-hidden")}Le.inputs.forEach((function(e){return e.addEventListener("input",Se)})),Le.form.addEventListener("submit",(function(t){t.preventDefault(),console.log({name:Le.inputName.value,tel:Le.inputTel.value,email:Le.inputEmail.value,comment:Le.inputComment.value}),e(M).Notify.success("Hi, ".concat(Le.inputName.value,". Please confirm the order by email: ").concat(Le.inputEmail.value)),Le.inputName.style.borderColor="",Le.inputEmail.style.borderColor="",Le.inputTel.style.borderColor="",t.target.reset(),Ce(),Oe()})),Le.btnsOpen.forEach((function(e){return e.addEventListener("click",Te)})),i("6PU4E")}();
//# sourceMappingURL=index.a4e2f9ec.js.map