"use strict";(self.webpackChunksvg_to_png=self.webpackChunksvg_to_png||[]).push([[826],{857:(e,t,a)=>{a.r(t)},909:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(893),r=a(10),s=o(a(701));function n(e){return(0,i.jsx)("a",{className:"font-display hover:underline font-semibold",href:"https://github.com/Josan-Coba/",children:e},void 0)}t.default=()=>(0,i.jsxs)("footer",{className:"text-center",children:[(0,i.jsx)("div",{className:"h-0.5 my-8 mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent"},void 0),(0,i.jsx)("div",{children:(0,i.jsx)(s.default,{},void 0)},void 0),(0,i.jsx)("div",{className:"pt-8",children:(0,i.jsx)("a",{href:"https://github.com/Josan-Coba/svg-to-png",rel:"noreferrer",target:"_blank",children:(0,i.jsx)("img",{alt:"GitHub Repository",className:"mx-auto",src:"/static/GitHub-Mark-32px.png"},void 0)},void 0)},void 0),(0,i.jsx)("div",{className:"py-8 align-middle",children:(0,i.jsx)(r.FormattedMessage,{defaultMessage:"Made with ❤️ by <a>Josan</a>",id:"app.footer.made-by",values:{a:n}},void 0)},void 0)]},void 0)},463:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(893),r=a(294),s=a(10),n=o(a(749)),l=o(a(563));t.default=()=>{const[e,t]=(0,r.useState)(void 0);return(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsxs)("div",{className:"my-8",children:[(0,i.jsx)("h1",{className:"font-display font-medium text-secondary text-4xl sm:text-7xl",children:(0,i.jsx)(s.FormattedMessage,{defaultMessage:"SVG 🡒 PNG",id:"app.title"},void 0)},void 0),(0,i.jsx)("div",{className:"my-8",children:(0,i.jsx)(s.FormattedMessage,{defaultMessage:"Just a simple converter from SVG to PNG, because I needed one that provided correct conversions.",id:"app.description"},void 0)},void 0)]},void 0),(0,i.jsxs)("div",{className:"mx-auto my-8 flex flex-col items-center",children:[(0,i.jsx)(n.default,{data:e},void 0),(0,i.jsx)(l.default,{onLoad:t},void 0)]},void 0)]},void 0)}},231:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(893),r=o(a(875)),s=a(294),n=a(455),l=o(a(717)),d=o(a(530));t.default=function(e){const{className:t,description:a,disabled:o,label:c,onBlur:u,onMouseDownCapture:p,onFocus:h,...v}=e,f={...e.style,opacity:1e-5},m=(0,s.useRef)(null),[g,b]=(0,s.useState)(void 0),[x,w]=(0,s.useState)(null),[y,j]=(0,s.useState)(null),[N,_]=(0,s.useState)(null),{attributes:M,styles:E,update:C}=(0,n.usePopper)(x,y,{modifiers:[{name:"arrow",options:{element:N,padding:8}},{name:"offset",options:{offset:[0,8]}}]}),k=(0,s.useCallback)((()=>{m.current||(m.current=setTimeout((()=>{b(!0),C&&C().catch((e=>{console.error("Failed updating tooltip",e)}))}),600))}),[C]),S=(0,s.useCallback)((()=>{m.current&&(clearTimeout(m.current),m.current=null),b(void 0)}),[]),[z,O]=(0,s.useState)(!1),[L,P]=(0,s.useState)(!1),D=(0,s.useCallback)((e=>{P(!0),p&&p(e)}),[p]),I=(0,s.useCallback)((e=>{O(!0),k(),h&&h(e)}),[h,k]),B=(0,s.useCallback)((e=>{O(!1),P(!1),S(),u&&u(e)}),[u,S]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{"aria-hidden":"true",className:(0,r.default)("tpg-tool-label text-sm mt-0.5 text-center w-full",o&&"text-opacity-50",z&&"text-primary text-opacity-100"),children:c},void 0),(0,i.jsx)("div",{className:t,children:(0,i.jsxs)("label",{className:(0,r.default)("relative flex flex-none justify-center","w-full h-full tpg-menu-1 pt-6 text-center self-center",o?"text-opacity-50 cursor-not-allowed":"cursor-pointer",z?"border-primary border-opacity-100 border-b-2 pb-0":"border-secondary border-opacity-30 border-b pb-px",!o&&"hover:bg-primary hover:bg-opacity-20",!o&&"active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0",!o&&"active:border-primary active:border-opacity-100 active:border-b-2 active:pb-0"),onMouseEnter:k,onMouseLeave:S,ref:w,children:[(0,i.jsx)("input",{...v,className:(0,r.default)("absolute h-full w-full -mt-6",o?"pointer-events-none":"cursor-pointer"),disabled:o,type:"checkbox",onBlur:B,onFocus:I,onMouseDownCapture:D,style:f},void 0),e.checked?(0,i.jsx)(l.default,{"aria-hidden":"true",className:z&&!L?"outline-primary":"",focusable:"false",height:e.height,style:e.style,width:e.width},void 0):(0,i.jsx)(d.default,{"aria-hidden":"true",className:z&&!L?"outline-primary":"",focusable:"false",height:e.height,style:e.style,width:e.width},void 0),(0,i.jsxs)("div",{className:(0,r.default)("popper-container absolute z-10 bg-surface rounded-lg min-w-max p-2","elevation-dp8 focus:outline-none tpg-prop-label text-center"),"data-show":g,ref:j,style:E.popper,tabIndex:-1,...M.popper,children:[(0,i.jsx)("span",{id:"link-checkbox-description-tooltip",children:a},void 0),(0,i.jsx)("div",{className:"popper-arrow",ref:_,style:E.arrow},void 0)]},void 0)]},void 0)},void 0)]},void 0)}},548:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(893),r=o(a(909)),s=o(a(463)),n=a(573);a(857),t.default=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.I18nProvider,{children:(0,i.jsxs)("div",{className:"text-secondary min-h-full max-w-7xl mx-8 xl:mx-auto",children:[(0,i.jsx)("main",{children:(0,i.jsx)(s.default,{},void 0)},void 0),(0,i.jsx)(r.default,{},void 0)]},void 0)},void 0)},void 0)}},749:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(893),r=o(a(875)),s=a(294),n=a(10),l=o(a(231)),d=o(a(720)),c=(0,n.defineMessages)({height:{defaultMessage:"Height",id:"app.size-controls.height-label"},keepRatio:{defaultMessage:"Keep aspect ratio?",id:"app.size-controls.aspect-ratio-label"},width:{defaultMessage:"Width",id:"app.size-controls.width-label"}});function u(e){const{aspectRatio:t,size:a,onChange:o}=e,r=(0,n.useIntl)(),[d,u]=(0,s.useState)(!0),h=r.formatMessage(c.keepRatio),v=(0,s.useCallback)((e=>{if(void 0!==a?.width){const i=Number(e.target.value);o({height:i,width:d?i*t:a.width})}}),[t,d,o,a?.width]),f=(0,s.useCallback)((e=>{if(void 0!==a?.height){const i=Number(e.target.value);o({height:d?i/t:a.height,width:i})}}),[t,d,o,a?.height]),m=(0,s.useCallback)((e=>{u(e.target.checked),e.target.checked&&void 0!==a&&o({height:a.width/t,width:a.width})}),[t,o,a]);return(0,i.jsxs)("div",{className:"card-dimensions-grid w-48 flex-none",children:[(0,i.jsx)(p,{align:"right",disabled:void 0===a,onChange:f,prop:"width",value:a?.width},void 0),(0,i.jsx)(l.default,{checked:d,className:"w-8 h-full",description:h,disabled:void 0===a,label:"×",name:"keep-original-aspect-ratio",onChange:m,width:"1.5rem"},void 0),(0,i.jsx)(p,{align:"left",disabled:void 0===a,onChange:v,prop:"height",value:a?.height},void 0)]},void 0)}function p({align:e,disabled:t=!1,onChange:a,prop:o,value:l}){const d=(0,n.useIntl)(),[u,p]=(0,s.useState)(!1),h=(0,s.useCallback)((()=>{p(!0)}),[]),v=(0,s.useCallback)((()=>{p(!1)}),[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("label",{className:(0,r.default)("tpg-tool-label mt-1 mr-0 mb-0 px-1",u&&"text-primary text-opacity-100",t&&"text-opacity-50",{"ml-auto text-right":"right"===e,"mr-auto text-left":"left"===e}),htmlFor:`card-size-${o}-input`,children:d.formatMessage(c[o])},void 0),(0,i.jsx)("input",{className:(0,r.default)("w-full h-full tpg-menu-1 no-spinner","bg-transparent p-0 pt-5 px-1 border-0",t&&"text-opacity-50 cursor-not-allowed",!t&&"hover:bg-primary hover:bg-opacity-20",!t&&"active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0","focus:outline-none focus:ring-0","focus:border-primary focus:border-opacity-100 focus:border-b-2 focus:pb-0","pb-px border-b border-secondary border-opacity-30",{"ml-auto text-right":"right"===e,"mr-auto text-left":"left"===e}),disabled:t,id:`card-size-${o}-input`,name:`card-size-${o}-input`,onBlur:v,onChange:a,onFocus:h,type:"number",value:Number.isFinite(l)?l:""},void 0)]},void 0)}t.default=function(e){const{data:t}=e,a=t?t.width/t.height:NaN,[o,l]=(0,s.useState)(t?{height:t.height,width:t.width}:void 0),c=(0,s.useRef)(null),p=(0,s.useCallback)((async()=>{if(t&&o){const r=await(e=t.content,a=o.height,i=o.width,new Promise(((t,o)=>{const r=new Image,s=document.createElement("canvas");r.height=a,s.height=a,r.width=i,s.width=i;const n=URL.createObjectURL(e);r.addEventListener("load",(function(){URL.revokeObjectURL(n);const e=s.getContext("2d");e?(e.drawImage(r,0,0,i,a),s.toBlob((e=>{e?t(e):o(new Error("Could not retrieve canvas content blob"))}),"image/png")):o(new Error("Could not retrieve canvas context"))})),r.src=n}))),s=URL.createObjectURL(r);c.current&&URL.revokeObjectURL(c.current),c.current=s,function(e,t){const a=new MouseEvent("click",{bubbles:!1,cancelable:!0,view:window}),o=document.createElement("a");o.setAttribute("download",t),o.setAttribute("href",e),o.setAttribute("rel","noreferrer"),o.setAttribute("target","_blank"),o.dispatchEvent(a)}(s,t?.name??"image.png")}var e,a,i}),[t,o]),h=(0,s.useCallback)((e=>{l(e)}),[]);return(0,s.useEffect)((()=>{l(t?{height:t.height,width:t.width}:void 0)}),[t]),(0,i.jsxs)("div",{className:"flex-none mx-auto flex my-4",children:[(0,i.jsx)(u,{aspectRatio:a,onChange:h,size:o},void 0),(0,i.jsx)("button",{className:(0,r.default)("w-max h-full tpg-menu-1 flex flex-none justify-center mx-2 rounded-lg","text-secondary bg-transparent p-0 pt-2.5 pb-2.5 px-4 border-0","focus:outline-primary","disabled:cursor-not-allowed disabled:opacity-50",void 0!==t&&"elevation-dp2 hover:bg-primary hover:bg-opacity-20",void 0!==t&&"active:bg-primary active:bg-opacity-50 active:shadow-none active:ring-0"),disabled:!t,onClick:p,children:(0,i.jsxs)("div",{className:"h-7 flex justify-center items-center",children:[(0,i.jsx)(d.default,{className:"h-6 w-6 m-0.5 mr-2"},void 0),(0,i.jsx)(n.FormattedMessage,{defaultMessage:"Download",id:"app.download-button.label"},void 0)]},void 0)},void 0)]},void 0)}},563:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SvgNotLoadedException=t.ExplicitSizeNotFoundException=t.InvalidViewBoxException=void 0;const i=a(893),r=o(a(875)),s=a(294),n=a(356),l=a(10),d=o(a(93)),c=({className:e,name:t,size:a})=>{const o=t.indexOf(".",t.length-9),r=o>=0?t.slice(0,o):t,s=o>=0?t.slice(o):"";return(0,i.jsx)("div",{className:e,children:(0,i.jsxs)("span",{className:"tpg-prop-label text-center flex justify-center flex-wrap",children:[(0,i.jsxs)("span",{className:"flex-initial flex justify-center max-w-full",children:[(0,i.jsx)("span",{className:"flex-initial block truncate",children:r},void 0),(0,i.jsx)("span",{className:"flex-none",children:s},void 0)]},void 0),(0,i.jsx)("span",{className:"flex-none whitespace-nowrap",children:void 0!==a?` (${u(a)})`:""},void 0)]},void 0)},void 0)};function u(e){let t=e;const a=["Bytes","KiB","MiB","GiB"];for(const e of a){if(t/1024<1)return`${t.toFixed(1)} ${e}`;t/=1024}return`${t.toFixed(1)} TiB`}t.default=function(e){const{onError:t,onLoad:a}=e,[o,u]=(0,s.useState)(void 0),[f,m]=(0,s.useState)(void 0),[g,b]=(0,s.useState)(void 0),[x,w]=(0,s.useState)(void 0),[y,j]=(0,s.useState)(!1),N=(0,s.useRef)(null),_=(0,s.useCallback)((e=>{if(e.length){o&&(URL.revokeObjectURL(o),u(void 0));const t=new FileReader;t.addEventListener("abort",(()=>console.info("Resource upload aborted while reading file"))),t.addEventListener("error",(()=>console.error("Resource upload has failed while reading file"))),t.addEventListener("loadstart",(()=>j(!0))),t.addEventListener("loadend",(()=>j(!1))),t.addEventListener("load",(()=>{b(e[0].name),w(e[0].size);const a=t.result;if(a){const e=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),t=window.URL.createObjectURL(e);m(e),u(t)}})),t.readAsBinaryString(e[0])}}),[o]),{getRootProps:M,getInputProps:E,isDragAccept:C,isDragActive:k,isDragReject:S}=(0,n.useDropzone)({accept:"image/svg+xml",multiple:!1,onDrop:_}),z=(0,s.useCallback)((function(){if(f){const e=g?function(e){return e.endsWith(".svg")?e.replace(/\.svg$/gi,".png"):`${e}.png`}(g):void 0;try{if(!N.current?.contentDocument)throw new v("Could not load SVG input");{const{contentDocument:t}=N.current,o=function(e){const t=e.documentElement.getAttribute("height"),a=t?Number.parseInt(t):void 0,o=e.documentElement.getAttribute("width"),i=o?Number.parseInt(o):void 0;if(void 0!==a&&Number.isInteger(a)&&void 0!==i&&Number.isInteger(i))return{height:a,width:i};const r=e.documentElement.getAttribute("viewBox");if(r){const e="[\\+\\-]?\\d*\\.?\\d+",t="[\\s\\,]+",a=new RegExp(`(?<x>${e})${t}(?<y>${e})${t}(?<w>${e})${t}(?<h>${e})`,"gi").exec(r);if(a){const e=Number(a.groups?.w)-Number(a.groups?.x),t=Number(a.groups?.h)-Number(a.groups?.y);if(!Number.isFinite(t)||!Number.isFinite(e))throw new p(`Couldn't parse a valid viewBox attribute, found [viewBox="${r}"]`);return{height:t,width:e}}}throw new h('The SVG needs to specify some size information either with a "viewBox" attribute or with a pair of "width"/"height" attributes')}(t);t.documentElement.getAttribute("viewBox")||t.documentElement.setAttribute("viewBox",`0 0 ${o.width} ${o.height}`),a({content:f,height:o.height,name:e,width:o.width})}}catch(e){t?t(e):console.error("EXCEPTION=",e)}}}),[g,t,a,f]);return(0,i.jsx)("div",{...M({className:(0,r.default)("focusable-wrapper",void 0===o?"w-96 h-48":"min-w-max h-auto")}),children:(0,i.jsxs)("div",{className:(0,r.default)("focusable w-full h-full flex items-center justify-center p-4","rounded-lg border-2 border-secondary border-opacity-70 border-dashed","hover:bg-primary hover:bg-opacity-20","ring-primary ring-opacity-80","active:bg-primary active:bg-opacity-50 active:ring-0 active:shadow-none"),children:[(0,i.jsx)("input",{...E()},void 0),(0,i.jsx)("div",{className:"w-full h-full tpg-menu-2 text-center flex items-center justify-center",children:y?(0,i.jsx)(d.default,{className:"animate-spin -ml-1 mr-3 w-8 h-8 text-secondary"},void 0):C?(0,i.jsx)("p",{children:(0,i.jsx)(l.FormattedMessage,{defaultMessage:"Drop the file here!",id:"app.upload-resource.message-body-drag-accept"},void 0)},void 0):S?(0,i.jsx)("p",{children:(0,i.jsx)(l.FormattedMessage,{defaultMessage:"The file will be rejected due to invalid MIME type",id:"app.upload-resource.message-body-drag-reject"},void 0)},void 0):k?(0,i.jsx)("p",{children:(0,i.jsx)(l.FormattedMessage,{defaultMessage:"Drop a file here...",id:"app.upload-resource.message-body-drag-active"},void 0)},void 0):void 0!==o?(0,i.jsxs)("div",{className:"w-full h-full relative",children:[(0,i.jsx)("object",{className:"max-w-40v max-h-60v mx-auto",data:o,onLoad:z,ref:N,type:"image/svg+xml"},void 0),void 0!==g&&(0,i.jsxs)("div",{className:"mt-4 pb-1 -mb-2 rounded-b-lg",children:[(0,i.jsx)("div",{className:"h-px mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent"},void 0),(0,i.jsx)(c,{className:" mt-2",name:g,size:x},void 0)]},void 0)]},void 0):(0,i.jsx)("p",{children:(0,i.jsx)(l.FormattedMessage,{defaultMessage:"Drag and drop a file here, or click to select a file from your device",id:"app.upload-resource.message-body"},void 0)},void 0)},void 0)]},void 0)},void 0)};class p extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,p),this.name="InvalidViewBoxException"}}t.InvalidViewBoxException=p;class h extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,h),this.name="ExplicitSizeNotFoundException"}}t.ExplicitSizeNotFoundException=h;class v extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,h),this.name="SvgNotLoadedException"}}t.SvgNotLoadedException=v},573:function(e,t,a){var o=this&&this.__createBinding||(Object.create?function(e,t,a,o){void 0===o&&(o=a),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,o){void 0===o&&(o=a),e[o]=t[a]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&o(t,e,a);return i(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useI18n=t.I18nProvider=void 0;const n=a(893),l=r(a(294)),d=a(10),c=s(a(42)),u=s(a(184)),p=Object.freeze({en:Object.freeze({code:"en",messages:c.default,ownDisplayName:"English"}),es:Object.freeze({code:"es",messages:u.default,ownDisplayName:"Español"})}),h=Object.freeze(Object.values(p).map((({code:e,ownDisplayName:t})=>Object.freeze({code:e,ownDisplayName:t})))),v=function(e,t){const a=Object.keys(t),o=a.find((t=>t===e));if(o)return o;const i=a.filter((t=>t.startsWith(e)||e.startsWith(t)));return i.length?i[0]:"en"}(function(){if(navigator.cookieEnabled){const e=/lang=([\w-]*)/i.exec(document.cookie);if(e&&e[1])return e[1]}return localStorage.getItem("lang")||navigator.languages&&navigator.languages[0]||navigator.language||"en"}(),p),f=l.default.createContext(void 0);t.I18nProvider=({children:e})=>{const[t,a]=(0,l.useState)(v),o=(0,l.useMemo)((()=>({availableLocales:h,currentLocale:t,setLocale:a})),[t]);return(0,l.useEffect)((()=>{navigator.cookieEnabled?document.cookie=`lang=${t};path=/;max-age=31536000;samesite=strict`:localStorage.setItem("lang",t),document.getElementsByTagName("html")[0].setAttribute("lang",t)}),[t]),(0,n.jsx)(f.Provider,{value:o,children:(0,n.jsx)(d.IntlProvider,{defaultLocale:"en",locale:t,messages:p[t].messages,children:e},void 0)},void 0)},t.useI18n=function(){const e=l.default.useContext(f);if(void 0===e)throw new Error("`useLocale` must be used within a I18nProvider");return e}},701:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=a(893),i=a(294),r=a(573);t.default=function(){const{availableLocales:e,currentLocale:t,setLocale:a}=(0,r.useI18n)(),s=(0,i.useCallback)((e=>a(e.target.value)),[a]);return(0,o.jsx)("label",{className:"bg-surface inline-block rounded-lg",children:(0,o.jsx)("select",{className:"capitalize font-semibold rounded-lg border-secondary shadow ringed-focus focus:border-secondary focus:ring-inset active:shadow-none",defaultValue:t,onChange:s,children:e.map((({code:e,ownDisplayName:t})=>(0,o.jsx)("option",{className:"capitalize font-semibold",value:e,children:t},e)))},void 0)},void 0)}},720:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=a(893);t.default=function(e){return(0,o.jsx)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M16.59,9H15V4c0-0.55-0.45-1-1-1h-4C9.45,3,9,3.45,9,4v5H7.41c-0.89,0-1.34,1.08-0.71,1.71l4.59,4.59 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.92,10.08,17.48,9,16.59,9z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z"},void 0)},void 0)}},717:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=a(893);t.default=function(e){return(0,o.jsx)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M17,7h-3c-0.55,0-1,0.45-1,1s0.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3 c2.76,0,5-2.24,5-5S19.76,7,17,7z M8,12c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1s-0.45-1-1-1H9C8.45,11,8,11.45,8,12z M10,15H7 c-1.65,0-3-1.35-3-3s1.35-3,3-3h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H7c-2.76,0-5,2.24-5,5s2.24,5,5,5h3c0.55,0,1-0.45,1-1 C11,15.45,10.55,15,10,15z"},void 0)},void 0)}},530:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=a(893);t.default=function(e){return(0,o.jsx)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M14,9h2.87c1.46,0,2.8,0.98,3.08,2.42c0.31,1.64-0.74,3.11-2.22,3.48l1.53,1.53c1.77-0.91,2.95-2.82,2.7-5.01 C21.68,8.86,19.37,7,16.79,7H14c-0.55,0-1,0.45-1,1C13,8.55,13.45,9,14,9z M3.51,3.51c-0.39-0.39-1.02-0.39-1.41,0 c-0.39,0.39-0.39,1.02,0,1.41l2.64,2.64c-1.77,0.91-2.95,2.82-2.7,5.01C2.32,15.14,4.63,17,7.21,17H10c0.55,0,1-0.45,1-1 c0-0.55-0.45-1-1-1H7.13c-1.46,0-2.8-0.98-3.08-2.42C3.74,10.94,4.8,9.47,6.27,9.1l2.12,2.12C8.16,11.41,8,11.68,8,12 c0,0.55,0.45,1,1,1h1.17l8.9,8.9c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L3.51,3.51z M14,11l1.71,1.71 C15.89,12.53,16,12.28,16,12c0-0.55-0.45-1-1-1H14z"},void 0)},void 0)}},93:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=a(893);t.default=e=>(0,o.jsxs)("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,o.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"},void 0),(0,o.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},void 0)]},void 0)},715:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(294),r=a(935),s=o(a(548)),n=(0,i.createElement)(s.default),l=document.getElementById("app-root");(0,r.render)(n,l)},42:e=>{e.exports=JSON.parse('{"app.description":"Just a simple converter from SVG to PNG, because I needed one that provided correct conversions.","app.download-button.label":"Download","app.footer.made-by":"Made with ❤️ by <a>Josan</a>","app.size-controls.aspect-ratio-label":"Keep aspect ratio?","app.size-controls.height-label":"Height","app.size-controls.width-label":"Width","app.title":"SVG 🡒 PNG","app.upload-resource.message-body":"Drag and drop a file here, or click to select a file from your device","app.upload-resource.message-body-drag-accept":"Drop the file here!","app.upload-resource.message-body-drag-active":"Drop a file here...","app.upload-resource.message-body-drag-reject":"The file will be rejected due to invalid MIME type"}')},184:e=>{e.exports=JSON.parse('{"app.description":"Un conversor de SVG a PNG, porque necesitaba uno que hiciese conversiones correctas.","app.download-button.label":"Descargar","app.footer.made-by":"Hecho con ❤️ por <a>Josan</a>","app.size-controls.aspect-ratio-label":"¿Conservar relación de aspecto?","app.size-controls.height-label":"Alto","app.size-controls.width-label":"Ancho","app.title":"SVG 🡒 PNG","app.upload-resource.message-body":"Arrastra y suelta un fichero aquí, o clica para seleccionar un fichero de tu dispositivo","app.upload-resource.message-body-drag-accept":"¡Suelta el fichero aquí!","app.upload-resource.message-body-drag-active":"Suelta un fichero aquí...","app.upload-resource.message-body-drag-reject":"El fichero será rechazado debido a incompatibilidad de tipos MIME"}')}},e=>{e.O(0,[216],(()=>(715,e(e.s=715)))),e.O()}]);