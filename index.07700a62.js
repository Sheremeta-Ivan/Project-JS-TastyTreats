function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("bMDee");var o=i("2shzp");function c(){const e=window.innerWidth;return e>=1280?"per_page=9&limit=9":e>=768&&e<1280?"per_page=8&limit=8":e<768?"per_page=6&limit=6":void 0}async function a(e,t,n="",r="",i=""){const a=`https://tasty-treats-backend.p.goit.global/api/recipes?title=${e}&page=${t}&${c()}&time=${n}&area=${r}&ingredient=${i}`;try{const{data:e}=await o.default.get(a);return e}catch(e){throw new Error("An error occurred while fetching images.")}}async function s(e,t){const n=`https://tasty-treats-backend.p.goit.global/api/recipes?category=${e}&page=${t}&${c()}`;try{const{data:e}=await o.default.get(n);return e}catch(e){throw new Error("An error occurred while fetching images.")}}i("JcIhZ");var l,u=i("cfjzn"),d=i("bMDee"),p=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,h=g||b||Function("return this")(),E=Object.prototype.toString,w=Math.max,L=Math.min,S=function(){return h.Date.now()};function q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==E.call(e)}(e))return NaN;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=m.test(e);return n||y.test(e)?v(e.slice(2),n?2:8):f.test(e)?NaN:+e}l=function(e,t,n){var r,i,o,c,a,s,l=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,l=t,c=e.apply(o,n)}function m(e){return l=e,a=setTimeout(v,t),u?f(e):c}function y(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=o}function v(){var e=S();if(y(e))return g(e);a=setTimeout(v,function(e){var n=t-(e-s);return d?L(n,o-(e-l)):n}(e))}function g(e){return a=void 0,p&&r?f(e):(r=i=void 0,c)}function b(){var e=S(),n=y(e);if(r=arguments,i=this,s=e,n){if(void 0===a)return m(s);if(d)return a=setTimeout(v,t),f(s)}return void 0===a&&(a=setTimeout(v,t)),c}return t=$(t)||0,q(n)&&(u=!!n.leading,o=(d="maxWait"in n)?w($(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=s=i=a=void 0},b.flush=function(){return void 0===a?c:g(S())},b};var C=i("7Y9D8"),T=i("cYlGq"),j=i("JcIhZ"),N=i("2LJO6");d=i("bMDee");const k=document.querySelector(".search-input"),O=document.querySelector("#image-container"),A=document.getElementById("pagination"),M=document.getElementById("spinner"),I=document.querySelector(".list-area"),x=document.querySelector(".list-ingred"),D=document.querySelector(".input-section"),U=document.querySelector(".list-time");document.querySelector(".clear-button").addEventListener("click",(function({target:e}){document.querySelector(".list-time").value="",document.querySelector(".search-input").value="",document.querySelector(".list-area").value="",document.querySelector(".list-ingred").value="",K(e)}));let H="",_="",J="",B="",R="";async function P(){try{const t=await async function(){try{return(await(0,d.fetchAreaRecipes)()).reduce(((e,t)=>e+function(e){const{name:t}=e;return`<option value="${t}">${t}</option>`}(t)))}catch{}}();e=t,I.insertAdjacentHTML("beforeend",e)}catch{}var e}async function Y(){try{const t=await async function(){try{return(await(0,d.fetchIngredientsRecipes)()).reduce(((e,t)=>e+function(e){const{name:t,_id:n}=e;return`<option value="${n}">${t}</option>`}(t)))}catch{}}();e=t,x.insertAdjacentHTML("beforeend",e)}catch{}var e}F(),O.addEventListener("click",(function({target:e}){if(!e.closest("button"))return;const t=e.closest("button");"favorite"===t.name&&function(e){const t=JSON.parse(e.dataset.info);e.classList.toggle("active");const n=JSON.parse(localStorage.getItem("favorites"))??[];e.classList.contains("active")?localStorage.setItem("favorites",JSON.stringify([...n,t])):localStorage.setItem("favorites",JSON.stringify([...n.filter((e=>e.id!==t.id))]))}(t),"details"===t.name&&(0,N.OpenModal)(t)}));const z=e(l)((function(e){const t=e.target.value;if(e.target.classList.contains("search-input")){if(!t)return k.value="";_=function(e){const t=e.trim();return`${t[0].toUpperCase()}${t.slice(1,t.length)}`}(t)}e.target.classList.contains("list-area")&&(R=t);e.target.classList.contains("list-ingred")&&(B=t);e.target.classList.contains("list-time")&&(J=t);O.innerHTML="",Q(),F(),console.log(_,R,J,B)}),300);async function F(t=1,n=a){try{M.style.display="block",P(),Y();const{page:e,perPage:r,totalPages:i,results:o}=await n(_,t,J,R,B);if(!o.length)throw new Error("No result");const c=await[...o.map((({title:e,description:t,preview:n,rating:r,_id:i,category:o})=>(0,T.default)(e,t,n,r,i,o)))].join("");i>1?(A.style.display="block",(0,j.default)(e,r,i,(e=>{F(e,n)}))):A.style.display="none",O.innerHTML=c,H=_}catch(t){U.firstElementChild.setAttribute("selected","selected"),I.firstElementChild.setAttribute("selected","selected"),x.firstElementChild.setAttribute("selected","selected"),A.style.display="none",e(C).Notify.warning("No result for your request, please try again!"),_="",J="",B="",R="",H===_&&(H=""),_=H||"",F()}finally{U.firstElementChild.removeAttribute("selected","selected"),I.firstElementChild.removeAttribute("selected","selected"),x.firstElementChild.removeAttribute("selected","selected"),M.style.display="none"}}function W(e=""){_=e}D.addEventListener("input",z);const Z=document.getElementById("categoriesContainer"),G=document.createElement("div");G.className="scroll-content",Z.appendChild(G);const V=document.getElementById("allCategoriesButton");function K({target:e}){Q(e),W(),O.innerHTML="",F(1,s);Array.from(document.querySelectorAll(".scroll-content button")).forEach((e=>{e.classList.remove("isUse")}))}function Q(e=V){document.querySelectorAll(".isUse").forEach((e=>e.classList.remove("isUse"))),e.classList.add("isUse")}V.addEventListener("click",K),async function(){const e=document.getElementById("categoriesContainer"),t=e.querySelector(".scroll-content");t.innerHTML="";const n=await(0,d.fetchCategories)(),r=[];n.forEach((e=>{const n=function(e,t){const n=document.createElement("button");return n.textContent=e,n.classList.add("button-category"),n.addEventListener("click",t),n}(e.name,(()=>{W(e.name),O.innerHTML="",F(1,s);document.querySelectorAll(".isUse").forEach((e=>{e.classList.remove("isUse")})),n.classList.add("isUse")}));r.push(n),t.appendChild(n)})),u.default.init(e,{alwaysShowTracks:!0})}(),i("cYlGq"),i("lF9VE");d=i("bMDee");const X=document.querySelector(".popular-recipes-list");!async function(){try{!function(e){const t=e.map((e=>`<li class="popular-recipes-item">\n      <img class="popular-recipes-image" src="${e.preview}" alt="${e.title}" />\n      <div>\n      <p class="popular-recipes-item-title">${e.title}</p>\n      <p class="popular-recipes-item-description">${e.description}</p>\n      </div>\n    </li>`)).join("");X.innerHTML=t}(await(0,d.getPopularRecipes)())}catch(e){console.error("Error while rendering popular recipes:",e)}}();C=i("7Y9D8");const ee={form:document.querySelector(".js-order-form"),inputs:document.querySelectorAll(".order-now-input"),inputName:document.querySelector(".js-input-name"),inputTel:document.querySelector(".js-input-tel"),inputEmail:document.querySelector(".js-input-email"),inputComment:document.querySelector(".js-input-comment"),btn:document.querySelector(".js-order-btn"),btnsOpen:document.querySelectorAll(".js-open-order"),backdrop:document.querySelector(".backdrop-recipes")};function te(){let e=!1,t=!1,n=!1;var r,i,o;r=ee.inputName.value,/^[a-zA-Zа-яА-Я\s]{2,30}$/.test(r)?(ee.inputName.style.borderColor="#9bb537",e=!0):ee.inputName.style.borderColor="#b83245",i=ee.inputEmail.value,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)?(ee.inputEmail.style.borderColor="#9bb537",t=!0):ee.inputEmail.style.borderColor="#b83245",o=ee.inputTel.value,/^\d{10}$/.test(o)?(ee.inputTel.style.borderColor="#9bb537",n=!0):ee.inputTel.style.borderColor="#b83245",ee.btn.disabled=!(e&&t&&n)}function ne(){ee.backdrop.classList.remove("is-hidden-modal"),ee.form.classList.remove("is-hidden-modal"),ae(),ee.backdrop.addEventListener("click",oe),window.addEventListener("keydown",re)}function re({code:e}){if("Escape"===e)return ie(),void ce()}function ie(){ee.backdrop.classList.add("is-hidden-modal"),ee.form.classList.add("is-hidden-modal"),ae()}function oe({currentTarget:e,target:t}){if(e===t||t.closest(".close-modal"))return ie(),void ce()}function ce(){ee.backdrop.removeEventListener("click",oe),window.removeEventListener("keydown",re)}function ae(){document.body.classList.toggle("overflow-hidden")}ee.inputs.forEach((e=>e.addEventListener("input",te))),ee.form.addEventListener("submit",(function(t){t.preventDefault(),console.log({name:ee.inputName.value,tel:ee.inputTel.value,email:ee.inputEmail.value,comment:ee.inputComment.value}),e(C).Notify.success(`Hi, ${ee.inputName.value}. Please confirm the order by email: ${ee.inputEmail.value}`),ee.inputName.style.borderColor="",ee.inputEmail.style.borderColor="",ee.inputTel.style.borderColor="",t.target.reset(),ie(),ce()})),ee.btnsOpen.forEach((e=>e.addEventListener("click",ne))),i("2LJO6");
//# sourceMappingURL=index.07700a62.js.map