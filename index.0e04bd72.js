!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var c={id:e,exports:{}};return n[e]=c,t.call(c.exports,c,c.exports),c.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=c),c("kxiHE");var i=c("bpxeT"),o=c("2TvXO"),a=c("dIxxU"),s="https://tasty-treats-backend.p.goit.global/api/recipes";function u(){var e=window.innerWidth;return e>=1280?"per_page=9&limit=9":e>=768&&e<1280?"per_page=8&limit=8":e<768?"per_page=6&limit=6":void 0}function l(e,t){return d.apply(this,arguments)}function d(){return d=e(i)(e(o).mark((function t(n,r){var c,i,l,d,p,f=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f.length>2&&void 0!==f[2]?f[2]:"",i=f.length>3&&void 0!==f[3]?f[3]:"",l=f.length>4&&void 0!==f[4]?f[4]:"",d="".concat(s,"?title=").concat(n,"&page=").concat(r,"&").concat(u(),"&time=").concat(c,"&area=").concat(i,"&ingredient=").concat(l),e.prev=2,e.next=5,a.default.get(d);case 5:return p=e.sent.data,e.abrupt("return",p);case 9:throw e.prev=9,e.t0=e.catch(2),new Error("An error occurred while fetching images.");case 12:case"end":return e.stop()}}),t,null,[[2,9]])}))),d.apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=e(i)(e(o).mark((function t(n,r){var c,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(s,"?category=").concat(n,"&page=").concat(r,"&").concat(u()),e.prev=1,e.next=4,a.default.get(c);case 4:return i=e.sent.data,e.abrupt("return",i);case 8:throw e.prev=8,e.t0=e.catch(1),new Error("An error occurred while fetching images.");case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}c("5IDkG");i=c("bpxeT"),o=c("2TvXO");var v,m=c("8dCdE"),y=c("kxiHE"),h=(i=c("bpxeT"),c("8nrFW")),g=(o=c("2TvXO"),c("l5bVx")),b=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,E=/^0o[0-7]+$/i,k=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,S="object"==typeof self&&self&&self.Object===Object&&self,T=L||S||Function("return this")(),q=Object.prototype.toString,M=Math.max,O=Math.min,H=function(){return T.Date.now()};function C(t){var n=void 0===t?"undefined":e(g)(t);return!!t&&("object"==n||"function"==n)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(g)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==q.call(t)}(t))return NaN;if(C(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=C(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var r=x.test(t);return r||E.test(t)?k(t.slice(2),r?2:8):w.test(t)?NaN:+t}v=function(e,t,n){var r,c,i,o,a,s,u=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=c;return r=c=void 0,u=t,o=e.apply(i,n)}function v(e){return u=e,a=setTimeout(y,t),l?f(e):o}function m(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function y(){var e=H();if(m(e))return h(e);a=setTimeout(y,function(e){var n=t-(e-s);return d?O(n,i-(e-u)):n}(e))}function h(e){return a=void 0,p&&r?f(e):(r=c=void 0,o)}function g(){var e=H(),n=m(e);if(r=arguments,c=this,s=e,n){if(void 0===a)return v(s);if(d)return a=setTimeout(y,t),f(s)}return void 0===a&&(a=setTimeout(y,t)),o}return t=A(t)||0,C(n)&&(l=!!n.leading,i=(d="maxWait"in n)?M(A(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),g.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=s=c=a=void 0},g.flush=function(){return void 0===a?o:h(H())},g};var N=c("6JpON"),j=c("7Mtae"),I=c("5IDkG"),U=c("6PU4E"),B=(y=c("kxiHE"),document.querySelector(".search-input")),_=document.querySelector("#image-container"),D=document.getElementById("pagination"),J=document.getElementById("spinner"),P=document.querySelector(".list-area"),R=document.querySelector(".list-ingred"),W=document.querySelector(".input-section"),X=document.querySelector(".list-time"),$=document.querySelector(".cancel-button-input");document.querySelector(".clear-button").addEventListener("click",(function(e){var t=e.target;document.querySelector(".list-time").value="",document.querySelector(".search-input").value="",document.querySelector(".list-area").value="",document.querySelector(".list-ingred").value="",we(t)})),B.addEventListener("input",(function(){""!==B.value.trim()?$.style.display="inline-block":$.style.display="none"})),$.addEventListener("click",(function(e){var t=e.target;B.value="",$.style.display="none",we(t)}));var F="",G="",V="",z="",K="";function Q(){return Y.apply(this,arguments)}function Y(){return(Y=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.fetchAreaRecipes)();case 3:return n=e.sent,e.abrupt("return",n.reduce((function(e,t){return e+te(t)})));case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Z(){return ee.apply(this,arguments)}function ee(){return(ee=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.fetchIngredientsRecipes)();case 3:return n=e.sent,e.abrupt("return",n.reduce((function(e,t){return e+ne(t)})));case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function te(e){var t=e.name;return'<option value="'.concat(t,'">').concat(t,"</option>")}function ne(e){var t=e.name,n=e._id;return'<option value="'.concat(n,'">').concat(t,"</option>")}function re(){return ce.apply(this,arguments)}function ce(){return(ce=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q();case 3:ae(e.sent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ie(){return oe.apply(this,arguments)}function oe(){return(oe=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:se(e.sent),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ae(e){P.insertAdjacentHTML("beforeend",e)}function se(e){R.insertAdjacentHTML("beforeend",e)}pe(),_.addEventListener("click",(function(t){var n=t.target;if(n.closest("button")){var r=n.closest("button");"favorite"===r.name&&function(t){var n,r=JSON.parse(t.dataset.info);t.classList.toggle("active");var c=null!==(n=JSON.parse(localStorage.getItem("favorites")))&&void 0!==n?n:[];t.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify(e(h)(c).concat([r]))):localStorage.setItem("favorites",JSON.stringify(e(h)(c.filter((function(e){return e.id!==r.id})))))}(r),"details"===r.name&&(0,U.OpenModal)(r)}}));var ue=e(v)((function(e){var t=e.target.value;if(e.target.classList.contains("search-input")){if(!t)return B.value="";n=t.trim(),G="".concat(n[0].toUpperCase()).concat(n.slice(1,n.length))}var n;e.target.classList.contains("list-area")&&(K=t);e.target.classList.contains("list-ingred")&&(z=t);e.target.classList.contains("list-time")&&(V=t);_.innerHTML="",xe(),pe()}),300);function le(){J.style.display="block"}function de(){J.style.display="none"}function pe(){return fe.apply(this,arguments)}function fe(){return fe=e(i)(e(o).mark((function t(){var n,r,c,i,a,s,u,d,p=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>0&&void 0!==p[0]?p[0]:1,r=p.length>1&&void 0!==p[1]?p[1]:l,t.prev=1,le(),re(),ie(),t.next=7,r(G,n,V,K,z);case 7:if(c=t.sent,i=c.page,a=c.perPage,s=c.totalPages,(u=c.results).length){t.next=14;break}throw new Error("No result");case 14:return t.next=16,e(h)(u.map((function(e){var t=e.title,n=e.description,r=e.preview,c=e.rating,i=e._id,o=e.category;return(0,j.default)(t,n,r,c,i,o)}))).join("");case 16:d=t.sent,s>1?(D.style.display="block",(0,I.default)(i,a,s,(function(e){pe(e,r)}))):D.style.display="none",_.innerHTML=d,F=G,t.next=36;break;case 22:t.prev=22,t.t0=t.catch(1),X.firstElementChild.setAttribute("selected","selected"),P.firstElementChild.setAttribute("selected","selected"),R.firstElementChild.setAttribute("selected","selected"),D.style.display="none",e(N).Notify.warning("No result for your request, please try again!"),V="",z="",K="",F===(G="")&&(F=""),G=F||"",pe();case 36:return t.prev=36,X.firstElementChild.removeAttribute("selected","selected"),P.firstElementChild.removeAttribute("selected","selected"),R.firstElementChild.removeAttribute("selected","selected"),de(),t.finish(36);case 42:case"end":return t.stop()}}),t,null,[[1,22,36,42]])}))),fe.apply(this,arguments)}function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";G=e}function me(e,t){var n=document.createElement("button");return n.textContent=e,n.classList.add("button-category"),n.addEventListener("click",t),n}function ye(){return(ye=e(i)(e(o).mark((function t(){var n,r,c,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("categoriesContainer"),(r=n.querySelector(".scroll-content")).innerHTML="",e.next=5,(0,y.fetchCategories)();case 5:c=e.sent,i=[],c.forEach((function(e){var t=me(e.name,(function(){ve(e.name),_.innerHTML="",pe(1,p),document.querySelectorAll(".isUse").forEach((function(e){e.classList.remove("isUse")})),t.classList.add("isUse")}));i.push(t),r.appendChild(t)})),m.default.init(n,{alwaysShowTracks:!0});case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}W.addEventListener("input",ue);var he=document.getElementById("categoriesContainer"),ge=document.createElement("div");ge.className="scroll-content",he.appendChild(ge);var be=document.getElementById("allCategoriesButton");function we(e){xe(e.target),ve(),_.innerHTML="",pe(1,p),Array.from(document.querySelectorAll(".scroll-content button")).forEach((function(e){e.classList.remove("isUse")}))}function xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=document.querySelectorAll(".isUse");t.forEach((function(e){return e.classList.remove("isUse")})),e.classList.add("isUse")}be.addEventListener("click",we),function(){ye.apply(this,arguments)}(),c("7Mtae"),c("7mS1x");i=c("bpxeT"),o=c("2TvXO"),y=c("kxiHE");var Ee=document.querySelector(".popular-recipes-list");function ke(){return(ke=e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.getPopularRecipes)();case 3:Le(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error while rendering popular recipes:",e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Le(e){var t=e.map((function(e){return'<li class="popular-recipes-item">\n      <img class="popular-recipes-image" src="'.concat(e.preview,'" alt="').concat(e.title,'" />\n      <div>\n      <p class="popular-recipes-item-title">').concat(e.title,'</p>\n      <p class="popular-recipes-item-description">').concat(e.description,"</p>\n      </div>\n    </li>")})).join("");Ee.innerHTML=t}!function(){ke.apply(this,arguments)}();var Se={openModalBtn:document.querySelector(".shopping-link"),openModalBtnHero:document.querySelector(".btn-hero"),closeModalBtn:document.querySelector(".order-modal-close-btn"),backdrop:document.querySelector(".backdrop-order"),modal:document.querySelector(".modal-order"),forma:document.querySelector(".modal-form-order")};try{Se.openModalBtnHero.addEventListener("click",Te)}catch(e){}function Te(){window.addEventListener("keydown",Me),document.body.classList.add("overflowHidden"),Se.backdrop.classList.add("active"),Se.modal.classList.add("active")}function qe(){document.body.classList.remove("overflowHidden"),window.removeEventListener("keydown",Me),document.body.classList.remove("overflowHidden"),Se.backdrop.classList.remove("active"),Se.modal.classList.remove("active")}function Me(e){"Escape"===e.code&&qe()}Se.openModalBtn.addEventListener("click",Te),Se.closeModalBtn.addEventListener("click",qe),Se.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&qe()})),Se.forma.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget,n=t.name,r=t.tel,c=t.email,i=t.comment,o={name:n.value,tel:r.value,email:c.value,comment:i.value};console.log(o),e.currentTarget.reset(),qe()})),c("6PU4E")}();
//# sourceMappingURL=index.0e04bd72.js.map
