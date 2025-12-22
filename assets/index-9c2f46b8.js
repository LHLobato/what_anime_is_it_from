(function(){const Re=document.createElement("link").relList;if(Re&&Re.supports&&Re.supports("modulepreload"))return;for(const $e of document.querySelectorAll('link[rel="modulepreload"]'))ge($e);new MutationObserver($e=>{for(const fe of $e)if(fe.type==="childList")for(const Ie of fe.addedNodes)Ie.tagName==="LINK"&&Ie.rel==="modulepreload"&&ge(Ie)}).observe(document,{childList:!0,subtree:!0});function S($e){const fe={};return $e.integrity&&(fe.integrity=$e.integrity),$e.referrerPolicy&&(fe.referrerPolicy=$e.referrerPolicy),$e.crossOrigin==="use-credentials"?fe.credentials="include":$e.crossOrigin==="anonymous"?fe.credentials="omit":fe.credentials="same-origin",fe}function ge($e){if($e.ep)return;$e.ep=!0;const fe=S($e);fetch($e.href,fe)}})();function ym(ze){return new Promise((Re,S)=>{const ge=new FileReader;ge.readAsDataURL(ze),ge.onload=()=>Re(ge.result),ge.onerror=$e=>S($e)})}const wm="modulepreload",vm=function(ze){return"/what_anime_is_it_from/"+ze},wc={},$m=function(Re,S,ge){if(!S||S.length===0)return Re();const $e=document.getElementsByTagName("link");return Promise.all(S.map(fe=>{if(fe=vm(fe),fe in wc)return;wc[fe]=!0;const Ie=fe.endsWith(".css"),Ft=Ie?'[rel="stylesheet"]':"";if(!!ge)for(let nt=$e.length-1;nt>=0;nt--){const je=$e[nt];if(je.href===fe&&(!Ie||je.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${fe}"]${Ft}`))return;const Le=document.createElement("link");if(Le.rel=Ie?"stylesheet":wm,Ie||(Le.as="script",Le.crossOrigin=""),Le.href=fe,document.head.appendChild(Le),Ie)return new Promise((nt,je)=>{Le.addEventListener("load",nt),Le.addEventListener("error",()=>je(new Error(`Unable to preload CSS for ${fe}`)))})})).then(()=>Re()).catch(fe=>{const Ie=new Event("vite:preloadError",{cancelable:!0});if(Ie.payload=fe,window.dispatchEvent(Ie),!Ie.defaultPrevented)throw fe})};var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bm(ze){return ze&&ze.__esModule&&Object.prototype.hasOwnProperty.call(ze,"default")?ze.default:ze}function ys(ze){throw new Error('Could not dynamically require "'+ze+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ic={exports:{}};(function(ze,Re){var S=(()=>{var ge=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,fe=Object.getOwnPropertyNames,Ie=Object.prototype.hasOwnProperty,Ft=(e=>typeof ys<"u"?ys:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof ys<"u"?ys:t)[n]}):e)(function(e){if(typeof ys<"u")return ys.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),F=(e,t)=>()=>(e&&(t=e(e=0)),t),Le=(e,t)=>{for(var n in t)ge(e,n,{get:t[n],enumerable:!0})},nt=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of fe(t))!Ie.call(e,s)&&s!==n&&ge(e,s,{get:()=>t[s],enumerable:!(a=$e(t,s))||a.enumerable});return e},je=e=>nt(ge({},"__esModule",{value:!0}),e),Br,St,Pt,Xn,Tt,Mr=F(()=>{Br=new Map,St=[],Pt=(e,t,n)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Br.get(e);if(a===void 0)Br.set(e,{backend:t,priority:n});else{if(a.priority>n)return;if(a.priority===n&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let s=St.indexOf(e);s!==-1&&St.splice(s,1);for(let o=0;o<St.length;o++)if(Br.get(St[o]).priority<=n){St.splice(o,0,e);return}St.push(e)}return}throw new TypeError("not a valid backend")},Xn=async e=>{let t=Br.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return n||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Tt=async e=>{let t=e.executionProviders||[],n=t.map(p=>typeof p=="string"?p:p.name),a=n.length===0?St:n,s,o=[],l=new Set;for(let p of a){let f=await Xn(p);typeof f=="string"?o.push({name:p,err:f}):(s||(s=f),s===f&&l.add(p))}if(!s)throw new Error(`no available backend found. ERR: ${o.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:f}of o)n.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${f}`);let d=t.filter(p=>l.has(typeof p=="string"?p:p.name));return[s,new Proxy(e,{get:(p,f)=>f==="executionProviders"?d:Reflect.get(p,f)})]}}),Au=F(()=>{Mr()}),Ht,kn=F(()=>{Ht="1.23.2"}),Ut,Ke,sr=F(()=>{kn(),Ut="warning",Ke={wasm:{},webgl:{},webgpu:{},versions:{common:Ht},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ut=e}},get logLevel(){return Ut}},Object.defineProperty(Ke,"logLevel",{enumerable:!0})}),Pe,ws=F(()=>{sr(),Pe=Ke}),Ou,Ru,_f=F(()=>{Ou=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let a=n.getContext("2d");if(a!=null){let s,o;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],o=e.dims[3]):(s=e.dims[3],o=e.dims[2]);let l=(t==null?void 0:t.format)!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let h=o*s,m=0,g=h,y=h*2,w=-1;l==="RGBA"?(m=0,g=h,y=h*2,w=h*3):l==="RGB"?(m=0,g=h,y=h*2):l==="RBG"&&(m=0,y=h,g=h*2);for(let b=0;b<o;b++)for(let T=0;T<s;T++){let I=(e.data[m++]-f[0])*p[0],v=(e.data[g++]-f[1])*p[1],E=(e.data[y++]-f[2])*p[2],z=w===-1?255:(e.data[w++]-f[3])*p[3];a.fillStyle="rgba("+I+","+v+","+E+","+z+")",a.fillRect(T,b,1,1)}if("toDataURL"in n)return n.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ru=(e,t)=>{let n=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(n!=null){let s,o,l;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],o=e.dims[1],l=e.dims[3]):(s=e.dims[3],o=e.dims[2],l=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t==null?void 0:t.norm,f,h;p===void 0||p.mean===void 0?f=[255,255,255,255]:typeof p.mean=="number"?f=[p.mean,p.mean,p.mean,p.mean]:(f=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(f[3]=p.mean[3])),p===void 0||p.bias===void 0?h=[0,0,0,0]:typeof p.bias=="number"?h=[p.bias,p.bias,p.bias,p.bias]:(h=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(h[3]=p.bias[3]));let m=o*s;if(t!==void 0&&(t.format!==void 0&&l===4&&t.format!=="RGBA"||l===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,w=1,b=2,T=3,I=0,v=m,E=m*2,z=-1;d==="RGBA"?(I=0,v=m,E=m*2,z=m*3):d==="RGB"?(I=0,v=m,E=m*2):d==="RBG"&&(I=0,E=m,v=m*2),a=n.createImageData(s,o);for(let A=0;A<o*s;y+=g,w+=g,b+=g,T+=g,A++)a.data[y]=(e.data[I++]-h[0])*f[0],a.data[w]=(e.data[v++]-h[1])*f[1],a.data[b]=(e.data[E++]-h[2])*f[2],a.data[T]=z===-1?255:(e.data[z++]-h[3])*f[3]}else throw new Error("Can not access image data");return a}}),Yi,vs,Bu,Mu,Dr,mr,yf=F(()=>{Jr(),Yi=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:n,width:a}=t,s=t.norm??{mean:255,bias:0},o,l;typeof s.mean=="number"?o=[s.mean,s.mean,s.mean,s.mean]:o=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?l=[s.bias,s.bias,s.bias,s.bias]:l=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",f=n*a,h=p==="RGBA"?new Float32Array(f*4):new Float32Array(f*3),m=4,g=0,y=1,w=2,b=3,T=0,I=f,v=f*2,E=-1;d==="RGB"&&(m=3,g=0,y=1,w=2,b=-1),p==="RGBA"?E=f*3:p==="RBG"?(T=0,v=f,I=f*2):p==="BGR"&&(v=0,I=f,T=f*2);for(let z=0;z<f;z++,g+=m,w+=m,y+=m,b+=m)h[T++]=(e[g]+l[0])/o[0],h[I++]=(e[y]+l[1])/o[1],h[v++]=(e[w]+l[2])/o[2],E!==-1&&b!==-1&&(h[E++]=(e[b]+l[3])/o[3]);return p==="RGBA"?new lt("float32",h,[1,4,n,a]):new lt("float32",h,[1,3,n,a])},vs=async(e,t)=>{let n=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",l,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},f=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(n){let h=p();h.width=e.width,h.height=e.height;let m=f(h);if(m!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=g,d.width=y}else d.tensorFormat="RGBA",d.height=g,d.width=y;m.drawImage(e,0,0),l=m.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(a){let h,m;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,m=t.resizedWidth):(h=e.height,m=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=h,d.width=m,t!==void 0){let g=p();g.width=m,g.height=h;let y=f(g);if(y!=null)y.putImageData(e,0,0),l=y.getImageData(0,0,m,h).data;else throw new Error("Can not access image data")}else l=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=p();h.width=e.width,h.height=e.height;let m=f(h);if(m!=null){let g=e.height,y=e.width;return m.drawImage(e,0,0,y,g),l=m.getImageData(0,0,y,g).data,d.height=g,d.width=y,Yi(l,d)}else throw new Error("Can not access image data")}else{if(o)return new Promise((h,m)=>{let g=p(),y=f(g);if(!e||!y)return m();let w=new Image;w.crossOrigin="Anonymous",w.src=e,w.onload=()=>{g.width=w.width,g.height=w.height,y.drawImage(w,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);d.height=g.height,d.width=g.width,h(Yi(b.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return Yi(l,d);throw new Error("Input data provided is not supported - aborted tensor creation")},Bu=(e,t)=>{let{width:n,height:a,download:s,dispose:o}=t,l=[1,a,n,4];return new lt({location:"texture",type:"float32",texture:e,dims:l,download:s,dispose:o})},Mu=(e,t)=>{let{dataType:n,dims:a,download:s,dispose:o}=t;return new lt({location:"gpu-buffer",type:n??"float32",gpuBuffer:e,dims:a,download:s,dispose:o})},Dr=(e,t)=>{let{dataType:n,dims:a,download:s,dispose:o}=t;return new lt({location:"ml-tensor",type:n??"float32",mlTensor:e,dims:a,download:s,dispose:o})},mr=(e,t,n)=>new lt({location:"cpu-pinned",type:e,data:t,dims:n??[t.length]})}),or,vt,$s,Du,wf=F(()=>{or=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),vt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),$s=!1,Du=()=>{if(!$s){$s=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,n=globalThis.Float16Array,a=typeof n<"u"&&n.from;e&&(or.set("int64",BigInt64Array),vt.set(BigInt64Array,"int64")),t&&(or.set("uint64",BigUint64Array),vt.set(BigUint64Array,"uint64")),a?(or.set("float16",n),vt.set(n,"float16")):or.set("float16",Uint16Array)}}}),Yr,Qn,vf=F(()=>{Jr(),Yr=e=>{let t=1;for(let n=0;n<e.length;n++){let a=e[n];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${n}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${n}] must be a non-negative integer, got: ${a}`);t*=a}return t},Qn=(e,t)=>{switch(e.location){case"cpu":return new lt(e.type,e.data,t);case"cpu-pinned":return new lt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new lt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new lt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new lt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),lt,Jr=F(()=>{_f(),yf(),wf(),vf(),lt=class{constructor(e,t,n){Du();let a,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,s=e.dims,e.location){case"cpu-pinned":{let l=or.get(a);if(!l)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,d;if(typeof e=="string")if(a=e,d=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");l=t}else{let p=or.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?l=p.from(t,BigInt):l=p.from(t)}else if(t instanceof p)l=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")l=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&p!==Uint16Array)l=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")a="string",l=e;else if(p==="boolean")a="bool",l=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",l=Uint8Array.from(e);else{let p=vt.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=p,l=e}if(d===void 0)d=[l.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");s=d,this.cpuData=l,this.dataLocation="cpu"}let o=Yr(s);if(this.cpuData&&o!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=s,this.size=o}static async fromImage(e,t){return vs(e,t)}static fromTexture(e,t){return Bu(e,t)}static fromGpuBuffer(e,t){return Mu(e,t)}static fromMLTensor(e,t){return Dr(e,t)}static fromPinnedBuffer(e,t,n){return mr(e,t,n)}toDataURL(e){return Ou(this,e)}toImageData(e){return Ru(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Qn(this,e)}}}),Kt,Yn=F(()=>{Jr(),Kt=lt}),Pr,Ji,Xe,ft,Ur,ct,bs=F(()=>{sr(),Pr=(e,t)=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ji=(e,t)=>{var s;let n=((s=new Error().stack)==null?void 0:s.split(/\r\n|\r|\n/g))||[],a=!1;for(let o=0;o<n.length;o++){if(a&&!n[o].includes("TRACE_FUNC")){let l=`FUNC_${e}::${n[o].trim().split(" ")[1]}`;t&&(l+=`::${t}`),Pr("CPU",l);return}n[o].includes("TRACE_FUNC")&&(a=!0)}},Xe=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Ji("BEGIN",e)},ft=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||Ji("END",e)},Ur=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.time(`ORT::${e}`)},ct=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeEnd(`ORT::${e}`)}}),Pu,Jn=F(()=>{Mr(),Yn(),bs(),Pu=class Sc{constructor(t){this.handler=t}async run(t,n,a){Xe(),Ur("InferenceSession.run");let s={},o={};if(typeof t!="object"||t===null||t instanceof Kt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Kt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let f of n){if(typeof f!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(f)===-1)throw new RangeError(`'fetches' contains invalid output name: ${f}.`);s[f]=null}if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let f=!1,h=Object.getOwnPropertyNames(n);for(let m of this.outputNames)if(h.indexOf(m)!==-1){let g=n[m];(g===null||g instanceof Kt)&&(f=!0,l=!1,s[m]=g)}if(f){if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else o=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let f of this.inputNames)if(typeof t[f]>"u")throw new Error(`input '${f}' is missing in 'feeds'.`);if(l)for(let f of this.outputNames)s[f]=null;let d=await this.handler.run(t,s,o),p={};for(let f in d)if(Object.hasOwnProperty.call(d,f)){let h=d[f];h instanceof Kt?p[f]=h:p[f]=new Kt(h.type,h.data,h.dims)}return ct("InferenceSession.run"),ft(),p}async release(){return this.handler.dispose()}static async create(t,n,a,s){Xe(),Ur("InferenceSession.create");let o,l={};if(typeof t=="string"){if(o=t,typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,m=0,g=t.byteLength;if(typeof n=="object"&&n!==null)l=n;else if(typeof n=="number"){if(m=n,!Number.isSafeInteger(m))throw new RangeError("'byteOffset' must be an integer.");if(m<0||m>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(g=t.byteLength-m,typeof a=="number"){if(g=a,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||m+g>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-m}].`);if(typeof s=="object"&&s!==null)l=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof n<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(h,m,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await Tt(l),f=await d.createInferenceSessionHandler(o,p);return ct("InferenceSession.create"),ft(),new Sc(f)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Et,ei=F(()=>{Jn(),Et=Pu}),ea=F(()=>{}),$f=F(()=>{}),ti=F(()=>{}),bf=F(()=>{}),zn={};Le(zn,{InferenceSession:()=>Et,TRACE:()=>Pr,TRACE_EVENT_BEGIN:()=>Ur,TRACE_EVENT_END:()=>ct,TRACE_FUNC_BEGIN:()=>Xe,TRACE_FUNC_END:()=>ft,Tensor:()=>Kt,env:()=>Pe,registerBackend:()=>Pt});var dt=F(()=>{Au(),ws(),ei(),Yn(),ea(),$f(),bs(),ti(),bf()}),ri=F(()=>{}),ta={};Le(ta,{default:()=>ra});var ni,ii,ra,xs=F(()=>{var e;Ki(),tn(),zs(),ni="ort-wasm-proxy-worker",ii=((e=globalThis.self)==null?void 0:e.name)===ni,ii&&(self.onmessage=t=>{let{type:n,in:a}=t.data;try{switch(n){case"init-wasm":Os(a.wasm).then(()=>{Kn(a).then(()=>{postMessage({type:n})},s=>{postMessage({type:n,err:s})})},s=>{postMessage({type:n,err:s})});break;case"init-ep":{let{epName:s,env:o}=a;gu(o,s).then(()=>{postMessage({type:n})},l=>{postMessage({type:n,err:l})});break}case"copy-from":{let{buffer:s}=a,o=hs(s);postMessage({type:n,out:o});break}case"create":{let{model:s,options:o}=a;yu(s,o).then(l=>{postMessage({type:n,out:l})},l=>{postMessage({type:n,err:l})});break}case"release":wu(a),postMessage({type:n});break;case"run":{let{sessionId:s,inputIndices:o,inputs:l,outputIndices:d,options:p}=a;$u(s,o,l,d,new Array(d.length).fill(null),p).then(f=>{f.some(h=>h[3]!=="cpu")?postMessage({type:n,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:n,out:f},xu([...l,...f]))},f=>{postMessage({type:n,err:f})});break}case"end-profiling":bu(a),postMessage({type:n});break;default:}}catch(s){postMessage({type:n,err:s})}}),ra=ii?null:t=>new Worker(t??_t,{type:"classic",name:ni})}),na,ia,_t,Is,aa,Uu,Ss,sa,Lu,Ts,Nu,Es,ks,zs=F(()=>{ri(),na=typeof location>"u"?void 0:location.origin,ia=()=>{var e,t;return typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0},_t=ia(),Is=()=>{if(_t&&!_t.startsWith("blob:"))return _t.substring(0,_t.lastIndexOf("/")+1)},aa=(e,t)=>{try{let n=t??_t;return(n?new URL(e,n):new URL(e)).origin===na}catch{return!1}},Uu=(e,t)=>{let n=t??_t;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Ss=(e,t)=>`${t??"./"}${e}`,sa=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Lu=async e=>(await $m(()=>import(e),[])).default,Ts=(xs(),je(ta)).default,Nu=async()=>{if(!_t)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(aa(_t))return[void 0,Ts()];let e=await sa(_t);return[e,Ts(e)]},Es=void 0,ks=async(e,t,n,a)=>{let s=Es&&!(e||t);if(s)if(_t)s=aa(_t);else if(a&&!n)s=!0;else throw new Error("cannot determine the script source URL.");if(s)return[void 0,Es];{let o="ort-wasm-simd-threaded.jsep.mjs",l=e??Uu(o,t),d=n&&l&&!aa(l,t),p=d?await sa(l):l??Ss(o,t);return[d?p:void 0,await Lu(p)]}}}),Cs,oa,en,As,ua,qu,Wu,Os,We,tn=F(()=>{zs(),oa=!1,en=!1,As=!1,ua=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},qu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Wu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Os=async e=>{if(oa)return Promise.resolve();if(en)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(As)throw new Error("previous call to 'initializeWebAssembly()' failed.");en=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Wu())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!qu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=ua();n>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+n+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=n=1);let s=e.wasmPaths,o=typeof s=="string"?s:void 0,l=s==null?void 0:s.mjs,d=(l==null?void 0:l.href)??l,p=s==null?void 0:s.wasm,f=(p==null?void 0:p.href)??p,h=e.wasmBinary,[m,g]=await ks(d,o,n>1,!!h||!!f),y=!1,w=[];if(t>0&&w.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),w.push(new Promise((b,T)=>{let I={numThreads:n};if(h)I.wasmBinary=h;else if(f||o)I.locateFile=v=>f??o+v;else if(d&&d.indexOf("blob:")!==0)I.locateFile=v=>new URL(v,d).href;else if(m){let v=Is();v&&(I.locateFile=E=>v+E)}g(I).then(v=>{en=!1,oa=!0,Cs=v,b(),m&&URL.revokeObjectURL(m)},v=>{en=!1,As=!0,T(v)})})),await Promise.race(w),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},We=()=>{if(oa&&Cs)return Cs;throw new Error("WebAssembly is not initialized yet.")}}),Zt,la,Ue,da=F(()=>{tn(),Zt=(e,t)=>{let n=We(),a=n.lengthBytesUTF8(e)+1,s=n._malloc(a);return n.stringToUTF8(e,s,a),t.push(s),s},la=(e,t,n,a)=>{if(typeof e=="object"&&e!==null){if(n.has(e))throw new Error("Circular reference in options");n.add(e)}Object.entries(e).forEach(([s,o])=>{let l=t?t+s:s;if(typeof o=="object")la(o,l+".",n,a);else if(typeof o=="string"||typeof o=="number")a(l,o.toString());else if(typeof o=="boolean")a(l,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},Ue=e=>{let t=We(),n=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetLastError(s,s+a);let o=Number(t.getValue(s,a===4?"i32":"i64")),l=t.getValue(s+a,"*"),d=l?t.UTF8ToString(l):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${d}`)}finally{t.stackRestore(n)}}}),Gu,xf=F(()=>{tn(),da(),Gu=e=>{let t=We(),n=0,a=[],s=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(s.terminate=!1);let o=0;return(e==null?void 0:e.tag)!==void 0&&(o=Zt(e.tag,a)),n=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,o),n===0&&Ue("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&la(e.extra,"",new WeakSet,(l,d)=>{let p=Zt(l,a),f=Zt(d,a);t._OrtAddRunConfigEntry(n,p,f)!==0&&Ue(`Can't set a run config entry: ${l} - ${d}.`)}),[n,a]}catch(o){throw n!==0&&t._OrtReleaseRunOptions(n),a.forEach(l=>t._free(l)),o}}}),Vu,Fu,Hu,ai,si,Ku,pa=F(()=>{tn(),da(),Vu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Fu=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Hu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(n=>(typeof n=="string"?n:n.name)==="webgpu")&&(e.enableMemPattern=!1)},ai=(e,t,n,a)=>{let s=Zt(t,a),o=Zt(n,a);We()._OrtAddSessionConfigEntry(e,s,o)!==0&&Ue(`Can't set a session config entry: ${t} - ${n}.`)},si=async(e,t,n)=>{for(let a of t){let s=typeof a=="string"?a:a.name,o=[];switch(s){case"webnn":if(s="WEBNN",typeof a!="string"){let h=a==null?void 0:a.deviceType;h&&ai(e,"deviceType",h,n)}break;case"webgpu":if(s="JS",typeof a!="string"){let h=a;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);ai(e,"preferredLayout",h.preferredLayout,n)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let l=Zt(s,n),d=o.length,p=0,f=0;if(d>0){p=We()._malloc(d*We().PTR_SIZE),n.push(p),f=We()._malloc(d*We().PTR_SIZE),n.push(f);for(let h=0;h<d;h++)We().setValue(p+h*We().PTR_SIZE,o[h][0],"*"),We().setValue(f+h*We().PTR_SIZE,o[h][1],"*")}await We()._OrtAppendExecutionProvider(e,l,p,f,d)!==0&&Ue(`Can't append execution provider: ${s}.`)}},Ku=async e=>{let t=We(),n=0,a=[],s=e||{};Hu(s);try{let o=Vu(s.graphOptimizationLevel??"all"),l=Fu(s.executionMode??"sequential"),d=typeof s.logId=="string"?Zt(s.logId,a):0,p=s.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log severity level is not valid: ${p}`);let f=s.logVerbosityLevel??0;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log verbosity level is not valid: ${f}`);let h=typeof s.optimizedModelFilePath=="string"?Zt(s.optimizedModelFilePath,a):0;if(n=t._OrtCreateSessionOptions(o,!!s.enableCpuMemArena,!!s.enableMemPattern,l,!!s.enableProfiling,0,d,p,f,h),n===0&&Ue("Can't create session options."),s.executionProviders&&await si(n,s.executionProviders,a),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);ai(n,"enableGraphCapture",s.enableGraphCapture.toString(),a)}if(s.freeDimensionOverrides)for(let[m,g]of Object.entries(s.freeDimensionOverrides)){if(typeof m!="string")throw new Error(`free dimension override name must be a string: ${m}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Zt(m,a);t._OrtAddFreeDimensionOverride(n,y,g)!==0&&Ue(`Can't set a free dimension override: ${m} - ${g}.`)}return s.extra!==void 0&&la(s.extra,"",new WeakSet,(m,g)=>{ai(n,m,g,a)}),[n,a]}catch(o){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ue("Can't release session options."),a.forEach(l=>t._free(l)),o}}}),rn,gr,nn,oi,ui,fa,Rs,Bs,ue=F(()=>{rn=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},gr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},nn=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((s,o)=>s*o,1);return n>0?Math.ceil(a*n):void 0},oi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ui=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},fa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Rs=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Bs=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ms,Ds=F(()=>{ri(),Ms=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let n=t.headers.get("Content-Length"),a=n?parseInt(n,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),o;try{o=new ArrayBuffer(a)}catch(d){if(d instanceof RangeError){let p=Math.ceil(a/65536);o=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw d}let l=0;for(;;){let{done:d,value:p}=await s.read();if(d)break;let f=p.byteLength;new Uint8Array(o,l,f).set(p),l+=f}return new Uint8Array(o,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ps,Us,ca,Zu,ha,li,Se,_r=F(()=>{ue(),Ps=["V","I","W","E","F"],Us=(e,t)=>{console.log(`[${Ps[e]},${new Date().toISOString()}]${t}`)},ha=(e,t)=>{ca=e,Zu=t},li=(e,t)=>{let n=ui(e),a=ui(ca);n>=a&&Us(n,typeof t=="function"?t():t)},Se=(...e)=>{Zu&&li(...e)}}),Ls,an,D,ma,Ns,ga,_a,de=F(()=>{Ls=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},an=class{static calcShape(e,t,n=!1){let a=e.length,s=t.length;if(a===0)return t;if(s===0)return e;let o=Math.max(e.length,t.length),l=new Array(o);if(n){if(a<2||s<2)return;let d=Ls.calcMatMulShape([e[a-2],e[a-1]],[t[s-2],t[s-1]]);if(d===void 0)return;[l[o-2],l[o-1]]=d}for(let d=n?3:1;d<=o;d++){let p=a-d<0?1:e[a-d],f=s-d<0?1:t[s-d];if(p!==f&&p>1&&f>1)return;let h=Math.max(p,f);if(p&&f)l[o-d]=Math.max(p,f);else{if(h>1)return;l[o-d]=0}}return l}static isValidBroadcast(e,t){let n=e.length,a=t.length;if(n>a)return!1;for(let s=1;s<=n;s++)if(e[n-s]!==1&&e[n-s]!==t[a-s])return!1;return!0}},D=class mf{static size(t){return mf.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,n=4){let a=t.length;if(a===0)return[];let s=new Array(a),o=a-1;for(;o>=0;){if(t[o]%n===0){s[o]=t[o]/n;break}if(n%t[o]!==0)throw new Error("cannot convert shape");s[o]=1,n/=t[o],o--}for(o--;o>=0;o--)s[o]=t[o];return s}static sizeFromDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return mf.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw new Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return mf.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(t,n,a){let s=1;for(let o=n;o<a;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[o])}return s}static computeStrides(t){let n=t.length;if(n===0)return[];if(n===1)return[1];let a=new Array(n);a[n-1]=1,a[n-2]=t[n-1];for(let s=n-3;s>=0;--s)a[s]=a[s+1]*t[s+1];return a}static normalizeAxis(t,n){if(t<-n&&t>=n)throw new Error("unsupported axis for this operation.");return t<0?t+n:t}static normalizeAxes(t,n){return t.map(a=>this.normalizeAxis(a,n??t.length))}static sortBasedOnPerm(t,n){return n?n.map(a=>t[a]):t.slice().reverse()}static padShape(t,n){let a=t.length;return t.map((s,o)=>s+n[o]+n[o+a])}static areEqual(t,n){return t.length!==n.length?!1:t.every((a,s)=>a===n[s])}},ma=class Cu{static adjustPoolAttributes(t,n,a,s,o,l){if(!t&&a.length!==n.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let d=0;d<n.length-2;d++)d>=a.length?a.push(n[d+2]):a[d]=n[d+2];for(let d=0;d<a.length;d++)if(d<s.length){if(s[d]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let d=0;d<a.length;d++)if(d<o.length){if(o[d]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let d=0;d<a.length*2;d++)if(d<l.length){if(l[d]<0)throw new Error("pad should be greater than or equal to 1")}else l.push(0);for(let d=0;d<a.length;d++){if(a[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(l[d]>=a[d]||l[d+a.length]>=a[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,n,a,s,o,l,d){if(d){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)Cu.adjustPadAndReturnShape(t[p+(l?1:2)],n[p],a[p],s[p],o,p,p+t.length-2,d)}}static computePoolOutputShape(t,n,a,s,o,l,d){if(n.length<=0)throw new Error("input shape must be of size greater than 0");let p=[n[0],n[1]];return Cu.computeShapeHelper(t,n,p,a,s,o,l,d),p}static computeConvOutputShape(t,n,a,s,o,l,d){if(t.length<=0||n.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],n[0]];return Cu.computeShapeHelper(!1,t,p,a,s,o,l,d),p}static computeShapeHelper(t,n,a,s,o,l,d,p){if(t)for(let f=0;f<n.length-2;f++)a.push(1);else for(let f=0;f<n.length-2;f++)a.push(Cu.adjustPadAndReturnShape(n[f+2],s[f],o[f],l[f],d,f,f+n.length-2,p))}static adjustPadAndReturnShape(t,n,a,s,o,l,d,p){let f=a*(s-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return o[l]=0,o[d]=0,Math.floor((t-f)/n+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+n-1)/n-1)*n+s-t;return o[l]=Math.floor(p==="SAME_LOWER"?(h+1)/2:h/2),o[d]=h-o[l],Math.floor((t+h-s)/n+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[l]+o[d]-f)/n+1)}},Ns=class{static getShapeOfGemmResult(e,t,n,a,s){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let o,l,d;t?(o=e[1],l=e[0]):(o=e[0],l=e[1]);let p=-1;if(a?(d=n[0],p=1):(d=n[1],p=0),n[p]!==l)throw new Error("dimension mismatch");if(o<=0||d<=0||l<=0)throw new Error("invalid shape specified");if(s&&!an.isValidBroadcast(s,[o,d]))throw new Error("gemm: invalid bias shape for broadcast");return[o,d,l]}},ga=-34028234663852886e22,_a=34028234663852886e22}),ya,qs=F(()=>{ue(),ya=(e,t)=>new(oi(t))(e)}),Ws,wa,va,Gs,$a,ju,Vs,Fs,ba,Xu,Qu,If=F(()=>{ue(),_r(),Ws=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),wa=(e,t)=>{if(t==="int32")return e;let n=Ws.get(t);if(!n)throw new Error(`WebNN backend does not support data type: ${t}`);let a=n/8;if(e.byteLength%a!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let s=e.byteLength/a,o=new(oi(t))(e.buffer,e.byteOffset,s);switch(t){case"int64":case"uint64":{let l=new Int32Array(s);for(let d=0;d<s;d++){let p=o[d];if(p>2147483647n||p<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");l[d]=Number(p)}return new Uint8Array(l.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&o.some(d=>d>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let l=Int32Array.from(o,Number);return new Uint8Array(l.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},va=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let n=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case"int64":{let s=BigInt64Array.from(a,BigInt);return new Uint8Array(s.buffer)}case"uint64":{if(a.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let s=BigUint64Array.from(a,BigInt);return new Uint8Array(s.buffer)}case"int8":{if(a.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let s=Int8Array.from(a,Number);return new Uint8Array(s.buffer)}case"uint8":{if(a.some(s=>s<0||s>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number)}case"uint32":{if(a.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let s=Uint32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Gs=1,$a=()=>Gs++,ju=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Vs=(e,t)=>{let n=Ws.get(e);if(!n)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((a,s)=>a*s)*n/8):0},Fs=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:a,dataType:s,shape:o,fallbackDataType:l}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=a,this.dataType=s,this.tensorShape=o,this.fallbackDataType=l}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Vs(this.dataType,this.tensorShape)}destroy(){Se("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=va(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((a,s)=>a===n[s])}setIsDataConverted(e){this.isDataConverted=e}},ba=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,a){let s=this.tensorManager.getMLContext(e),o;if(!s.opSupportLimits().input.dataTypes.includes(t)){if(o=ju.get(t),!o||!s.opSupportLimits().input.dataTypes.includes(o))throw new Error(`WebNN backend does not support data type: ${t}`);Se("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(s,t,n))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Vs(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let l=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,l,!0,!0,o),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=wa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Se("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,n;if(this.activeUpload){let a=(t=this.wrapper)!=null&&t.isDataConverted?va(this.activeUpload,(n=this.wrapper)==null?void 0:n.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(a):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(a);return}else return a.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Xu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=$a();return this.tensorTrackersById.set(e,new ba(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,a,s){Se("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${a}, copyOld: ${s}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,n,a,s)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Se("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,a){let s=this.getMLContext(e),o=$a(),l=new Fs({sessionId:e,context:s,tensor:t,dataType:n,shape:a});return this.tensorTrackersById.set(o,new ba(this,l)),this.externalTensors.add(l),o}async getCachedTensor(e,t,n,a,s,o,l){let d=this.getMLContext(e);for(let[f,h]of this.freeTensors.entries())if(h.canReuseTensor(d,t,n)){Se("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${l?`fallbackDataType: ${l},`:""} shape: ${n}`);let m=this.freeTensors.splice(f,1)[0];return m.sessionId=e,m}Se("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${l?`fallbackDataType: ${l},`:""} shape: ${n}}`);let p=await d.createTensor({dataType:l??t,shape:n,dimensions:n,usage:a,writable:s,readable:o});return new Fs({sessionId:e,context:d,tensor:p,dataType:t,shape:n,fallbackDataType:l})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Qu=(...e)=>new Xu(...e)}),di,xa,Yu,Sf=F(()=>{ue(),tn(),qs(),If(),_r(),di=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),xa=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),a=Object.keys(t).sort();return n.length===a.length&&n.every((s,o)=>s===a[o]&&e[s]===t[s])},Yu=class{constructor(e){this.tensorManager=Qu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,ha(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Se("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Se("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Se("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let n=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(n=>xa(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(s=>s.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Se("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,a,s){let o=di.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,a,s)}async createTemporaryTensor(e,t,n){Se("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let a=di.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,s,a,n,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(s):this.temporarySessionTensorIds.set(e,[s]),s}uploadTensor(e,t){if(!We().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Se("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ya(n,t)}}registerMLTensor(e,t,n,a){let s=di.get(n);if(!s)throw new Error(`Unsupported ONNX data type: ${n}`);let o=this.tensorManager.registerTensor(e,t,s,a);return Se("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${s}, dimensions: ${a}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,n,a,s,o,l=!1){if(!o)throw new Error("External mounted files are not available.");let d=e;e.startsWith("./")&&(d=e.substring(2));let p=o.get(d);if(!p)throw new Error(`File with name ${d} not found in preloaded files.`);if(t+n>p.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let f=p.slice(t,t+n).buffer,h;switch(s.dataType){case"float32":h=new Float32Array(f);break;case"float16":h=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(f):new Uint16Array(f);break;case"int32":h=new Int32Array(f);break;case"uint32":h=new Uint32Array(f);break;case"int64":if(l){let m=wa(new Uint8Array(f),"int64");h=new Int32Array(m.buffer),s.dataType="int32"}else h=new BigInt64Array(f);break;case"uint64":h=new BigUint64Array(f);break;case"int8":h=new Int8Array(f);break;case"int4":case"uint4":case"uint8":h=new Uint8Array(f);break;default:throw new Error(`Unsupported data type: ${s.dataType} in creating WebNN Constant from external data.`)}return Se("verbose",()=>`[WebNN] registerMLConstant {dataType: ${s.dataType}, shape: ${s.shape}}} ${l?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(s,h)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let a=this.mlContextBySessionId.get(e),s=di.get(rn(t));return typeof s>"u"?!1:n?!!(a!=null&&a.opSupportLimits().input.dataTypes.includes(s)):!!(a!=null&&a.opSupportLimits().output.dataTypes.includes(s))}flush(){}}}),Hs=F(()=>{}),Ks,Ia,Ge,Ve,Ju,Zs,js,el,tl,Tf=F(()=>{_r(),Hs(),Ks=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ia=[],Ge=e=>Math.ceil(Number(e)/16)*16,Ve=e=>{for(let t=0;t<Ia.length;t++){let n=Ia[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ju=1,Zs=()=>Ju++,js=async(e,t,n,a)=>{let s=Ge(n),o=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let l=e.getCommandEncoder();e.endComputePass(),l.copyBufferToBuffer(t,0,o,0,s),e.flush(),await o.mapAsync(GPUMapMode.READ);let d=o.getMappedRange();if(a){let p=a();return p.set(new Uint8Array(d,0,n)),p}else return new Uint8Array(d.slice(0,n))}finally{o.destroy()}},el=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ks)Ia.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,a=t.byteOffset,s=t.byteLength,o=Ge(s),l=this.storageCache.get(e);if(!l)throw new Error("gpu data for uploading does not exist");if(Number(l.originalSize)!==s)throw new Error(`inconsistent data size. gpu data size=${l.originalSize}, data size=${s}`);let d=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=d.getMappedRange();new Uint8Array(p).set(new Uint8Array(n,a,s)),d.unmap();let f=this.backend.device.createCommandEncoder();f.copyBufferToBuffer(d,0,l.gpuData.buffer,0,o),this.backend.device.queue.submit([f.finish()]),d.destroy(),Se("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=Ge(n.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(n.gpuData.buffer,0,a.gpuData.buffer,0,s)}registerExternalBuffer(e,t,n){let a;if(n){if(a=n[0],e===n[1])return Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Zs();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),Se("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Se("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ve(e),a,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||o){let d=(s?this.freeBuffers:this.freeUniformBuffers).get(n);d?d.length>0?a=d.pop():a=this.backend.device.createBuffer({size:n,usage:t}):a=this.backend.device.createBuffer({size:n,usage:t})}else a=this.backend.device.createBuffer({size:n,usage:t});let l={id:Zs(),type:0,buffer:a};return this.storageCache.set(l.id,{gpuData:l,originalSize:Number(e)}),Se("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${l.id}`),l}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Se("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await js(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ks.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Se("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},tl=(...e)=>new el(...e)}),Xs,Be,xe=F(()=>{Xs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Be=e=>new Xs(e)}),Lr,ur,Je,at,j,He,Sa,sn,yr,te,Cn,U,ee,kt,Qs,Ys,wr,ce=F(()=>{ue(),de(),Lr=64,ur=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Je=(e,t=1)=>{let n=ur(e,t);return typeof n=="string"?n:n[0]},at=(e,t=1)=>{let n=ur(e,t);return typeof n=="string"?n:n[1]},j=(...e)=>{let t=[];return e.forEach(n=>{n.length!==0&&t.push({type:12,data:n},{type:12,data:D.computeStrides(n)})}),t},He=e=>e%4===0?4:e%2===0?2:1,Sa=(e="f32",t,n="0")=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,sn=(e,t,n)=>e==="f32"?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,yr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,te=(e,t,n,a)=>e.startsWith("uniforms.")&&n>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Cn=(e,t,n,a,s)=>{let o=typeof n=="number",l=o?n:n.length,d=[...new Array(l).keys()],p=l<2?"u32":l<=4?`vec${l}<u32>`:`array<u32, ${l}>`,f=ur(t,s),h=typeof f=="string"?f:f[1],m=typeof f=="string"?f:f[0],g={indices:p,value:h,storage:m,tensor:t},y=W=>typeof W=="string"?W:`${W}u`,w={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=o?"uniforms.":"",T=`${b}${e}_shape`,I=`${b}${e}_strides`,v="";for(let W=0;W<l-1;W++)v+=`
    let dim${W} = current / ${te(I,W,l)};
    let rest${W} = current % ${te(I,W,l)};
    indices[${W}] = dim${W};
    current = rest${W};
    `;v+=`indices[${l-1}] = current;`;let E=l<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${v}
    return indices;
  }`,z=W=>(w.offsetToIndices=!0,l<2?W:`o2i_${e}(${W})`),A=[];if(l>=2)for(let W=l-1;W>=0;W--)A.push(`${te(I,W,l)} * (indices[${W}])`);let M=l<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${A.join("+")};
  }`,B=W=>(w.indicesToOffset=!0,l<2?W:`i2o_${e}(${W})`),L=(...W)=>l===0?"0u":`${g.indices}(${W.map(y).join(",")})`,q=(W,Z)=>l<2?`${W}`:`${te(W,Z,l)}`,K=(W,Z,ie)=>l<2?`${W}=${ie};`:`${te(W,Z,l)}=${ie};`,ae={},Q=(W,Z)=>{w.broadcastedIndicesToOffset=!0;let ie=`${Z.name}broadcastedIndicesTo${e}Offset`;if(ie in ae)return`${ie}(${W})`;let ve=[];for(let Ye=l-1;Ye>=0;Ye--){let ye=Z.indicesGet("outputIndices",Ye+Z.rank-l);ve.push(`${q(I,Ye)} * (${ye} % ${q(T,Ye)})`)}return ae[ie]=`fn ${ie}(outputIndices: ${Z.type.indices}) -> u32 {
             return ${ve.length>0?ve.join("+"):"0u"};
           }`,`${ie}(${W})`},ne=(W,Z)=>(()=>{if(g.storage===g.value)return`${e}[${W}]=${Z};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${W}]=vec2<u32>(u32(${Z}), select(0u, 0xFFFFFFFFu, ${Z} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${W}]=vec2<u32>(u32(${Z}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${W}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Z}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),ke=W=>(()=>{if(g.storage===g.value)return`${e}[${W}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${W}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${W}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${W}] & 0xFFu), bool(${e}[${W}] & 0xFF00u), bool(${e}[${W}] & 0xFF0000u), bool(${e}[${W}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),_e=l<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${h} {
    return ${ke(`i2o_${e}(indices)`)};
  }`,re=l<2?"":(()=>{let W=d.map(ie=>`d${ie}: u32`).join(", "),Z=d.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${W}) -> ${h} {
    return get_${e}ByIndices(${L(Z)});
  }`})(),oe=(...W)=>{if(W.length!==l)throw new Error(`indices length must be ${l}`);let Z=W.map(y).join(",");return l===0?ke("0u"):l===1?ke(Z[0]):(w.get=!0,w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}(${Z})`)},J=W=>l<2?ke(W):(w.getByIndices=!0,w.indicesToOffset=!0,`get_${e}ByIndices(${W})`),le=l<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${h}) {
    ${ne(`i2o_${e}(indices)`,"value")}
  }`,pt=l<2?"":(()=>{let W=d.map(ie=>`d${ie}: u32`).join(", "),Z=d.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${W}, value: ${h}) {
    set_${e}ByIndices(${L(Z)}, value);
  }`})();return{impl:()=>{let W=[],Z=!1;return w.offsetToIndices&&(W.push(E),Z=!0),w.indicesToOffset&&(W.push(M),Z=!0),w.broadcastedIndicesToOffset&&(Object.values(ae).forEach(ie=>W.push(ie)),Z=!0),w.set&&(W.push(pt),Z=!0),w.setByIndices&&(W.push(le),Z=!0),w.get&&(W.push(re),Z=!0),w.getByIndices&&(W.push(_e),Z=!0),!o&&Z&&W.unshift(`const ${T} = ${g.indices}(${n.join(",")});`,`const ${I} = ${g.indices}(${D.computeStrides(n).join(",")});`),W.join(`
`)},type:g,offsetToIndices:z,indicesToOffset:B,broadcastedIndicesToOffset:Q,indices:L,indicesGet:q,indicesSet:K,set:(...W)=>{if(W.length!==l+1)throw new Error(`indices length must be ${l}`);let Z=W[l];if(typeof Z!="string")throw new Error("value must be string");let ie=W.slice(0,l).map(y).join(",");return l===0?ne("0u",Z):l===1?ne(ie[0],Z):(w.set=!0,w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}(${ie}, ${Z})`)},setByOffset:ne,setByIndices:(W,Z)=>l<2?ne(W,Z):(w.setByIndices=!0,w.indicesToOffset=!0,`set_${e}ByIndices(${W}, ${Z});`),get:oe,getByOffset:ke,getByIndices:J,usage:a,name:e,strides:I,shape:T,rank:l}},U=(e,t,n,a=1)=>Cn(e,t,n,"input",a),ee=(e,t,n,a=1)=>Cn(e,t,n,"output",a),kt=(e,t,n)=>Cn(e,t,n,"atomicOutput",1),Qs=(e,t,n,a=1)=>Cn(e,t,n,"internal",a),Ys=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Lr){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,l=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${a})
  fn main(${o}) {
    ${l}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:a}of this.uniforms)if(a&&a>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(a/4)}>`);else{let s=a==null||a===1?n:`vec${a}<${n}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},wr=(e,t)=>new Ys(e,t)}),Ta,Fe,vr,Ea,rl,ka,zt,nl,il,$r=F(()=>{ue(),de(),xe(),ce(),Ta=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Fe=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),vr=(e,t)=>D.sortBasedOnPerm(e,Fe(e.length,t)),Ea=(e,t,n,a)=>{let s=`fn perm(i: ${a.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let o=0;o<t;++o)s+=`a[${e[o]}]=i[${o}];`;return s+="return a;}"},rl=(e,t)=>{let n=[],a=[];for(let s=0;s<e.length;++s)e[s]!==1&&n.push(e[s]),e[t[s]]!==1&&a.push(t[s]);return{newShape:n,newPerm:a}},ka=(e,t)=>{let n=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<n)return!1;n=e[a]}return!0},zt=(e,t)=>{let n=e.dataType,a=e.dims.length,s=Fe(a,t),o=vr(e.dims,s),l=e.dims,d=o,p=a<2||ka(s,e.dims),f;if(p)return f=w=>{let b=U("input",n,l,4),T=ee("output",n,d,4);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,T)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=D.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(w/4)}]}},getShaderSource:f};let{newShape:h,newPerm:m}=rl(e.dims,s),g=D.areEqual(m,[2,3,1]),y=D.areEqual(m,[3,1,2]);if(h.length===2||g||y){l=g?[h[0],h[1]*h[2]]:y?[h[0]*h[1],h[2]]:h,d=[l[1],l[0]];let w=16;return f=b=>{let T=U("a",n,l.length),I=ee("output",n,d.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(T,I)}
  var<workgroup> tile : array<array<${I.type.value}, ${w+1}>, ${w}>;
  ${b.mainStart([w,w,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${w} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${w}u + local_id.x;
    let input_row = workgroup_id_x * ${w}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${T.getByIndices(`${T.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${w}u + local_id.x;
    let output_row = workgroup_id_y * ${w}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${I.setByIndices(`${I.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=D.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(d[1]/w),y:Math.ceil(d[0]/w)},programUniforms:[{type:12,data:b},...j(l,d)]}},getShaderSource:f}}return f=w=>{let b=U("a",n,l.length),T=ee("output",n,d.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(b,T)}

  ${Ea(s,a,b,T)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let w=D.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...j(l,d)]}},getShaderSource:f}},nl=(e,t)=>{Ta(e.inputs,t.perm),e.compute(zt(e.inputs[0],t.perm))},il=e=>Be({perm:e.perm})}),pi,on,al,Js,eo,za,Ca,to,sl,Aa,Ct,ol,ro,$t,Oa,An,no,io,ul,ll,dl,Ef=F(()=>{ue(),de(),ce(),Qe(),$r(),pi={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},on={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},al={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Js={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},eo=(e,t)=>{let n=[];for(let a=t-e;a<t;++a)n.push(a);return n},za=(e,t)=>{let n=[],a=e.length;for(let o=0;o<a;o++)t.indexOf(o)===-1&&n.push(e[o]);let s=t.map(o=>e[o]);return[n,s]},Ca=(e,t)=>{let n=e.length+t.length,a=[],s=0;for(let o=0;o<n;o++)t.indexOf(o)===-1?a.push(e[s++]):a.push(1);return a},to=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},sl=(e,t)=>{let n=[];if(!to(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&n.push(a);e.forEach(a=>n.push(a))}return n},Aa=(e,t,n,a,s,o,l)=>{let d=n[0].dims,p=D.size(o),f=D.size(l),h=U("_A",n[0].dataType,d),m=ee("output",s,o),g=64;p===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,w=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(h,m)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${al[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${pi[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${on[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${m.setByOffset("outputIndex",`${a==="mean"?`${m.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${m.type.storage}(${Js[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:p},programUniforms:[{type:12,data:f}]})}},Ct=(e,t,n,a)=>{let s=e.inputs.length===1?n:ao(e.inputs,n),o=s.axes;o.length===0&&!s.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((y,w)=>w));let l=D.normalizeAxes(o,e.inputs[0].dims.length),d=l,p=e.inputs[0],f=sl(d,e.inputs[0].dims.length);f.length>0&&(p=e.compute(zt(e.inputs[0],f),{inputs:[0],outputs:[-1]})[0],d=eo(d.length,p.dims.length));let[h,m]=za(p.dims,d),g=h;s.keepDims&&(g=Ca(h,l)),e.compute(Aa(t,s.cacheKey,[p],a,e.inputs[0].dataType,g,m),{inputs:[p]})},ol=(e,t)=>{Ct(e,"ReduceMeanShared",t,"mean")},ro=(e,t)=>{Ct(e,"ReduceL1Shared",t,"l1")},$t=(e,t)=>{Ct(e,"ReduceL2Shared",t,"l2")},Oa=(e,t)=>{Ct(e,"ReduceLogSumExpShared",t,"logSumExp")},An=(e,t)=>{Ct(e,"ReduceMaxShared",t,"max")},no=(e,t)=>{Ct(e,"ReduceMinShared",t,"min")},io=(e,t)=>{Ct(e,"ReduceProdShared",t,"prod")},ul=(e,t)=>{Ct(e,"ReduceSumShared",t,"sum")},ll=(e,t)=>{Ct(e,"ReduceSumSquareShared",t,"sumSquare")},dl=(e,t)=>{Ct(e,"ReduceLogSumShared",t,"logSum")}}),jt,un,Ra,ao,At,so,br,fi,pl,fl,cl,ln,Lt,oo,hl,Xt,ml,gl,_l,dn,O,N,P,Y,we,De,Qe=F(()=>{ue(),de(),xe(),ce(),Ef(),jt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},un=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ra=(e,t,n,a,s,o,l=!1,d=!1)=>{let p=[],f=n[0].dims,h=f.length,m=D.normalizeAxes(s,h),g=!d&&m.length===0;f.forEach((b,T)=>{g||m.indexOf(T)>=0?l&&p.push(1):p.push(b)});let y=p.length,w=D.size(p);return{name:e,shaderCache:t,getShaderSource:b=>{let T=[],I=U("_A",n[0].dataType,h),v=ee("output",o,y),E=a(I,v,m),z=E[2];for(let A=0,M=0;A<h;A++)g||m.indexOf(A)>=0?(l&&M++,z=`for(var j${A}: u32 = 0; j${A} < ${f[A]}; j${A}++) {
                  ${E[2].includes("last_index")?`let last_index = j${A};`:""}
                  ${I.indicesSet("input_indices",A,`j${A}`)}
                  ${z}
                }`):(T.push(`${I.indicesSet("input_indices",A,v.indicesGet("output_indices",M))};`),M++);return`

        ${b.registerUniform("output_size","u32").declareVariables(I,v)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${I.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${z}
          ${E[3]}
          ${E.length===4?v.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:o}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...j(f,p)]})}},ao=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>n.push(Number(a))),Be({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},At=(e,t,n,a)=>{let s=e.inputs,o=s.length===1?n:ao(s,n);e.compute(Ra(t,{hint:o.cacheKey,inputDependencies:["rank"]},[s[0]],o.noopWithEmptyAxes&&o.axes.length===0?un:a,o.axes,s[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},so=(e,t)=>{jt(e.inputs),At(e,"ReduceLogSum",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},br=(e,t)=>{jt(e.inputs),At(e,"ReduceL1",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},fi=(e,t)=>{jt(e.inputs),At(e,"ReduceL2",t,(n,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},pl=(e,t)=>{jt(e.inputs),At(e,"ReduceLogSumExp",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},fl=(e,t)=>{jt(e.inputs),At(e,"ReduceMax",t,(n,a,s)=>{let o=[];for(let l=0;l<n.rank;l++)(s.indexOf(l)>=0||s.length===0)&&o.push(n.indicesSet("input_indices",l,0));return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},cl=(e,t)=>{jt(e.inputs),At(e,"ReduceMean",t,(n,a,s)=>{let o=1;for(let l=0;l<n.rank;l++)(s.indexOf(l)>=0||s.length===0)&&(o*=e.inputs[0].dims[l]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${o});`]})},ln=(e,t)=>{jt(e.inputs),At(e,"ReduceMin",t,(n,a,s)=>{let o=[];for(let l=0;l<n.rank;l++)(s.indexOf(l)>=0||s.length===0)&&o.push(`input_indices[${l}] = 0;`);return[`${o.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},Lt=(e,t)=>{jt(e.inputs),At(e,"ReduceProd",t,(n,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},oo=(e,t)=>{jt(e.inputs),At(e,"ReduceSum",t,(n,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},hl=(e,t)=>{jt(e.inputs),At(e,"ReduceSumSquare",t,(n,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},Xt=(e,t,n)=>{if(t.length===0)return n;let a=1,s=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?a*=e[o]:s*=e[o];return s<32&&a>1024},ml=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cl(e,t):ol(e,t)},gl=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?br(e,t):ro(e,t)},_l=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fi(e,t):$t(e,t)},dn=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pl(e,t):Oa(e,t)},O=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fl(e,t):An(e,t)},N=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ln(e,t):no(e,t)},P=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lt(e,t):io(e,t)},Y=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):ul(e,t)},we=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hl(e,t):ll(e,t)},De=(e,t)=>{Xt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):dl(e,t)}}),qe,Ba,yl,bt,Ma=F(()=>{ue(),xe(),Qe(),qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Ba=(e,t)=>{qe(e.inputs);let n=(a,s,o)=>{let l=[];for(let d=0;d<a.rank;d++)(o.indexOf(d)>=0||o.length===0)&&l.push(`input_indices[${d}] = 0;`);return[`${l.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Ra("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},yl=(e,t)=>{qe(e.inputs);let n=(a,s,o)=>{let l=[];for(let d=0;d<a.rank;d++)(o.indexOf(d)>=0||o.length===0)&&l.push(`input_indices[${d}] = 0;`);return[`${l.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Ra("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],n,[t.axis],7,t.keepDims),{inputs:[0]})},bt=e=>Be(e)}),wl,xr,ci,hi,Ne,mi,uo,gi,lo=F(()=>{ue(),de(),Hs(),ce(),wl=(e,t)=>{let n=e[0],a=e[1],s=e[2],o=e[3],l=e[4],d=e[5];if(l&&d)throw new Error("Attention cannot have both past and attention_bias");if(n.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=n.dims[0],f=n.dims[1],h=n.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let m=s.dims[0]/3,g=m,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");m=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let w=f;if(m!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==m+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(l){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(l.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(l.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(l.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(l.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(l.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=l.dims[3])}let T=w+b,I=-1,v=0;if(o)throw new Error("Mask not supported");if(l)throw new Error("past is not supported");if(d){if(d.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[2]!==f||d.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:b,kvSequenceLength:w,totalSequenceLength:T,maxSequenceLength:I,inputHiddenSize:h,hiddenSize:m,vHiddenSize:y,headSize:Math.floor(m/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},xr=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ci=(e,t,n,a,s,o,l,d)=>{let p=He(l?1:o),f=64,h=o/p;h<f&&(f=32);let m=Math.ceil(o/p/f),g=[{type:12,data:t},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:12,data:h},{type:12,data:m}],y=Je(e.dataType,p),w=at(1,p),b=["type"];l&&b.push("type"),d&&b.push("type");let T=I=>{let v=ee("x",e.dataType,e.dims,p),E=[v],z=l?U("seq_lens",l.dataType,l.dims):void 0;z&&E.push(z);let A=d?U("total_sequence_length_input",d.dataType,d.dims):void 0;A&&E.push(A);let M=at(e.dataType),B=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${f}>;
  var<workgroup> thread_sum: array<f32, ${f}>;
  ${I.registerUniforms(B).declareVariables(...E)}
  ${I.mainStart([f,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${xr(z,A,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${f}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${l?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${w}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${w}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(p){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${f}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${w}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${w}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(p){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${f}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${w}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${l?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${f};${y};${p}`,inputDependencies:b},getShaderSource:T,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:s,z:t*n},programUniforms:g})}},hi=(e,t,n,a,s,o,l,d,p)=>{let f=l+o.kvSequenceLength,h=[o.batchSize,o.numHeads,o.sequenceLength,f],m=e>1&&a,g=o.kvNumHeads?o.kvNumHeads:o.numHeads,y=m?[o.batchSize,g,f,o.headSize]:void 0,w=o.nReps?o.nReps:1,b=o.scale===0?1/Math.sqrt(o.headSize):o.scale,T=He(o.headSize),I=o.headSize/T,v=12,E={x:Math.ceil(f/v),y:Math.ceil(o.sequenceLength/v),z:o.batchSize*o.numHeads},z=[{type:12,data:o.sequenceLength},{type:12,data:I},{type:12,data:f},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:b},{type:12,data:l},{type:12,data:o.kvSequenceLength},{type:12,data:w}],A=m&&a&&D.size(a.dims)>0,M=["type","type"];A&&M.push("type"),s&&M.push("type"),d&&M.push("type"),p&&M.push("type");let B=[{dims:h,dataType:t.dataType,gpuDataType:0}];m&&B.push({dims:y,dataType:t.dataType,gpuDataType:0});let L=q=>{let K=U("q",t.dataType,t.dims,T),ae=U("key",n.dataType,n.dims,T),Q=[K,ae];if(A){let le=U("past_key",a.dataType,a.dims,T);Q.push(le)}s&&Q.push(U("attention_bias",s.dataType,s.dims));let ne=d?U("seq_lens",d.dataType,d.dims):void 0;ne&&Q.push(ne);let ke=p?U("total_sequence_length_input",p.dataType,p.dims):void 0;ke&&Q.push(ke);let _e=ee("output",t.dataType,h),re=[_e];m&&re.push(ee("present_key",t.dataType,y,T));let oe=at(1,T),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${K.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${K.type.storage}, ${v*v}>;
  ${q.registerUniforms(J).declareVariables(...Q,...re)}
  ${q.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${w===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${w===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${xr(ne,ke,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${A&&m?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${m?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${oe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${A&&m?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${m?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${oe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(T){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${T}`)}})()};
        output[outputIdx] = ${_e.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${T};${s!==void 0};${a!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:B,dispatchGroup:E,programUniforms:z}),getShaderSource:L}},Ne=(e,t,n,a,s,o,l=void 0,d=void 0)=>{let p=o+s.kvSequenceLength,f=s.nReps?s.nReps:1,h=s.vHiddenSize*f,m=e>1&&a,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=m?[s.batchSize,g,p,s.headSize]:void 0,w=[s.batchSize,s.sequenceLength,h],b=12,T={x:Math.ceil(s.vHeadSize/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},I=[{type:12,data:s.sequenceLength},{type:12,data:p},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:h},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:f}],v=m&&a&&D.size(a.dims)>0,E=["type","type"];v&&E.push("type"),l&&E.push("type"),d&&E.push("type");let z=[{dims:w,dataType:t.dataType,gpuDataType:0}];m&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let A=M=>{let B=U("probs",t.dataType,t.dims),L=U("v",n.dataType,n.dims),q=[B,L];v&&q.push(U("past_value",a.dataType,a.dims));let K=l?U("seq_lens",l.dataType,l.dims):void 0;l&&q.push(K);let ae=d?U("total_sequence_length_input",d.dataType,d.dims):void 0;d&&q.push(ae);let Q=[ee("output",t.dataType,w)];m&&Q.push(ee("present_value",t.dataType,y));let ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${B.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${B.type.value}, ${b*b}>;
  ${M.registerUniforms(ne).declareVariables(...q,...Q)}
  ${M.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${xr(K,ae,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&m?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${m?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${B.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&m?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${m?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:T,programUniforms:I}),getShaderSource:A}},mi=(e,t,n,a,s,o,l,d,p,f,h=void 0,m=void 0)=>{let g=Math.min(e.outputCount,1+(l?1:0)+(d?1:0)),y=g>1?f.pastSequenceLength:0,w=y+f.kvSequenceLength,b=p&&D.size(p.dims)>0?p:void 0,T=[t,n];g>1&&l&&D.size(l.dims)>0&&T.push(l),b&&T.push(b),h&&T.push(h),m&&T.push(m);let I=e.compute(hi(g,t,n,l,b,f,y,h,m),{inputs:T,outputs:g>1?[-1,1]:[-1]})[0];e.compute(ci(I,f.batchSize,f.numHeads,y,f.sequenceLength,w,h,m),{inputs:h&&m?[I,h,m]:[I],outputs:[]});let v=[I,a];g>1&&d&&D.size(d.dims)>0&&v.push(d),h&&v.push(h),m&&v.push(m),e.compute(Ne(g,I,a,d,f,y,h,m),{inputs:v,outputs:g>1?[0,2]:[0]})},uo=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,s=t.inputHiddenSize,o=t.headSize,l=12,d={x:Math.ceil(t.headSize/l),y:Math.ceil(t.sequenceLength/l),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],f=[{type:12,data:a},{type:12,data:s},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=m=>{let g=ee("output_q",p[0].dataType,n),y=ee("output_k",p[0].dataType,n),w=ee("output_v",p[0].dataType,n),b=U("input",p[0].dataType,p[0].dims),T=U("weight",p[1].dataType,p[1].dims),I=U("bias",p[2].dataType,p[2].dims),v=b.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${l}u;
  var<workgroup> tileInput: array<${v}, ${l*l}>;
  var<workgroup> tileWeightQ: array<${v}, ${l*l}>;
  var<workgroup> tileWeightK: array<${v}, ${l*l}>;
  var<workgroup> tileWeightV: array<${v}, ${l*l}>;
  ${m.registerUniforms(E).declareVariables(b,T,I,g,y,w)}
  ${m.mainStart([l,l,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:d,programUniforms:f}),getShaderSource:h},{inputs:p,outputs:[-1,-1,-1]})},gi=(e,t)=>{let n=wl(e.inputs,t),[a,s,o]=uo(e,n);return mi(e,a,s,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),vl,$l,_i,Ir,Da=F(()=>{dt(),ue(),de(),xe(),ce(),vl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let n=(a,s,o)=>{let l=s.length;if(l!==a.length)throw new Error(`${o}: num dimensions != ${l}`);s.forEach((d,p)=>{if(d!==a[p])throw new Error(`${o}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,a,"Invalid input scale"),n(e[2].dims,a,"Invalid input B"),n(e[3].dims,a,"Invalid input mean"),n(e[4].dims,a,"Invalid input var")}else n(e[1].dims,[1],"Invalid input scale"),n(e[2].dims,[1],"Invalid input B"),n(e[3].dims,[1],"Invalid input mean"),n(e[4].dims,[1],"Invalid input var")},$l=(e,t)=>{let{epsilon:n,spatial:a,format:s}=t,o=e[0].dims,l=a?He(o[o.length-1]):1,d=s==="NHWC"&&o.length>1?l:1,p=D.size(o)/l,f=a,h=f?o.length:o,m=U("x",e[0].dataType,e[0].dims,l),g=U("scale",e[1].dataType,e[1].dims,d),y=U("bias",e[2].dataType,e[2].dims,d),w=U("inputMean",e[3].dataType,e[3].dims,d),b=U("inputVar",e[4].dataType,e[4].dims,d),T=ee("y",e[0].dataType,h,l),I=()=>{let E="";if(a)E=`let cOffset = ${o.length===1?"0u":s==="NHWC"?`outputIndices[${o.length-1}] / ${l}`:"outputIndices[1]"};`;else if(s==="NCHW")E=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let z=1;z<g.rank;z++)E+=`cIndices[${z}] = outputIndices[${z}];`;E+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return E},v=E=>`
  const epsilon = ${n};
  ${E.registerUniform("outputSize","u32").declareVariables(m,g,y,w,b,T)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${l}`)};
    ${I()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${w.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${m.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${l}`,inputDependencies:f?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f?[{type:12,data:p},...j(o)]:[{type:12,data:p}]})}},_i=e=>Be(e),Ir=(e,t)=>{let{inputs:n,outputCount:a}=e,s=_i({...t,outputCount:a});if(Pe.webgpu.validateInputContent&&vl(n,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute($l(n,s))}}),po,yi,fo,bl=F(()=>{de(),ce(),po=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},yi=e=>{let t=e[0].dims,n=e[0].dims[2],a=D.size(t)/4,s=e[0].dataType,o=U("input",s,t,4),l=U("bias",s,[n],4),d=U("residual",s,t,4),p=ee("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:f=>`
  const channels = ${n}u / 4;
  ${f.declareVariables(o,l,d,p)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${o.getByOffset("global_idx")}
      + ${l.getByOffset("global_idx % channels")} + ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},fo=e=>{po(e.inputs),e.compute(yi(e.inputs))}}),wi,Ce,On,Nr,vi,xl,Il,Sl,$i,bi,Pa,Tl,co,El,kl,et,tt,zl,Ua,ho,Cl,La,Rn,Na,pn,Bn,Mn,xi,fn,Al,Ol,Rl,Bl,Ml,Ii,cn,mo,$,qr,Si,Ot,Ee,Dl,Pl,Ul,Sr=F(()=>{ue(),de(),xe(),ce(),wi=(e,t,n,a,s,o,l)=>{let d=Math.ceil(t/4),p="";typeof s=="string"?p=`${s}(a)`:p=s("a");let f=U("inputData",n,[d],4),h=ee("outputData",a,[d],4),m=[{name:"vec_size",type:"u32"}];return l&&m.push(...l),`
      ${e.registerUniforms(m).declareVariables(f,h)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${f.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",p)}
  }`},Ce=(e,t,n,a,s,o=e.dataType,l,d)=>{let p=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return l&&p.push(...l),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:f=>wi(f,D.size(e.dims),e.dataType,o,n,a,d),getRunData:f=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(D.size(f[0].dims)/64/4)},programUniforms:p})}},On=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Nr=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},vi=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},xl=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},Il=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},Sl=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},$i=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},bi=e=>Be(e),Pa=(e,t)=>{let n;switch(t.to){case 10:n="vec4<f16>";break;case 1:n="vec4<f32>";break;case 12:n="vec4<u32>";break;case 6:n="vec4<i32>";break;case 9:n="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",n,void 0,t.cacheKey,t.to))},Tl=e=>{let t,n,a=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,n=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,n=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Be({min:t,max:n})},co=(e,t)=>{let n=t||Tl(e.inputs),a=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},El=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},kl=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},et=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},tt=e=>Be(e),zl=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ua=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,ho=e=>{let t=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",n=>`erf_vf32(${n})`,Ua(t)))},Cl=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},La=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},Rn=e=>{let t=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",n=>`0.5 * ${n} * (1.0 + erf_vf32(${n} * 0.7071067811865475))`,Ua(t)))},Na=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},pn=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},Bn=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},Mn=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},xi=e=>{let t=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > vec4<${t}>(0.0))`))},fn=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Al=e=>Be(e),Ol=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",a=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${a} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Rl=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},Bl=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},Ml=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},Ii=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},cn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,mo=e=>{e.compute(Ce(e.inputs[0],"Tanh",cn))},$=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${cn("v")};
}
`,qr=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Si=e=>{let t=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",qr,$(t),void 0,e.inputs[0].dataType))},Ot=(e,t)=>{let n=at(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${n}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ee=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},Dl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Pl=e=>`quick_gelu_impl(${e})`,Ul=(e,t)=>{let n=at(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",Pl,Dl(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Ll,Nl,ql,kf=F(()=>{de(),ce(),Sr(),Ll=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let n=U("input",e[0].dataType,e[0].dims,4),a=U("bias",e[0].dataType,[e[0].dims[2]],4),s=ee("output",e[0].dataType,t,4),o=D.size(t)/4,l=Je(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:d=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${d.declareVariables(n,a,s)}

  ${Ua(l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ql=e=>{Ll(e.inputs),e.compute(Nl(e.inputs))}}),Wl,lr,Qt,Gl,Vl,Fl,Hl,dr,Kl,Zl,jl,Xl,Ql,hn=F(()=>{ue(),de(),ce(),Wl=(e,t,n,a,s,o,l,d,p,f,h,m)=>{let g,y;typeof d=="string"?g=y=(v,E)=>`${d}((${v}),(${E}))`:typeof d=="function"?g=y=d:(g=d.scalar,y=d.vector);let w=ee("outputData",h,a.length,4),b=U("aData",p,t.length,4),T=U("bData",f,n.length,4),I;if(s)if(o){let v=D.size(t)===1,E=D.size(n)===1,z=t.length>0&&t[t.length-1]%4===0,A=n.length>0&&n[n.length-1]%4===0;v||E?I=w.setByOffset("global_idx",y(v?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),E?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):I=`
            let outputIndices = ${w.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",w)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",w)};
            ${w.setByOffset("global_idx",y(l||z?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,l||A?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else I=w.setByOffset("global_idx",y(b.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(E,z,A="")=>{let M=`aData[indexA${z}][componentA${z}]`,B=`bData[indexB${z}][componentB${z}]`;return`
            let outputIndices${z} = ${w.offsetToIndices(`global_idx * 4u + ${z}u`)};
            let offsetA${z} = ${b.broadcastedIndicesToOffset(`outputIndices${z}`,w)};
            let offsetB${z} = ${T.broadcastedIndicesToOffset(`outputIndices${z}`,w)};
            let indexA${z} = offsetA${z} / 4u;
            let indexB${z} = offsetB${z} / 4u;
            let componentA${z} = offsetA${z} % 4u;
            let componentB${z} = offsetB${z} % 4u;
            ${E}[${z}] = ${A}(${g(M,B)});
          `};h===9?I=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:I=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,T,w)}

        ${m??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${I}
      }`},lr=(e,t,n,a,s,o,l=n.dataType)=>{let d=n.dims.map(b=>Number(b)??1),p=a.dims.map(b=>Number(b)??1),f=!D.areEqual(d,p),h=d,m=D.size(d),g=!1,y=!1,w=[f];if(f){let b=an.calcShape(d,p,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");h=b.slice(),m=D.size(h);let T=D.size(d)===1,I=D.size(p)===1,v=d.length>0&&d[d.length-1]%4===0,E=p.length>0&&p[p.length-1]%4===0;w.push(T),w.push(I),w.push(v),w.push(E);let z=1;for(let A=1;A<h.length;A++){let M=d[d.length-A],B=p[p.length-A];if(M===B)z*=M;else break}z%4===0?(y=!0,g=!0):(T||I||v||E)&&(g=!0)}else g=!0;return w.push(g),{name:e,shaderCache:{hint:t+w.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>Wl(b,d,p,h,g,f,y,s,n.dataType,a.dataType,l,o),getRunData:()=>({outputs:[{dims:h,dataType:l}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(h)/4)},...j(d,p,h)]})}},Qt=(e,t,n,a,s,o)=>{e.compute(lr(t,s??"",e.inputs[0],e.inputs[1],n,a,o))},Gl=e=>{Qt(e,"Add",(t,n)=>`${t}+${n}`)},Vl=e=>{Qt(e,"Div",(t,n)=>`${t}/${n}`)},Fl=e=>{Qt(e,"Equal",{scalar:(t,n)=>`u32(${t}==${n})`,vector:(t,n)=>`vec4<u32>(${t}==${n})`},void 0,void 0,9)},Hl=e=>{Qt(e,"Mul",(t,n)=>`${t}*${n}`)},dr=e=>{let t=U("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Qt(e,"Pow",{scalar:(n,a)=>`pow_custom(${n},${a})`,vector:(n,a)=>`pow_vector_custom(${n},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Kl=e=>{Qt(e,"Sub",(t,n)=>`${t}-${n}`)},Zl=e=>{Qt(e,"Greater",{scalar:(t,n)=>`u32(${t}>${n})`,vector:(t,n)=>`vec4<u32>(${t}>${n})`},void 0,void 0,9)},jl=e=>{Qt(e,"Less",{scalar:(t,n)=>`u32(${t}<${n})`,vector:(t,n)=>`vec4<u32>(${t}<${n})`},void 0,void 0,9)},Xl=e=>{Qt(e,"GreaterOrEqual",{scalar:(t,n)=>`u32(${t}>=${n})`,vector:(t,n)=>`vec4<u32>(${t}>=${n})`},void 0,void 0,9)},Ql=e=>{Qt(e,"LessOrEqual",{scalar:(t,n)=>`u32(${t}<=${n})`,vector:(t,n)=>`vec4<u32>(${t}<=${n})`},void 0,void 0,9)}}),Yl,Jl,Nt,ed,td,rd,zf=F(()=>{ue(),de(),xe(),ce(),Yl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let n=0,a=e[n],s=a.dataType,o=a.dims.length;e.forEach((l,d)=>{if(d!==n){if(l.dataType!==s)throw new Error("input tensors should be one type");if(l.dims.length!==o)throw new Error("input tensors should have the same shape");l.dims.forEach((p,f)=>{if(f!==t&&p!==a.dims[f])throw new Error("non concat dimensions must match")})}})},Jl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Nt=(e,t)=>{let n=e.length,a=[];for(let s=0;s<n;++s){let o=t.setByOffset("global_idx",e[s].getByIndices("indices"));n===1?a.push(o):s===0?a.push(`if (inputIndex == ${s}u) { ${o} }`):s===n-1?a.push(`else { ${o} }`):a.push(`else if (inputIndex == ${s}) { ${o} }`)}return a.join(`
`)},ed=(e,t,n,a)=>{let s=D.size(n),o=new Array(e.length),l=new Array(e.length),d=0,p=[],f=[],h=[{type:12,data:s}];for(let b=0;b<e.length;++b)d+=e[b].dims[t],o[b]=d,f.push(e[b].dims.length),l[b]=U(`input${b}`,a,f[b]),p.push("rank"),h.push({type:12,data:o[b]});for(let b=0;b<e.length;++b)h.push(...j(e[b].dims));h.push(...j(n));let m=ee("output",a,n.length),g=m.indicesGet("indices",t),y=Array.from(Array(o.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),w=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)b.registerUniform(`sizeInConcatAxis${T}`,"u32");return b.declareVariables(...l,m)})()}

  ${Jl(o.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${m.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Nt(l,m)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}),getShaderSource:w}},td=(e,t)=>{let n=e.inputs,a=n[0].dims,s=D.normalizeAxis(t.axis,a.length);Yl(n,s);let o=a.slice();o[s]=n.reduce((d,p)=>d+(p.dims.length>s?p.dims[s]:0),0);let l=n.filter(d=>D.size(d.dims)>0);e.compute(ed(l,s,o,n[0].dataType),{inputs:l})},rd=e=>Be({axis:e.axis})}),mn,Wr,Gr,go,gn=F(()=>{ue(),de(),mn=(e,t,n="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Wr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Gr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},go=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[n,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:n,beta:a}}else if(t==="Clip"){let[n,a]=(e==null?void 0:e.activation_params)||[ga,_a];return{activation:t,clipMax:a,clipMin:n}}else if(t==="LeakyRelu"){let[n]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:n}}return{activation:t}}}),rt,Dn,Pn=F(()=>{rt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Dn=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nd,id=F(()=>{nd=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ti,Yt,Ei=F(()=>{ue(),de(),ce(),gn(),Ti=(e,t,n,a,s)=>{let o=a-n;return`
      ${Array.from({length:n}).map((l,d)=>`
      if (${te(t.shape,d,t.rank)} != 1) {
        ${t.indicesSet(e,d,te(s,d+o,a))}
      } else {
        ${t.indicesSet(e,d,0)}
      }`).join("")}
`},Yt=(e,t,n,a,s=!1,o)=>{let l=e[0].dims,d=e[1].dims,p=l[l.length-2],f=d[d.length-1],h=l[l.length-1],m=He(f),g=He(h),y=He(p),w=D.size(n)/m/y,b=e.length>2,T=a?a.slice(0,-2):n.slice(0,-2),I=[D.size(T),p,f],v=[{type:12,data:w},{type:12,data:p},{type:12,data:f},{type:12,data:h}];Wr(t,v),v.push(...j(T,l,d)),b&&v.push(...j(e[2].dims)),v.push(...j(I));let E=z=>{let A=Qs("batch_dims",e[0].dataType,T.length),M=U("a",e[0].dataType,l.length,g),B=U("b",e[1].dataType,d.length,m),L=ee("output",e[0].dataType,I.length,m),q=Je(L.type.tensor),K=mn(t,L.type.value,q),ae=[M,B],Q="";if(b){let _e=s?m:1;ae.push(U("bias",e[2].dataType,e[2].dims.length,_e)),Q=`${s?`value += bias[col / ${_e}];`:`value += ${L.type.value}(bias[row + i]);`}`}let ne=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Gr(t,ne);let ke=()=>{let _e=`var a_data: ${M.type.value};`;for(let re=0;re<g;re++)_e+=`
              let b_data${re} = b[(b_offset + (k + ${re}) * uniforms.N + col) / ${m}];`;for(let re=0;re<y;re++){_e+=`a_data = a[(a_offset + (row + ${re}) * uniforms.K + k) / ${g}];`;for(let oe=0;oe<g;oe++)_e+=`
            values[${re}] = fma(${B.type.value}(a_data${g===1?"":`[${oe}]`}), b_data${oe}, values[${re}]);
`}return _e};return`
  ${z.registerUniforms(ne).registerInternalVariables(A).declareVariables(...ae,L)}
  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${m})) * ${m};
    var index1 = global_idx / (uniforms.N / ${m});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${n.length===2?"":`let batch_indices = ${A.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${Ti("a_indices",M,M.rank-2,A.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${B.type.indices};
    ${Ti("b_indices",B,B.rank-2,A.rank,"batch_indices")}
    ${B.indicesSet("b_indices",B.rank-2,0)}
    ${B.indicesSet("b_indices",B.rank-1,0)}
    let b_offset = ${B.indicesToOffset("b_indices")};
    var values: array<${L.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${ke()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${Q}
      ${K}
      let cur_indices = ${L.type.indices}(batch, row + i, col);
      let offset = ${L.indicesToOffset("cur_indices")};
      ${L.setByOffset(`offset / ${m}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${m};${g};${y};${s}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:v}),getShaderSource:E}}}),Vr,Rt,_o,qa,yo,_n,Tr,ki,wo=F(()=>{ue(),de(),ce(),gn(),Ei(),Pn(),Vr=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Rt=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,_o=(e,t,n="f32",a,s=!1,o=32,l=!1,d=32)=>{let p=t[1]*e[1],f=t[0]*e[0],h=s?p:o,m=s?o:p,g=h/t[0],y=o/t[1];if(!((s&&g===4&&e[1]===4||!s&&(g===3||g===4))&&h%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${n}>, ${h/g}>, ${m}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${f/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${l?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${l?`${Math.ceil(d/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${l?`i32(globalId.z) * ${d}`:"0"};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Vr(s,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Rt(s,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,yo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",_n=(e,t,n="f32",a,s=!1,o=32,l=!1,d=32,p=!1)=>{let f=e[1]*t[1],h=e[0]*t[0],m=s?f:o,g=s?o:f;if(!(g%t[1]===0&&m%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],w=m/t[0],b=o/t[1],T=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${f};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          ${qa(s,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${f};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${w};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${w}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${qa(s,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${yo(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${m}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${h}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${l?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${l?`${Math.ceil(d/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${l?`i32(globalId.z) * ${d}`:"0"};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${T}
  }
`},Tr=(e,t,n,a,s=!1)=>{let[o,l,d,p]=a,f=Je(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${rt(e,f)} {
      var value = ${rt(e,f)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${l.type.indices};
        ${Ti("aIndices",l,l.rank-2,o.rank,"batchIndices")}
        ${l.indicesSet("aIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("aIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${rt(e,f)} {
      var value = ${rt(e,f)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${d.type.indices};
        ${Ti("bIndices",d,d.rank-2,o.rank,"batchIndices")}
        ${d.indicesSet("bIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("bIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${rt(e,f)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${rt(e,f)}(bias[row])`};`:""}
        ${n}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ki=(e,t,n,a,s=!1,o)=>{let l=e[0].dims,d=e[1].dims,p=l.slice(0,-2),f=d.slice(0,-2),h=a?a.slice(0,-2):n.slice(0,-2),m=D.size(h),g=l[l.length-2],y=l[l.length-1],w=d[d.length-1],b=y%4===0&&w%4===0,T=g<=8?[4,1,1]:[4,4,1],I=[8,8,1],v=[Math.ceil(w/I[0]/T[0]),Math.ceil(g/I[1]/T[1]),Math.ceil(m/I[2]/T[2])],E=b?4:1,z=[...p,g,y/E],A=z.length,M=[...f,y,w/E],B=M.length,L=[m,g,w/E],q=[{type:6,data:g},{type:6,data:w},{type:6,data:y}];Wr(t,q),q.push(...j(h,z,M));let K=["rank","rank"],ae=e.length>2;ae&&(q.push(...j(e[2].dims)),K.push("rank")),q.push(...j(L));let Q=ne=>{let ke=h.length,_e=Qs("batchDims",e[0].dataType,ke,1),re=Je(e[0].dataType),oe=U("a",e[0].dataType,A,E),J=U("b",e[1].dataType,B,E),le=ee("result",e[0].dataType,L.length,E),pt=[oe,J];if(ae){let Ye=s?E:1;pt.push(U("bias",e[2].dataType,e[2].dims.length,Ye))}let W=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Gr(t,W);let Z=Je(le.type.tensor),ie=mn(t,le.type.value,Z),ve=Tr(E,ae,ie,[_e,oe,J,le],s);return`
  ${ne.registerUniforms(W).registerInternalVariables(_e).declareVariables(...pt,le)}
  ${ve}
  ${b?_o(T,I,re,_e):_n(T,I,re,_e)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${t.activation};${b};${s}`,inputDependencies:K},getRunData:()=>({outputs:[{dims:o?o(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:q}),getShaderSource:Q}}}),zi,ad,sd=F(()=>{ue(),_r(),ce(),gn(),Pn(),id(),wo(),zi=(e,t,n,a,s=!1,o,l=4,d=4,p=4,f="f32")=>{let h=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${f}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},m=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,w=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",I=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${I} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${I} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${I} % inChannels;
    var resData = ${rt(l,f)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(l)}
    }
    return resData;`,E=e?t&&a?`
    let col = colIn * ${l};
    ${v}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${rt(l,f)}(0.0);`:a&&n?`
    let col = colIn * ${l};
    ${v}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${rt(l,f)}(0.0);`,z=e?a&&n?m(d):`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m(d)}
    }
    return ${rt(d,f)}(0.0);`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${m(d)}
    }
    return ${rt(d,f)}(0.0);`,A=rt(p,f),M=rt(e?l:d,f),B=rt(e?d:l,f),L=mn(o,A,f);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?E:z}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${B} {
      ${e?z:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${A}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Dn(s)}
      ${L}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ad=(e,t,n,a,s,o,l,d,p)=>{let f=t.format==="NHWC",h=f?e[0].dims[3]:e[0].dims[1],m=n[0],g=f?n[2]:n[3],y=f?n[1]:n[2],w=f?n[3]:n[1],b=f&&(h%4===0||h%3===0)&&w%4===0,T=f?w:g*y,I=f?g*y:w,v=[8,8,1],E=a<=8?[4,1,1]:[4,4,1],z=[Math.ceil(T/v[0]/E[0]),Math.ceil(I/v[1]/E[1]),Math.ceil(m/v[2]/E[2])];Se("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${z}`);let A=b?f&&h%4!==0?3:4:1,M=v[1]*E[1],B=v[0]*E[0],L=Math.max(v[0]*A,v[1]),q=a%M===0,K=s%B===0,ae=o%L===0,Q=b?[A,4,4]:[1,1,1],ne=[{type:6,data:a},{type:6,data:s},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Wr(t,ne),ne.push(...j(e[0].dims,e[1].dims));let ke=["rank","rank"];l&&(ne.push(...j(e[2].dims)),ke.push("rank")),ne.push(...j(n));let _e=re=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Gr(t,oe);let J=b?4:1,le=Je(e[0].dataType),pt=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${le}>`:le}) {
        result[flatIndex] = ${b?`vec4<${le}>`:le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${le}>`:le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,W=U("x",e[0].dataType,e[0].dims.length,A===3?1:A),Z=U("w",e[1].dataType,e[1].dims.length,J),ie=[W,Z],ve=ee("result",e[0].dataType,n.length,J);if(l){let Ye=U("bias",e[2].dataType,e[2].dims.length,J);ie.push(Ye),pt+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${le}>`:le} {
          return bias[coords.${f?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${nd("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${re.registerUniforms(oe).declareVariables(...ie,ve)}
        ${pt}
        ${zi(f,q,K,ae,l,t,Q[0],Q[1],Q[2],le)}
        ${b?_o(E,v,le,void 0,!f,L):_n(E,v,le,void 0,!f,L,!1,void 0,d)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${A};${b};${q};${K};${ae};${M};${B};${L}`,inputDependencies:ke},getRunData:()=>({outputs:[{dims:p?p(n):n,dataType:e[0].dataType}],dispatchGroup:{x:z[0],y:z[1],z:z[2]},programUniforms:ne}),getShaderSource:_e}}}),st,Ci,Un,Jt,Ai,Oi,Fr,vo,yt=F(()=>{ue(),_r(),de(),ce(),gn(),Pn(),st=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Ci=e=>typeof e=="number"?[e,e,e]:e,Un=(e,t)=>t<=1?e:e+(e-1)*(t-1),Jt=(e,t,n,a=1)=>{let s=Un(t,a);return Math.floor((e[0]*(n-1)-n+s)/2)},Ai=(e,t,n,a,s)=>{s==null&&(s=Jt(e,t[0],a[0]));let o=[0,0,0,n];for(let l=0;l<3;l++)e[l]+2*s>=t[l]&&(o[l]=Math.trunc((e[l]-t[l]+2*s)/a[l]+1));return o},Oi=(e,t,n,a,s,o,l,d,p,f)=>{let h,m,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let w=Ai([t,n,a,1],[d,p,f],1,[s,o,l],e);m=w[0],g=w[1],y=w[2]}else if(Array.isArray(e)){if(!e.every((b,T,I)=>b===I[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let w=Ai([t,n,a,1],[d,p,f],1,[s,o,l],e[0]);m=w[0],g=w[1],y=w[2]}else if(e==="SAME_UPPER"){m=Math.ceil(t/s),g=Math.ceil(n/o),y=Math.ceil(a/l);let w=(m-1)*s+d-t,b=(g-1)*o+p-n,T=(y-1)*l+f-a,I=Math.floor(w/2),v=w-I,E=Math.floor(b/2),z=b-E,A=Math.floor(T/2),M=T-A;h={top:E,bottom:z,left:A,right:M,front:I,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:m,outHeight:g,outWidth:y}},Fr=(e,t,n,a,s,o=!1,l="channelsLast")=>{let d,p,f,h,m;if(l==="channelsLast")[d,p,f,h,m]=e;else if(l==="channelsFirst")[d,m,p,f,h]=e;else throw new Error(`Unknown dataFormat ${l}`);let[g,,y,w,b]=t,[T,I,v]=Ci(n),[E,z,A]=Ci(a),M=Un(y,E),B=Un(w,z),L=Un(b,A),{padInfo:q,outDepth:K,outHeight:ae,outWidth:Q}=Oi(s,p,f,h,T,I,v,M,B,L),ne=o?g*m:g,ke=[0,0,0,0,0];return l==="channelsFirst"?ke=[d,ne,K,ae,Q]:l==="channelsLast"&&(ke=[d,K,ae,Q,ne]),{batchSize:d,dataFormat:l,inDepth:p,inHeight:f,inWidth:h,inChannels:m,outDepth:K,outHeight:ae,outWidth:Q,outChannels:ne,padInfo:q,strideDepth:T,strideHeight:I,strideWidth:v,filterDepth:y,filterHeight:w,filterWidth:b,effectiveFilterDepth:M,effectiveFilterHeight:B,effectiveFilterWidth:L,dilationDepth:E,dilationHeight:z,dilationWidth:A,inShape:e,outShape:ke,filterShape:t}},vo=(e,t,n,a,s,o)=>{let l=o==="channelsLast";l?e[0].dims[3]:e[0].dims[1];let d=[64,1,1],p={x:n.map((T,I)=>I)},f=[Math.ceil(st(p.x.map(T=>n[T]))/d[0]),1,1];Se("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let h=1,m=D.size(n),g=[{type:12,data:m},{type:12,data:a},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];Wr(t,g),g.push(...j(e[0].dims,e[1].dims));let y=["rank","rank"],w=e.length===3;w&&(g.push(...j(e[2].dims)),y.push("rank")),g.push(...j(n));let b=T=>{let I=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Gr(t,I);let v=1,E=Je(e[0].dataType),z=U("x",e[0].dataType,e[0].dims.length,h),A=U("W",e[1].dataType,e[1].dims.length,v),M=[z,A],B=ee("result",e[0].dataType,n.length,v),L="";if(w){let ae=U("bias",e[2].dataType,e[2].dims.length,v);M.push(ae),L+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${l?te("coords",4,5):te("coords",1,5)}];
        }`}let q=rt(h,E),K=mn(t,q,E);return`
            ${L}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${T.registerUniforms(I).declareVariables(...M,B)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${B.offsetToIndices("global_idx")};
              let batch = ${te("coords",0,z.rank)};
              let d2 = ${l?te("coords",z.rank-1,z.rank):te("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${l?te("coords",1,z.rank):te("coords",2,z.rank)},
              ${l?te("coords",2,z.rank):te("coords",3,z.rank)},
              ${l?te("coords",3,z.rank):te("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${l?te("uniforms.x_shape",1,z.rank):te("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${l?te("uniforms.x_shape",2,z.rank):te("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${l?te("uniforms.x_shape",3,z.rank):te("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${l?te("uniforms.x_shape",4,z.rank):te("uniforms.x_shape",1,z.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${l?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${l?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${l?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${l?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${w?"value = value + getBiasByOutputCoords(coords)":""};
              ${K}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${l};${h};${w}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:g}),getShaderSource:b}}}),Wa,od,Cf=F(()=>{ue(),de(),ce(),gn(),Wa=(e,t,n,a)=>{let s=e.length>2,o=s?"value += b[output_channel];":"",l=e[0].dims,d=e[1].dims,p=t.format==="NHWC",f=p?n[3]:n[1],h=f/t.group,m=p&&h>=4?He(f):1,g=D.size(n)/m,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Wr(t,y),y.push(...j(l,[d[0],d[1],d[2],d[3]/m]));let w=s?["rank","rank","rank"]:["rank","rank"];y.push(...j([n[0],n[1],n[2],n[3]/m]));let b=T=>{let I=ee("output",e[0].dataType,n.length,m),v=Je(I.type.tensor),E=mn(t,I.type.value,v),z=U("x",e[0].dataType,l.length),A=U("w",e[1].dataType,d.length,m),M=[z,A];s&&M.push(U("b",e[2].dataType,e[2].dims,m));let B=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Gr(t,B);let L=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${z.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${A.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${z.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${A.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(B).declareVariables(...M,I)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${I.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${m} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${I.type.value} = ${I.type.value}(0);
    ${L}
    ${o}
    ${E}
    ${I.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},od=(e,t,n,a)=>{let s=e.length>2,o=He(n[3]),l=He(n[2]),d=D.size(n)/o/l,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],f=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],h=[n[0],n[1],n[2],n[3]/o],m=[{type:12,data:d},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Wr(t,m),m.push(...j(p,f,h));let g=(l-1)*t.strides[1]+f[1],y=w=>{let b=ee("output",e[0].dataType,h.length,o),T=Je(b.type.tensor),I=mn(t,b.type.value,T),v=U("x",e[0].dataType,p.length,o),E=U("w",e[1].dataType,f.length,o),z=[v,E];s&&z.push(U("b",e[2].dataType,e[2].dims,o));let A=s?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Gr(t,M),`
  ${w.registerUniforms(M).declareVariables(...z,b)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${l}u;
    let col = (index1 % width1) * ${l}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${g}>;
    var values: array<${b.type.value}, ${l}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${f[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${f[1]}; w_width++) {
          let w_val = ${E.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${l}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${l}u; i++) {
      var value = values[i];
      ${A}
      ${I}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${l};${g};${f[0]};${f[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y}}}),ud,Ln,ld,Hr,Ga,$o,dd,Nn,bo,Af=F(()=>{de(),sd(),yt(),wo(),Cf(),gn(),Ei(),$r(),ud=(e,t,n,a,s,o)=>{let l=e[0],d=e.slice(o?1:2,o?3:4),p=d.length,f=t[0],h=t.slice(2).map((g,y)=>g+(g-1)*(n[y]-1)),m=d.map((g,y)=>g+a[y]+a[y+p]).map((g,y)=>Math.floor((g-h[y]+s[y])/s[y]));return m.splice(0,0,l),m.splice(o?3:1,0,f),m},Ln=[2,3,1,0],ld=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Hr=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let o=2;o<t[1].dims.length;++o)n[o-2]===0&&(n[o-2]=t[1].dims[o]);let a=e.pads.slice();ma.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,a,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:n,pads:a}),s},Ga=e=>{let t=go(e),n=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,o=e.group,l=e.kernel_shape,d=e.pads,p=e.strides,f=e.w_is_const();return{autoPad:a,format:n,dilations:s,group:o,kernelShape:l,pads:d,strides:p,wIsConst:f,...t,cacheKey:`${e.format};${t.activation};`}},$o=(e,t,n,a)=>{let s=n.format==="NHWC",o=ud(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,s);if(n.group!==1){let M=[t[0]];if(s){let B=e.kernelCustomData.wT??e.compute(zt(t[1],Ln),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=B),M.push(B)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(od(M,n,o,a),{inputs:M}):e.compute(Wa(M,n,o,a),{inputs:M});return}let l=t.length===3,d=t[0].dims[s?1:2],p=t[0].dims[s?2:3],f=t[0].dims[s?3:1],h=t[1].dims[2],m=t[1].dims[3],g=o[s?1:2],y=o[s?2:3],w=o[s?3:1],b=s&&h===d&&m===p&&n.pads[0]===0&&n.pads[1]===0;if(b||h===1&&m===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let M=o[0],B,L,q,K=[];if(s){let ne=e.kernelCustomData.wT??e.compute(zt(t[1],Ln),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ne),b){let ke=d*p*f;B=t[0].reshape([1,M,ke]),L=ne.reshape([1,ke,w]),q=[1,M,w]}else B=t[0].reshape([M,d*p,f]),L=ne.reshape([1,f,w]),q=[M,g*y,w];K.push(B),K.push(L)}else B=t[0].reshape([M,f,d*p]),L=t[1].reshape([1,w,f]),q=[M,w,g*y],K.push(L),K.push(B);l&&K.push(t[2]);let ae=q[2],Q=K[0].dims[K[0].dims.length-1];ae<8&&Q<8?e.compute(Yt(K,n,o,q,s,a),{inputs:K}):e.compute(ki(K,n,o,q,s,a),{inputs:K});return}let T=!0,I=e.kernelCustomData.wT??e.compute(zt(t[1],Ln),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I);let v=[t[0],I];l&&v.push(t[2]);let E=s?g*y:w,z=s?w:g*y,A=h*m*f;e.compute(ad(v,n,o,E,z,A,l,T,a),{inputs:v})},dd=(e,t)=>{let n=t.format==="NHWC",a=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),l=[1].concat(t.dilations),d=[1].concat(t.kernelShape),p=Hr({...t,pads:s,strides:o,dilations:l,kernelShape:d},a);$o(e,a,p,f=>n?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},Nn=(e,t,n)=>{let a=n.format==="NHWC"?"channelsLast":"channelsFirst",s=Hr(n,t),o=n.autoPad==="NOTSET"?n.pads:n.autoPad,l=Fr(t[0].dims,t[1].dims,n.strides,n.dilations,o,!1,a);e.compute(vo(t,s,l.outShape,[l.filterDepth,l.filterHeight,l.filterWidth],[l.padInfo.front,l.padInfo.top,l.padInfo.left],a))},bo=(e,t)=>{if(ld(e.inputs,t),e.inputs[0].dims.length===3)dd(e,t);else if(e.inputs[0].dims.length===5)Nn(e,e.inputs,t);else{let n=Hr(t,e.inputs);$o(e,e.inputs,n)}}}),Va,pd=F(()=>{ue(),_r(),de(),ce(),Va=(e,t,n)=>{let a=e.length>2,s=t.outputShape,o=t.format==="NHWC",l=t.group,d=e[1].dims,p=d[2]/l,f=d[3],h=o?He(p):1,m=o&&f===1&&p>=4,g=m?Math.floor(p/4)*4:Math.floor(p/h)*h,y=p-g,w=o?He(f):1,b=o?f===1?h:w:1,T=D.size(s)/w,I=[Math.ceil(T/64),1,1];Se("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${I}`);let v=["rank","rank"],E=[t.strides[0],t.strides[1]],z=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],A=[t.dilations[0],t.dilations[1]],M=[z[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),z[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],B=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],L=[{type:12,data:T},{type:12,data:E},{type:12,data:z},{type:12,data:A},{type:12,data:M},{type:6,data:B},{type:12,data:g},{type:12,data:p},{type:12,data:f},...j(e[0].dims,e[1].dims)];a&&(L.push(...j(e[2].dims)),v.push("rank")),L.push(...j(s));let q=K=>{let ae=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:z.length},{name:"dilations",type:"u32",length:z.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:B.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=Je(e[0].dataType),ne=o?1:2,ke=o?2:3,_e=o?3:1,re=U("W",e[1].dataType,e[1].dims.length,b),oe=U("Dy",e[0].dataType,e[0].dims.length,h),J=[oe,re];a&&J.push(U("bias",e[2].dataType,[s[_e]].length,w));let le=ee("result",e[0].dataType,s.length,w),pt=()=>{let ie="";if(m)h===4?ie+=`
        let xValue = ${oe.getByOffset("x_offset")};
        let wValue = ${re.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?ie+=`
          dotProd = dotProd + dot(vec4<${Q}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}), vec4<${Q}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(ie+=`
          dotProd = dotProd + dot(vec4<${Q}>(${oe.getByOffset("x_offset")}, ${oe.getByOffset("x_offset + 1u")}, ${oe.getByOffset("x_offset + 2u")}, ${oe.getByOffset("x_offset + 3u")}), vec4<${Q}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}, ${re.getByOffset("w_offset + 2u")}, ${re.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ie+=`
                  let xValue = ${o?oe.getByOffset(`${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):oe.get("batch","inputChannel","idyR","idyC")};
        `,h===1)ie+=`
          let w_offset = ${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${re.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ve=0;ve<h;ve++)ie+=`
            let wValue${ve} = ${re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ve}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${ve}] * wValue${ve};`;return ie},W=()=>{if(y===0)return"";if(!m)throw new Error(`packInputAs4 ${m} is not true.`);let ie="";if(h===1){ie+="dotProd = dotProd";for(let ve=0;ve<y;ve++)ie+=`
            + ${oe.getByOffset(`x_offset + ${ve}`)} * ${re.getByOffset(`w_offset + ${ve}`)}`;ie+=";"}else if(h===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);ie+=`
          let xValue = ${oe.getByOffset("x_offset")};
          let wValue = ${re.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ie},Z=`
            let outputIndices = ${le.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${le.indicesGet("outputIndices",0)};
            let d1 = ${le.indicesGet("outputIndices",_e)};
            let r = ${le.indicesGet("outputIndices",ne)};
            let c = ${le.indicesGet("outputIndices",ke)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${le.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Q}(dyRCorner) + ${Q}(wR)) / ${Q}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Q}(uniforms.Dy_shape[${ne}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Q}(dyCCorner) + ${Q}(wC)) / ${Q}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Q}(uniforms.Dy_shape[${ke}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${m?`
                var x_offset = ${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${re.indicesToOffset(`${re.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${m?4:h}) {
                  ${pt()}
                  inputChannel = inputChannel + ${m?4:h};
                }
                ${W()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${w}]`:""};
            ${le.setByOffset("global_idx","value")};
          `;return`
    ${K.registerUniforms(ae).declareVariables(...J,le)}
      ${K.mainStart()}
      ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Z}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${b}${w}${m}${y}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:I[0],y:I[1],z:I[2]},outputs:[{dims:n?n(s):s,dataType:e[0].dataType}],programUniforms:L}),getShaderSource:q}}}),fd,cd,hd,Fa,Ha,md,Ri,xo,Io,gd=F(()=>{pd(),gn(),$r(),fd=(e,t,n,a,s,o)=>(e-1)*t+n+(a-1)*s+1-o,cd=(e,t,n,a,s)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(n[a]=o,n[s]=e-o):t==="SAME_LOWER"&&(n[a]=e-o,n[s]=o)},hd=(e,t,n,a,s,o,l,d,p,f)=>{let h=e.length-2,m=f.length===0;p.length<h&&p.push(...Array(h-p.length).fill(0));let g=e[0],y=t[d?3:1]*s;for(let w=0,b=e.length-h-(d?1:0);w<h;++w,++b){let T=e[b],I=m?T*l[w]:f[w],v=fd(T,l[w],o[w],t[b],n[w],I);cd(v,a,o,w,w+h),m&&f.push(l[w]*(T-1)+p[w]+(t[b]-1)*n[w]+1-o[w]-o[w+h])}f.splice(0,0,g),f.splice(d?3:1,0,y)},Fa=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((m,g)=>m*g,1)===0){n.length=0;for(let m=2;m<t[1].dims.length;++m)n.push(t[1].dims[m])}let a=e.format==="NHWC";n.splice(0,0,t[1].dims[0]),n.splice(a?3:1,0,t[1].dims[1]);let s=e.pads.slice(),o=e.outputShape.slice(),l=e.outputPadding.slice(),d=t[0].dims,p=e.dilations.slice();if(p.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;p=new Array(m).fill(1)}let f=e.strides.slice();if(f.reduce((m,g)=>m+g,0)===0){let m=t[0].dims.length-2;f=new Array(m).fill(1)}hd(d,n,p,e.autoPad,e.group,s,f,a,l,o);let h=Object.assign({},e);return Object.assign(h,{kernelShape:n,pads:s,outputPadding:l,outputShape:o,dilations:p,strides:f}),h},Ha=e=>{let t=go(e),n=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,o=e.group,l=e.kernelShape,d=e.pads,p=e.strides,f=e.wIsConst(),h=e.outputPadding,m=e.outputShape;return{autoPad:a,format:n,dilations:s,group:o,kernelShape:l,outputPadding:h,outputShape:m,pads:d,strides:p,wIsConst:f,...t,cacheKey:`${e.format};${t.activation};`}},md=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let n=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(n!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((l,d)=>l+d,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((l,d)=>l+d,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((l,d)=>l+d,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((l,d)=>l+d,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ri=(e,t,n,a)=>{let s=e.kernelCustomData.wT??e.compute(zt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let o=[t[0],s];t.length===3&&o.push(t[2]),e.compute(Va(o,n,a),{inputs:o})},xo=(e,t)=>{let n=t.format==="NHWC",a=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let l=t.strides;(l.length===0||l[0]===0)&&(l=[1]);let d=t.pads;d.length===0&&(d=[0,0]),d=[0,d[0],0,d[1]],l=[1].concat(l),o=[1].concat(o),s=[1].concat(s);let p=t.outputPadding;p=[0].concat(p);let f=Fa({...t,pads:d,strides:l,dilations:o,kernelShape:s,outputPadding:p},a);Ri(e,a,f,h=>n?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Io=(e,t)=>{if(md(e.inputs,t),e.inputs[0].dims.length===3)xo(e,t);else{let n=Fa(t,e.inputs);Ri(e,e.inputs,n)}}}),Bi,_d,So,yd=F(()=>{ue(),de(),xe(),ce(),Bi=(e,t,n,a)=>{let s=D.size(t),o=t.length,l=U("input",e,o),d=ee("output",e,o),p=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),f=D.normalizeAxis(p,o),h=m=>{let g=` i32(${l.indicesGet("inputIndices","uniforms.axis")}) `,y=te("uniforms.input_shape","uniforms.axis",o),w=a.reverse?g+(a.exclusive?" + 1":""):"0",b=a.reverse?y:g+(a.exclusive?"":" + 1");return`
                ${m.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(l,d)}
                ${m.mainStart()}
                  ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${d.offsetToIndices("global_idx")};
                  var sum = ${d.type.value}(0);
                  let first : i32 = ${w};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${l.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${l.getByIndices("inputIndices")};
                  }
                  ${d.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:f},...j(t,t)]}),getShaderSource:h}},_d=(e,t)=>{let n=e.inputs[0].dims,a=e.inputs[0].dataType,s=e.inputs[1];e.compute(Bi(a,n,s,t),{inputs:[0]})},So=e=>{let t=e.exclusive===1,n=e.reverse===1;return Be({exclusive:t,reverse:n})}}),wd,To,vd,Ka,Eo,ko=F(()=>{ue(),de(),xe(),ce(),wd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},To=(e,t,n,a)=>{let s=[];s.push(`fn perm(i: ${a.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let o=0;o<t;++o)s.push(n.indicesSet("a",e[o],`i[${o}]`));return s.push("return a;}"),s.join(`
`)},vd=(e,t)=>{let n,a,s,o,l,d,p=t.format==="NHWC",f=t.blocksize,h=t.mode==="DCR";p?([n,a,s,o]=e.dims,l=h?[n,a,s,f,f,o/f**2]:[n,a,s,o/f**2,f,f],d=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,a,s,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],l=h?[n,f,f,o/f**2,a,s]:[n,o/f**2,f,f,a,s],d=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let m=e.reshape(l),g=m.dims.length,y=e.dataType,w=U("a",y,g),b=ee("output",y,g),T=I=>`
  ${I.registerUniform("output_size","u32").declareVariables(w,b)}

  ${To(d,g,w,b)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:I=>{let v=p?[n,a*f,s*f,o/f**2]:[n,o/f**2,a*f,s*f],E=D.size(v),z=m.dims,A=D.sortBasedOnPerm(z,d);return{outputs:[{dims:v,dataType:I[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...j(z,A)]}},getShaderSource:T}},Ka=(e,t)=>{wd(e.inputs),e.compute(vd(e.inputs[0],t))},Eo=e=>Be({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Za,yn,be,$d,bd,qn,zo,Co,xd,Bt,Id,ja=F(()=>{ue(),de(),xe(),ce(),Za="[a-zA-Z]|\\.\\.\\.",yn="("+Za+")+",be="^"+yn+"$",$d="("+yn+",)*"+yn,bd="^"+$d+"$",qn=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},zo=class{constructor(e,t){var s;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,a]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(bd)))throw new Error("Invalid LHS term");if(n.split(",").forEach((o,l)=>{let d=e[l].dims.slice();if(!o.match(RegExp(be)))throw new Error("Invalid LHS term");let p=this.processTerm(o,!0,d,l);this.lhs.push(p)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([o,l])=>l.count===1||o==="...").map(([o])=>o).join("");else if(!a.match(RegExp(yn)))throw new Error("Invalid RHS");(s=a.match(RegExp(Za,"g")))==null||s.forEach(o=>{if(o==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let l=this.symbolToInfo.get(o);if(l===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(l.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,n){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(n)}else a={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,a)}processTerm(e,t,n,a=-1){let s=n.length,o=!1,l=[],d=0;if(!e.match(RegExp(be))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Za,"g")),f=new qn(a);return p==null||p.forEach((h,m)=>{if(h==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let g=s-p.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(l=n.slice(d,d+g),this.hasEllipsis){if(this.ellipsisDims.length!==l.length||this.ellipsisDims.toString()!==l.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=l;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<l.length;y++){let w=String.fromCharCode(48+y);f.addSymbol(w,m+y),this.addSymbol(w,n[d++],a)}}else f.addSymbol(h,m+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,n[d++],a)}),f}},Co=e=>e+"_max",xd=(e,t,n,a)=>{let s=e.map(f=>f.length).map((f,h)=>U(`input${h}`,t,f)),o=D.size(a),l=ee("output",t,a.length),d=[...n.symbolToInfo.keys()].filter(f=>!n.rhs.symbolToIndices.has(f)),p=f=>{let h=[],m="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",w=[],b=[],T=[],I=[],v=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((z,A)=>{var M;if(n.rhs.symbolToIndices.has(A)){let B=(M=n.rhs.symbolToIndices.get(A))==null?void 0:M[0];B!==void 0&&n.lhs.forEach((L,q)=>{if(z.inputIndices.includes(q)){let K=L.symbolToIndices.get(A);if(K===void 0)throw new Error("Invalid symbol error");K.forEach(ae=>{h.push(`${s[q].indicesSet(`input${q}Indices`,ae,l.indicesGet("outputIndices",B))}`)})}})}else n.lhs.forEach((B,L)=>{if(z.inputIndices.includes(L)){let q=B.symbolToIndices.get(A);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(K=>{w.push(`${s[L].indicesSet(`input${L}Indices`,K,`${A}`)}`)}),I.push(`prod *= ${s[L].getByIndices(`input${L}Indices`)};`)}}),b.push(`for(var ${A}: u32 = 0; ${A} < uniforms.${Co(A)}; ${A}++) {`),T.push("}")});let E=v?[...h,`let sum = ${s.map((z,A)=>z.getByIndices(`input${A}Indices`)).join(" * ")};`]:[...h,g,...b,...w,m,...I,y,...T];return`
            ${f.registerUniforms(d.map(z=>({name:`${Co(z)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,l)}

            ${f.mainStart()}
            ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${l.offsetToIndices("global_idx")};
            ${s.map((z,A)=>`var input${A}Indices: ${s[A].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${l.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:n.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let f=d.filter(m=>n.symbolToInfo.has(m)).map(m=>{var g;return{type:12,data:((g=n.symbolToInfo.get(m))==null?void 0:g.dimValue)||0}});f.push({type:12,data:o});let h=e.map((m,g)=>[...j(m)]).reduce((m,g)=>m.concat(g),f);return h.push(...j(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}},getShaderSource:p}},Bt=(e,t)=>{let n=new zo(e.inputs,t.equation),a=n.outputDims,s=e.inputs.map((o,l)=>o.dims);e.compute(xd(s,e.inputs[0].dataType,n,a))},Id=e=>{let t=e.equation.replace(/\s+/g,"");return Be({equation:t})}}),Xa,Qa,Ao,xt,Er,Oo=F(()=>{ue(),de(),ce(),Xa=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),a=n.length<t.length?0:n.length-t.length,s=t.length<n.length?0:t.length-n.length;for(;a<n.length&&s<t.length;++a,++s)if(n[a]!==t[s]&&n[a]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Qa=(e,t)=>{let n=e.length-t.length,a=[];for(let s=0;s<n;++s)a.push(e[s]);for(let s=0;s<t.length;++s)a.push(t[s]===1?e[s+n]:t[s]);return a},Ao=(e,t)=>e.length>t.length?Qa(e,t):Qa(t,e),xt=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),a=Ao(t,n),s=e[0].dataType,o=s===9||D.size(t)===1,l=s===9||t.length>0&&t[t.length-1]%4===0?4:1,d=o||a.length>0&&a[a.length-1]%4===0?4:1,p=Math.ceil(D.size(a)/d),f=m=>{let g=U("input",s,t.length,l),y=ee("output",s,a.length,d),w;if(s===9){let b=(T,I,v="")=>`
          let outputIndices${I} = ${y.offsetToIndices(`outputOffset + ${I}u`)};
          let offset${I} = ${g.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${T}[${I}] = ${v}(${g.getByOffset(`index${I}`)}[component${I}]);
        `;w=`
        let outputOffset = global_idx * ${d};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else w=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${d}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${l}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${m.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${w}`},h=[{type:12,data:p},...j(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${l}${d}`,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h})}},Er=e=>{Xa(e.inputs),e.compute(xt(e.inputs),{inputs:[0]})}}),Ro,Mi,Sd=F(()=>{ue(),de(),ce(),Sr(),Ro=e=>{let t=e[0].dataType,n=D.size(e[0].dims),a=D.size(e[1].dims),s=a%4===0,o=l=>{let d=U("x",t,[1],4),p=U("bias",t,[1],4),f=ee("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],m=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${p.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=s?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${m(0)}${m(1)}${m(2)}${m(3)}
      let bias = ${d.type.value}(bias0, bias1, bias2, bias3);`;return`${l.registerUniforms(h).declareVariables(d,p,f)}

    ${$(at(t))}

    ${l.mainStart(Lr)}
      ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${d.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${f.setByOffset("global_idx",qr("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:l=>({outputs:[{dims:l[0].dims,dataType:l[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(n/Lr/4)}})}},Mi=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?Si(e):e.compute(Ro(e.inputs))}}),Ya,Bo,Ja,es,Kr=F(()=>{ue(),de(),xe(),ce(),Ya=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Bo=(e,t)=>{let n=e[0].dims,a=e[1].dims,s=n.length,o=D.normalizeAxis(t.axis,s),l=n.slice(0);l.splice(o,1,...a);let d=n[o],p=e[0].dataType===9?4:1,f=Math.ceil(D.size(l)/p),h=[{type:12,data:f},{type:6,data:d},{type:12,data:o},...j(e[0].dims,e[1].dims,l)],m=g=>{let y=U("data",e[0].dataType,e[0].dims.length,p),w=U("inputIndices",e[1].dataType,e[1].dims.length),b=ee("output",e[0].dataType,l.length,p),T=v=>{let E=a.length,z=`var indicesIndices${v}  = ${w.type.indices}(0);`;for(let A=0;A<E;A++)z+=`${E>1?`indicesIndices${v}[${A}]`:`indicesIndices${v}`} = ${l.length>1?`outputIndices${v}[uniforms.axis + ${A}]`:`outputIndices${v}`};`;z+=`
          var idx${v} = ${w.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${y.type.indices};
        `;for(let A=0,M=0;A<s;A++)A===o?(z+=`${s>1?`dataIndices${v}[${A}]`:`dataIndices${v}`} = u32(idx${v});`,M+=E):(z+=`${s>1?`dataIndices${v}[${A}]`:`dataIndices${v}`} = ${l.length>1?`outputIndices${v}[${M}]`:`outputIndices${v}`};`,M++);return z},I;if(e[0].dataType===9){let v=(E,z,A="")=>`
          let outputIndices${z} = ${b.offsetToIndices(`outputOffset + ${z}u`)};
          ${T(z)};
          let offset${z} = ${y.indicesToOffset(`dataIndices${z}`)};
          let index${z} = offset${z} / 4u;
          let component${z} = offset${z} % 4u;
          ${E}[${z}] = ${A}(${y.getByOffset(`index${z}`)}[component${z}]);
        `;I=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else I=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,w,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${I}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h}),getShaderSource:m}},Ja=e=>Be({axis:e.axis}),es=(e,t)=>{let n=e.inputs;Ya(n),e.compute(Bo(e.inputs,t))}}),Td,kr,Mo,Ed=F(()=>{ue(),de(),ce(),Td=(e,t,n,a,s,o,l,d,p)=>{let f=[{type:12,data:o},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:12,data:l},{type:12,data:d},{type:12,data:p}],h=[o];f.push(...j(t.dims,h));let m=g=>{let y=U("indices_data",t.dataType,t.dims.length),w=ee("input_slice_offsets_data",12,1,1),b=[y,w],T=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:n.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(T).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${n.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${n.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m},{inputs:[t],outputs:[-1]})[0]},kr=(e,t)=>{let n=e.inputs,a=n[0].dims,s=n[0].dataType,o=n[1].dims,l=o[o.length-1],d=D.sizeToDimension(o,o.length-1),p=D.sizeFromDimension(a,t.batchDims+l),f=D.sizeToDimension(a,t.batchDims),h=D.sizeFromDimension(a,t.batchDims),m=d/f,g=new Array(l),y=p;for(let z=0;z<l;++z)g[l-1-z]=y,y*=a[t.batchDims+l-1-z];let w=Td(e,n[1],g,t.batchDims,a,d,m,h,l),b=t.batchDims+l;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let T=o.slice(0,-1).concat(a.slice(b)),I=D.size(T),v=[{type:12,data:I},{type:12,data:p},...j(n[0].dims,w.dims,T)],E=z=>{let A=U("data",n[0].dataType,n[0].dims.length),M=U("slice_offsets",12,w.dims.length),B=ee("output",n[0].dataType,T.length);return`
          ${z.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(A,M,B)}
            ${z.mainStart()}
            ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:T,dataType:s}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:v}),getShaderSource:E},{inputs:[n[0],w]})},Mo=e=>({batchDims:e.batch_dims,cacheKey:""})}),ts,kd,zd,Cd,Ad=F(()=>{ue(),de(),xe(),ce(),ts=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,s=e[0],o=e[2],l=e.length===4?e[3]:void 0;if(o.dims.length!==s.dims.length||!s.dims.map((d,p)=>p===n?Math.ceil(d/a)===o.dims[p]:d===o.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(l){if(l.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(l.dims.length!==o.dims.length||!l.dims.map((d,p)=>d===o.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},kd=(e,t)=>{let n=e[0].dims,a=e[1].dims,s=n.length,o=D.normalizeAxis(t.gatherAxis,s),l=D.normalizeAxis(t.quantizeAxis,s),d=n.slice(0);d.splice(o,1,...a);let p=D.size(d),f=e[2].dataType,h=e[0].dataType===22,m=[{type:12,data:p},{type:12,data:l},{type:12,data:o},{type:12,data:t.blockSize},...j(...e.map((y,w)=>y.dims),d)],g=y=>{let w=U("data",e[0].dataType,e[0].dims.length),b=U("inputIndices",e[1].dataType,e[1].dims.length),T=U("scales",e[2].dataType,e[2].dims.length),I=e.length>3?U("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=ee("output",f,d.length),E=[w,b,T];I&&E.push(I);let z=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(z).declareVariables(...E,v)}
        ${y.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${w.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${w.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${n[o]};
        }
        ${w.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${d.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${w.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${w.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${w.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${I?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${I.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${I.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${at(f)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,w)=>w!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,w)=>"rank")},getRunData:()=>({outputs:[{dims:d,dataType:f}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:g}},zd=(e,t)=>{let n=e.inputs;ts(n,t),e.compute(kd(e.inputs,t))},Cd=e=>Be({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Do,Od,Po,Uo,It=F(()=>{ue(),de(),xe(),ce(),Do=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Od=(e,t)=>{let n=e[0].dims,a=e[0].dataType,s=n.length,o=e[1].dims,l=e[1].dataType,d=D.normalizeAxis(t.axis,s),p=n[d],f=o.slice(0),h=D.size(f),m=U("input",a,s),g=U("indicesInput",l,o.length),y=ee("output",a,f.length),w=[{type:12,data:h},{type:6,data:p},{type:12,data:d}];return w.push(...j(n,o,f)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:w}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${m.type.indices}(outputIndices);
      ${m.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${m.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Po=e=>Be({axis:e.axis}),Uo=(e,t)=>{let n=e.inputs;Do(n),e.compute(Od(e.inputs,t))}}),er,Rd,Bd,Di,Wn=F(()=>{ue(),de(),ce(),er=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Rd=(e,t)=>{let n=e[0].dims.slice(),a=e[1].dims.slice(),[s,o,l]=Ns.getShapeOfGemmResult(n,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),d=[s,o];if(!d)throw new Error("Can't use gemm on the given tensors");let p=16,f=Math.ceil(o/p),h=Math.ceil(s/p),m=!0,g=D.size(d),y=[{type:12,data:m?f:g},{type:12,data:s},{type:12,data:o},{type:12,data:l},{type:1,data:t.alpha},{type:1,data:t.beta}],w=["type","type"];e.length===3&&(y.push(...j(e[2].dims)),w.push("rank")),y.push(...j(d));let b=I=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",z=U("a",e[0].dataType,e[0].dims),A=U("b",e[1].dataType,e[1].dims),M=z.type.value,B=null,L=[z,A];e.length===3&&(B=U("c",e[2].dataType,e[2].dims.length),L.push(B));let q=ee("output",e[0].dataType,d.length);L.push(q);let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${I.registerUniforms(K).declareVariables(...L)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${E}
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${M}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},T=I=>{let v=U("a",e[0].dataType,e[0].dims),E=U("b",e[1].dataType,e[1].dims),z=null,A=[v,E];e.length===3&&(z=U("c",e[2].dataType,e[2].dims.length),A.push(z));let M=ee("output",e[0].dataType,d.length);A.push(M);let B=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],L="",q="";t.transA&&t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,L="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,L="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,L="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,L="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let K=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${I.registerUniforms(B).declareVariables(...A)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${p}>, ${p}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${p}>, ${p}>;
  ${I.mainStart([p,p,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${p};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${p};
    let num_tiles = (uniforms.K - 1) / ${p} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${q}
      k_start = k_start + ${p};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${p}; k++) {
        ${L}
      }
      workgroupBarrier();
    }

    ${K}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return m?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:f*h},programUniforms:y}),getShaderSource:T}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},Bd=e=>{let t=e.transA,n=e.transB,a=e.alpha,s=e.beta;return{transA:t,transB:n,alpha:a,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Di=(e,t)=>{er(e.inputs),e.compute(Rd(e.inputs,t))}}),tr,pr,wn,Zr,vn,Gn,Md,Lo,No,Pi,qo,Ui,rs,Li,Of=F(()=>{ue(),de(),xe(),ce(),[tr,pr,wn,Zr]=[0,1,2,3],vn=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Gn=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Md=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Lo=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,No=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Pi=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tr}] = batch;
     indices[${pr}] = channel;`+(()=>{switch(n.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${wn}] = u32(r);
            indices[${Zr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${wn}] = u32(clamp(r, 0, H - 1));
          indices[${Zr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${wn}] = gs_reflect(r, border[1], border[3]);
          indices[${Zr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,qo=(e,t,n)=>(()=>{switch(n.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tr}], indices[${pr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tr}], indices[${pr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tr}], indices[${pr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tr}], indices[${pr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tr}], indices[${pr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tr}], indices[${pr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ui=(e,t)=>{let n=U("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=U("grid",e[1].dataType,a.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tr,pr,wn,Zr]=[0,3,1,2]);let l=ee("output",e[0].dataType,o.length),d=n.type.value,p=D.size(o),f=[{type:12,data:p},...j(e[0].dims,a,o)],h=m=>`
  ${m.registerUniform("output_size","u32").declareVariables(n,s,l)}
  ${Gn}
  ${Md(d)}
  ${Lo(t)}
  ${No(t)}
  ${Pi(n,d,t)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${wn}]);
      let W_in = i32(uniforms.x_shape[${Zr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${l.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tr}], indices[${wn}], indices[${Zr}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${qo(l,d,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:m=>{let g=D.size(o);return{outputs:[{dims:o,dataType:m[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:f}},getShaderSource:h}},rs=(e,t)=>{vn(e.inputs),e.compute(Ui(e.inputs,t))},Li=e=>Be({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ht,Ni,Wo,qi,Dd,Vn,fr,Go=F(()=>{ue(),de(),xe(),Hs(),lo(),ce(),$r(),ht=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ni=(e,t)=>{let n=e[0],a=ht(e,1),s=ht(e,2),o=ht(e,3),l=ht(e,4),d=ht(e,5),p=ht(e,6),f=ht(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=n.dims[0],m=n.dims[1],g=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],y=m,w=0,b=0,T=Math.floor(g/t.numHeads);if(p&&f&&D.size(p.dims)&&D.size(f.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[0]!==h||f.dims[1]!==t.numHeads||f.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==f.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(f.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=p.dims[2],b=p.dims[2]}else if(p&&D.size(p.dims)||f&&D.size(f.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I;if(a&&D.size(a.dims)>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==n.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');I=2,y=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');I=5,y=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');I=0,y=a.dims[2]}}else{if(n.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}if(o&&D.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=w+y,E=0;if(l&&D.size(l.dims)>0){E=8;let B=l.dims;throw B.length===1?B[0]===h?E=1:B[0]===3*h+2&&(E=3):B.length===2&&B[0]===h&&B[1]===v&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let z=!1,A=g;if(s&&D.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(y!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');A=s.dims[2]}else{if(y!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');A=s.dims[1]*s.dims[3],z=!0}}let M=!1;if(l&&D.size(l.dims)>0)throw new Error("Key padding mask is not supported");if(d&&D.size(d.dims)>0){if(d.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[2]!==m||d.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:m,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:v,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:A,headSize:T,vHeadSize:Math.floor(A/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:M,passPastInKv:z,qkvFormat:I}},Wo=e=>Be({...e}),qi=Be({perm:[0,2,1,3]}),Dd=(e,t,n,a,s,o,l)=>{let d=[a,s,o],p=D.size(d),f=[{type:12,data:p},{type:12,data:l},{type:12,data:o}],h=m=>{let g=ee("qkv_with_bias",t.dataType,d),y=U("qkv",t.dataType,d),w=U("bias",n.dataType,d),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${m.registerUniforms(b).declareVariables(y,w,g)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:h},{inputs:[t,n],outputs:[-1]})[0]},Vn=(e,t,n,a,s,o,l,d)=>{let p=o;if(l&&D.size(l.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=Dd(e,o,l,t,a,n*s,d),p=p.reshape([t,a,n,s]),n===1||a===1?p:e.compute(zt(p,qi.perm),{inputs:[p],outputs:[-1]})[0]}else return o.dims.length===3&&(p=o.reshape([t,a,n,s])),n===1||a===1?p:e.compute(zt(p,qi.perm),{inputs:[p],outputs:[-1]})[0]},fr=(e,t)=>{let n=Ni(e.inputs,t),a=e.inputs[0],s=ht(e.inputs,1),o=ht(e.inputs,2),l=ht(e.inputs,3),d=ht(e.inputs,4),p=ht(e.inputs,5),f=ht(e.inputs,6),h=ht(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((s==null?void 0:s.dims.length)===5)throw new Error("Packed KV is not implemented");let m=s&&o&&s.dims.length===4&&o.dims.length===4,g=Vn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,a,l,0);if(m)return mi(e,g,s,o,d,void 0,f,h,p,n);if(!s||!o)throw new Error("key and value must be provided");let y=Vn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,s,l,n.hiddenSize),w=Vn(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,o,l,2*n.hiddenSize);mi(e,g,y,w,d,void 0,f,h,p,n)}}),Vo,Pd,Fo,Ud,Ho,cr,ns,is=F(()=>{ue(),de(),xe(),ce(),Vo=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Pd=(e,t)=>{let n=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>n.push(Number(s))),a=n.length),Be({numOutputs:a,axis:t.axis,splitSizes:n})},Fo=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${te("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ud=e=>{let t=e.length,n=[];for(let a=0;a<t;++a){let s=e[a].setByIndices("indices","input[global_idx]");t===1?n.push(s):a===0?n.push(`if (output_number == ${a}u) { ${s} }`):a===t-1?n.push(`else { ${s} }`):n.push(`else if (output_number == ${a}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Ho=(e,t)=>{let n=e[0].dims,a=D.size(n),s=e[0].dataType,o=D.normalizeAxis(t.axis,n.length),l=new Array(t.numOutputs),d=U("input",s,n.length),p=new Array(t.numOutputs),f=[],h=[],m=0,g=[{type:12,data:a}];for(let w=0;w<t.numOutputs;w++){m+=t.splitSizes[w],p[w]=m;let b=n.slice();b[o]=t.splitSizes[w],h.push(b),l[w]=ee(`output${w}`,s,b.length),f.push({dims:h[w],dataType:e[0].dataType})}g.push({type:12,data:p},...j(n,...h));let y=w=>`
  ${w.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(d,...l)}
  ${Fo(p.length)}
  ${Ud(l)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${d.offsetToIndices("global_idx")};
    var index = ${d.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${te("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${d.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:f,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}},cr=(e,t)=>{Vo(e.inputs);let n=e.inputs.length===1?t:Pd(e.inputs,t);e.compute(Ho(e.inputs,n),{inputs:[0]})},ns=e=>{let t=e.axis,n=e.splitSizes,a=e.numOutputs<0?n.length:e.numOutputs;if(a!==n.length)throw new Error("numOutputs and splitSizes length must be equal");return Be({axis:t,numOutputs:a,splitSizes:n})}}),as,$n,bn,pe=F(()=>{ue(),de(),xe(),ce(),as=(e,t)=>{let[n,a,s,o]=e,{numHeads:l,rotaryEmbeddingDim:d}=t;if(n.dims.length!==3&&n.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(a.dims,[])&&!D.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!D.areEqual(s.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(d>0&&l===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=n.dims[0],f=n.dims[n.dims.length-2],h=s.dims[0],m=D.sizeFromDimension(n.dims,1)/f,g=d===0?s.dims[1]*2:m/l;if(d>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(p!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(f!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(g/2!==s.dims[1]&&d/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(f>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},$n=(e,t)=>{let{interleaved:n,numHeads:a,rotaryEmbeddingDim:s,scale:o}=t,l=e[0].dims[0],d=D.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],f=d/p,h=e[2].dims[1],m=s===0?h*2:f/a,g=new Array(l,p,f/m,m-h),y=D.computeStrides(g),w=[{type:1,data:o},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[d,f,m,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[d,m,p*m,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=T=>{let I=U("input",e[0].dataType,e[0].dims.length),v=U("position_ids",e[1].dataType,e[1].dims.length),E=U("cos_cache",e[2].dataType,e[2].dims.length),z=U("sin_cache",e[3].dataType,e[3].dims.length),A=ee("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${T.declareVariables(I,v,E,z,A)}

        ${T.mainStart(Lr)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",ee("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${I.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${I.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${A.setByOffset("i","re")}
            let im = ${I.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} +
                ${I.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${A.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${A.setByOffset("k",I.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Be({interleaved:n}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(g)/Lr)},programUniforms:w})}},bn=(e,t)=>{as(e.inputs,t),e.compute($n(e.inputs,t))}}),Wi,ss,zr,Ld,os,Nd=F(()=>{xe(),ue(),lo(),Go(),is(),$r(),pe(),ce(),Wi=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let n=e[0],a=e[1],s=e[2],o=e[3],l=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(n.dims.length!==3&&n.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=!1,p=n.dims[0],f=n.dims[1],h=n.dims.length===3?d?n.dims[2]/3:n.dims[2]:t.numHeads*n.dims[4],m=f,g=0,y=!a||a.dims.length===0,w=Math.floor(y?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);y&&(h=w*t.numHeads);let b=o&&o.dims.length!==0,T=l&&l.dims.length!==0;if(b&&o.dims.length===4&&o.dims[0]===p&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===w)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&T){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=o.dims[2]}else if(b||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I=1;if(a&&a.dims.length>0){if(n.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(n.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(n.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');m=a.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}let v=0,E=!1,z=t.kvNumHeads?w*t.kvNumHeads:h;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(n.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(m!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');z=s.dims[2]}else{if(m!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');z=s.dims[1]*s.dims[3],E=!0}}let A=e.length>4?e[5]:void 0;if(A&&A.dims.length!==1&&A.dims[0]!==p)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:p,sequenceLength:f,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:z,headSize:w,vHeadSize:Math.floor(z/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:I}},ss=Be({perm:[0,2,1,3]}),zr=(e,t,n)=>{let a=t,s=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(a=t.reshape([n.batchSize,n.kvSequenceLength,s,n.headSize]),a=e.compute(zt(a,ss.perm),{inputs:[a],outputs:[-1]})[0]),a},Ld=(e,t,n,a)=>{let s=7,o=["type","type"],l=[e*t],d=e*t,p=[{type:12,data:d},{type:12,data:t},{type:12,data:e}],f=h=>{let m=U("seq_lens",n.dataType,n.dims),g=U("total_seq_lens",a.dataType,a.dims),y=ee("pos_ids",s,l),w=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(m,g,y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${m.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},os=(e,t)=>{var z;let n=Wi(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((z=e.inputs[1])==null?void 0:z.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,l=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,d=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,p=e.inputs.length>4?e.inputs[5]:void 0,f=e.inputs.length>5?e.inputs[6]:void 0,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,m=Be({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,h*n.headSize,h*n.headSize]}),[g,y,w]=!s&&!o?e.compute(Ho([a],m),{inputs:[a],outputs:[-1,-1,-1]}):[a,s,o],b,T;if(t.doRotary){let A=e.compute(Ld(n.batchSize,n.sequenceLength,p,f),{inputs:[p,f],outputs:[-1]})[0],M=e.inputs[7],B=e.inputs[8],L=Be({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),q=[g,A,M,B],K=[-1];b=e.compute($n(q,L),{inputs:q,outputs:K})[0],q.splice(0,1,y);let ae=Be({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});T=e.compute($n(q,ae),{inputs:q,outputs:K})[0]}let I=Vn(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?b:g,void 0,0),v=zr(e,t.doRotary?T:y,n),E=zr(e,w,n);mi(e,I,v,E,void 0,void 0,l,d,void 0,n,p,f)}}),ot,qd,Wd,Ko,Rf=F(()=>{ue(),de(),$r(),ce(),ot=(e,t,n,a,s,o,l,d)=>{let p=He(o),f=p===1?"f32":`vec${p}f`,h=p===1?"vec2f":`mat2x${p}f`,m=s*l,g=64;m===1&&(g=256);let y=[s,l,o/p],w=[s,l,2],b=["rank","type","type"],T=[];T.push(...j(y,w));let I=v=>{let E=U("x",t.dataType,3,p),z=U("scale",n.dataType,n.dims),A=U("bias",a.dataType,a.dims),M=ee("output",1,3,2),B=[E,z,A,M];return`
  var<workgroup> workgroup_shared : array<${h}, ${g}>;
  const workgroup_size = ${g}u;
  ${v.declareVariables(...B)}
  ${v.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${f}(0);
    var squared_sum = ${f}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${f}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${yr("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${yr("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${d}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${d};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:m},programUniforms:T}),getShaderSource:I},{inputs:[t,n,a],outputs:[-1]})[0]},qd=(e,t,n)=>{let a=t[0].dims,s=a,o=2,l=a[0],d=a[1],p=D.sizeFromDimension(a,o),f=He(p),h=D.size(s)/f,m=ot(e,t[0],t[1],t[2],l,p,d,n.epsilon),g=[l,d,p/f],y=[l,d],w=["type","none"],b=T=>{let I=U("x",t[0].dataType,g.length,f),v=U("scale_shift",1,y.length,2),E=ee("output",t[0].dataType,g.length,f),z=[I,v,E];return`
  ${T.registerUniform("output_size","u32").declareVariables(...z)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${I.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...j(g,y,g)]}),getShaderSource:b},{inputs:[t[0],m]})},Wd=(e,t,n)=>{let a=t[0].dims,s=a,o=a[0],l=a[a.length-1],d=D.sizeFromDimension(a,1)/l,p=He(l),f=D.size(s)/p,h=[{type:12,data:d},{type:12,data:Math.floor(l/p)}],m=["type","type"],g=!1,y=[0,a.length-1];for(let I=0;I<a.length-2;I++)g=g||a[I+1]!==1,y.push(I+1);g=g&&a[a.length-1]!==1;let w=g?e.compute(zt(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(I,v)=>a[y[v]])),b=ot(e,w,t[1],t[2],o,d,l,n.epsilon),T=I=>{let v=Je(t[0].dataType),E=p===1?"vec2f":`mat${p}x2f`,z=B=>{let L=B===0?"x":"y",q=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${v}(${q}(scale.${L}))`;case 2:return`vec2<${v}>(${q}(scale[0].${L}, scale[1].${L}))`;case 4:return`vec4<${v}>(${q}(scale[0].${L}, scale[1].${L}, scale[2].${L}, scale[3].${L}))`;default:throw new Error(`Not supported compoents ${p}`)}},A=U("input",t[0].dataType,t[0].dims,p),M=ee("output",t[0].dataType,s,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${A.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${I.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${z(0)}, ${z(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h}),getShaderSource:T},{inputs:[t[0],b]})},Ko=(e,t)=>{t.format==="NHWC"?Wd(e,e.inputs,t):qd(e,e.inputs,t)}}),Zo,Gd,Vd,Bf=F(()=>{ue(),de(),ce(),Zo=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Gd=(e,t,n)=>{let a=t.simplified,s=e[0].dims,o=e[1],l=!a&&e[2],d=s,p=D.normalizeAxis(t.axis,s.length),f=D.sizeToDimension(s,p),h=D.sizeFromDimension(s,p),m=D.size(o.dims),g=l?D.size(l.dims):0;if(m!==h||l&&g!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${m} and bias size of ${g}`);let y=[];for(let A=0;A<s.length;++A)A<p?y.push(s[A]):y.push(1);let w=He(h),b=["type","type"],T=[{type:12,data:f},{type:1,data:h},{type:12,data:Math.floor(h/w)},{type:1,data:t.epsilon}];l&&b.push("type");let I=n>1,v=n>2,E=A=>{let M=Je(e[0].dataType),B=[U("x",e[0].dataType,e[0].dims,w),U("scale",o.dataType,o.dims,w)];l&&B.push(U("bias",l.dataType,l.dims,w)),B.push(ee("output",e[0].dataType,d,w)),I&&B.push(ee("mean_data_output",1,y)),v&&B.push(ee("inv_std_output",1,y));let L=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${A.registerUniforms(L).declareVariables(...B)}
  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Sa("f32",w)};
    var mean_square_vector = ${Sa("f32",w)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${sn(M,w,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${yr("mean_vector",w)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${yr("mean_square_vector",w)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${sn(M,w,"x[j + offset]")};
      let f32scale = ${sn(M,w,"scale[j]")};
      output[j + offset] = ${B[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${l?`+ ${sn(M,w,"bias[j]")}`:""}
      );
    }

    ${I?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},z=[{dims:d,dataType:e[0].dataType}];return I&&z.push({dims:y,dataType:1}),v&&z.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${w};${n};${a}`,inputDependencies:b},getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(f/64)},programUniforms:T}),getShaderSource:E}},Vd=(e,t)=>{Zo(e.inputs),e.compute(Gd(e.inputs,t,e.outputCount))}}),hr,mt,jo=F(()=>{de(),Ei(),wo(),hr=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},mt=e=>{hr(e.inputs);let t=an.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let n=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&a<8)e.compute(Yt(e.inputs,{activation:""},t));else{let s=t[t.length-2],o=D.size(e.inputs[0].dims.slice(0,-2)),l=D.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&s===1&&l===1){let d=e.inputs[0].reshape([1,o,a]),p=e.inputs[1].reshape([1,a,n]),f=[1,o,n],h=[d,p];e.compute(ki(h,{activation:""},t,f),{inputs:h})}else e.compute(ki(e.inputs,{activation:""},t))}}}),Fd,us,Hd,Kd,Fn,Zd=F(()=>{ue(),de(),xe(),ce(),Fd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let n=e[0],a=n.dims.length;if(n.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,l=e[1];if(!D.areEqual(l.dims,[t.n,s,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let d=e[2].dims;if(D.size(d)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,f=t.n*(t.bits===8?s:Math.floor((s*t.bits+7)/8));if(D.size(p)!==f)throw new Error("zeroPoints input size error.")}},us=(e,t)=>{let n=e[0].dims,a=n.length,s=n[a-2],o=t.k,l=t.n,d=n.slice(0,a-2),p=D.size(d),f=e[1].dims[2]/4,h=e[0].dataType,m=He(t.k),g=He(f),y=He(l),w=d.concat([s,l]),b=s>1&&l/y%2===0?2:1,T=D.size(w)/y/b,I=64,v=[],E=[p,s,o/m],z=D.convertShape(e[1].dims).slice();z.splice(-1,1,f/g),v.push(...j(E)),v.push(...j(z)),v.push(...j(e[2].dims)),e.length===4&&v.push(...j(D.convertShape(e[3].dims)));let A=[p,s,l/y];v.push(...j(A));let M=B=>{let L=E.length,q=U("a",e[0].dataType,L,m),K=U("b",12,z.length,g),ae=U("scales",e[2].dataType,e[2].dims.length),Q=[q,K,ae],ne=e.length===4?U("zero_points",12,e[3].dims.length):void 0;ne&&Q.push(ne);let ke=A.length,_e=ee("output",e[0].dataType,ke,y),re=Je(e[0].dataType),oe=(()=>{switch(m){case 1:return`array<${re}, 8>`;case 2:return`mat4x2<${re}>`;case 4:return`mat2x4<${re}>`;default:throw new Error(`${m}-component is not supported.`)}})(),J=()=>{let W=`
          // reuse a data
            var input_offset = ${q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/m}; j++) {
              a_data[j] = ${q.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Z=0;Z<y*b;Z++)W+=`
            b_value = ${g===1?`b${Z}_data`:`b${Z}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(ie,ve)=>`${re}(b_value_lower[${ve}]), ${re}(b_value_upper[${ve}])`).join(", ")});
            b_dequantized_values = ${m===1?`${oe}(${Array.from({length:8},(ie,ve)=>`(b_quantized_values[${ve}] - ${ne?`zero_point${Z}`:"zero_point"}) * scale${Z}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${ne?`zero_point${Z}`:"zero_point"}`).join(",")})) * scale${Z};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(Z/y)}]${y>1?`[${Z%y}]`:""} += ${Array.from({length:8/m},(ie,ve)=>`${m===1?`a_data[${ve}] * b_dequantized_values[${ve}]`:`dot(a_data[${ve}], b_dequantized_values[${ve}])`}`).join(" + ")};
          `;return W},le=()=>{let W=`
            var col_index = col * ${y};
            ${ne?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${re}(8);`}
            `;for(let Z=0;Z<y*b;Z++)W+=`
            let scale${Z} = ${ae.getByOffset("col_index * nBlocksPerCol + block")};
            ${ne?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ne.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Z} = ${re}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return W},pt=()=>{let W=`col_index = col * ${y};`;for(let Z=0;Z<y*b;Z++)W+=`
            let b${Z}_data = ${K.getByIndices(`${K.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return W+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,W};return`
        var<workgroup> workgroup_shared: array<${_e.type.value}, ${b*I}>;
        ${B.declareVariables(...Q,_e)}
        ${B.mainStart([I,1,1])}
          let output_indices = ${_e.offsetToIndices(`(global_idx / ${I}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${I}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/m};
            ${le()}
            for (var word: u32 = 0; word < ${f}; word += ${g}) {
              ${pt()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${J()}
                word_offset += ${8/m};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${_e.type.value} = ${_e.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${I}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${_e.setByIndices(`${_e.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${m};${g};${y};${b};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:h}],dispatchGroup:{x:T},programUniforms:v}),getShaderSource:M}},Hd=(e,t)=>{let n=e[0].dims,a=n.length,s=n[a-2],o=t.k,l=t.n,d=n.slice(0,a-2),p=D.size(d),f=e[1].dims[2]/4,h=e[0].dataType,m=He(t.k),g=He(f),y=d.concat([s,l]),w=128,b=l%8===0?8:l%4===0?4:1,T=w/b,I=T*g*8,v=I/m,E=I/t.blockSize,z=D.size(y)/b,A=[],M=[p,s,o/m],B=D.convertShape(e[1].dims).slice();B.splice(-1,1,f/g),A.push(...j(M)),A.push(...j(B)),A.push(...j(e[2].dims)),e.length===4&&A.push(...j(D.convertShape(e[3].dims)));let L=[p,s,l];A.push(...j(L));let q=K=>{let ae=M.length,Q=U("a",e[0].dataType,ae,m),ne=U("b",12,B.length,g),ke=U("scales",e[2].dataType,e[2].dims.length),_e=[Q,ne,ke],re=e.length===4?U("zero_points",12,e[3].dims.length):void 0;re&&_e.push(re);let oe=L.length,J=ee("output",e[0].dataType,oe),le=Je(e[0].dataType),pt=()=>{switch(m){case 1:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${m}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Q.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${J.type.value}, ${T}>, ${b}>;
        ${K.declareVariables(..._e,J)}
        ${K.mainStart([T,b,1])}
          let output_indices = ${J.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${w})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Q.getByIndices(`${Q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${E} + local_id.x;
            ${re?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${le}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${le}(8);`}
            let scale = ${ke.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ne.getByIndices(`${ne.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/m};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${pt()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${le}>(${Array.from({length:4},(W,Z)=>`${le}(b_value_lower[${Z}]), ${le}(b_value_upper[${Z}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${le}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(W,Z)=>`${`dot(a_data${Z}, b_dequantized_values[${Z}])`}`).join(" + ")};
              word_offset += ${8/m};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${J.setByIndices(`${J.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${m};${g};${T};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:z},programUniforms:A}),getShaderSource:q}},Kd=(e,t)=>{Fd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Hd(e.inputs,t)):e.compute(us(e.inputs,t))},Fn=e=>Be(e)}),Xo,jd,Xd,Qd,Yd,Qo,Yo,Jd,ls,ep=F(()=>{ue(),de(),ce(),Xo=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},jd=(e,t,n)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
            k = i32(${e.indicesGet("indices",s)}) - ${te("uniforms.pads",s,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${te("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${te("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Xd=(e,t,n)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${te("uniforms.pads",s,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${te("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${te("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${te("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Qd=(e,t,n)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${te("uniforms.pads",s,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${te("uniforms.x_shape",s,t)})) {
                  k = i32(${te("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${te("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Yd=(e,t,n)=>{let a="";for(let s=t-1;s>=0;--s)a+=`
                k = i32(${e.indicesGet("indices",s)}) - ${te("uniforms.pads",s,n)};
                if (k < 0)  {
                  k += i32(${te("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${te("uniforms.x_shape",s,t)})) {
                  k -= i32(${te("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${te("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Qo=(e,t,n)=>{switch(n.mode){case 0:return jd(e,t,n.pads.length);case 1:return Xd(e,t,n.pads.length);case 2:return Qd(e,t,n.pads.length);case 3:return Yd(e,t,n.pads.length);default:throw new Error("Invalid mode")}},Yo=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,s=D.size(n),o=[{type:12,data:s},{type:6,data:t.pads}],l=e.length>=3&&e[2].data;t.mode===0&&o.push({type:l?e[2].dataType:1,data:t.value}),o.push(...j(e[0].dims,n));let d=["rank"],p=f=>{let h=ee("output",e[0].dataType,n.length),m=U("x",e[0].dataType,a.length),g=m.type.value,y=Qo(h,a.length,t),w=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&w.push({name:"constant_value",type:l?g:"f32"}),`
            ${f.registerUniforms(w).declareVariables(m,h)}
            ${f.mainStart()}
            ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${l}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:o}),getShaderSource:p}},Jd=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,o=new Int32Array(2*s).fill(0);if(e.length>=4){let d=e[3].getBigInt64Array();for(let p=0;p<d.length;p++)o[Number(d[p])]=Number(n[p]),o[Number(d[p])+s]=Number(n[p+d.length])}else n.forEach((d,p)=>o[Number(p)]=Number(d));let l=[];return o.forEach(d=>l.push(d)),{mode:t.mode,value:a,pads:l}}else return t},ls=(e,t)=>{Xo(e.inputs);let n=Jd(e.inputs,t);e.compute(Yo(e.inputs,n),{inputs:[0]})}}),Cr,Gi,ds,ps,Hn,Jo,rr,Ar,eu,tu,tp,ru,rp,np,nu,ip,ap,sp,op,Mf=F(()=>{dt(),ue(),de(),ce(),Cr=e=>{if(Pe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Gi=(e,t,n)=>{let a=t.format==="NHWC",s=e.dims.slice();a&&s.splice(1,0,s.pop());let o=Object.hasOwnProperty.call(t,"dilations"),l=t.kernelShape.slice(),d=t.strides.slice(),p=o?t.dilations.slice():[],f=t.pads.slice();ma.adjustPoolAttributes(n,s,l,d,p,f);let h=ma.computePoolOutputShape(n,s,d,p,l,f,t.autoPad),m=Object.assign({},t);o?Object.assign(m,{kernelShape:l,strides:d,pads:f,dilations:p,cacheKey:t.cacheKey}):Object.assign(m,{kernelShape:l,strides:d,pads:f,cacheKey:t.cacheKey});let g=h.slice();return g.push(g.splice(1,1)[0]),[m,a?g:h]},ds=(e,t)=>{let n=t.format==="NHWC",a=D.size(e),s=D.size(t.kernelShape),o=[{type:12,data:a},{type:12,data:s}],l=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let d=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],f=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],m=!!(f+h);o.push({type:12,data:d},{type:12,data:p},{type:12,data:f},{type:12,data:h}),l.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],w=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],T=t.pads[t.pads.length-2];g=!!(b+T),o.push({type:12,data:y},{type:12,data:w},{type:12,data:b},{type:12,data:T}),l.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,l,!0,m,g]}else{if(n)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let d=D.computeStrides(t.kernelShape);o.push({type:12,data:d},{type:12,data:t.pads},{type:12,data:t.strides}),l.push({name:"kernelStrides",type:"u32",length:d.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((f,h)=>f+h);return[o,l,!!p,!1,!1]}},ps=(e,t,n,a,s,o,l,d,p,f,h,m)=>{let g=s.format==="NHWC",y=t.type.value,w=ee("output",t.type.tensor,a);if(s.kernelShape.length<=2){let b="",T="",I="",v=n-(g?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,s.kernelShape.length===2){let E=n-(g?3:2);m?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,I=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var value = ${y}(${d});
              var pad = 0;
              ${T}
              ${b}
              ${I}
              ${l}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=s.kernelShape.length,T=s.pads.length,I="";return f?I=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:I=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(p).declareVariables(t,w)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${w.offsetToIndices("global_idx")};
              var xIndices = ${w.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${d});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${te("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${te("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${n-b}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${te("uniforms.strides",`j - ${n-b}u`,b)}
                    + offsets[j - ${n-b}u] - ${te("uniforms.pads","j - 2u",T)};
                  ${I}
              }
              ${l}

              output[global_idx] = value;
            }`}},Hn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jo=e=>`${Hn(e)};${e.countIncludePad}`,rr=e=>`${Hn(e)};${e.storageOrder};${e.dilations}`,Ar=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),eu=(e,t,n,a)=>{let[s,o]=Gi(t,a,n),l=U("x",t.dataType,t.dims.length),d=l.type.value,p="value += x_val;",f="";s.countIncludePad?f+=`value /= ${d}(uniforms.kernelSize);`:f+=`value /= ${d}(i32(uniforms.kernelSize) - pad);`;let[h,m,g,y,w]=ds(o,s);h.push(...j(t.dims,o));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${g};${y};${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(o)/64)},programUniforms:h}),getShaderSource:T=>ps(T,l,t.dims.length,o.length,s,p,f,0,m,g,y,w)}},tu=e=>{let t=e.count_include_pad!==0,n=Ar(e);if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...n,cacheKey:""};return{...a,cacheKey:Jo(a)}},tp=(e,t)=>{Cr(e.inputs),e.compute(eu("AveragePool",e.inputs[0],!1,t))},ru={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},rp=e=>{let t=e.format;return{format:t,...ru,cacheKey:t}},np=(e,t)=>{Cr(e.inputs),e.compute(eu("GlobalAveragePool",e.inputs[0],!0,t))},nu=(e,t,n,a)=>{let[s,o]=Gi(t,a,n),l=`
      value = max(x_val, value);
    `,d="",p=U("x",t.dataType,t.dims.length),f=["rank"],[h,m,g,y,w]=ds(o,s);return h.push(...j(t.dims,o)),{name:e,shaderCache:{hint:`${a.cacheKey};${g};${y};${w}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(o)/64)},programUniforms:h}),getShaderSource:b=>ps(b,p,t.dims.length,o.length,s,l,d,t.dataType===10?-65504:-1e5,m,g,y,w)}},ip=(e,t)=>{Cr(e.inputs),e.compute(nu("MaxPool",e.inputs[0],!1,t))},ap=e=>{let t=e.storage_order,n=e.dilations,a=Ar(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:n,...a,cacheKey:""};return{...s,cacheKey:rr(s)}},sp=e=>{let t=e.format;return{format:t,...ru,cacheKey:t}},op=(e,t)=>{Cr(e.inputs),e.compute(nu("GlobalMaxPool",e.inputs[0],!0,t))}}),up,iu,au,su,Df=F(()=>{ue(),de(),xe(),ce(),up=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((n,a)=>n===e[2].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,o)=>o===t.axis||s===e[0].dims[o]).reduce((s,o)=>s&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let n=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/a)||t.blockSize>Math.ceil(n/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},iu=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,s=a===3,o=e[0].dims,l=e[1].dataType,d=D.size(o),p=a===3||a===2,f=p?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,m=e.length>2?e[2]:void 0,g=m?p?[Math.ceil(D.size(m.dims)/4)]:m.dims:void 0,y=h.length===0||h.length===1&&h[0]===1,w=y===!1&&h.length===1,b=He(d),T=y&&(!p||b===4),I=T?b:1,v=T&&!p?b:1,E=U("input",p?12:a,f.length,v),z=U("scale",l,h.length),A=m?U("zero_point",p?12:a,g.length):void 0,M=ee("output",l,o.length,I),B=[E,z];A&&B.push(A);let L=[f,h];m&&L.push(g);let q=[{type:12,data:d/I},{type:12,data:n},{type:12,data:t.blockSize},...j(...L,o)],K=ae=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ae.registerUniforms(Q).declareVariables(...B,M)}
      ${ae.mainStart()}
          ${ae.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${I===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${z.getByOffset("0")}`:w?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${z.getByOffset("scale_index")};`:`
            var scale_indices: ${z.type.indices} = output_indices;
            let index = ${z.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${z.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${z.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${A?y?p?`
                let zero_point_input = ${A.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${A.getByOffset("0")}`:w?p?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${A.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${A.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${z.indicesToOffset("scale_indices")};
                let zero_point_input = ${A.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${A.getByIndices("scale_indices")};`:`let zero_point_value = ${p?s?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:A?["rank","rank","rank"]:["rank","rank"]},getShaderSource:K,getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(d/I/64),y:1,z:1},programUniforms:q})}},au=(e,t)=>{up(e.inputs,t),e.compute(iu(e.inputs,t))},su=e=>Be({axis:e.axis,blockSize:e.blockSize})}),lp,dp,ou,Pf=F(()=>{dt(),ue(),ce(),lp=(e,t,n)=>{let a=e===t,s=e<t&&n<0,o=e>t&&n>0;if(a||s||o)throw new Error("Range these inputs' contents are invalid.")},dp=(e,t,n,a)=>{let s=Math.abs(Math.ceil((t-e)/n)),o=[s],l=s,d=[{type:12,data:l},{type:a,data:e},{type:a,data:n},...j(o)],p=f=>{let h=ee("output",a,o.length),m=h.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:m},{name:"delta",type:m}];return`
        ${f.registerUniforms(g).declareVariables(h)}
        ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${m}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d})}},ou=e=>{let t=0,n=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),Pe.webgpu.validateInputContent&&lp(t,n,a),e.compute(dp(t,n,a,e.inputs[0].dataType),{inputs:[]})}}),pp,fp,cp,hp,Uf=F(()=>{ue(),de(),xe(),ce(),pp=(e,t,n,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${n};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${n}));`:`
              ${s}bitcast<${a}>(oldValue) + (${n})${o}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${n}));`:`
                ${s}max(bitcast<f32>(oldValue), (${n}))${o}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${n}));`:`${s}min(bitcast<${a}>(oldValue), (${n}))${o}`;case"mul":return`${s}(bitcast<${a}>(oldValue) * (${n}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},fp=(e,t)=>{let n=e[0].dims,a=e[1].dims,s=n,o=1,l=Math.ceil(D.sizeToDimension(a,a.length-1)/o),d=a[a.length-1],p=D.sizeFromDimension(n,d),f=[{type:12,data:l},{type:12,data:d},{type:12,data:p},...j(e[1].dims,e[2].dims,s)],h=m=>{let g=U("indices",e[1].dataType,e[1].dims.length),y=U("updates",e[2].dataType,e[2].dims.length,o),w=t.reduction!=="none"&&t.reduction!==""?kt("output",e[0].dataType,s.length):ee("output",e[0].dataType,s.length,o);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,w)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${pp(t.reduction,"output[data_offset + i]","value",w.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},cp=e=>Be({reduction:e.reduction}),hp=(e,t)=>{e.compute(fp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Mt,mp,gp,uu,lu,_p,yp,wp,vp,fs,$p,bp,du,xp,Ip,Sp,Tp,Ep,kp,zp,Lf=F(()=>{ue(),de(),xe(),ce(),Mt=(e,t)=>{if(e.every(n=>n>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},mp=(e,t,n)=>{t.every(s=>s>=0&&s<n||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(n).fill(1);return t.forEach((s,o)=>a[s]=e[o]),a},gp=(e,t,n,a,s,o)=>{let[l,d,p]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],f=e[0].dims.length;if(l>0&&e.length>l&&e[l].dims.length>0)e[l].getFloat32Array().forEach(h=>o.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0){if(e[d].getFloat32Array().forEach(h=>a.push(h)),a.length!==0&&a.length!==f&&n>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Mt(a,t),t.axes.length>0&&mp(a,t.axes,f).forEach((h,m)=>a[m]=h)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(h=>s.push(Number(h))),s.length!==0&&s.length!==f&&n>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof s<"u"&&a.length>0&&s.length>f)throw new Error("Resize requires only of scales or sizes to be specified")},uu=(e,t,n,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${n}));
  let fract = ${a}(big % (${n})) / ${a}(${n});
  return whole + fract;
`,lu=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${uu("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${uu("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",_p=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",yp=(e,t,n)=>{let a=new Array(n).fill(0).concat(new Array(n).fill(1)),s=e.length===0?a:e.slice();return t.length>0?(t.forEach((o,l)=>{a[o]=s[l],a[l+n]=s[t.length+l]}),a):s},wp=(e,t,n,a)=>{let s=[];if(n.length>0)if(a.length>0){if(e.forEach(o=>s.push(o)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((o,l)=>s[o]=n[l])}else n.forEach(o=>s.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((o,l)=>Math.round(o*t[l]))}return s},vp=(e,t,n)=>{let a=(()=>{switch(n.keepAspectRatioPolicy){case"not_larger":return n.axes.length>0?Math.min(...n.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return n.axes.length>0?Math.max(...n.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return n.axes.length>0?(n.axes.forEach(o=>t[o]=a),n.axes.forEach(o=>s[o]=Math.round(e[o]*t[o]))):(t.fill(a,0,t.length),s.forEach((o,l)=>s[l]=Math.round(o*t[l]))),s},fs=(e,t,n,a,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${te("uniforms.scales","i",a)};
        var roi_low = ${te("uniforms.roi","i",s)};
        var roi_hi = ${te("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${te("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,$p=(e,t,n,a,s,o,l)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${te("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${te("uniforms.roi","i",o)};
          var roi_hi = ${te("uniforms.roi",`i + ${n.length}`,o)};
          var input_shape_i = ${te("uniforms.input_shape","i",n.length)};
          var output_shape_i = ${te("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${l} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,bp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${te("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,du=(e,t,n,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",n,"batch")};
`:"",xp=(e,t,n,a,s)=>{let[o,l,d,p]=n.length===2?[-1,0,1,-1]:[0,2,3,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",l,`max(0, min(row, ${n[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(col, ${n[d]} - 1))`)};
      ${du(e,p,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${f} = originalIndices[${l}];
      var col:${f} = originalIndices[${d}];
      ${a?`if (row < 0 || row > (${n[l]} - 1) || col < 0 || col > (${n[d]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${n[l]} - 1));
      col = max(0, min(col, ${n[d]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${f} = getInputValue(batch, channel, row1, col1);
      var x12: ${f} = getInputValue(batch, channel, row1, col2);
      var x21: ${f} = getInputValue(batch, channel, row2, col1);
      var x22: ${f} = getInputValue(batch, channel, row2, col2);
      var dx1: ${f} = abs(row - ${f}(row1));
      var dx2: ${f} = abs(${f}(row2) - row);
      var dy1: ${f} = abs(col - ${f}(col1));
      var dy2: ${f} = abs(${f}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ip=(e,t,n,a,s,o,l,d,p,f)=>{let h=n.length===2,[m,g]=h?[0,1]:[2,3],y=e.type.value,w=b=>{let T=b===m?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[b]},
        ${a[b]}, ${n[b]}, ${o[b]}, ${o[b]} + ${n.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${d} && (originalIdx < 0 || originalIdx > (${n[b]} - 1))) {
          return ${p};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${y} = originalIdx + ${y}(i);
          if (${T} < 0 || ${T} >= ${n[b]}) {
            ${f?`coefs[i + 1] = 0.0;
                        continue;`:d?`return ${p};`:`${T} = max(0, min(${T}, ${n[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${T})`)};
          data[i + 1] = ${b===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(m)};
    ${w(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${l} * onePlusAbsS - 5 * ${l}) * onePlusAbsS + 8 * ${l}) * onePlusAbsS - 4 * ${l};
    coeffs[1] = ((${l} + 2) * absS - (${l} + 3)) * absS * absS + 1;
    coeffs[2] = ((${l} + 2) * oneMinusAbsS - (${l} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${l} * twoMinusAbsS - 5 * ${l}) * twoMinusAbsS + 8 * ${l}) * twoMinusAbsS - 4 * ${l};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Sp=(e,t,n,a,s)=>{let[o,l,d,p,f]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",l,`max(0, min(depth, ${n[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(height, ${n[d]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${n[p]} - 1))`)};
      ${du(e,f,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${l}];
      var height:${h} = originalIndices[${d}];
      var width:${h} = originalIndices[${p}];
      ${a?`if (depth < 0 || depth > (${n[l]} - 1) || height < 0 || height > (${n[d]} - 1) || width < 0 || (width > ${n[p]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${n[l]} - 1));
      height = max(0, min(height, ${n[d]} - 1));
      width = max(0, min(width, ${n[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${f}])`:"0"};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Tp=(e,t,n,a,s,o)=>{let l=e.dims,d=yp(o,t.axes,l.length),p=wp(l,a,s,t.axes),f=a.slice();a.length===0&&(f=l.map((v,E)=>v===0?1:p[E]/v),t.keepAspectRatioPolicy!=="stretch"&&(p=vp(l,f,t)));let h=ee("output",e.dataType,p.length),m=U("input",e.dataType,l.length),g=D.size(p),y=l.length===p.length&&l.every((v,E)=>v===p[E]),w=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,T=m.type.value,I=v=>`
      ${y?"":`
      ${lu(t.coordinateTransformMode,T)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${bp(m,l)};
              ${_p(t.nearestMode,n,T)};
              ${$p(m,h,l,p,f.length,d.length,w)};
              `;case"linear":return`
              ${fs(h,l,p,f.length,d.length)};
              ${(()=>{if(l.length===2||l.length===4)return`${xp(m,h,l,w,b)}`;if(l.length===3||l.length===5)return`${Sp(m,h,l,w,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(l.length===2||l.length===4)return`${Ip(m,h,l,p,f,d,t.cubicCoeffA,w,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",f.length).registerUniform("roi","f32",d.length).declareVariables(m,h)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${m.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${m.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${l.length===2||l.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${n}|${f.length>0?t.mode==="cubic"?f:f.length:""}|${s.length>0?s:""}|${d.length>0?d:""}|${y}|${t.mode==="nearest"?l.length:l}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:f},{type:1,data:d},...j(l,p)]})}},Ep=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},kp=(e,t)=>{let n=[],a=[],s=[],o=Ep(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");gp(e.inputs,t,o,n,a,s),e.compute(Tp(e.inputs[0],t,o,n,a,s),{inputs:[0]})},zp=e=>{let t=e.antialias,n=e.axes,a=e.coordinateTransformMode,s=e.cubicCoeffA,o=e.excludeOutside!==0,l=e.extrapolationValue,d=e.keepAspectRatioPolicy,p=e.mode,f=e.nearestMode===""?"simple":e.nearestMode;return Be({antialias:t,axes:n,coordinateTransformMode:a,cubicCoeffA:s,excludeOutside:o,extrapolationValue:l,keepAspectRatioPolicy:d,mode:p,nearestMode:f})}}),Cp,Ap,Op,Nf=F(()=>{ue(),de(),ce(),Cp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],n=e[1],a=e[2];if(t.dataType!==n.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(n.dims.length!==3&&n.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(n.dims[n.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let l=e[3];if(l.dims.length!==1)throw new Error("Beta must be 1D");if(l.dims[l.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let l=e[4];if(l.dims.length!==1)throw new Error("Bias must be 1D");if(l.dims[l.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},Ap=(e,t,n,a)=>{let s=t.simplified,o=e[0].dims,l=D.size(o),d=o,p=l,f=o.slice(-1)[0],h=a?o.slice(0,-1).concat(1):[],m=!s&&e.length>3,g=e.length>4,y=a&&n>1,w=a&&n>2,b=n>3,T=64,I=He(f),v=[{type:12,data:p},{type:12,data:I},{type:12,data:f},{type:1,data:t.epsilon}],E=A=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],B=[U("x",e[0].dataType,e[0].dims,I),U("skip",e[1].dataType,e[1].dims,I),U("gamma",e[2].dataType,e[2].dims,I)];m&&B.push(U("beta",e[3].dataType,e[3].dims,I)),g&&B.push(U("bias",e[4].dataType,e[4].dims,I)),B.push(ee("output",e[0].dataType,d,I)),y&&B.push(ee("mean_output",1,h)),w&&B.push(ee("inv_std_output",1,h)),b&&B.push(ee("input_skip_bias_sum",e[0].dataType,d,I));let L=Je(e[0].dataType),q=Je(1,I);return`

      ${A.registerUniforms(M).declareVariables(...B)}
      var<workgroup> sum_shared : array<${q}, ${T}>;
      var<workgroup> sum_squared_shared : array<${q}, ${T}>;

      ${A.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":L+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${sn(L,I,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${yr("sum",I)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${yr("square_sum",I)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${w?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${L}(mean)`}) *
            ${L}(inv_std_dev) * gamma[offset1d + i]
            ${m?"+ beta[offset1d + i]":""};
        }
      }`},z=[{dims:d,dataType:e[0].dataType}];return n>1&&z.push({dims:h,dataType:1}),n>2&&z.push({dims:h,dataType:1}),n>3&&z.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${I};${y};${w};${b}`,inputDependencies:e.map((A,M)=>"type")},getShaderSource:E,getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(p/f)},programUniforms:v})}},Op=(e,t)=>{Cp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Ap(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Rp,Vi,Bp,pu,Mp,cs,fu,Dp,qf=F(()=>{ue(),de(),xe(),ce(),Rp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((n,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},Vi=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>n.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>n.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return n},Bp=(e,t)=>{if(e.length>1){let n=Vi(e,1),a=Vi(e,2),s=Vi(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),Be({starts:n,ends:a,axes:s})}else return t},pu=(e,t,n,a,s)=>{let o=e;return e<0&&(o+=n[a[t]]),s[t]<0?Math.max(0,Math.min(o,n[a[t]]-1)):Math.max(0,Math.min(o,n[a[t]]))},Mp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${te("uniforms.input_shape","i",n.length)};
            let steps_i = ${te("uniforms.steps","i",n.length)};
            let signs_i = ${te("uniforms.signs","i",n.length)};
            let starts_i = ${te("uniforms.starts","i",n.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,cs=(e,t)=>{let n=e[0].dims,a=D.size(n),s=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],o=Vi(e,4);o.forEach(I=>I!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(s.length).fill(1));let l=t.starts.map((I,v)=>pu(I,v,n,s,o)),d=t.ends.map((I,v)=>pu(I,v,n,s,o));if(s.length!==l.length||s.length!==d.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==n.length)for(let I=0;I<n.length;++I)s.includes(I)||(l.splice(I,0,0),d.splice(I,0,n[I]),o.splice(I,0,1));let p=o.map(I=>Math.sign(I));o.forEach((I,v,E)=>{if(I<0){let z=(d[v]-l[v])/I,A=l[v],M=A+z*o[v];l[v]=M,d[v]=A,E[v]=-I}});let f=n.slice(0);s.forEach((I,v)=>{f[I]=Math.ceil((d[I]-l[I])/o[I])});let h={dims:f,dataType:e[0].dataType},m=ee("output",e[0].dataType,f.length),g=U("input",e[0].dataType,e[0].dims.length),y=D.size(f),w=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:l.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:o.length}],b=[{type:12,data:y},{type:12,data:l},{type:6,data:p},{type:12,data:o},...j(e[0].dims,f)],T=I=>`
      ${I.registerUniforms(w).declareVariables(g,m)}
        ${Mp(g,m,n)}
        ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${m.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${m.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${l.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},fu=(e,t)=>{Rp(e.inputs,t);let n=Bp(e.inputs,t);e.compute(cs(e.inputs,n),{inputs:[0]})},Dp=e=>{let t=e.starts,n=e.ends,a=e.axes;return Be({starts:t,ends:n,axes:a})}}),Pp,Up,Lp,Np,Wf=F(()=>{ue(),de(),xe(),$r(),ce(),Pp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Up=(e,t)=>{let n=e.inputs[0],a=n.dims,s=D.size(a),o=a.length,l=D.normalizeAxis(t.axis,o),d=l<a.length-1,p,f=[];d?(f=Array.from({length:o},(B,L)=>L),f[l]=o-1,f[o-1]=l,p=e.compute(zt(n,f),{inputs:[n],outputs:[-1]})[0]):p=n;let h=p.dims,m=h[o-1],g=s/m,y=He(m),w=m/y,b=64;g===1&&(b=256);let T=(B,L)=>L===4?`max(max(${B}.x, ${B}.y), max(${B}.z, ${B}.w))`:L===2?`max(${B}.x, ${B}.y)`:L===3?`max(max(${B}.x, ${B}.y), ${B}.z)`:B,I=U("x",p.dataType,p.dims,y),v=ee("result",p.dataType,p.dims,y),E=I.type.value,z=Je(p.dataType)==="f32"?`var threadMax = ${E}(-3.402823e+38f);`:`var threadMax = ${E}(-65504.0h);`,A=B=>`
      var<workgroup> rowMaxShared : ${E};
      var<workgroup> rowSumShared : ${E};
      var<workgroup> threadShared : array<${E}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${E} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${E}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${B.registerUniform("packedCols","i32").declareVariables(I,v)}
      ${B.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${z}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${E}(${T("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${E}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${E}(${yr("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:p.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:w}]}),getShaderSource:A},{inputs:[p],outputs:[d?-1:0]})[0];d&&e.compute(zt(M,f),{inputs:[M]})},Lp=(e,t)=>{Pp(e.inputs),Up(e,t)},Np=e=>Be({axis:e.axis})}),cu,hu,qp,Fi,Wp,Gf=F(()=>{ue(),de(),ce(),cu=e=>Array.from(e.getBigInt64Array(),Number),hu=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(cu(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},qp=(e,t)=>{let n=[];for(let a=0;a<e.length;++a)n.push(e[a]*t[a]);return n},Fi=(e,t)=>{let n=e[0].dims,a=t??cu(e[1]),s=qp(n,a),o=D.size(s),l=e[0].dataType,d=U("input",l,n.length),p=ee("output",l,s.length),f=h=>`
      const inputShape = ${d.indices(...n)};
      ${h.registerUniform("output_size","u32").declareVariables(d,p)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${d.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${d.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${d.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",d.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...j(e[0].dims,s)]}),getShaderSource:f}},Wp=e=>{hu(e.inputs),e.compute(Fi(e.inputs),{inputs:[0]})}}),Gp,Vp,Fp,Vf=F(()=>{ue(),de(),ce(),Gp=(e,t,n,a,s)=>{let o=ee("output_data",s,n.length,4),l=U("a_data",t[1].dataType,t[1].dims.length,4),d=U("b_data",t[2].dataType,t[2].dims.length,4),p=U("c_data",t[0].dataType,t[0].dims.length,4),f,h=(m,g,y)=>`select(${g}, ${m}, ${y})`;if(!a)f=o.setByOffset("global_idx",h(l.getByOffset("global_idx"),d.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let m=(g,y,w="")=>{let b=`a_data[index_a${y}][component_a${y}]`,T=`b_data[index_b${y}][component_b${y}]`,I=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${o.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,o)};
            let offset_b${y} = ${d.broadcastedIndicesToOffset(`output_indices${y}`,o)};
            let offset_c${y} = ${p.broadcastedIndicesToOffset(`output_indices${y}`,o)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${w}(${h(b,T,I)});
          `};s===9?f=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:f=`
            ${m("output_data[global_idx]",0)}
            ${m("output_data[global_idx]",1)}
            ${m("output_data[global_idx]",2)}
            ${m("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,l,d,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${f}
      }`},Vp=e=>{let t=e[1].dims,n=e[2].dims,a=e[0].dims,s=e[1].dataType,o=!(D.areEqual(t,n)&&D.areEqual(n,a)),l=t,d=D.size(t);if(o){let f=an.calcShape(an.calcShape(t,n,!1),a,!1);if(!f)throw new Error("Can't perform where op on the given tensors");l=f,d=D.size(l)}let p=Math.ceil(d/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:f=>Gp(f,e,l,o,s),getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:p},...j(a,t,n,l)]})}},Fp=e=>{e.compute(Vp(e.inputs))}}),Hp,Ff=F(()=>{Ma(),lo(),Da(),bl(),kf(),hn(),zf(),Af(),gd(),yd(),ko(),ja(),Oo(),Sd(),Kr(),Ed(),Ad(),It(),Wn(),Of(),Nd(),Rf(),Bf(),jo(),Zd(),Go(),ep(),Mf(),Df(),Pf(),Uf(),Qe(),Lf(),pe(),Nf(),qf(),Wf(),is(),Gf(),$r(),Sr(),Vf(),Hp=new Map([["Abs",[On]],["Acos",[Nr]],["Acosh",[vi]],["Add",[Gl]],["ArgMax",[yl,bt]],["ArgMin",[Ba,bt]],["Asin",[xl]],["Asinh",[Il]],["Atan",[Sl]],["Atanh",[$i]],["Attention",[gi]],["AveragePool",[tp,tu]],["BatchNormalization",[Ir]],["BiasAdd",[fo]],["BiasSplitGelu",[ql]],["Cast",[Pa,bi]],["Ceil",[El]],["Clip",[co]],["Concat",[td,rd]],["Conv",[bo,Ga]],["ConvTranspose",[Io,Ha]],["Cos",[kl]],["Cosh",[et]],["CumSum",[_d,So]],["DepthToSpace",[Ka,Eo]],["DequantizeLinear",[au,su]],["Div",[Vl]],["Einsum",[Bt,Id]],["Elu",[zl,tt]],["Equal",[Fl]],["Erf",[ho]],["Exp",[Cl]],["Expand",[Er]],["FastGelu",[Mi]],["Floor",[La]],["FusedConv",[bo,Ga]],["Gather",[es,Ja]],["GatherElements",[Uo,Po]],["GatherBlockQuantized",[zd,Cd]],["GatherND",[kr,Mo]],["Gelu",[Rn]],["Gemm",[Di,Bd]],["GlobalAveragePool",[np,rp]],["GlobalMaxPool",[op,sp]],["Greater",[Zl]],["GreaterOrEqual",[Xl]],["GridSample",[rs,Li]],["GroupQueryAttention",[os]],["HardSigmoid",[Ol,Al]],["InstanceNormalization",[Ko]],["LayerNormalization",[Vd]],["LeakyRelu",[Na,tt]],["Less",[jl]],["LessOrEqual",[Ql]],["Log",[Ee]],["MatMul",[mt]],["MatMulNBits",[Kd,Fn]],["MaxPool",[ip,ap]],["Mul",[Hl]],["MultiHeadAttention",[fr,Wo]],["Neg",[Bn]],["Not",[pn]],["Pad",[ls]],["Pow",[dr]],["QuickGelu",[Ul,tt]],["Range",[ou]],["Reciprocal",[Mn]],["ReduceMin",[N]],["ReduceMean",[ml]],["ReduceMax",[O]],["ReduceSum",[Y]],["ReduceProd",[P]],["ReduceL1",[gl]],["ReduceL2",[_l]],["ReduceLogSum",[De]],["ReduceLogSumExp",[dn]],["ReduceSumSquare",[we]],["Relu",[xi]],["Resize",[kp,zp]],["RotaryEmbedding",[bn]],["ScatterND",[hp,cp]],["Sigmoid",[fn]],["Sin",[Rl]],["Sinh",[Bl]],["Slice",[fu,Dp]],["SkipLayerNormalization",[Op]],["Split",[cr,ns]],["Sqrt",[Ml]],["Softmax",[Lp,Np]],["Sub",[Kl]],["Tan",[Ii]],["Tanh",[mo]],["ThresholdedRelu",[Ot,tt]],["Tile",[Wp]],["Transpose",[nl,il]],["Where",[Fp]]])}),Kp,Hf=F(()=>{dt(),_r(),ce(),Kp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,a,s){Xe(e.programInfo.name);let o=this.backend.device,l=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let d=[];for(let f of t)d.push({binding:d.length,resource:{buffer:f.buffer}});for(let f of n)d.push({binding:d.length,resource:{buffer:f.buffer}});s&&d.push({binding:d.length,resource:s});let p=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:d,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let f={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(f)}l.setPipeline(e.computePipeline),l.setBindGroup(0,p),l.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ft(e.programInfo.name)}dispose(){}build(e,t){Xe(e.name);let n=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(f=>{n.features.has(f.feature)&&a.push(`enable ${f.extension};`)});let s=wr(t,this.backend.device.limits),o=e.getShaderSource(s),l=`${a.join(`
`)}
${s.additionalImplementations}
${o}`,d=n.createShaderModule({code:l,label:e.name});Se("verbose",()=>`[WebGPU] ${e.name} shader code: ${l}`);let p=n.createComputePipeline({compute:{module:d,entryPoint:"main"},layout:"auto",label:e.name});return ft(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&n<=s&&a<=s)return[t,n,a];let o=t*n*a,l=Math.ceil(Math.sqrt(o));if(l>s){if(l=Math.ceil(Math.cbrt(o)),l>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[l,l,l]}else return[l,l,1]}}}),Zp={};Le(Zp,{WebGpuBackend:()=>Yp});var jp,Xp,Qp,Yp,Kf=F(()=>{dt(),ue(),_r(),qs(),Tf(),Ff(),Hf(),jp=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let a=0;a<e.length;++a){let s=e[a].dataType;switch(t[a]){case"none":{n.push("");break}case"type":{n.push(`${s}`);break}case"rank":{let o=e[a].dims.length;n.push(`${s};${o}`);break}case"dims":{let o=e[a].dims.join(",");n.push(`${s};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return n.join("|")},Xp=(e,t,n)=>{var s,o;let a=e.name;return(s=e.shaderCache)!=null&&s.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+n+`:${jp(t,((o=e.shaderCache)==null?void 0:o.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Qp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Yp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},s=o=>t.features.has(o)&&n.push(o)&&!0;s("chromium-experimental-timestamp-query-inside-passes")||s("timestamp-query"),s("shader-f16"),s("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new Qp(t.info||await t.requestAdapterInfo()),this.gpuDataManager=tl(this),this.programManager=new Kp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ha(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Xe(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let s=0;s<t.length/2;s++){let o=n[s],l=o.kernelId,d=this.kernels.get(l),p=d.kernelType,f=d.kernelName,h=o.programName,m=o.inputTensorViews,g=o.outputTensorViews,y=t[s*2],w=t[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),T=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(I=>({dims:I.dims,dataType:gr(I.dataType)})),outputsMetadata:g.map(I=>({dims:I.dims,dataType:gr(I.dataType)})),kernelId:l,kernelType:p,kernelName:f,programName:h,startTime:b,endTime:T});else{let I="";m.forEach((E,z)=>{I+=`input[${z}]: [${E.dims}] | ${gr(E.dataType)}, `});let v="";g.forEach((E,z)=>{v+=`output[${z}]: [${E.dims}] | ${gr(E.dataType)}, `}),console.log(`[profiling] kernel "${l}|${p}|${f}|${h}" ${I}${v}start time: ${b} ns, execution time: ${T-b} ns`)}Pr("GPU",`${h}::${y}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),ft()}run(e,t,n,a,s,o){Xe(e.name);let l=[];for(let v=0;v<t.length;++v){let E=t[v].data;if(E===0)continue;let z=this.gpuDataManager.get(E);if(!z)throw new Error(`no GPU data for input: ${E}`);l.push(z)}let{outputs:d,dispatchGroup:p,programUniforms:f}=e.getRunData(t),h=n.length===0?d.map((v,E)=>E):n;if(h.length!==d.length)throw new Error(`Output size ${h.length} must be equal to ${d.length}.`);let m=[],g=[];for(let v=0;v<d.length;++v){if(!Number.isInteger(h[v])||h[v]<-3||h[v]>=o)throw new Error(`Invalid output index: ${h[v]}`);if(h[v]===-3)continue;let E=h[v]===-1,z=h[v]===-2,A=E||z?s(d[v].dataType,d[v].dims):a(h[v],d[v].dataType,d[v].dims);if(m.push(A),A.data===0)continue;let M=this.gpuDataManager.get(A.data);if(!M)throw new Error(`no GPU data for output: ${A.data}`);if(E&&this.temporaryData.push(M),z){let B=this.kernelPersistentData.get(this.currentKernelId);B||(B=[],this.kernelPersistentData.set(this.currentKernelId,B)),B.push(M)}g.push(M)}if(l.length!==t.length||g.length!==m.length){if(g.length===0)return ft(e.name),m;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(f){let v=0,E=[];f.forEach(B=>{let L=typeof B.data=="number"?[B.data]:B.data;if(L.length===0)return;let q=B.type===10?2:4,K,ae;B.type===10?(ae=L.length>4?16:L.length>2?8:L.length*q,K=L.length>4?16:q*L.length):(ae=L.length<=2?L.length*q:16,K=16),v=Math.ceil(v/ae)*ae,E.push(v);let Q=B.type===10?8:4;v+=L.length>4?Math.ceil(L.length/Q)*K:L.length*q});let z=16;v=Math.ceil(v/z)*z;let A=new ArrayBuffer(v);f.forEach((B,L)=>{let q=E[L],K=typeof B.data=="number"?[B.data]:B.data;if(B.type===6)new Int32Array(A,q,K.length).set(K);else if(B.type===12)new Uint32Array(A,q,K.length).set(K);else if(B.type===10)new Uint16Array(A,q,K.length).set(K);else if(B.type===1)new Float32Array(A,q,K.length).set(K);else throw new Error(`Unsupported uniform type: ${gr(B.type)}`)});let M=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,A,0,v),this.gpuDataManager.release(M.id),y={offset:0,size:v,buffer:M.buffer}}let w=this.programManager.normalizeDispatchGroupSize(p),b=w[1]===1&&w[2]===1,T=Xp(e,t,b),I=this.programManager.getArtifact(T);if(I||(I=this.programManager.build(e,w),this.programManager.setArtifact(T,I),Se("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),f&&I.uniformVariablesInfo){if(f.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${f.length} in program "${I.programInfo.name}".`);for(let v=0;v<f.length;v++){let E=f[v],z=E.type,A=typeof E.data=="number"?1:E.data.length,[M,B]=I.uniformVariablesInfo[v];if(z!==M||A!==B)throw new Error(`Uniform variable ${v} mismatch: expect type ${M} with size ${B}, got type ${z} with size ${A} in program "${I.programInfo.name}".`)}}if(Se("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${w[0]}x${w[1]}x${w[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:t,outputTensorViews:m};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run(I,l,g,w,y),ft(e.name),m}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,a){let s=Hp.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:a,kernelEntry:s[0],attributes:[s[1],n]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let s=a.kernelType,o=a.kernelName,l=a.kernelEntry,d=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,d[0]&&(d[1]=d[0](d[1]),d[0]=void 0),Se("info",()=>`[WebGPU] Start to run kernel "[${s}] ${o}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),l(t,d[1]),0}catch(f){return n.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${o}" failed. ${f}`)),1}finally{p&&n.push(this.device.popErrorScope().then(f=>f?`GPU validation error for kernel "[${s}] ${o}": ${f.message}`:null));for(let f of this.temporaryData)this.gpuDataManager.release(f.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,a){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let o=s.get(t),l=this.gpuDataManager.registerExternalBuffer(n,a,o);return s.set(t,[l,n]),l}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let a=await js(this,e,t);return ya(a.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Se("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Se("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Se("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let a=0;a<n;a++){let s=this.getComputePassEncoder(),o=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(o.computePipeline),s.setBindGroup(0,o.bindGroup),s.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),mu={};Le(mu,{init:()=>ef});var Hi,Jp,ef,Zf=F(()=>{ue(),_r(),de(),Sf(),Hi=class Tc{constructor(t,n,a,s){this.module=t,this.dataType=n,this.data=a,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=D.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(D.size(t)!==D.size(this.dims))throw new Error("Invalid new shape");return new Tc(this.module,this.dataType,this.data,t)}},Jp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,s=n/e.PTR_SIZE,o=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*s++,o));let l=Number(e.getValue(a*s++,o));this.outputCount=Number(e.getValue(a*s++,o)),this.customDataOffset=Number(e.getValue(a*s++,"*")),this.customDataSize=Number(e.getValue(a*s++,o));let d=[];for(let p=0;p<l;p++){let f=Number(e.getValue(a*s++,o)),h=Number(e.getValue(a*s++,"*")),m=Number(e.getValue(a*s++,o)),g=[];for(let y=0;y<m;y++)g.push(Number(e.getValue(a*s++,o)));d.push(new Hi(e,f,h,g))}this.inputs=d}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var l;let n=((l=t==null?void 0:t.inputs)==null?void 0:l.map(d=>typeof d=="number"?this.inputs[d]:d))??this.inputs,a=(t==null?void 0:t.outputs)??[],s=(d,p,f)=>new Hi(this.module,p,this.output(d,f),f),o=(d,p)=>{let f=nn(d,p);if(!f)throw new Error(`Unsupported data type: ${d}`);let h=f>0?this.backend.gpuDataManager.create(f).id:0;return new Hi(this.module,d,h,p)};return this.backend.run(e,n,a,s,o,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let a=this.module.PTR_SIZE,s=a===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*a);this.module.setValue(o,t.length,s);for(let l=0;l<t.length;l++)this.module.setValue(o+a*(l+1),t[l],s);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(n)}}},ef=async(e,t,n,a)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=(Kf(),je(Zp)).WebGpuBackend,l=new o;await l.initialize(n,a),s("webgpu",[l,d=>l.alloc(Number(d)),d=>l.free(d),(d,p,f,h=!1)=>{if(h)Se("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(d)}, dst=${Number(p)}, size=${Number(f)}`),l.memcpy(Number(d),Number(p));else{Se("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(d)}, gpuDataId=${Number(p)}, size=${Number(f)}`);let m=t.HEAPU8.subarray(Number(d>>>0),Number(d>>>0)+Number(f));l.upload(Number(p),m)}},async(d,p,f)=>{Se("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${d}, dataOffset=${p}, size=${f}`),await l.download(Number(d),()=>t.HEAPU8.subarray(Number(p)>>>0,Number(p+f)>>>0))},(d,p,f)=>l.createKernel(d,Number(p),f,t.UTF8ToString(t._JsepGetNodeName(Number(p)))),d=>l.releaseKernel(d),(d,p,f,h)=>{Se("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${f}, kernel=${d}, contextDataOffset=${p}`);let m=new Jp(t,l,Number(p));return l.computeKernel(Number(d),m,h)},()=>l.captureBegin(),()=>l.captureEnd(),()=>l.replay()])}else{let o=new Yu(n);s("webnn",[o,()=>o.reserveTensorId(),l=>o.releaseTensorId(l),async(l,d,p,f,h)=>o.ensureTensor(l,d,p,f,h),(l,d)=>{o.uploadTensor(l,d)},async(l,d)=>o.downloadTensor(l,d),(l,d)=>o.registerMLContext(l,d),!!n.trace])}}}),tf,Kn,gu,jr,rf,_u,hs,yu,wu,vu,$u,bu,xu,Ki=F(()=>{dt(),xf(),pa(),ue(),tn(),da(),Ds(),tf=(e,t)=>{We()._OrtInit(e,t)!==0&&Ue("Can't initialize onnxruntime.")},Kn=async e=>{tf(e.wasm.numThreads,ui(e.logLevel))},gu=async(e,t)=>{var a,s;(s=(a=We()).asyncInit)==null||s.call(a);let n=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(n){if(typeof n.limits!="object"||typeof n.features!="object"||typeof n.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let l=e.webgpu.forceFallbackAdapter;if(l!==void 0&&typeof l!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${l}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:l}),!n)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let o=(Zf(),je(mu)).init;t==="webgpu"&&await o("webgpu",We(),e,n),t==="webnn"&&await o("webnn",We(),e)}},jr=new Map,rf=e=>{let t=We(),n=t.stackSave();try{let a=t.PTR_SIZE,s=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,s,s+a)!==0&&Ue("Can't get session input/output count.");let o=a===4?"i32":"i64";return[Number(t.getValue(s,o)),Number(t.getValue(s+a,o))]}finally{t.stackRestore(n)}},_u=(e,t)=>{let n=We(),a=n.stackSave(),s=0;try{let o=n.PTR_SIZE,l=n.stackAlloc(2*o);n._OrtGetInputOutputMetadata(e,t,l,l+o)!==0&&Ue("Can't get session input/output metadata.");let d=Number(n.getValue(l,"*"));s=Number(n.getValue(l+o,"*"));let p=n.HEAP32[s/4];if(p===0)return[d,0];let f=n.HEAPU32[s/4+1],h=[];for(let m=0;m<f;m++){let g=Number(n.getValue(s+8+m*o,"*"));h.push(g!==0?n.UTF8ToString(g):Number(n.getValue(s+8+(m+f)*o,"*")))}return[d,p,h]}finally{n.stackRestore(a),s!==0&&n._OrtFree(s)}},hs=e=>{let t=We(),n=t._malloc(e.byteLength);if(n===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},yu=async(e,t)=>{var m,g,y,w;let n,a,s=We();Array.isArray(e)?[n,a]=e:e.buffer===s.HEAPU8.buffer?[n,a]=[e.byteOffset,e.byteLength]:[n,a]=hs(e);let o=0,l=0,d=0,p=[],f=[],h=[];try{if([l,p]=await Ku(t),(t==null?void 0:t.externalData)&&s.mountExternalData){let L=[];for(let q of t.externalData){let K=typeof q=="string"?q:q.path;L.push(Ms(typeof q=="string"?q:q.data).then(ae=>{s.mountExternalData(K,ae)}))}await Promise.all(L)}for(let L of(t==null?void 0:t.executionProviders)??[])if((typeof L=="string"?L:L.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof L!="string"){let q=L,K=q==null?void 0:q.context,ae=q==null?void 0:q.gpuDevice,Q=q==null?void 0:q.deviceType,ne=q==null?void 0:q.powerPreference;K?s.currentContext=K:ae?s.currentContext=await s.webnnCreateMLContext(ae):s.currentContext=await s.webnnCreateMLContext({deviceType:Q,powerPreference:ne})}else s.currentContext=await s.webnnCreateMLContext();break}o=await s._OrtCreateSession(n,a,l),(m=s.webgpuOnCreateSession)==null||m.call(s,o),o===0&&Ue("Can't create a session."),(g=s.jsepOnCreateSession)==null||g.call(s),s.currentContext&&(s.webnnRegisterMLContext(o,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[b,T]=rf(o),I=!!(t!=null&&t.enableGraphCapture),v=[],E=[],z=[],A=[],M=[];for(let L=0;L<b;L++){let[q,K,ae]=_u(o,L);q===0&&Ue("Can't get an input name."),f.push(q);let Q=s.UTF8ToString(q);v.push(Q),z.push(K===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:gr(K),shape:ae})}for(let L=0;L<T;L++){let[q,K,ae]=_u(o,L+b);q===0&&Ue("Can't get an output name."),h.push(q);let Q=s.UTF8ToString(q);E.push(Q),A.push(K===0?{name:Q,isTensor:!1}:{name:Q,isTensor:!0,type:gr(K),shape:ae});{if(I&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let ne=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[Q])??"cpu",ke=s.webnnIsGraphOutput;if(ne==="cpu"&&ke&&ke(o,Q)){M.push("ml-tensor-cpu-output");continue}if(ne!=="cpu"&&ne!=="cpu-pinned"&&ne!=="gpu-buffer"&&ne!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ne}.`);if(I&&ne!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ne}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(ne)}}let B=null;return M.some(L=>L==="gpu-buffer"||L==="ml-tensor"||L==="ml-tensor-cpu-output")&&(d=s._OrtCreateBinding(o),d===0&&Ue("Can't create IO binding."),B={handle:d,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map(L=>L==="ml-tensor-cpu-output"?"ml-tensor":L).map(L=>Bs(L))}),jr.set(o,[o,f,h,B,I,!1]),[o,v,E,z,A]}catch(b){throw f.forEach(T=>s._OrtFree(T)),h.forEach(T=>s._OrtFree(T)),d!==0&&s._OrtReleaseBinding(d)!==0&&Ue("Can't release IO binding."),o!==0&&s._OrtReleaseSession(o)!==0&&Ue("Can't release session."),b}finally{s._free(n),l!==0&&s._OrtReleaseSessionOptions(l)!==0&&Ue("Can't release session options."),p.forEach(b=>s._free(b)),(w=s.unmountExternalData)==null||w.call(s)}},wu=e=>{var p,f,h;let t=We(),n=jr.get(e);if(!n)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,s,o,l,d]=n;l&&(d&&t._OrtClearBoundOutputs(l.handle)!==0&&Ue("Can't clear bound outputs."),t._OrtReleaseBinding(l.handle)!==0&&Ue("Can't release IO binding.")),(p=t.jsepOnReleaseSession)==null||p.call(t,e),(f=t.webnnOnReleaseSession)==null||f.call(t,e),(h=t.webgpuOnReleaseSession)==null||h.call(t,e),s.forEach(m=>t._OrtFree(m)),o.forEach(m=>t._OrtFree(m)),t._OrtReleaseSession(a)!==0&&Ue("Can't release session."),jr.delete(e)},vu=async(e,t,n,a,s,o,l=!1)=>{if(!e){t.push(0);return}let d=We(),p=d.PTR_SIZE,f=e[0],h=e[1],m=e[3],g=m,y,w;if(f==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let I=e[2].gpuBuffer;w=nn(rn(f),h);{let v=d.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(a,o,I,w)}}else if(m==="ml-tensor"){let I=e[2].mlTensor;w=nn(rn(f),h);let v=d.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(a,I,rn(f),h)}else{let I=e[2];if(Array.isArray(I)){w=p*I.length,y=d._malloc(w),n.push(y);for(let v=0;v<I.length;v++){if(typeof I[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);d.setValue(y+v*p,Zt(I[v],n),"*")}}else{let v=d.webnnIsGraphInput,E=d.webnnIsGraphOutput;if(f!=="string"&&v&&E){let z=d.UTF8ToString(s);if(v(a,z)||E(a,z)){let A=rn(f);w=nn(A,h),g="ml-tensor";let M=d.webnnCreateTemporaryTensor,B=d.webnnUploadTensor;if(!M||!B)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let L=await M(a,A,h);B(L,new Uint8Array(I.buffer,I.byteOffset,I.byteLength)),y=L}else w=I.byteLength,y=d._malloc(w),n.push(y),d.HEAPU8.set(new Uint8Array(I.buffer,I.byteOffset,w),y)}else w=I.byteLength,y=d._malloc(w),n.push(y),d.HEAPU8.set(new Uint8Array(I.buffer,I.byteOffset,w),y)}}let b=d.stackSave(),T=d.stackAlloc(4*h.length);try{h.forEach((v,E)=>d.setValue(T+E*p,v,p===4?"i32":"i64"));let I=d._OrtCreateTensor(rn(f),y,w,T,h.length,Bs(g));I===0&&Ue(`Can't create tensor for input/output. session=${a}, index=${o}.`),t.push(I)}finally{d.stackRestore(b)}},$u=async(e,t,n,a,s,o)=>{var ae,Q,ne,ke;let l=We(),d=l.PTR_SIZE,p=jr.get(e);if(!p)throw new Error(`cannot run inference. invalid session id: ${e}`);let f=p[0],h=p[1],m=p[2],g=p[3],y=p[4],w=p[5],b=t.length,T=a.length,I=0,v=[],E=[],z=[],A=[],M=l.stackSave(),B=l.stackAlloc(b*d),L=l.stackAlloc(b*d),q=l.stackAlloc(T*d),K=l.stackAlloc(T*d);try{[I,v]=Gu(o),Ur("wasm prepareInputOutputTensor");for(let J=0;J<b;J++)await vu(n[J],E,A,e,h[t[J]],t[J],y);for(let J=0;J<T;J++)await vu(s[J],z,A,e,m[a[J]],b+a[J],y);ct("wasm prepareInputOutputTensor");for(let J=0;J<b;J++)l.setValue(B+J*d,E[J],"*"),l.setValue(L+J*d,h[t[J]],"*");for(let J=0;J<T;J++)l.setValue(q+J*d,z[J],"*"),l.setValue(K+J*d,m[a[J]],"*");if(g&&!w){let{handle:J,outputPreferredLocations:le,outputPreferredLocationsEncoded:pt}=g;if(h.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${h.length}).`);Ur("wasm bindInputsOutputs");for(let W=0;W<b;W++){let Z=t[W];await l._OrtBindInput(J,h[Z],E[W])!==0&&Ue(`Can't bind input[${W}] for session=${e}.`)}for(let W=0;W<T;W++){let Z=a[W];(ae=s[W])!=null&&ae[3]?l._OrtBindOutput(J,m[Z],z[W],0)!==0&&Ue(`Can't bind pre-allocated output[${W}] for session=${e}.`):l._OrtBindOutput(J,m[Z],0,pt[Z])!==0&&Ue(`Can't bind output[${W}] to ${le[W]} for session=${e}.`)}ct("wasm bindInputsOutputs"),jr.set(e,[f,h,m,g,y,!0])}(Q=l.jsepOnRunStart)==null||Q.call(l,f),(ne=l.webnnOnRunStart)==null||ne.call(l,f);let _e;g?_e=await l._OrtRunWithBinding(f,g.handle,T,q,I):_e=await l._OrtRun(f,L,B,b,K,T,q,I),_e!==0&&Ue("failed to call OrtRun().");let re=[],oe=[];Ur("wasm ProcessOutputTensor");for(let J=0;J<T;J++){let le=Number(l.getValue(q+J*d,"*"));if(le===z[J]){re.push(s[J]);continue}let pt=l.stackSave(),W=l.stackAlloc(4*d),Z=!1,ie,ve=0;try{l._OrtGetTensorData(le,W,W+d,W+2*d,W+3*d)!==0&&Ue(`Can't access output tensor data on index ${J}.`);let Ye=d===4?"i32":"i64",ye=Number(l.getValue(W,Ye));ve=l.getValue(W+d,"*");let ku=l.getValue(W+d*2,"*"),qt=Number(l.getValue(W+d*3,Ye)),Or=[];for(let ut=0;ut<qt;ut++)Or.push(Number(l.getValue(ku+ut*d,Ye)));l._OrtFree(ku)!==0&&Ue("Can't free memory for tensor dims.");let Qr=Or.reduce((ut,Ze)=>ut*Ze,1);ie=gr(ye);let Oe=g==null?void 0:g.outputPreferredLocations[a[J]];if(ie==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ut=[];for(let Ze=0;Ze<Qr;Ze++){let Wt=l.getValue(ve+Ze*d,"*"),Yf=l.getValue(ve+(Ze+1)*d,"*"),Jf=Ze===Qr-1?void 0:Yf-Wt;ut.push(l.UTF8ToString(Wt,Jf))}re.push([ie,Or,ut,"cpu"])}else if(Oe==="gpu-buffer"&&Qr>0){let ut=l.jsepGetBuffer;if(!ut)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ze=ut(ve),Wt=nn(ye,Qr);if(Wt===void 0||!fa(ie))throw new Error(`Unsupported data type: ${ie}`);Z=!0,re.push([ie,Or,{gpuBuffer:Ze,download:l.jsepCreateDownloader(Ze,Wt,ie),dispose:()=>{l._OrtReleaseTensor(le)!==0&&Ue("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&Qr>0){let ut=l.webnnEnsureTensor,Ze=l.webnnIsGraphInputOutputTypeSupported;if(!ut||!Ze)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(nn(ye,Qr)===void 0||!Rs(ie))throw new Error(`Unsupported data type: ${ie}`);if(!Ze(e,ie,!1))throw new Error(`preferredLocation "ml-tensor" for ${ie} output is not supported by current WebNN Context.`);let Wt=await ut(e,ve,ye,Or,!1);Z=!0,re.push([ie,Or,{mlTensor:Wt,download:l.webnnCreateMLTensorDownloader(ve,ie),dispose:()=>{l.webnnReleaseTensorId(ve),l._OrtReleaseTensor(le)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&Qr>0){let ut=l.webnnCreateMLTensorDownloader(ve,ie)(),Ze=re.length;Z=!0,oe.push((async()=>{let Wt=[Ze,await ut];return l.webnnReleaseTensorId(ve),l._OrtReleaseTensor(le),Wt})()),re.push([ie,Or,[],"cpu"])}else{let ut=oi(ie),Ze=new ut(Qr);new Uint8Array(Ze.buffer,Ze.byteOffset,Ze.byteLength).set(l.HEAPU8.subarray(ve,ve+Ze.byteLength)),re.push([ie,Or,Ze,"cpu"])}}finally{l.stackRestore(pt),ie==="string"&&ve&&l._free(ve),Z||l._OrtReleaseTensor(le)}}g&&!y&&(l._OrtClearBoundOutputs(g.handle)!==0&&Ue("Can't clear bound outputs."),jr.set(e,[f,h,m,g,y,!1]));for(let[J,le]of await Promise.all(oe))re[J][2]=le;return ct("wasm ProcessOutputTensor"),re}finally{(ke=l.webnnOnRunEnd)==null||ke.call(l,f),l.stackRestore(M),E.forEach(_e=>l._OrtReleaseTensor(_e)),z.forEach(_e=>l._OrtReleaseTensor(_e)),A.forEach(_e=>l._free(_e)),I!==0&&l._OrtReleaseRunOptions(I),v.forEach(_e=>l._free(_e))}},bu=e=>{let t=We(),n=jr.get(e);if(!n)throw new Error("invalid session id");let a=n[0],s=t._OrtEndProfiling(a);s===0&&Ue("Can't get an profile file name."),t._OrtFree(s)},xu=e=>{let t=[];for(let n of e){let a=n[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),Xr,wt,xn,In,Zn,Zi,ms,ji,Sn,Tn,nf,Xi,Qi,af,sf,gs,Iu,of,uf=F(()=>{dt(),Ki(),tn(),zs(),Xr=()=>!!Pe.wasm.proxy&&typeof document<"u",xn=!1,In=!1,Zn=!1,ji=new Map,Sn=(e,t)=>{let n=ji.get(e);n?n.push(t):ji.set(e,[t])},Tn=()=>{if(xn||!In||Zn||!wt)throw new Error("worker not ready")},nf=e=>{switch(e.data.type){case"init-wasm":xn=!1,e.data.err?(Zn=!0,ms[1](e.data.err)):(In=!0,ms[0]()),Zi&&(URL.revokeObjectURL(Zi),Zi=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ji.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Xi=async()=>{if(!In){if(xn)throw new Error("multiple calls to 'initWasm()' detected.");if(Zn)throw new Error("previous call to 'initWasm()' failed.");if(xn=!0,Xr())return new Promise((e,t)=>{wt==null||wt.terminate(),Nu().then(([n,a])=>{try{wt=a,wt.onerror=o=>t(o),wt.onmessage=nf,ms=[e,t];let s={type:"init-wasm",in:Pe};if(!s.in.wasm.wasmPaths&&n){let o=Is();o&&(s.in.wasm.wasmPaths=o)}wt.postMessage(s),Zi=n}catch(s){t(s)}},t)});try{await Os(Pe.wasm),await Kn(Pe),In=!0}catch(e){throw Zn=!0,e}finally{xn=!1}}},Qi=async e=>{if(Xr())return Tn(),new Promise((t,n)=>{Sn("init-ep",[t,n]);let a={type:"init-ep",in:{epName:e,env:Pe}};wt.postMessage(a)});await gu(Pe,e)},af=async e=>Xr()?(Tn(),new Promise((t,n)=>{Sn("copy-from",[t,n]);let a={type:"copy-from",in:{buffer:e}};wt.postMessage(a,[e.buffer])})):hs(e),sf=async(e,t)=>{if(Xr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tn(),new Promise((n,a)=>{Sn("create",[n,a]);let s={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),wt.postMessage(s,o)})}else return yu(e,t)},gs=async e=>{if(Xr())return Tn(),new Promise((t,n)=>{Sn("release",[t,n]);let a={type:"release",in:e};wt.postMessage(a)});wu(e)},Iu=async(e,t,n,a,s,o)=>{if(Xr()){if(n.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tn(),new Promise((l,d)=>{Sn("run",[l,d]);let p=n,f={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:a,options:o}};wt.postMessage(f,xu(p))})}else return $u(e,t,n,a,s,o)},of=async e=>{if(Xr())return Tn(),new Promise((t,n)=>{Sn("end-profiling",[t,n]);let a={type:"end-profiling",in:e};wt.postMessage(a)});bu(e)}}),Su,lf,df,jf=F(()=>{dt(),uf(),ue(),ri(),Ds(),Su=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},lf=e=>{switch(e[3]){case"cpu":return new Kt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!fa(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:a,dispose:s}=e[2];return Kt.fromGpuBuffer(n,{dataType:t,dims:e[1],download:a,dispose:s})}case"ml-tensor":{let t=e[0];if(!Rs(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:a,dispose:s}=e[2];return Kt.fromMLTensor(n,{dataType:t,dims:e[1],download:a,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},df=class{async fetchModelAndCopyToWasmMemory(e){return af(await Ms(e))}async loadModel(e,t){Xe();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await sf(n,t),ft()}async dispose(){return gs(this.sessionId)}async run(e,t,n){Xe();let a=[],s=[];Object.entries(e).forEach(m=>{let g=m[0],y=m[1],w=this.inputNames.indexOf(g);if(w===-1)throw new Error(`invalid input '${g}'`);a.push(y),s.push(w)});let o=[],l=[];Object.entries(t).forEach(m=>{let g=m[0],y=m[1],w=this.outputNames.indexOf(g);if(w===-1)throw new Error(`invalid output '${g}'`);o.push(y),l.push(w)});let d=a.map((m,g)=>Su(m,()=>`input "${this.inputNames[s[g]]}"`)),p=o.map((m,g)=>m?Su(m,()=>`output "${this.outputNames[l[g]]}"`):null),f=await Iu(this.sessionId,s,d,l,p,n),h={};for(let m=0;m<f.length;m++)h[this.outputNames[l[m]]]=o[m]??lf(f[m]);return ft(),h}startProfiling(){}endProfiling(){of(this.sessionId)}}}),pf={};Le(pf,{OnnxruntimeWebAssemblyBackend:()=>Eu,initializeFlags:()=>Tu,wasmBackend:()=>ff});var Tu,Eu,ff,Xf=F(()=>{dt(),uf(),jf(),Tu=()=>{(typeof Pe.wasm.initTimeout!="number"||Pe.wasm.initTimeout<0)&&(Pe.wasm.initTimeout=0);let e=Pe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Pe.wasm.simd=!1),typeof Pe.wasm.proxy!="boolean"&&(Pe.wasm.proxy=!1),typeof Pe.wasm.trace!="boolean"&&(Pe.wasm.trace=!1),typeof Pe.wasm.numThreads!="number"||!Number.isInteger(Pe.wasm.numThreads)||Pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Pe.wasm.numThreads=1;else{let t=typeof navigator>"u"?Ft("node:os").cpus().length:navigator.hardwareConcurrency;Pe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Eu=class{async init(e){Tu(),await Xi(),await Qi(e)}async createInferenceSessionHandler(e,t){let n=new df;return await n.loadModel(e,t),n}},ff=new Eu}),cf={};Le(cf,{InferenceSession:()=>Et,TRACE:()=>Pr,TRACE_EVENT_BEGIN:()=>Ur,TRACE_EVENT_END:()=>ct,TRACE_FUNC_BEGIN:()=>Xe,TRACE_FUNC_END:()=>ft,Tensor:()=>Kt,default:()=>Qf,env:()=>Pe,registerBackend:()=>Pt}),dt(),dt(),dt();var nr="1.23.2",Qf=zn;{let e=(Xf(),je(pf)).wasmBackend;Pt("webgpu",e,5),Pt("webnn",e,5),Pt("cpu",e,10),Pt("wasm",e,10)}return Object.defineProperty(Pe.versions,"web",{value:nr,enumerable:!0}),je(cf)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ze.exports=S})(Ic);var xm=Ic.exports;async function Im(ze){const S=new Image;S.src=ze,await new Promise((Le,nt)=>{S.onload=()=>Le(),S.onerror=je=>nt(je)});const ge=document.createElement("canvas");ge.width=224,ge.height=224;const $e=ge.getContext("2d");$e.drawImage(S,0,0,224,224);const fe=$e.getImageData(0,0,224,224).data,Ie=new Float32Array(1*3*224*224),Ft=[.485,.456,.406],F=[.229,.224,.225];for(let Le=0;Le<224*224;Le++){const nt=fe[Le*4]/255,je=fe[Le*4+1]/255,Br=fe[Le*4+2]/255;Ie[Le]=(nt-Ft[0])/F[0],Ie[Le+224*224]=(je-Ft[1])/F[1],Ie[Le+2*224*224]=(Br-Ft[2])/F[2]}return new xm.Tensor("float32",Ie,[1,3,224,224])}var gf={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */gf.exports;(function(ze,Re){(function(){var S,ge="4.17.21",$e=200,fe="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",Ie="Expected a function",Ft="Invalid `variable` option passed into `_.template`",F="__lodash_hash_undefined__",Le=500,nt="__lodash_placeholder__",je=1,Br=2,St=4,Pt=1,Xn=2,Tt=1,Mr=2,Au=4,Ht=8,kn=16,Ut=32,Ke=64,sr=128,Pe=256,ws=512,Ou=30,Ru="...",_f=800,Yi=16,vs=1,Bu=2,Mu=3,Dr=1/0,mr=9007199254740991,yf=17976931348623157e292,or=0/0,vt=4294967295,$s=vt-1,Du=vt>>>1,wf=[["ary",sr],["bind",Tt],["bindKey",Mr],["curry",Ht],["curryRight",kn],["flip",ws],["partial",Ut],["partialRight",Ke],["rearg",Pe]],Yr="[object Arguments]",Qn="[object Array]",vf="[object AsyncFunction]",lt="[object Boolean]",Jr="[object Date]",Kt="[object DOMException]",Yn="[object Error]",Pr="[object Function]",Ji="[object GeneratorFunction]",Xe="[object Map]",ft="[object Number]",Ur="[object Null]",ct="[object Object]",bs="[object Promise]",Pu="[object Proxy]",Jn="[object RegExp]",Et="[object Set]",ei="[object String]",ea="[object Symbol]",$f="[object Undefined]",ti="[object WeakMap]",bf="[object WeakSet]",zn="[object ArrayBuffer]",dt="[object DataView]",ri="[object Float32Array]",ta="[object Float64Array]",ni="[object Int8Array]",ii="[object Int16Array]",ra="[object Int32Array]",xs="[object Uint8Array]",na="[object Uint8ClampedArray]",ia="[object Uint16Array]",_t="[object Uint32Array]",Is=/\b__p \+= '';/g,aa=/\b(__p \+=) '' \+/g,Uu=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ss=/&(?:amp|lt|gt|quot|#39);/g,sa=/[&<>"']/g,Lu=RegExp(Ss.source),Ts=RegExp(sa.source),Nu=/<%-([\s\S]+?)%>/g,Es=/<%([\s\S]+?)%>/g,ks=/<%=([\s\S]+?)%>/g,zs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cs=/^\w*$/,oa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,en=/[\\^$.*+?()[\]{}|]/g,As=RegExp(en.source),ua=/^\s+/,qu=/\s/,Wu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Os=/\{\n\/\* \[wrapped with (.+)\] \*/,We=/,? & /,tn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Zt=/[()=,{}\[\]\/\s]/,la=/\\(\\)?/g,Ue=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,da=/\w*$/,Gu=/^[-+]0x[0-9a-f]+$/i,xf=/^0b[01]+$/i,Vu=/^\[object .+?Constructor\]$/,Fu=/^0o[0-7]+$/i,Hu=/^(?:0|[1-9]\d*)$/,ai=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,si=/($^)/,Ku=/['\n\r\u2028\u2029\\]/g,pa="\\ud800-\\udfff",rn="\\u0300-\\u036f",gr="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",oi=rn+gr+nn,ui="\\u2700-\\u27bf",fa="a-z\\xdf-\\xf6\\xf8-\\xff",Rs="\\xac\\xb1\\xd7\\xf7",Bs="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ue="\\u2000-\\u206f",Ms=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ds="A-Z\\xc0-\\xd6\\xd8-\\xde",Ps="\\ufe0e\\ufe0f",Us=Rs+Bs+ue+Ms,ca="['’]",Zu="["+pa+"]",ha="["+Us+"]",li="["+oi+"]",Se="\\d+",_r="["+ui+"]",Ls="["+fa+"]",an="[^"+pa+Us+Se+ui+fa+Ds+"]",D="\\ud83c[\\udffb-\\udfff]",ma="(?:"+li+"|"+D+")",Ns="[^"+pa+"]",ga="(?:\\ud83c[\\udde6-\\uddff]){2}",_a="[\\ud800-\\udbff][\\udc00-\\udfff]",de="["+Ds+"]",ya="\\u200d",qs="(?:"+Ls+"|"+an+")",Ws="(?:"+de+"|"+an+")",wa="(?:"+ca+"(?:d|ll|m|re|s|t|ve))?",va="(?:"+ca+"(?:D|LL|M|RE|S|T|VE))?",Gs=ma+"?",$a="["+Ps+"]?",ju="(?:"+ya+"(?:"+[Ns,ga,_a].join("|")+")"+$a+Gs+")*",Vs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ba=$a+Gs+ju,Xu="(?:"+[_r,ga,_a].join("|")+")"+ba,Qu="(?:"+[Ns+li+"?",li,ga,_a,Zu].join("|")+")",If=RegExp(ca,"g"),di=RegExp(li,"g"),xa=RegExp(D+"(?="+D+")|"+Qu+ba,"g"),Yu=RegExp([de+"?"+Ls+"+"+wa+"(?="+[ha,de,"$"].join("|")+")",Ws+"+"+va+"(?="+[ha,de+qs,"$"].join("|")+")",de+"?"+qs+"+"+wa,de+"+"+va,Fs,Vs,Se,Xu].join("|"),"g"),Sf=RegExp("["+ya+pa+oi+Ps+"]"),Hs=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ks=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ia=-1,Ge={};Ge[ri]=Ge[ta]=Ge[ni]=Ge[ii]=Ge[ra]=Ge[xs]=Ge[na]=Ge[ia]=Ge[_t]=!0,Ge[Yr]=Ge[Qn]=Ge[zn]=Ge[lt]=Ge[dt]=Ge[Jr]=Ge[Yn]=Ge[Pr]=Ge[Xe]=Ge[ft]=Ge[ct]=Ge[Jn]=Ge[Et]=Ge[ei]=Ge[ti]=!1;var Ve={};Ve[Yr]=Ve[Qn]=Ve[zn]=Ve[dt]=Ve[lt]=Ve[Jr]=Ve[ri]=Ve[ta]=Ve[ni]=Ve[ii]=Ve[ra]=Ve[Xe]=Ve[ft]=Ve[ct]=Ve[Jn]=Ve[Et]=Ve[ei]=Ve[ea]=Ve[xs]=Ve[na]=Ve[ia]=Ve[_t]=!0,Ve[Yn]=Ve[Pr]=Ve[ti]=!1;var Ju={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Zs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},js={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},el={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tl=parseFloat,Tf=parseInt,Xs=typeof zu=="object"&&zu&&zu.Object===Object&&zu,Be=typeof self=="object"&&self&&self.Object===Object&&self,xe=Xs||Be||Function("return this")(),Lr=Re&&!Re.nodeType&&Re,ur=Lr&&!0&&ze&&!ze.nodeType&&ze,Je=ur&&ur.exports===Lr,at=Je&&Xs.process,j=function(){try{var O=ur&&ur.require&&ur.require("util").types;return O||at&&at.binding&&at.binding("util")}catch{}}(),He=j&&j.isArrayBuffer,Sa=j&&j.isDate,sn=j&&j.isMap,yr=j&&j.isRegExp,te=j&&j.isSet,Cn=j&&j.isTypedArray;function U(O,N,P){switch(P.length){case 0:return O.call(N);case 1:return O.call(N,P[0]);case 2:return O.call(N,P[0],P[1]);case 3:return O.call(N,P[0],P[1],P[2])}return O.apply(N,P)}function ee(O,N,P,Y){for(var we=-1,De=O==null?0:O.length;++we<De;){var Qe=O[we];N(Y,Qe,P(Qe),O)}return Y}function kt(O,N){for(var P=-1,Y=O==null?0:O.length;++P<Y&&N(O[P],P,O)!==!1;);return O}function Qs(O,N){for(var P=O==null?0:O.length;P--&&N(O[P],P,O)!==!1;);return O}function Ys(O,N){for(var P=-1,Y=O==null?0:O.length;++P<Y;)if(!N(O[P],P,O))return!1;return!0}function wr(O,N){for(var P=-1,Y=O==null?0:O.length,we=0,De=[];++P<Y;){var Qe=O[P];N(Qe,P,O)&&(De[we++]=Qe)}return De}function ce(O,N){var P=O==null?0:O.length;return!!P&&on(O,N,0)>-1}function Ta(O,N,P){for(var Y=-1,we=O==null?0:O.length;++Y<we;)if(P(N,O[Y]))return!0;return!1}function Fe(O,N){for(var P=-1,Y=O==null?0:O.length,we=Array(Y);++P<Y;)we[P]=N(O[P],P,O);return we}function vr(O,N){for(var P=-1,Y=N.length,we=O.length;++P<Y;)O[we+P]=N[P];return O}function Ea(O,N,P,Y){var we=-1,De=O==null?0:O.length;for(Y&&De&&(P=O[++we]);++we<De;)P=N(P,O[we],we,O);return P}function rl(O,N,P,Y){var we=O==null?0:O.length;for(Y&&we&&(P=O[--we]);we--;)P=N(P,O[we],we,O);return P}function ka(O,N){for(var P=-1,Y=O==null?0:O.length;++P<Y;)if(N(O[P],P,O))return!0;return!1}var zt=za("length");function nl(O){return O.split("")}function il(O){return O.match(tn)||[]}function $r(O,N,P){var Y;return P(O,function(we,De,Qe){if(N(we,De,Qe))return Y=De,!1}),Y}function pi(O,N,P,Y){for(var we=O.length,De=P+(Y?1:-1);Y?De--:++De<we;)if(N(O[De],De,O))return De;return-1}function on(O,N,P){return N===N?fl(O,N,P):pi(O,Js,P)}function al(O,N,P,Y){for(var we=P-1,De=O.length;++we<De;)if(Y(O[we],N))return we;return-1}function Js(O){return O!==O}function eo(O,N){var P=O==null?0:O.length;return P?Aa(O,N)/P:or}function za(O){return function(N){return N==null?S:N[O]}}function Ca(O){return function(N){return O==null?S:O[N]}}function to(O,N,P,Y,we){return we(O,function(De,Qe,qe){P=Y?(Y=!1,De):N(P,De,Qe,qe)}),P}function sl(O,N){var P=O.length;for(O.sort(N);P--;)O[P]=O[P].value;return O}function Aa(O,N){for(var P,Y=-1,we=O.length;++Y<we;){var De=N(O[Y]);De!==S&&(P=P===S?De:P+De)}return P}function Ct(O,N){for(var P=-1,Y=Array(O);++P<O;)Y[P]=N(P);return Y}function ol(O,N){return Fe(N,function(P){return[P,O[P]]})}function ro(O){return O&&O.slice(0,oo(O)+1).replace(ua,"")}function $t(O){return function(N){return O(N)}}function Oa(O,N){return Fe(N,function(P){return O[P]})}function An(O,N){return O.has(N)}function no(O,N){for(var P=-1,Y=O.length;++P<Y&&on(N,O[P],0)>-1;);return P}function io(O,N){for(var P=O.length;P--&&on(N,O[P],0)>-1;);return P}function ul(O,N){for(var P=O.length,Y=0;P--;)O[P]===N&&++Y;return Y}var ll=Ca(Ju),dl=Ca(Zs);function Ef(O){return"\\"+el[O]}function jt(O,N){return O==null?S:O[N]}function un(O){return Sf.test(O)}function Ra(O){return Hs.test(O)}function ao(O){for(var N,P=[];!(N=O.next()).done;)P.push(N.value);return P}function At(O){var N=-1,P=Array(O.size);return O.forEach(function(Y,we){P[++N]=[we,Y]}),P}function so(O,N){return function(P){return O(N(P))}}function br(O,N){for(var P=-1,Y=O.length,we=0,De=[];++P<Y;){var Qe=O[P];(Qe===N||Qe===nt)&&(O[P]=nt,De[we++]=P)}return De}function fi(O){var N=-1,P=Array(O.size);return O.forEach(function(Y){P[++N]=Y}),P}function pl(O){var N=-1,P=Array(O.size);return O.forEach(function(Y){P[++N]=[Y,Y]}),P}function fl(O,N,P){for(var Y=P-1,we=O.length;++Y<we;)if(O[Y]===N)return Y;return-1}function cl(O,N,P){for(var Y=P+1;Y--;)if(O[Y]===N)return Y;return Y}function ln(O){return un(O)?Xt(O):zt(O)}function Lt(O){return un(O)?ml(O):nl(O)}function oo(O){for(var N=O.length;N--&&qu.test(O.charAt(N)););return N}var hl=Ca(js);function Xt(O){for(var N=xa.lastIndex=0;xa.test(O);)++N;return N}function ml(O){return O.match(xa)||[]}function gl(O){return O.match(Yu)||[]}var _l=function O(N){N=N==null?xe:dn.defaults(xe.Object(),N,dn.pick(xe,Ks));var P=N.Array,Y=N.Date,we=N.Error,De=N.Function,Qe=N.Math,qe=N.Object,Ba=N.RegExp,yl=N.String,bt=N.TypeError,Ma=P.prototype,wl=De.prototype,xr=qe.prototype,ci=N["__core-js_shared__"],hi=wl.toString,Ne=xr.hasOwnProperty,mi=0,uo=function(){var r=/[^.]+$/.exec(ci&&ci.keys&&ci.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),gi=xr.toString,lo=hi.call(qe),vl=xe._,$l=Ba("^"+hi.call(Ne).replace(en,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_i=Je?N.Buffer:S,Ir=N.Symbol,Da=N.Uint8Array,po=_i?_i.allocUnsafe:S,yi=so(qe.getPrototypeOf,qe),fo=qe.create,bl=xr.propertyIsEnumerable,wi=Ma.splice,Ce=Ir?Ir.isConcatSpreadable:S,On=Ir?Ir.iterator:S,Nr=Ir?Ir.toStringTag:S,vi=function(){try{var r=zr(qe,"defineProperty");return r({},"",{}),r}catch{}}(),xl=N.clearTimeout!==xe.clearTimeout&&N.clearTimeout,Il=Y&&Y.now!==xe.Date.now&&Y.now,Sl=N.setTimeout!==xe.setTimeout&&N.setTimeout,$i=Qe.ceil,bi=Qe.floor,Pa=qe.getOwnPropertySymbols,Tl=_i?_i.isBuffer:S,co=N.isFinite,El=Ma.join,kl=so(qe.keys,qe),et=Qe.max,tt=Qe.min,zl=Y.now,Ua=N.parseInt,ho=Qe.random,Cl=Ma.reverse,La=zr(N,"DataView"),Rn=zr(N,"Map"),Na=zr(N,"Promise"),pn=zr(N,"Set"),Bn=zr(N,"WeakMap"),Mn=zr(qe,"create"),xi=Bn&&new Bn,fn={},Al=Ar(La),Ol=Ar(Rn),Rl=Ar(Na),Bl=Ar(pn),Ml=Ar(Bn),Ii=Ir?Ir.prototype:S,cn=Ii?Ii.valueOf:S,mo=Ii?Ii.toString:S;function $(r){if(E(r)&&!n(r)&&!(r instanceof Ee)){if(r instanceof Ot)return r;if(Ne.call(r,"__wrapped__"))return tu(r)}return new Ot(r)}var qr=function(){function r(){}return function(i){if(!v(i))return{};if(fo)return fo(i);r.prototype=i;var u=new r;return r.prototype=S,u}}();function Si(){}function Ot(r,i){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=S}$.templateSettings={escape:Nu,evaluate:Es,interpolate:ks,variable:"",imports:{_:$}},$.prototype=Si.prototype,$.prototype.constructor=$,Ot.prototype=qr(Si.prototype),Ot.prototype.constructor=Ot;function Ee(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=vt,this.__views__=[]}function Dl(){var r=new Ee(this.__wrapped__);return r.__actions__=It(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=It(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=It(this.__views__),r}function Pl(){if(this.__filtered__){var r=new Ee(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ul(){var r=this.__wrapped__.value(),i=this.__dir__,u=n(r),c=i<0,_=u?r.length:0,x=qd(0,_,this.__views__),k=x.start,C=x.end,R=C-k,G=c?C:k-1,V=this.__iteratees__,H=V.length,X=0,se=tt(R,this.__takeCount__);if(!u||!c&&_==R&&se==R)return Sd(r,this.__actions__);var he=[];e:for(;R--&&X<se;){G+=i;for(var Te=-1,me=r[G];++Te<H;){var Ae=V[Te],Me=Ae.iteratee,ir=Ae.type,Dt=Me(me);if(ir==Bu)me=Dt;else if(!Dt){if(ir==vs)continue e;break e}}he[X++]=me}return he}Ee.prototype=qr(Si.prototype),Ee.prototype.constructor=Ee;function Sr(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function Ll(){this.__data__=Mn?Mn(null):{},this.size=0}function Nl(r){var i=this.has(r)&&delete this.__data__[r];return this.size-=i?1:0,i}function ql(r){var i=this.__data__;if(Mn){var u=i[r];return u===F?S:u}return Ne.call(i,r)?i[r]:S}function kf(r){var i=this.__data__;return Mn?i[r]!==S:Ne.call(i,r)}function Wl(r,i){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=Mn&&i===S?F:i,this}Sr.prototype.clear=Ll,Sr.prototype.delete=Nl,Sr.prototype.get=ql,Sr.prototype.has=kf,Sr.prototype.set=Wl;function lr(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function Qt(){this.__data__=[],this.size=0}function Gl(r){var i=this.__data__,u=Pn(i,r);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():wi.call(i,u,1),--this.size,!0}function Vl(r){var i=this.__data__,u=Pn(i,r);return u<0?S:i[u][1]}function Fl(r){return Pn(this.__data__,r)>-1}function Hl(r,i){var u=this.__data__,c=Pn(u,r);return c<0?(++this.size,u.push([r,i])):u[c][1]=i,this}lr.prototype.clear=Qt,lr.prototype.delete=Gl,lr.prototype.get=Vl,lr.prototype.has=Fl,lr.prototype.set=Hl;function dr(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var c=r[i];this.set(c[0],c[1])}}function Kl(){this.size=0,this.__data__={hash:new Sr,map:new(Rn||lr),string:new Sr}}function Zl(r){var i=Wi(this,r).delete(r);return this.size-=i?1:0,i}function jl(r){return Wi(this,r).get(r)}function Xl(r){return Wi(this,r).has(r)}function Ql(r,i){var u=Wi(this,r),c=u.size;return u.set(r,i),this.size+=u.size==c?0:1,this}dr.prototype.clear=Kl,dr.prototype.delete=Zl,dr.prototype.get=jl,dr.prototype.has=Xl,dr.prototype.set=Ql;function hn(r){var i=-1,u=r==null?0:r.length;for(this.__data__=new dr;++i<u;)this.add(r[i])}function Yl(r){return this.__data__.set(r,F),this}function Jl(r){return this.__data__.has(r)}hn.prototype.add=hn.prototype.push=Yl,hn.prototype.has=Jl;function Nt(r){var i=this.__data__=new lr(r);this.size=i.size}function ed(){this.__data__=new lr,this.size=0}function td(r){var i=this.__data__,u=i.delete(r);return this.size=i.size,u}function rd(r){return this.__data__.get(r)}function zf(r){return this.__data__.has(r)}function mn(r,i){var u=this.__data__;if(u instanceof lr){var c=u.__data__;if(!Rn||c.length<$e-1)return c.push([r,i]),this.size=++u.size,this;u=this.__data__=new dr(c)}return u.set(r,i),this.size=u.size,this}Nt.prototype.clear=ed,Nt.prototype.delete=td,Nt.prototype.get=rd,Nt.prototype.has=zf,Nt.prototype.set=mn;function Wr(r,i){var u=n(r),c=!u&&t(r),_=!u&&!c&&d(r),x=!u&&!c&&!_&&J(r),k=u||c||_||x,C=k?Ct(r.length,yl):[],R=C.length;for(var G in r)(i||Ne.call(r,G))&&!(k&&(G=="length"||_&&(G=="offset"||G=="parent")||x&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||hr(G,R)))&&C.push(G);return C}function Gr(r){var i=r.length;return i?r[ko(0,i-1)]:S}function go(r,i){return Hn(It(r),Vr(i,0,r.length))}function gn(r){return Hn(It(r))}function rt(r,i,u){(u!==S&&!nr(r[i],u)||u===S&&!(i in r))&&Yt(r,i,u)}function Dn(r,i,u){var c=r[i];(!(Ne.call(r,i)&&nr(c,u))||u===S&&!(i in r))&&Yt(r,i,u)}function Pn(r,i){for(var u=r.length;u--;)if(nr(r[u][0],i))return u;return-1}function nd(r,i,u,c){return Tr(r,function(_,x,k){i(c,_,u(_),k)}),c}function id(r,i){return r&&er(i,gt(i),r)}function Ti(r,i){return r&&er(i,Gt(i),r)}function Yt(r,i,u){i=="__proto__"&&vi?vi(r,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[i]=u}function Ei(r,i){for(var u=-1,c=i.length,_=P(c),x=r==null;++u<c;)_[u]=x?S:ec(r,i[u]);return _}function Vr(r,i,u){return r===r&&(u!==S&&(r=r<=u?r:u),i!==S&&(r=r>=i?r:i)),r}function Rt(r,i,u,c,_,x){var k,C=i&je,R=i&Br,G=i&St;if(u&&(k=_?u(r,c,_,x):u(r)),k!==S)return k;if(!v(r))return r;var V=n(r);if(V){if(k=Rf(r),!C)return It(r,k)}else{var H=ot(r),X=H==Pr||H==Ji;if(d(r))return Ed(r,C);if(H==ct||H==Yr||X&&!_){if(k=R||X?{}:Zo(r),!C)return R?Bd(r,Ti(k,r)):Rd(r,id(k,r))}else{if(!Ve[H])return _?r:{};k=Gd(r,H,C)}}x||(x=new Nt);var se=x.get(r);if(se)return se;x.set(r,k),_e(r)?r.forEach(function(me){k.add(Rt(me,i,u,me,r,x))}):z(r)&&r.forEach(function(me,Ae){k.set(Ae,Rt(me,i,u,Ae,r,x))});var he=G?R?is:ns:R?Gt:gt,Te=V?S:he(r);return kt(Te||r,function(me,Ae){Te&&(Ae=me,me=r[Ae]),Dn(k,Ae,Rt(me,i,u,Ae,r,x))}),k}function _o(r){var i=gt(r);return function(u){return qa(u,r,i)}}function qa(r,i,u){var c=u.length;if(r==null)return!c;for(r=qe(r);c--;){var _=u[c],x=i[_],k=r[_];if(k===S&&!(_ in r)||!x(k))return!1}return!0}function yo(r,i,u){if(typeof r!="function")throw new bt(Ie);return Cr(function(){r.apply(S,u)},i)}function _n(r,i,u,c){var _=-1,x=ce,k=!0,C=r.length,R=[],G=i.length;if(!C)return R;u&&(i=Fe(i,$t(u))),c?(x=Ta,k=!1):i.length>=$e&&(x=An,k=!1,i=new hn(i));e:for(;++_<C;){var V=r[_],H=u==null?V:u(V);if(V=c||V!==0?V:0,k&&H===H){for(var X=G;X--;)if(i[X]===H)continue e;R.push(V)}else x(i,H,c)||R.push(V)}return R}var Tr=tr(Jt),ki=tr(Ai,!0);function wo(r,i){var u=!0;return Tr(r,function(c,_,x){return u=!!i(c,_,x),u}),u}function zi(r,i,u){for(var c=-1,_=r.length;++c<_;){var x=r[c],k=i(x);if(k!=null&&(C===S?k===k&&!oe(k):u(k,C)))var C=k,R=x}return R}function ad(r,i,u,c){var _=r.length;for(u=ye(u),u<0&&(u=-u>_?0:_+u),c=c===S||c>_?_:ye(c),c<0&&(c+=_),c=u>c?0:ku(c);u<c;)r[u++]=i;return r}function sd(r,i){var u=[];return Tr(r,function(c,_,x){i(c,_,x)&&u.push(c)}),u}function st(r,i,u,c,_){var x=-1,k=r.length;for(u||(u=Bf),_||(_=[]);++x<k;){var C=r[x];i>0&&u(C)?i>1?st(C,i-1,u,c,_):vr(_,C):c||(_[_.length]=C)}return _}var Ci=pr(),Un=pr(!0);function Jt(r,i){return r&&Ci(r,i,gt)}function Ai(r,i){return r&&Un(r,i,gt)}function Oi(r,i){return wr(i,function(u){return b(r[u])})}function Fr(r,i){i=Kr(i,r);for(var u=0,c=i.length;r!=null&&u<c;)r=r[rr(i[u++])];return u&&u==c?r:S}function vo(r,i,u){var c=i(r);return n(r)?c:vr(c,u(r))}function yt(r){return r==null?r===S?$f:Ur:Nr&&Nr in qe(r)?Ld(r):Yd(r)}function Wa(r,i){return r>i}function od(r,i){return r!=null&&Ne.call(r,i)}function Cf(r,i){return r!=null&&i in qe(r)}function ud(r,i,u){return r>=tt(i,u)&&r<et(i,u)}function Ln(r,i,u){for(var c=u?Ta:ce,_=r[0].length,x=r.length,k=x,C=P(x),R=1/0,G=[];k--;){var V=r[k];k&&i&&(V=Fe(V,$t(i))),R=tt(V.length,R),C[k]=!u&&(i||_>=120&&V.length>=120)?new hn(k&&V):S}V=r[0];var H=-1,X=C[0];e:for(;++H<_&&G.length<R;){var se=V[H],he=i?i(se):se;if(se=u||se!==0?se:0,!(X?An(X,he):c(G,he,u))){for(k=x;--k;){var Te=C[k];if(!(Te?An(Te,he):c(r[k],he,u)))continue e}X&&X.push(he),G.push(se)}}return G}function ld(r,i,u,c){return Jt(r,function(_,x,k){i(c,u(_),x,k)}),c}function Hr(r,i,u){i=Kr(i,r),r=Yo(r,i);var c=r==null?r:r[rr(Mt(i))];return c==null?S:U(c,r,u)}function Ga(r){return E(r)&&yt(r)==Yr}function $o(r){return E(r)&&yt(r)==zn}function dd(r){return E(r)&&yt(r)==Jr}function Nn(r,i,u,c,_){return r===i?!0:r==null||i==null||!E(r)&&!E(i)?r!==r&&i!==i:bo(r,i,u,c,Nn,_)}function bo(r,i,u,c,_,x){var k=n(r),C=n(i),R=k?Qn:ot(r),G=C?Qn:ot(i);R=R==Yr?ct:R,G=G==Yr?ct:G;var V=R==ct,H=G==ct,X=R==G;if(X&&d(r)){if(!d(i))return!1;k=!0,V=!1}if(X&&!V)return x||(x=new Nt),k||J(r)?Fo(r,i,u,c,_,x):Ud(r,i,R,u,c,_,x);if(!(u&Pt)){var se=V&&Ne.call(r,"__wrapped__"),he=H&&Ne.call(i,"__wrapped__");if(se||he){var Te=se?r.value():r,me=he?i.value():i;return x||(x=new Nt),_(Te,me,u,c,x)}}return X?(x||(x=new Nt),Ho(r,i,u,c,_,x)):!1}function Af(r){return E(r)&&ot(r)==Xe}function Va(r,i,u,c){var _=u.length,x=_,k=!c;if(r==null)return!x;for(r=qe(r);_--;){var C=u[_];if(k&&C[2]?C[1]!==r[C[0]]:!(C[0]in r))return!1}for(;++_<x;){C=u[_];var R=C[0],G=r[R],V=C[1];if(k&&C[2]){if(G===S&&!(R in r))return!1}else{var H=new Nt;if(c)var X=c(G,V,R,r,i,H);if(!(X===S?Nn(V,G,Pt|Xn,c,H):X))return!1}}return!0}function pd(r){if(!v(r)||Hd(r))return!1;var i=b(r)?$l:Vu;return i.test(Ar(r))}function fd(r){return E(r)&&yt(r)==Jn}function cd(r){return E(r)&&ot(r)==Et}function hd(r){return E(r)&&I(r.length)&&!!Ge[yt(r)]}function Fa(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?n(r)?gd(r[0],r[1]):Io(r):_c(r)}function Ha(r){if(!Fn(r))return kl(r);var i=[];for(var u in qe(r))Ne.call(r,u)&&u!="constructor"&&i.push(u);return i}function md(r){if(!v(r))return Qd(r);var i=Fn(r),u=[];for(var c in r)c=="constructor"&&(i||!Ne.call(r,c))||u.push(c);return u}function Ri(r,i){return r<i}function xo(r,i){var u=-1,c=s(r)?P(r.length):[];return Tr(r,function(_,x,k){c[++u]=i(_,x,k)}),c}function Io(r){var i=ss(r);return i.length==1&&i[0][2]?Xo(i[0][0],i[0][1]):function(u){return u===r||Va(u,r,i)}}function gd(r,i){return jo(r)&&Zd(i)?Xo(rr(r),i):function(u){var c=ec(u,r);return c===S&&c===i?tc(u,r):Nn(i,c,Pt|Xn)}}function Bi(r,i,u,c,_){r!==i&&Ci(i,function(x,k){if(_||(_=new Nt),v(x))_d(r,i,k,u,Bi,c,_);else{var C=c?c(ls(r,k),x,k+"",r,i,_):S;C===S&&(C=x),rt(r,k,C)}},Gt)}function _d(r,i,u,c,_,x,k){var C=ls(r,u),R=ls(i,u),G=k.get(R);if(G){rt(r,u,G);return}var V=x?x(C,R,u+"",r,i,k):S,H=V===S;if(H){var X=n(R),se=!X&&d(R),he=!X&&!se&&J(R);V=R,X||se||he?n(C)?V=C:o(C)?V=It(C):se?(H=!1,V=Ed(R,!0)):he?(H=!1,V=Ad(R,!0)):V=[]:Q(R)||t(R)?(V=C,t(C)?V=Or(C):(!v(C)||b(C))&&(V=Zo(R))):H=!1}H&&(k.set(R,V),_(V,R,c,x,k),k.delete(R)),rt(r,u,V)}function So(r,i){var u=r.length;if(u)return i+=i<0?u:0,hr(i,u)?r[i]:S}function yd(r,i,u){i.length?i=Fe(i,function(x){return n(x)?function(k){return Fr(k,x.length===1?x[0]:x)}:x}):i=[Vt];var c=-1;i=Fe(i,$t(pe()));var _=xo(r,function(x,k,C){var R=Fe(i,function(G){return G(x)});return{criteria:R,index:++c,value:x}});return sl(_,function(x,k){return Od(x,k,u)})}function wd(r,i){return To(r,i,function(u,c){return tc(r,c)})}function To(r,i,u){for(var c=-1,_=i.length,x={};++c<_;){var k=i[c],C=Fr(r,k);u(C,k)&&qn(x,Kr(k,r),C)}return x}function vd(r){return function(i){return Fr(i,r)}}function Ka(r,i,u,c){var _=c?al:on,x=-1,k=i.length,C=r;for(r===i&&(i=It(i)),u&&(C=Fe(r,$t(u)));++x<k;)for(var R=0,G=i[x],V=u?u(G):G;(R=_(C,V,R,c))>-1;)C!==r&&wi.call(C,R,1),wi.call(r,R,1);return r}function Eo(r,i){for(var u=r?i.length:0,c=u-1;u--;){var _=i[u];if(u==c||_!==x){var x=_;hr(_)?wi.call(r,_,1):Oo(r,_)}}return r}function ko(r,i){return r+bi(ho()*(i-r+1))}function Za(r,i,u,c){for(var _=-1,x=et($i((i-r)/(u||1)),0),k=P(x);x--;)k[c?x:++_]=r,r+=u;return k}function yn(r,i){var u="";if(!r||i<1||i>mr)return u;do i%2&&(u+=r),i=bi(i/2),i&&(r+=r);while(i);return u}function be(r,i){return Gi(Qo(r,i,Vt),r+"")}function $d(r){return Gr(_s(r))}function bd(r,i){var u=_s(r);return Hn(u,Vr(i,0,u.length))}function qn(r,i,u,c){if(!v(r))return r;i=Kr(i,r);for(var _=-1,x=i.length,k=x-1,C=r;C!=null&&++_<x;){var R=rr(i[_]),G=u;if(R==="__proto__"||R==="constructor"||R==="prototype")return r;if(_!=k){var V=C[R];G=c?c(V,R,C):S,G===S&&(G=v(V)?V:hr(i[_+1])?[]:{})}Dn(C,R,G),C=C[R]}return r}var zo=xi?function(r,i){return xi.set(r,i),r}:Vt,Co=vi?function(r,i){return vi(r,"toString",{configurable:!0,enumerable:!1,value:nc(i),writable:!0})}:Vt;function xd(r){return Hn(_s(r))}function Bt(r,i,u){var c=-1,_=r.length;i<0&&(i=-i>_?0:_+i),u=u>_?_:u,u<0&&(u+=_),_=i>u?0:u-i>>>0,i>>>=0;for(var x=P(_);++c<_;)x[c]=r[c+i];return x}function Id(r,i){var u;return Tr(r,function(c,_,x){return u=i(c,_,x),!u}),!!u}function ja(r,i,u){var c=0,_=r==null?c:r.length;if(typeof i=="number"&&i===i&&_<=Du){for(;c<_;){var x=c+_>>>1,k=r[x];k!==null&&!oe(k)&&(u?k<=i:k<i)?c=x+1:_=x}return _}return Xa(r,i,Vt,u)}function Xa(r,i,u,c){var _=0,x=r==null?0:r.length;if(x===0)return 0;i=u(i);for(var k=i!==i,C=i===null,R=oe(i),G=i===S;_<x;){var V=bi((_+x)/2),H=u(r[V]),X=H!==S,se=H===null,he=H===H,Te=oe(H);if(k)var me=c||he;else G?me=he&&(c||X):C?me=he&&X&&(c||!se):R?me=he&&X&&!se&&(c||!Te):se||Te?me=!1:me=c?H<=i:H<i;me?_=V+1:x=V}return tt(x,$s)}function Qa(r,i){for(var u=-1,c=r.length,_=0,x=[];++u<c;){var k=r[u],C=i?i(k):k;if(!u||!nr(C,R)){var R=C;x[_++]=k===0?0:k}}return x}function Ao(r){return typeof r=="number"?r:oe(r)?or:+r}function xt(r){if(typeof r=="string")return r;if(n(r))return Fe(r,xt)+"";if(oe(r))return mo?mo.call(r):"";var i=r+"";return i=="0"&&1/r==-Dr?"-0":i}function Er(r,i,u){var c=-1,_=ce,x=r.length,k=!0,C=[],R=C;if(u)k=!1,_=Ta;else if(x>=$e){var G=i?null:Dd(r);if(G)return fi(G);k=!1,_=An,R=new hn}else R=i?[]:C;e:for(;++c<x;){var V=r[c],H=i?i(V):V;if(V=u||V!==0?V:0,k&&H===H){for(var X=R.length;X--;)if(R[X]===H)continue e;i&&R.push(H),C.push(V)}else _(R,H,u)||(R!==C&&R.push(H),C.push(V))}return C}function Oo(r,i){return i=Kr(i,r),r=Yo(r,i),r==null||delete r[rr(Mt(i))]}function Ro(r,i,u,c){return qn(r,i,u(Fr(r,i)),c)}function Mi(r,i,u,c){for(var _=r.length,x=c?_:-1;(c?x--:++x<_)&&i(r[x],x,r););return u?Bt(r,c?0:x,c?x+1:_):Bt(r,c?x+1:0,c?_:x)}function Sd(r,i){var u=r;return u instanceof Ee&&(u=u.value()),Ea(i,function(c,_){return _.func.apply(_.thisArg,vr([c],_.args))},u)}function Ya(r,i,u){var c=r.length;if(c<2)return c?Er(r[0]):[];for(var _=-1,x=P(c);++_<c;)for(var k=r[_],C=-1;++C<c;)C!=_&&(x[_]=_n(x[_]||k,r[C],i,u));return Er(st(x,1),i,u)}function Bo(r,i,u){for(var c=-1,_=r.length,x=i.length,k={};++c<_;){var C=c<x?i[c]:S;u(k,r[c],C)}return k}function Ja(r){return o(r)?r:[]}function es(r){return typeof r=="function"?r:Vt}function Kr(r,i){return n(r)?r:jo(r,i)?[r]:Jo(Oe(r))}var Td=be;function kr(r,i,u){var c=r.length;return u=u===S?c:u,!i&&u>=c?r:Bt(r,i,u)}var Mo=xl||function(r){return xe.clearTimeout(r)};function Ed(r,i){if(i)return r.slice();var u=r.length,c=po?po(u):new r.constructor(u);return r.copy(c),c}function ts(r){var i=new r.constructor(r.byteLength);return new Da(i).set(new Da(r)),i}function kd(r,i){var u=i?ts(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function zd(r){var i=new r.constructor(r.source,da.exec(r));return i.lastIndex=r.lastIndex,i}function Cd(r){return cn?qe(cn.call(r)):{}}function Ad(r,i){var u=i?ts(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function Do(r,i){if(r!==i){var u=r!==S,c=r===null,_=r===r,x=oe(r),k=i!==S,C=i===null,R=i===i,G=oe(i);if(!C&&!G&&!x&&r>i||x&&k&&R&&!C&&!G||c&&k&&R||!u&&R||!_)return 1;if(!c&&!x&&!G&&r<i||G&&u&&_&&!c&&!x||C&&u&&_||!k&&_||!R)return-1}return 0}function Od(r,i,u){for(var c=-1,_=r.criteria,x=i.criteria,k=_.length,C=u.length;++c<k;){var R=Do(_[c],x[c]);if(R){if(c>=C)return R;var G=u[c];return R*(G=="desc"?-1:1)}}return r.index-i.index}function Po(r,i,u,c){for(var _=-1,x=r.length,k=u.length,C=-1,R=i.length,G=et(x-k,0),V=P(R+G),H=!c;++C<R;)V[C]=i[C];for(;++_<k;)(H||_<x)&&(V[u[_]]=r[_]);for(;G--;)V[C++]=r[_++];return V}function Uo(r,i,u,c){for(var _=-1,x=r.length,k=-1,C=u.length,R=-1,G=i.length,V=et(x-C,0),H=P(V+G),X=!c;++_<V;)H[_]=r[_];for(var se=_;++R<G;)H[se+R]=i[R];for(;++k<C;)(X||_<x)&&(H[se+u[k]]=r[_++]);return H}function It(r,i){var u=-1,c=r.length;for(i||(i=P(c));++u<c;)i[u]=r[u];return i}function er(r,i,u,c){var _=!u;u||(u={});for(var x=-1,k=i.length;++x<k;){var C=i[x],R=c?c(u[C],r[C],C,u,r):S;R===S&&(R=r[C]),_?Yt(u,C,R):Dn(u,C,R)}return u}function Rd(r,i){return er(r,os(r),i)}function Bd(r,i){return er(r,Nd(r),i)}function Di(r,i){return function(u,c){var _=n(u)?ee:nd,x=i?i():{};return _(u,r,pe(c,2),x)}}function Wn(r){return be(function(i,u){var c=-1,_=u.length,x=_>1?u[_-1]:S,k=_>2?u[2]:S;for(x=r.length>3&&typeof x=="function"?(_--,x):S,k&&mt(u[0],u[1],k)&&(x=_<3?S:x,_=1),i=qe(i);++c<_;){var C=u[c];C&&r(i,C,c,x)}return i})}function tr(r,i){return function(u,c){if(u==null)return u;if(!s(u))return r(u,c);for(var _=u.length,x=i?_:-1,k=qe(u);(i?x--:++x<_)&&c(k[x],x,k)!==!1;);return u}}function pr(r){return function(i,u,c){for(var _=-1,x=qe(i),k=c(i),C=k.length;C--;){var R=k[r?C:++_];if(u(x[R],R,x)===!1)break}return i}}function wn(r,i,u){var c=i&Tt,_=Gn(r);function x(){var k=this&&this!==xe&&this instanceof x?_:r;return k.apply(c?u:this,arguments)}return x}function Zr(r){return function(i){i=Oe(i);var u=un(i)?Lt(i):S,c=u?u[0]:i.charAt(0),_=u?kr(u,1).join(""):i.slice(1);return c[r]()+_}}function vn(r){return function(i){return Ea(mc(hc(i).replace(If,"")),r,"")}}function Gn(r){return function(){var i=arguments;switch(i.length){case 0:return new r;case 1:return new r(i[0]);case 2:return new r(i[0],i[1]);case 3:return new r(i[0],i[1],i[2]);case 4:return new r(i[0],i[1],i[2],i[3]);case 5:return new r(i[0],i[1],i[2],i[3],i[4]);case 6:return new r(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new r(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=qr(r.prototype),c=r.apply(u,i);return v(c)?c:u}}function Md(r,i,u){var c=Gn(r);function _(){for(var x=arguments.length,k=P(x),C=x,R=bn(_);C--;)k[C]=arguments[C];var G=x<3&&k[0]!==R&&k[x-1]!==R?[]:br(k,R);if(x-=G.length,x<u)return Wo(r,i,Pi,_.placeholder,S,k,G,S,S,u-x);var V=this&&this!==xe&&this instanceof _?c:r;return U(V,this,k)}return _}function Lo(r){return function(i,u,c){var _=qe(i);if(!s(i)){var x=pe(u,3);i=gt(i),u=function(C){return x(_[C],C,_)}}var k=r(i,u,c);return k>-1?_[x?i[k]:k]:S}}function No(r){return cr(function(i){var u=i.length,c=u,_=Ot.prototype.thru;for(r&&i.reverse();c--;){var x=i[c];if(typeof x!="function")throw new bt(Ie);if(_&&!k&&$n(x)=="wrapper")var k=new Ot([],!0)}for(c=k?c:u;++c<u;){x=i[c];var C=$n(x),R=C=="wrapper"?as(x):S;R&&us(R[0])&&R[1]==(sr|Ht|Ut|Pe)&&!R[4].length&&R[9]==1?k=k[$n(R[0])].apply(k,R[3]):k=x.length==1&&us(x)?k[C]():k.thru(x)}return function(){var G=arguments,V=G[0];if(k&&G.length==1&&n(V))return k.plant(V).value();for(var H=0,X=u?i[H].apply(this,G):V;++H<u;)X=i[H].call(this,X);return X}})}function Pi(r,i,u,c,_,x,k,C,R,G){var V=i&sr,H=i&Tt,X=i&Mr,se=i&(Ht|kn),he=i&ws,Te=X?S:Gn(r);function me(){for(var Ae=arguments.length,Me=P(Ae),ir=Ae;ir--;)Me[ir]=arguments[ir];if(se)var Dt=bn(me),ar=ul(Me,Dt);if(c&&(Me=Po(Me,c,_,se)),x&&(Me=Uo(Me,x,k,se)),Ae-=ar,se&&Ae<G){var it=br(Me,Dt);return Wo(r,i,Pi,me.placeholder,u,Me,it,C,R,G-Ae)}var Rr=H?u:this,En=X?Rr[r]:r;return Ae=Me.length,C?Me=Jd(Me,C):he&&Ae>1&&Me.reverse(),V&&R<Ae&&(Me.length=R),this&&this!==xe&&this instanceof me&&(En=Te||Gn(En)),En.apply(Rr,Me)}return me}function qo(r,i){return function(u,c){return ld(u,r,i(c),{})}}function Ui(r,i){return function(u,c){var _;if(u===S&&c===S)return i;if(u!==S&&(_=u),c!==S){if(_===S)return c;typeof u=="string"||typeof c=="string"?(u=xt(u),c=xt(c)):(u=Ao(u),c=Ao(c)),_=r(u,c)}return _}}function rs(r){return cr(function(i){return i=Fe(i,$t(pe())),be(function(u){var c=this;return r(i,function(_){return U(_,c,u)})})})}function Li(r,i){i=i===S?" ":xt(i);var u=i.length;if(u<2)return u?yn(i,r):i;var c=yn(i,$i(r/ln(i)));return un(i)?kr(Lt(c),0,r).join(""):c.slice(0,r)}function Of(r,i,u,c){var _=i&Tt,x=Gn(r);function k(){for(var C=-1,R=arguments.length,G=-1,V=c.length,H=P(V+R),X=this&&this!==xe&&this instanceof k?x:r;++G<V;)H[G]=c[G];for(;R--;)H[G++]=arguments[++C];return U(X,_?u:this,H)}return k}function ht(r){return function(i,u,c){return c&&typeof c!="number"&&mt(i,u,c)&&(u=c=S),i=Ye(i),u===S?(u=i,i=0):u=Ye(u),c=c===S?i<u?1:-1:Ye(c),Za(i,u,c,r)}}function Ni(r){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=qt(i),u=qt(u)),r(i,u)}}function Wo(r,i,u,c,_,x,k,C,R,G){var V=i&Ht,H=V?k:S,X=V?S:k,se=V?x:S,he=V?S:x;i|=V?Ut:Ke,i&=~(V?Ke:Ut),i&Au||(i&=~(Tt|Mr));var Te=[r,i,_,se,H,he,X,C,R,G],me=u.apply(S,Te);return us(r)&&ep(me,Te),me.placeholder=c,ds(me,r,i)}function qi(r){var i=Qe[r];return function(u,c){if(u=qt(u),c=c==null?0:tt(ye(c),292),c&&co(u)){var _=(Oe(u)+"e").split("e"),x=i(_[0]+"e"+(+_[1]+c));return _=(Oe(x)+"e").split("e"),+(_[0]+"e"+(+_[1]-c))}return i(u)}}var Dd=pn&&1/fi(new pn([,-0]))[1]==Dr?function(r){return new pn(r)}:sc;function Vn(r){return function(i){var u=ot(i);return u==Xe?At(i):u==Et?pl(i):ol(i,r(i))}}function fr(r,i,u,c,_,x,k,C){var R=i&Mr;if(!R&&typeof r!="function")throw new bt(Ie);var G=c?c.length:0;if(G||(i&=~(Ut|Ke),c=_=S),k=k===S?k:et(ye(k),0),C=C===S?C:ye(C),G-=_?_.length:0,i&Ke){var V=c,H=_;c=_=S}var X=R?S:as(r),se=[r,i,u,c,_,V,H,x,k,C];if(X&&Xd(se,X),r=se[0],i=se[1],u=se[2],c=se[3],_=se[4],C=se[9]=se[9]===S?R?0:r.length:et(se[9]-G,0),!C&&i&(Ht|kn)&&(i&=~(Ht|kn)),!i||i==Tt)var he=wn(r,i,u);else i==Ht||i==kn?he=Md(r,i,C):(i==Ut||i==(Tt|Ut))&&!_.length?he=Of(r,i,u,c):he=Pi.apply(S,se);var Te=X?zo:ep;return ds(Te(he,se),r,i)}function Go(r,i,u,c){return r===S||nr(r,xr[u])&&!Ne.call(c,u)?i:r}function Vo(r,i,u,c,_,x){return v(r)&&v(i)&&(x.set(i,r),Bi(r,i,S,Vo,x),x.delete(i)),r}function Pd(r){return Q(r)?S:r}function Fo(r,i,u,c,_,x){var k=u&Pt,C=r.length,R=i.length;if(C!=R&&!(k&&R>C))return!1;var G=x.get(r),V=x.get(i);if(G&&V)return G==i&&V==r;var H=-1,X=!0,se=u&Xn?new hn:S;for(x.set(r,i),x.set(i,r);++H<C;){var he=r[H],Te=i[H];if(c)var me=k?c(Te,he,H,i,r,x):c(he,Te,H,r,i,x);if(me!==S){if(me)continue;X=!1;break}if(se){if(!ka(i,function(Ae,Me){if(!An(se,Me)&&(he===Ae||_(he,Ae,u,c,x)))return se.push(Me)})){X=!1;break}}else if(!(he===Te||_(he,Te,u,c,x))){X=!1;break}}return x.delete(r),x.delete(i),X}function Ud(r,i,u,c,_,x,k){switch(u){case dt:if(r.byteLength!=i.byteLength||r.byteOffset!=i.byteOffset)return!1;r=r.buffer,i=i.buffer;case zn:return!(r.byteLength!=i.byteLength||!x(new Da(r),new Da(i)));case lt:case Jr:case ft:return nr(+r,+i);case Yn:return r.name==i.name&&r.message==i.message;case Jn:case ei:return r==i+"";case Xe:var C=At;case Et:var R=c&Pt;if(C||(C=fi),r.size!=i.size&&!R)return!1;var G=k.get(r);if(G)return G==i;c|=Xn,k.set(r,i);var V=Fo(C(r),C(i),c,_,x,k);return k.delete(r),V;case ea:if(cn)return cn.call(r)==cn.call(i)}return!1}function Ho(r,i,u,c,_,x){var k=u&Pt,C=ns(r),R=C.length,G=ns(i),V=G.length;if(R!=V&&!k)return!1;for(var H=R;H--;){var X=C[H];if(!(k?X in i:Ne.call(i,X)))return!1}var se=x.get(r),he=x.get(i);if(se&&he)return se==i&&he==r;var Te=!0;x.set(r,i),x.set(i,r);for(var me=k;++H<R;){X=C[H];var Ae=r[X],Me=i[X];if(c)var ir=k?c(Me,Ae,X,i,r,x):c(Ae,Me,X,r,i,x);if(!(ir===S?Ae===Me||_(Ae,Me,u,c,x):ir)){Te=!1;break}me||(me=X=="constructor")}if(Te&&!me){var Dt=r.constructor,ar=i.constructor;Dt!=ar&&"constructor"in r&&"constructor"in i&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof ar=="function"&&ar instanceof ar)&&(Te=!1)}return x.delete(r),x.delete(i),Te}function cr(r){return Gi(Qo(r,S,su),r+"")}function ns(r){return vo(r,gt,os)}function is(r){return vo(r,Gt,Nd)}var as=xi?function(r){return xi.get(r)}:sc;function $n(r){for(var i=r.name+"",u=fn[i],c=Ne.call(fn,i)?u.length:0;c--;){var _=u[c],x=_.func;if(x==null||x==r)return _.name}return i}function bn(r){var i=Ne.call($,"placeholder")?$:r;return i.placeholder}function pe(){var r=$.iteratee||ic;return r=r===ic?Fa:r,arguments.length?r(arguments[0],arguments[1]):r}function Wi(r,i){var u=r.__data__;return Fd(i)?u[typeof i=="string"?"string":"hash"]:u.map}function ss(r){for(var i=gt(r),u=i.length;u--;){var c=i[u],_=r[c];i[u]=[c,_,Zd(_)]}return i}function zr(r,i){var u=jt(r,i);return pd(u)?u:S}function Ld(r){var i=Ne.call(r,Nr),u=r[Nr];try{r[Nr]=S;var c=!0}catch{}var _=gi.call(r);return c&&(i?r[Nr]=u:delete r[Nr]),_}var os=Pa?function(r){return r==null?[]:(r=qe(r),wr(Pa(r),function(i){return bl.call(r,i)}))}:oc,Nd=Pa?function(r){for(var i=[];r;)vr(i,os(r)),r=yi(r);return i}:oc,ot=yt;(La&&ot(new La(new ArrayBuffer(1)))!=dt||Rn&&ot(new Rn)!=Xe||Na&&ot(Na.resolve())!=bs||pn&&ot(new pn)!=Et||Bn&&ot(new Bn)!=ti)&&(ot=function(r){var i=yt(r),u=i==ct?r.constructor:S,c=u?Ar(u):"";if(c)switch(c){case Al:return dt;case Ol:return Xe;case Rl:return bs;case Bl:return Et;case Ml:return ti}return i});function qd(r,i,u){for(var c=-1,_=u.length;++c<_;){var x=u[c],k=x.size;switch(x.type){case"drop":r+=k;break;case"dropRight":i-=k;break;case"take":i=tt(i,r+k);break;case"takeRight":r=et(r,i-k);break}}return{start:r,end:i}}function Wd(r){var i=r.match(Os);return i?i[1].split(We):[]}function Ko(r,i,u){i=Kr(i,r);for(var c=-1,_=i.length,x=!1;++c<_;){var k=rr(i[c]);if(!(x=r!=null&&u(r,k)))break;r=r[k]}return x||++c!=_?x:(_=r==null?0:r.length,!!_&&I(_)&&hr(k,_)&&(n(r)||t(r)))}function Rf(r){var i=r.length,u=new r.constructor(i);return i&&typeof r[0]=="string"&&Ne.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Zo(r){return typeof r.constructor=="function"&&!Fn(r)?qr(yi(r)):{}}function Gd(r,i,u){var c=r.constructor;switch(i){case zn:return ts(r);case lt:case Jr:return new c(+r);case dt:return kd(r,u);case ri:case ta:case ni:case ii:case ra:case xs:case na:case ia:case _t:return Ad(r,u);case Xe:return new c;case ft:case ei:return new c(r);case Jn:return zd(r);case Et:return new c;case ea:return Cd(r)}}function Vd(r,i){var u=i.length;if(!u)return r;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),r.replace(Wu,`{
/* [wrapped with `+i+`] */
`)}function Bf(r){return n(r)||t(r)||!!(Ce&&r&&r[Ce])}function hr(r,i){var u=typeof r;return i=i??mr,!!i&&(u=="number"||u!="symbol"&&Hu.test(r))&&r>-1&&r%1==0&&r<i}function mt(r,i,u){if(!v(u))return!1;var c=typeof i;return(c=="number"?s(u)&&hr(i,u.length):c=="string"&&i in u)?nr(u[i],r):!1}function jo(r,i){if(n(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||oe(r)?!0:Cs.test(r)||!zs.test(r)||i!=null&&r in qe(i)}function Fd(r){var i=typeof r;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?r!=="__proto__":r===null}function us(r){var i=$n(r),u=$[i];if(typeof u!="function"||!(i in Ee.prototype))return!1;if(r===u)return!0;var c=as(u);return!!c&&r===c[0]}function Hd(r){return!!uo&&uo in r}var Kd=ci?b:uc;function Fn(r){var i=r&&r.constructor,u=typeof i=="function"&&i.prototype||xr;return r===u}function Zd(r){return r===r&&!v(r)}function Xo(r,i){return function(u){return u==null?!1:u[r]===i&&(i!==S||r in qe(u))}}function jd(r){var i=Xi(r,function(c){return u.size===Le&&u.clear(),c}),u=i.cache;return i}function Xd(r,i){var u=r[1],c=i[1],_=u|c,x=_<(Tt|Mr|sr),k=c==sr&&u==Ht||c==sr&&u==Pe&&r[7].length<=i[8]||c==(sr|Pe)&&i[7].length<=i[8]&&u==Ht;if(!(x||k))return r;c&Tt&&(r[2]=i[2],_|=u&Tt?0:Au);var C=i[3];if(C){var R=r[3];r[3]=R?Po(R,C,i[4]):C,r[4]=R?br(r[3],nt):i[4]}return C=i[5],C&&(R=r[5],r[5]=R?Uo(R,C,i[6]):C,r[6]=R?br(r[5],nt):i[6]),C=i[7],C&&(r[7]=C),c&sr&&(r[8]=r[8]==null?i[8]:tt(r[8],i[8])),r[9]==null&&(r[9]=i[9]),r[0]=i[0],r[1]=_,r}function Qd(r){var i=[];if(r!=null)for(var u in qe(r))i.push(u);return i}function Yd(r){return gi.call(r)}function Qo(r,i,u){return i=et(i===S?r.length-1:i,0),function(){for(var c=arguments,_=-1,x=et(c.length-i,0),k=P(x);++_<x;)k[_]=c[i+_];_=-1;for(var C=P(i+1);++_<i;)C[_]=c[_];return C[i]=u(k),U(r,this,C)}}function Yo(r,i){return i.length<2?r:Fr(r,Bt(i,0,-1))}function Jd(r,i){for(var u=r.length,c=tt(i.length,u),_=It(r);c--;){var x=i[c];r[c]=hr(x,u)?_[x]:S}return r}function ls(r,i){if(!(i==="constructor"&&typeof r[i]=="function")&&i!="__proto__")return r[i]}var ep=ps(zo),Cr=Sl||function(r,i){return xe.setTimeout(r,i)},Gi=ps(Co);function ds(r,i,u){var c=i+"";return Gi(r,Vd(c,eu(Wd(c),u)))}function ps(r){var i=0,u=0;return function(){var c=zl(),_=Yi-(c-u);if(u=c,_>0){if(++i>=_f)return arguments[0]}else i=0;return r.apply(S,arguments)}}function Hn(r,i){var u=-1,c=r.length,_=c-1;for(i=i===S?c:i;++u<i;){var x=ko(u,_),k=r[x];r[x]=r[u],r[u]=k}return r.length=i,r}var Jo=jd(function(r){var i=[];return r.charCodeAt(0)===46&&i.push(""),r.replace(oa,function(u,c,_,x){i.push(_?x.replace(la,"$1"):c||u)}),i});function rr(r){if(typeof r=="string"||oe(r))return r;var i=r+"";return i=="0"&&1/r==-Dr?"-0":i}function Ar(r){if(r!=null){try{return hi.call(r)}catch{}try{return r+""}catch{}}return""}function eu(r,i){return kt(wf,function(u){var c="_."+u[0];i&u[1]&&!ce(r,c)&&r.push(c)}),r.sort()}function tu(r){if(r instanceof Ee)return r.clone();var i=new Ot(r.__wrapped__,r.__chain__);return i.__actions__=It(r.__actions__),i.__index__=r.__index__,i.__values__=r.__values__,i}function tp(r,i,u){(u?mt(r,i,u):i===S)?i=1:i=et(ye(i),0);var c=r==null?0:r.length;if(!c||i<1)return[];for(var _=0,x=0,k=P($i(c/i));_<c;)k[x++]=Bt(r,_,_+=i);return k}function ru(r){for(var i=-1,u=r==null?0:r.length,c=0,_=[];++i<u;){var x=r[i];x&&(_[c++]=x)}return _}function rp(){var r=arguments.length;if(!r)return[];for(var i=P(r-1),u=arguments[0],c=r;c--;)i[c-1]=arguments[c];return vr(n(u)?It(u):[u],st(i,1))}var np=be(function(r,i){return o(r)?_n(r,st(i,1,o,!0)):[]}),nu=be(function(r,i){var u=Mt(i);return o(u)&&(u=S),o(r)?_n(r,st(i,1,o,!0),pe(u,2)):[]}),ip=be(function(r,i){var u=Mt(i);return o(u)&&(u=S),o(r)?_n(r,st(i,1,o,!0),S,u):[]});function ap(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===S?1:ye(i),Bt(r,i<0?0:i,c)):[]}function sp(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===S?1:ye(i),i=c-i,Bt(r,0,i<0?0:i)):[]}function op(r,i){return r&&r.length?Mi(r,pe(i,3),!0,!0):[]}function Mf(r,i){return r&&r.length?Mi(r,pe(i,3),!0):[]}function up(r,i,u,c){var _=r==null?0:r.length;return _?(u&&typeof u!="number"&&mt(r,i,u)&&(u=0,c=_),ad(r,i,u,c)):[]}function iu(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=u==null?0:ye(u);return _<0&&(_=et(c+_,0)),pi(r,pe(i,3),_)}function au(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=c-1;return u!==S&&(_=ye(u),_=u<0?et(c+_,0):tt(_,c-1)),pi(r,pe(i,3),_,!0)}function su(r){var i=r==null?0:r.length;return i?st(r,1):[]}function Df(r){var i=r==null?0:r.length;return i?st(r,Dr):[]}function lp(r,i){var u=r==null?0:r.length;return u?(i=i===S?1:ye(i),st(r,i)):[]}function dp(r){for(var i=-1,u=r==null?0:r.length,c={};++i<u;){var _=r[i];c[_[0]]=_[1]}return c}function ou(r){return r&&r.length?r[0]:S}function Pf(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=u==null?0:ye(u);return _<0&&(_=et(c+_,0)),on(r,i,_)}function pp(r){var i=r==null?0:r.length;return i?Bt(r,0,-1):[]}var fp=be(function(r){var i=Fe(r,Ja);return i.length&&i[0]===r[0]?Ln(i):[]}),cp=be(function(r){var i=Mt(r),u=Fe(r,Ja);return i===Mt(u)?i=S:u.pop(),u.length&&u[0]===r[0]?Ln(u,pe(i,2)):[]}),hp=be(function(r){var i=Mt(r),u=Fe(r,Ja);return i=typeof i=="function"?i:S,i&&u.pop(),u.length&&u[0]===r[0]?Ln(u,S,i):[]});function Uf(r,i){return r==null?"":El.call(r,i)}function Mt(r){var i=r==null?0:r.length;return i?r[i-1]:S}function mp(r,i,u){var c=r==null?0:r.length;if(!c)return-1;var _=c;return u!==S&&(_=ye(u),_=_<0?et(c+_,0):tt(_,c-1)),i===i?cl(r,i,_):pi(r,Js,_,!0)}function gp(r,i){return r&&r.length?So(r,ye(i)):S}var uu=be(lu);function lu(r,i){return r&&r.length&&i&&i.length?Ka(r,i):r}function _p(r,i,u){return r&&r.length&&i&&i.length?Ka(r,i,pe(u,2)):r}function yp(r,i,u){return r&&r.length&&i&&i.length?Ka(r,i,S,u):r}var wp=cr(function(r,i){var u=r==null?0:r.length,c=Ei(r,i);return Eo(r,Fe(i,function(_){return hr(_,u)?+_:_}).sort(Do)),c});function vp(r,i){var u=[];if(!(r&&r.length))return u;var c=-1,_=[],x=r.length;for(i=pe(i,3);++c<x;){var k=r[c];i(k,c,r)&&(u.push(k),_.push(c))}return Eo(r,_),u}function fs(r){return r==null?r:Cl.call(r)}function $p(r,i,u){var c=r==null?0:r.length;return c?(u&&typeof u!="number"&&mt(r,i,u)?(i=0,u=c):(i=i==null?0:ye(i),u=u===S?c:ye(u)),Bt(r,i,u)):[]}function bp(r,i){return ja(r,i)}function du(r,i,u){return Xa(r,i,pe(u,2))}function xp(r,i){var u=r==null?0:r.length;if(u){var c=ja(r,i);if(c<u&&nr(r[c],i))return c}return-1}function Ip(r,i){return ja(r,i,!0)}function Sp(r,i,u){return Xa(r,i,pe(u,2),!0)}function Tp(r,i){var u=r==null?0:r.length;if(u){var c=ja(r,i,!0)-1;if(nr(r[c],i))return c}return-1}function Ep(r){return r&&r.length?Qa(r):[]}function kp(r,i){return r&&r.length?Qa(r,pe(i,2)):[]}function zp(r){var i=r==null?0:r.length;return i?Bt(r,1,i):[]}function Lf(r,i,u){return r&&r.length?(i=u||i===S?1:ye(i),Bt(r,0,i<0?0:i)):[]}function Cp(r,i,u){var c=r==null?0:r.length;return c?(i=u||i===S?1:ye(i),i=c-i,Bt(r,i<0?0:i,c)):[]}function Ap(r,i){return r&&r.length?Mi(r,pe(i,3),!1,!0):[]}function Op(r,i){return r&&r.length?Mi(r,pe(i,3)):[]}var Nf=be(function(r){return Er(st(r,1,o,!0))}),Rp=be(function(r){var i=Mt(r);return o(i)&&(i=S),Er(st(r,1,o,!0),pe(i,2))}),Vi=be(function(r){var i=Mt(r);return i=typeof i=="function"?i:S,Er(st(r,1,o,!0),S,i)});function Bp(r){return r&&r.length?Er(r):[]}function pu(r,i){return r&&r.length?Er(r,pe(i,2)):[]}function Mp(r,i){return i=typeof i=="function"?i:S,r&&r.length?Er(r,S,i):[]}function cs(r){if(!(r&&r.length))return[];var i=0;return r=wr(r,function(u){if(o(u))return i=et(u.length,i),!0}),Ct(i,function(u){return Fe(r,za(u))})}function fu(r,i){if(!(r&&r.length))return[];var u=cs(r);return i==null?u:Fe(u,function(c){return U(i,S,c)})}var Dp=be(function(r,i){return o(r)?_n(r,i):[]}),qf=be(function(r){return Ya(wr(r,o))}),Pp=be(function(r){var i=Mt(r);return o(i)&&(i=S),Ya(wr(r,o),pe(i,2))}),Up=be(function(r){var i=Mt(r);return i=typeof i=="function"?i:S,Ya(wr(r,o),S,i)}),Lp=be(cs);function Np(r,i){return Bo(r||[],i||[],Dn)}function Wf(r,i){return Bo(r||[],i||[],qn)}var cu=be(function(r){var i=r.length,u=i>1?r[i-1]:S;return u=typeof u=="function"?(r.pop(),u):S,fu(r,u)});function hu(r){var i=$(r);return i.__chain__=!0,i}function qp(r,i){return i(r),r}function Fi(r,i){return i(r)}var Wp=cr(function(r){var i=r.length,u=i?r[0]:0,c=this.__wrapped__,_=function(x){return Ei(x,r)};return i>1||this.__actions__.length||!(c instanceof Ee)||!hr(u)?this.thru(_):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:Fi,args:[_],thisArg:S}),new Ot(c,this.__chain__).thru(function(x){return i&&!x.length&&x.push(S),x}))});function Gf(){return hu(this)}function Gp(){return new Ot(this.value(),this.__chain__)}function Vp(){this.__values__===S&&(this.__values__=ve(this.value()));var r=this.__index__>=this.__values__.length,i=r?S:this.__values__[this.__index__++];return{done:r,value:i}}function Fp(){return this}function Vf(r){for(var i,u=this;u instanceof Si;){var c=tu(u);c.__index__=0,c.__values__=S,i?_.__wrapped__=c:i=c;var _=c;u=u.__wrapped__}return _.__wrapped__=r,i}function Hp(){var r=this.__wrapped__;if(r instanceof Ee){var i=r;return this.__actions__.length&&(i=new Ee(this)),i=i.reverse(),i.__actions__.push({func:Fi,args:[fs],thisArg:S}),new Ot(i,this.__chain__)}return this.thru(fs)}function Ff(){return Sd(this.__wrapped__,this.__actions__)}var Kp=Di(function(r,i,u){Ne.call(r,u)?++r[u]:Yt(r,u,1)});function Hf(r,i,u){var c=n(r)?Ys:wo;return u&&mt(r,i,u)&&(i=S),c(r,pe(i,3))}function Zp(r,i){var u=n(r)?wr:sd;return u(r,pe(i,3))}var jp=Lo(iu),Xp=Lo(au);function Qp(r,i){return st(Kn(r,i),1)}function Yp(r,i){return st(Kn(r,i),Dr)}function Kf(r,i,u){return u=u===S?1:ye(u),st(Kn(r,i),u)}function mu(r,i){var u=n(r)?kt:Tr;return u(r,pe(i,3))}function Hi(r,i){var u=n(r)?Qs:ki;return u(r,pe(i,3))}var Jp=Di(function(r,i,u){Ne.call(r,u)?r[u].push(i):Yt(r,u,[i])});function ef(r,i,u,c){r=s(r)?r:_s(r),u=u&&!c?ye(u):0;var _=r.length;return u<0&&(u=et(_+u,0)),re(r)?u<=_&&r.indexOf(i,u)>-1:!!_&&on(r,i,u)>-1}var Zf=be(function(r,i,u){var c=-1,_=typeof i=="function",x=s(r)?P(r.length):[];return Tr(r,function(k){x[++c]=_?U(i,k,u):Hr(k,i,u)}),x}),tf=Di(function(r,i,u){Yt(r,u,i)});function Kn(r,i){var u=n(r)?Fe:xo;return u(r,pe(i,3))}function gu(r,i,u,c){return r==null?[]:(n(i)||(i=i==null?[]:[i]),u=c?S:u,n(u)||(u=u==null?[]:[u]),yd(r,i,u))}var jr=Di(function(r,i,u){r[u?0:1].push(i)},function(){return[[],[]]});function rf(r,i,u){var c=n(r)?Ea:to,_=arguments.length<3;return c(r,pe(i,4),u,_,Tr)}function _u(r,i,u){var c=n(r)?rl:to,_=arguments.length<3;return c(r,pe(i,4),u,_,ki)}function hs(r,i){var u=n(r)?wr:sd;return u(r,Qi(pe(i,3)))}function yu(r){var i=n(r)?Gr:$d;return i(r)}function wu(r,i,u){(u?mt(r,i,u):i===S)?i=1:i=ye(i);var c=n(r)?go:bd;return c(r,i)}function vu(r){var i=n(r)?gn:xd;return i(r)}function $u(r){if(r==null)return 0;if(s(r))return re(r)?ln(r):r.length;var i=ot(r);return i==Xe||i==Et?r.size:Ha(r).length}function bu(r,i,u){var c=n(r)?ka:Id;return u&&mt(r,i,u)&&(i=S),c(r,pe(i,3))}var xu=be(function(r,i){if(r==null)return[];var u=i.length;return u>1&&mt(r,i[0],i[1])?i=[]:u>2&&mt(i[0],i[1],i[2])&&(i=[i[0]]),yd(r,st(i,1),[])}),Ki=Il||function(){return xe.Date.now()};function Xr(r,i){if(typeof i!="function")throw new bt(Ie);return r=ye(r),function(){if(--r<1)return i.apply(this,arguments)}}function wt(r,i,u){return i=u?S:i,i=r&&i==null?r.length:i,fr(r,sr,S,S,S,S,i)}function xn(r,i){var u;if(typeof i!="function")throw new bt(Ie);return r=ye(r),function(){return--r>0&&(u=i.apply(this,arguments)),r<=1&&(i=S),u}}var In=be(function(r,i,u){var c=Tt;if(u.length){var _=br(u,bn(In));c|=Ut}return fr(r,c,i,u,_)}),Zn=be(function(r,i,u){var c=Tt|Mr;if(u.length){var _=br(u,bn(Zn));c|=Ut}return fr(i,c,r,u,_)});function Zi(r,i,u){i=u?S:i;var c=fr(r,Ht,S,S,S,S,S,i);return c.placeholder=Zi.placeholder,c}function ms(r,i,u){i=u?S:i;var c=fr(r,kn,S,S,S,S,S,i);return c.placeholder=ms.placeholder,c}function ji(r,i,u){var c,_,x,k,C,R,G=0,V=!1,H=!1,X=!0;if(typeof r!="function")throw new bt(Ie);i=qt(i)||0,v(u)&&(V=!!u.leading,H="maxWait"in u,x=H?et(qt(u.maxWait)||0,i):x,X="trailing"in u?!!u.trailing:X);function se(it){var Rr=c,En=_;return c=_=S,G=it,k=r.apply(En,Rr),k}function he(it){return G=it,C=Cr(Ae,i),V?se(it):k}function Te(it){var Rr=it-R,En=it-G,yc=i-Rr;return H?tt(yc,x-En):yc}function me(it){var Rr=it-R,En=it-G;return R===S||Rr>=i||Rr<0||H&&En>=x}function Ae(){var it=Ki();if(me(it))return Me(it);C=Cr(Ae,Te(it))}function Me(it){return C=S,X&&c?se(it):(c=_=S,k)}function ir(){C!==S&&Mo(C),G=0,c=R=_=C=S}function Dt(){return C===S?k:Me(Ki())}function ar(){var it=Ki(),Rr=me(it);if(c=arguments,_=this,R=it,Rr){if(C===S)return he(R);if(H)return Mo(C),C=Cr(Ae,i),se(R)}return C===S&&(C=Cr(Ae,i)),k}return ar.cancel=ir,ar.flush=Dt,ar}var Sn=be(function(r,i){return yo(r,1,i)}),Tn=be(function(r,i,u){return yo(r,qt(i)||0,u)});function nf(r){return fr(r,ws)}function Xi(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new bt(Ie);var u=function(){var c=arguments,_=i?i.apply(this,c):c[0],x=u.cache;if(x.has(_))return x.get(_);var k=r.apply(this,c);return u.cache=x.set(_,k)||x,k};return u.cache=new(Xi.Cache||dr),u}Xi.Cache=dr;function Qi(r){if(typeof r!="function")throw new bt(Ie);return function(){var i=arguments;switch(i.length){case 0:return!r.call(this);case 1:return!r.call(this,i[0]);case 2:return!r.call(this,i[0],i[1]);case 3:return!r.call(this,i[0],i[1],i[2])}return!r.apply(this,i)}}function af(r){return xn(2,r)}var sf=Td(function(r,i){i=i.length==1&&n(i[0])?Fe(i[0],$t(pe())):Fe(st(i,1),$t(pe()));var u=i.length;return be(function(c){for(var _=-1,x=tt(c.length,u);++_<x;)c[_]=i[_].call(this,c[_]);return U(r,this,c)})}),gs=be(function(r,i){var u=br(i,bn(gs));return fr(r,Ut,S,i,u)}),Iu=be(function(r,i){var u=br(i,bn(Iu));return fr(r,Ke,S,i,u)}),of=cr(function(r,i){return fr(r,Pe,S,S,S,i)});function uf(r,i){if(typeof r!="function")throw new bt(Ie);return i=i===S?i:ye(i),be(r,i)}function Su(r,i){if(typeof r!="function")throw new bt(Ie);return i=i==null?0:et(ye(i),0),be(function(u){var c=u[i],_=kr(u,0,i);return c&&vr(_,c),U(r,this,_)})}function lf(r,i,u){var c=!0,_=!0;if(typeof r!="function")throw new bt(Ie);return v(u)&&(c="leading"in u?!!u.leading:c,_="trailing"in u?!!u.trailing:_),ji(r,i,{leading:c,maxWait:i,trailing:_})}function df(r){return wt(r,1)}function jf(r,i){return gs(es(i),r)}function pf(){if(!arguments.length)return[];var r=arguments[0];return n(r)?r:[r]}function Tu(r){return Rt(r,St)}function Eu(r,i){return i=typeof i=="function"?i:S,Rt(r,St,i)}function ff(r){return Rt(r,je|St)}function Xf(r,i){return i=typeof i=="function"?i:S,Rt(r,je|St,i)}function cf(r,i){return i==null||qa(r,i,gt(i))}function nr(r,i){return r===i||r!==r&&i!==i}var Qf=Ni(Wa),e=Ni(function(r,i){return r>=i}),t=Ga(function(){return arguments}())?Ga:function(r){return E(r)&&Ne.call(r,"callee")&&!bl.call(r,"callee")},n=P.isArray,a=He?$t(He):$o;function s(r){return r!=null&&I(r.length)&&!b(r)}function o(r){return E(r)&&s(r)}function l(r){return r===!0||r===!1||E(r)&&yt(r)==lt}var d=Tl||uc,p=Sa?$t(Sa):dd;function f(r){return E(r)&&r.nodeType===1&&!Q(r)}function h(r){if(r==null)return!0;if(s(r)&&(n(r)||typeof r=="string"||typeof r.splice=="function"||d(r)||J(r)||t(r)))return!r.length;var i=ot(r);if(i==Xe||i==Et)return!r.size;if(Fn(r))return!Ha(r).length;for(var u in r)if(Ne.call(r,u))return!1;return!0}function m(r,i){return Nn(r,i)}function g(r,i,u){u=typeof u=="function"?u:S;var c=u?u(r,i):S;return c===S?Nn(r,i,S,u):!!c}function y(r){if(!E(r))return!1;var i=yt(r);return i==Yn||i==Kt||typeof r.message=="string"&&typeof r.name=="string"&&!Q(r)}function w(r){return typeof r=="number"&&co(r)}function b(r){if(!v(r))return!1;var i=yt(r);return i==Pr||i==Ji||i==vf||i==Pu}function T(r){return typeof r=="number"&&r==ye(r)}function I(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=mr}function v(r){var i=typeof r;return r!=null&&(i=="object"||i=="function")}function E(r){return r!=null&&typeof r=="object"}var z=sn?$t(sn):Af;function A(r,i){return r===i||Va(r,i,ss(i))}function M(r,i,u){return u=typeof u=="function"?u:S,Va(r,i,ss(i),u)}function B(r){return ae(r)&&r!=+r}function L(r){if(Kd(r))throw new we(fe);return pd(r)}function q(r){return r===null}function K(r){return r==null}function ae(r){return typeof r=="number"||E(r)&&yt(r)==ft}function Q(r){if(!E(r)||yt(r)!=ct)return!1;var i=yi(r);if(i===null)return!0;var u=Ne.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&hi.call(u)==lo}var ne=yr?$t(yr):fd;function ke(r){return T(r)&&r>=-mr&&r<=mr}var _e=te?$t(te):cd;function re(r){return typeof r=="string"||!n(r)&&E(r)&&yt(r)==ei}function oe(r){return typeof r=="symbol"||E(r)&&yt(r)==ea}var J=Cn?$t(Cn):hd;function le(r){return r===S}function pt(r){return E(r)&&ot(r)==ti}function W(r){return E(r)&&yt(r)==bf}var Z=Ni(Ri),ie=Ni(function(r,i){return r<=i});function ve(r){if(!r)return[];if(s(r))return re(r)?Lt(r):It(r);if(On&&r[On])return ao(r[On]());var i=ot(r),u=i==Xe?At:i==Et?fi:_s;return u(r)}function Ye(r){if(!r)return r===0?r:0;if(r=qt(r),r===Dr||r===-Dr){var i=r<0?-1:1;return i*yf}return r===r?r:0}function ye(r){var i=Ye(r),u=i%1;return i===i?u?i-u:i:0}function ku(r){return r?Vr(ye(r),0,vt):0}function qt(r){if(typeof r=="number")return r;if(oe(r))return or;if(v(r)){var i=typeof r.valueOf=="function"?r.valueOf():r;r=v(i)?i+"":i}if(typeof r!="string")return r===0?r:+r;r=ro(r);var u=xf.test(r);return u||Fu.test(r)?Tf(r.slice(2),u?2:8):Gu.test(r)?or:+r}function Or(r){return er(r,Gt(r))}function Qr(r){return r?Vr(ye(r),-mr,mr):r===0?r:0}function Oe(r){return r==null?"":xt(r)}var ut=Wn(function(r,i){if(Fn(i)||s(i)){er(i,gt(i),r);return}for(var u in i)Ne.call(i,u)&&Dn(r,u,i[u])}),Ze=Wn(function(r,i){er(i,Gt(i),r)}),Wt=Wn(function(r,i,u,c){er(i,Gt(i),r,c)}),Yf=Wn(function(r,i,u,c){er(i,gt(i),r,c)}),Jf=cr(Ei);function zc(r,i){var u=qr(r);return i==null?u:id(u,i)}var Cc=be(function(r,i){r=qe(r);var u=-1,c=i.length,_=c>2?i[2]:S;for(_&&mt(i[0],i[1],_)&&(c=1);++u<c;)for(var x=i[u],k=Gt(x),C=-1,R=k.length;++C<R;){var G=k[C],V=r[G];(V===S||nr(V,xr[G])&&!Ne.call(r,G))&&(r[G]=x[G])}return r}),Ac=be(function(r){return r.push(S,Vo),U(lc,S,r)});function Oc(r,i){return $r(r,pe(i,3),Jt)}function Rc(r,i){return $r(r,pe(i,3),Ai)}function Bc(r,i){return r==null?r:Ci(r,pe(i,3),Gt)}function Mc(r,i){return r==null?r:Un(r,pe(i,3),Gt)}function Dc(r,i){return r&&Jt(r,pe(i,3))}function Pc(r,i){return r&&Ai(r,pe(i,3))}function Uc(r){return r==null?[]:Oi(r,gt(r))}function Lc(r){return r==null?[]:Oi(r,Gt(r))}function ec(r,i,u){var c=r==null?S:Fr(r,i);return c===S?u:c}function Nc(r,i){return r!=null&&Ko(r,i,od)}function tc(r,i){return r!=null&&Ko(r,i,Cf)}var qc=qo(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=gi.call(i)),r[i]=u},nc(Vt)),Wc=qo(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=gi.call(i)),Ne.call(r,i)?r[i].push(u):r[i]=[u]},pe),Gc=be(Hr);function gt(r){return s(r)?Wr(r):Ha(r)}function Gt(r){return s(r)?Wr(r,!0):md(r)}function Vc(r,i){var u={};return i=pe(i,3),Jt(r,function(c,_,x){Yt(u,i(c,_,x),c)}),u}function Fc(r,i){var u={};return i=pe(i,3),Jt(r,function(c,_,x){Yt(u,_,i(c,_,x))}),u}var Hc=Wn(function(r,i,u){Bi(r,i,u)}),lc=Wn(function(r,i,u,c){Bi(r,i,u,c)}),Kc=cr(function(r,i){var u={};if(r==null)return u;var c=!1;i=Fe(i,function(x){return x=Kr(x,r),c||(c=x.length>1),x}),er(r,is(r),u),c&&(u=Rt(u,je|Br|St,Pd));for(var _=i.length;_--;)Oo(u,i[_]);return u});function Zc(r,i){return dc(r,Qi(pe(i)))}var jc=cr(function(r,i){return r==null?{}:wd(r,i)});function dc(r,i){if(r==null)return{};var u=Fe(is(r),function(c){return[c]});return i=pe(i),To(r,u,function(c,_){return i(c,_[0])})}function Xc(r,i,u){i=Kr(i,r);var c=-1,_=i.length;for(_||(_=1,r=S);++c<_;){var x=r==null?S:r[rr(i[c])];x===S&&(c=_,x=u),r=b(x)?x.call(r):x}return r}function Qc(r,i,u){return r==null?r:qn(r,i,u)}function Yc(r,i,u,c){return c=typeof c=="function"?c:S,r==null?r:qn(r,i,u,c)}var pc=Vn(gt),fc=Vn(Gt);function Jc(r,i,u){var c=n(r),_=c||d(r)||J(r);if(i=pe(i,4),u==null){var x=r&&r.constructor;_?u=c?new x:[]:v(r)?u=b(x)?qr(yi(r)):{}:u={}}return(_?kt:Jt)(r,function(k,C,R){return i(u,k,C,R)}),u}function eh(r,i){return r==null?!0:Oo(r,i)}function th(r,i,u){return r==null?r:Ro(r,i,es(u))}function rh(r,i,u,c){return c=typeof c=="function"?c:S,r==null?r:Ro(r,i,es(u),c)}function _s(r){return r==null?[]:Oa(r,gt(r))}function nh(r){return r==null?[]:Oa(r,Gt(r))}function ih(r,i,u){return u===S&&(u=i,i=S),u!==S&&(u=qt(u),u=u===u?u:0),i!==S&&(i=qt(i),i=i===i?i:0),Vr(qt(r),i,u)}function ah(r,i,u){return i=Ye(i),u===S?(u=i,i=0):u=Ye(u),r=qt(r),ud(r,i,u)}function sh(r,i,u){if(u&&typeof u!="boolean"&&mt(r,i,u)&&(i=u=S),u===S&&(typeof i=="boolean"?(u=i,i=S):typeof r=="boolean"&&(u=r,r=S)),r===S&&i===S?(r=0,i=1):(r=Ye(r),i===S?(i=r,r=0):i=Ye(i)),r>i){var c=r;r=i,i=c}if(u||r%1||i%1){var _=ho();return tt(r+_*(i-r+tl("1e-"+((_+"").length-1))),i)}return ko(r,i)}var oh=vn(function(r,i,u){return i=i.toLowerCase(),r+(u?cc(i):i)});function cc(r){return rc(Oe(r).toLowerCase())}function hc(r){return r=Oe(r),r&&r.replace(ai,ll).replace(di,"")}function uh(r,i,u){r=Oe(r),i=xt(i);var c=r.length;u=u===S?c:Vr(ye(u),0,c);var _=u;return u-=i.length,u>=0&&r.slice(u,_)==i}function lh(r){return r=Oe(r),r&&Ts.test(r)?r.replace(sa,dl):r}function dh(r){return r=Oe(r),r&&As.test(r)?r.replace(en,"\\$&"):r}var ph=vn(function(r,i,u){return r+(u?"-":"")+i.toLowerCase()}),fh=vn(function(r,i,u){return r+(u?" ":"")+i.toLowerCase()}),ch=Zr("toLowerCase");function hh(r,i,u){r=Oe(r),i=ye(i);var c=i?ln(r):0;if(!i||c>=i)return r;var _=(i-c)/2;return Li(bi(_),u)+r+Li($i(_),u)}function mh(r,i,u){r=Oe(r),i=ye(i);var c=i?ln(r):0;return i&&c<i?r+Li(i-c,u):r}function gh(r,i,u){r=Oe(r),i=ye(i);var c=i?ln(r):0;return i&&c<i?Li(i-c,u)+r:r}function _h(r,i,u){return u||i==null?i=0:i&&(i=+i),Ua(Oe(r).replace(ua,""),i||0)}function yh(r,i,u){return(u?mt(r,i,u):i===S)?i=1:i=ye(i),yn(Oe(r),i)}function wh(){var r=arguments,i=Oe(r[0]);return r.length<3?i:i.replace(r[1],r[2])}var vh=vn(function(r,i,u){return r+(u?"_":"")+i.toLowerCase()});function $h(r,i,u){return u&&typeof u!="number"&&mt(r,i,u)&&(i=u=S),u=u===S?vt:u>>>0,u?(r=Oe(r),r&&(typeof i=="string"||i!=null&&!ne(i))&&(i=xt(i),!i&&un(r))?kr(Lt(r),0,u):r.split(i,u)):[]}var bh=vn(function(r,i,u){return r+(u?" ":"")+rc(i)});function xh(r,i,u){return r=Oe(r),u=u==null?0:Vr(ye(u),0,r.length),i=xt(i),r.slice(u,u+i.length)==i}function Ih(r,i,u){var c=$.templateSettings;u&&mt(r,i,u)&&(i=S),r=Oe(r),i=Wt({},i,c,Go);var _=Wt({},i.imports,c.imports,Go),x=gt(_),k=Oa(_,x),C,R,G=0,V=i.interpolate||si,H="__p += '",X=Ba((i.escape||si).source+"|"+V.source+"|"+(V===ks?Ue:si).source+"|"+(i.evaluate||si).source+"|$","g"),se="//# sourceURL="+(Ne.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ia+"]")+`
`;r.replace(X,function(me,Ae,Me,ir,Dt,ar){return Me||(Me=ir),H+=r.slice(G,ar).replace(Ku,Ef),Ae&&(C=!0,H+=`' +
__e(`+Ae+`) +
'`),Dt&&(R=!0,H+=`';
`+Dt+`;
__p += '`),Me&&(H+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),G=ar+me.length,me}),H+=`';
`;var he=Ne.call(i,"variable")&&i.variable;if(!he)H=`with (obj) {
`+H+`
}
`;else if(Zt.test(he))throw new we(Ft);H=(R?H.replace(Is,""):H).replace(aa,"$1").replace(Uu,"$1;"),H="function("+(he||"obj")+`) {
`+(he?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(R?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var Te=gc(function(){return De(x,se+"return "+H).apply(S,k)});if(Te.source=H,y(Te))throw Te;return Te}function Sh(r){return Oe(r).toLowerCase()}function Th(r){return Oe(r).toUpperCase()}function Eh(r,i,u){if(r=Oe(r),r&&(u||i===S))return ro(r);if(!r||!(i=xt(i)))return r;var c=Lt(r),_=Lt(i),x=no(c,_),k=io(c,_)+1;return kr(c,x,k).join("")}function kh(r,i,u){if(r=Oe(r),r&&(u||i===S))return r.slice(0,oo(r)+1);if(!r||!(i=xt(i)))return r;var c=Lt(r),_=io(c,Lt(i))+1;return kr(c,0,_).join("")}function zh(r,i,u){if(r=Oe(r),r&&(u||i===S))return r.replace(ua,"");if(!r||!(i=xt(i)))return r;var c=Lt(r),_=no(c,Lt(i));return kr(c,_).join("")}function Ch(r,i){var u=Ou,c=Ru;if(v(i)){var _="separator"in i?i.separator:_;u="length"in i?ye(i.length):u,c="omission"in i?xt(i.omission):c}r=Oe(r);var x=r.length;if(un(r)){var k=Lt(r);x=k.length}if(u>=x)return r;var C=u-ln(c);if(C<1)return c;var R=k?kr(k,0,C).join(""):r.slice(0,C);if(_===S)return R+c;if(k&&(C+=R.length-C),ne(_)){if(r.slice(C).search(_)){var G,V=R;for(_.global||(_=Ba(_.source,Oe(da.exec(_))+"g")),_.lastIndex=0;G=_.exec(V);)var H=G.index;R=R.slice(0,H===S?C:H)}}else if(r.indexOf(xt(_),C)!=C){var X=R.lastIndexOf(_);X>-1&&(R=R.slice(0,X))}return R+c}function Ah(r){return r=Oe(r),r&&Lu.test(r)?r.replace(Ss,hl):r}var Oh=vn(function(r,i,u){return r+(u?" ":"")+i.toUpperCase()}),rc=Zr("toUpperCase");function mc(r,i,u){return r=Oe(r),i=u?S:i,i===S?Ra(r)?gl(r):il(r):r.match(i)||[]}var gc=be(function(r,i){try{return U(r,S,i)}catch(u){return y(u)?u:new we(u)}}),Rh=cr(function(r,i){return kt(i,function(u){u=rr(u),Yt(r,u,In(r[u],r))}),r});function Bh(r){var i=r==null?0:r.length,u=pe();return r=i?Fe(r,function(c){if(typeof c[1]!="function")throw new bt(Ie);return[u(c[0]),c[1]]}):[],be(function(c){for(var _=-1;++_<i;){var x=r[_];if(U(x[0],this,c))return U(x[1],this,c)}})}function Mh(r){return _o(Rt(r,je))}function nc(r){return function(){return r}}function Dh(r,i){return r==null||r!==r?i:r}var Ph=No(),Uh=No(!0);function Vt(r){return r}function ic(r){return Fa(typeof r=="function"?r:Rt(r,je))}function Lh(r){return Io(Rt(r,je))}function Nh(r,i){return gd(r,Rt(i,je))}var qh=be(function(r,i){return function(u){return Hr(u,r,i)}}),Wh=be(function(r,i){return function(u){return Hr(r,u,i)}});function ac(r,i,u){var c=gt(i),_=Oi(i,c);u==null&&!(v(i)&&(_.length||!c.length))&&(u=i,i=r,r=this,_=Oi(i,gt(i)));var x=!(v(u)&&"chain"in u)||!!u.chain,k=b(r);return kt(_,function(C){var R=i[C];r[C]=R,k&&(r.prototype[C]=function(){var G=this.__chain__;if(x||G){var V=r(this.__wrapped__),H=V.__actions__=It(this.__actions__);return H.push({func:R,args:arguments,thisArg:r}),V.__chain__=G,V}return R.apply(r,vr([this.value()],arguments))})}),r}function Gh(){return xe._===this&&(xe._=vl),this}function sc(){}function Vh(r){return r=ye(r),be(function(i){return So(i,r)})}var Fh=rs(Fe),Hh=rs(Ys),Kh=rs(ka);function _c(r){return jo(r)?za(rr(r)):vd(r)}function Zh(r){return function(i){return r==null?S:Fr(r,i)}}var jh=ht(),Xh=ht(!0);function oc(){return[]}function uc(){return!1}function Qh(){return{}}function Yh(){return""}function Jh(){return!0}function em(r,i){if(r=ye(r),r<1||r>mr)return[];var u=vt,c=tt(r,vt);i=pe(i),r-=vt;for(var _=Ct(c,i);++u<r;)i(u);return _}function tm(r){return n(r)?Fe(r,rr):oe(r)?[r]:It(Jo(Oe(r)))}function rm(r){var i=++mi;return Oe(r)+i}var nm=Ui(function(r,i){return r+i},0),im=qi("ceil"),am=Ui(function(r,i){return r/i},1),sm=qi("floor");function om(r){return r&&r.length?zi(r,Vt,Wa):S}function um(r,i){return r&&r.length?zi(r,pe(i,2),Wa):S}function lm(r){return eo(r,Vt)}function dm(r,i){return eo(r,pe(i,2))}function pm(r){return r&&r.length?zi(r,Vt,Ri):S}function fm(r,i){return r&&r.length?zi(r,pe(i,2),Ri):S}var cm=Ui(function(r,i){return r*i},1),hm=qi("round"),mm=Ui(function(r,i){return r-i},0);function gm(r){return r&&r.length?Aa(r,Vt):0}function _m(r,i){return r&&r.length?Aa(r,pe(i,2)):0}return $.after=Xr,$.ary=wt,$.assign=ut,$.assignIn=Ze,$.assignInWith=Wt,$.assignWith=Yf,$.at=Jf,$.before=xn,$.bind=In,$.bindAll=Rh,$.bindKey=Zn,$.castArray=pf,$.chain=hu,$.chunk=tp,$.compact=ru,$.concat=rp,$.cond=Bh,$.conforms=Mh,$.constant=nc,$.countBy=Kp,$.create=zc,$.curry=Zi,$.curryRight=ms,$.debounce=ji,$.defaults=Cc,$.defaultsDeep=Ac,$.defer=Sn,$.delay=Tn,$.difference=np,$.differenceBy=nu,$.differenceWith=ip,$.drop=ap,$.dropRight=sp,$.dropRightWhile=op,$.dropWhile=Mf,$.fill=up,$.filter=Zp,$.flatMap=Qp,$.flatMapDeep=Yp,$.flatMapDepth=Kf,$.flatten=su,$.flattenDeep=Df,$.flattenDepth=lp,$.flip=nf,$.flow=Ph,$.flowRight=Uh,$.fromPairs=dp,$.functions=Uc,$.functionsIn=Lc,$.groupBy=Jp,$.initial=pp,$.intersection=fp,$.intersectionBy=cp,$.intersectionWith=hp,$.invert=qc,$.invertBy=Wc,$.invokeMap=Zf,$.iteratee=ic,$.keyBy=tf,$.keys=gt,$.keysIn=Gt,$.map=Kn,$.mapKeys=Vc,$.mapValues=Fc,$.matches=Lh,$.matchesProperty=Nh,$.memoize=Xi,$.merge=Hc,$.mergeWith=lc,$.method=qh,$.methodOf=Wh,$.mixin=ac,$.negate=Qi,$.nthArg=Vh,$.omit=Kc,$.omitBy=Zc,$.once=af,$.orderBy=gu,$.over=Fh,$.overArgs=sf,$.overEvery=Hh,$.overSome=Kh,$.partial=gs,$.partialRight=Iu,$.partition=jr,$.pick=jc,$.pickBy=dc,$.property=_c,$.propertyOf=Zh,$.pull=uu,$.pullAll=lu,$.pullAllBy=_p,$.pullAllWith=yp,$.pullAt=wp,$.range=jh,$.rangeRight=Xh,$.rearg=of,$.reject=hs,$.remove=vp,$.rest=uf,$.reverse=fs,$.sampleSize=wu,$.set=Qc,$.setWith=Yc,$.shuffle=vu,$.slice=$p,$.sortBy=xu,$.sortedUniq=Ep,$.sortedUniqBy=kp,$.split=$h,$.spread=Su,$.tail=zp,$.take=Lf,$.takeRight=Cp,$.takeRightWhile=Ap,$.takeWhile=Op,$.tap=qp,$.throttle=lf,$.thru=Fi,$.toArray=ve,$.toPairs=pc,$.toPairsIn=fc,$.toPath=tm,$.toPlainObject=Or,$.transform=Jc,$.unary=df,$.union=Nf,$.unionBy=Rp,$.unionWith=Vi,$.uniq=Bp,$.uniqBy=pu,$.uniqWith=Mp,$.unset=eh,$.unzip=cs,$.unzipWith=fu,$.update=th,$.updateWith=rh,$.values=_s,$.valuesIn=nh,$.without=Dp,$.words=mc,$.wrap=jf,$.xor=qf,$.xorBy=Pp,$.xorWith=Up,$.zip=Lp,$.zipObject=Np,$.zipObjectDeep=Wf,$.zipWith=cu,$.entries=pc,$.entriesIn=fc,$.extend=Ze,$.extendWith=Wt,ac($,$),$.add=nm,$.attempt=gc,$.camelCase=oh,$.capitalize=cc,$.ceil=im,$.clamp=ih,$.clone=Tu,$.cloneDeep=ff,$.cloneDeepWith=Xf,$.cloneWith=Eu,$.conformsTo=cf,$.deburr=hc,$.defaultTo=Dh,$.divide=am,$.endsWith=uh,$.eq=nr,$.escape=lh,$.escapeRegExp=dh,$.every=Hf,$.find=jp,$.findIndex=iu,$.findKey=Oc,$.findLast=Xp,$.findLastIndex=au,$.findLastKey=Rc,$.floor=sm,$.forEach=mu,$.forEachRight=Hi,$.forIn=Bc,$.forInRight=Mc,$.forOwn=Dc,$.forOwnRight=Pc,$.get=ec,$.gt=Qf,$.gte=e,$.has=Nc,$.hasIn=tc,$.head=ou,$.identity=Vt,$.includes=ef,$.indexOf=Pf,$.inRange=ah,$.invoke=Gc,$.isArguments=t,$.isArray=n,$.isArrayBuffer=a,$.isArrayLike=s,$.isArrayLikeObject=o,$.isBoolean=l,$.isBuffer=d,$.isDate=p,$.isElement=f,$.isEmpty=h,$.isEqual=m,$.isEqualWith=g,$.isError=y,$.isFinite=w,$.isFunction=b,$.isInteger=T,$.isLength=I,$.isMap=z,$.isMatch=A,$.isMatchWith=M,$.isNaN=B,$.isNative=L,$.isNil=K,$.isNull=q,$.isNumber=ae,$.isObject=v,$.isObjectLike=E,$.isPlainObject=Q,$.isRegExp=ne,$.isSafeInteger=ke,$.isSet=_e,$.isString=re,$.isSymbol=oe,$.isTypedArray=J,$.isUndefined=le,$.isWeakMap=pt,$.isWeakSet=W,$.join=Uf,$.kebabCase=ph,$.last=Mt,$.lastIndexOf=mp,$.lowerCase=fh,$.lowerFirst=ch,$.lt=Z,$.lte=ie,$.max=om,$.maxBy=um,$.mean=lm,$.meanBy=dm,$.min=pm,$.minBy=fm,$.stubArray=oc,$.stubFalse=uc,$.stubObject=Qh,$.stubString=Yh,$.stubTrue=Jh,$.multiply=cm,$.nth=gp,$.noConflict=Gh,$.noop=sc,$.now=Ki,$.pad=hh,$.padEnd=mh,$.padStart=gh,$.parseInt=_h,$.random=sh,$.reduce=rf,$.reduceRight=_u,$.repeat=yh,$.replace=wh,$.result=Xc,$.round=hm,$.runInContext=O,$.sample=yu,$.size=$u,$.snakeCase=vh,$.some=bu,$.sortedIndex=bp,$.sortedIndexBy=du,$.sortedIndexOf=xp,$.sortedLastIndex=Ip,$.sortedLastIndexBy=Sp,$.sortedLastIndexOf=Tp,$.startCase=bh,$.startsWith=xh,$.subtract=mm,$.sum=gm,$.sumBy=_m,$.template=Ih,$.times=em,$.toFinite=Ye,$.toInteger=ye,$.toLength=ku,$.toLower=Sh,$.toNumber=qt,$.toSafeInteger=Qr,$.toString=Oe,$.toUpper=Th,$.trim=Eh,$.trimEnd=kh,$.trimStart=zh,$.truncate=Ch,$.unescape=Ah,$.uniqueId=rm,$.upperCase=Oh,$.upperFirst=rc,$.each=mu,$.eachRight=Hi,$.first=ou,ac($,function(){var r={};return Jt($,function(i,u){Ne.call($.prototype,u)||(r[u]=i)}),r}(),{chain:!1}),$.VERSION=ge,kt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){$[r].placeholder=$}),kt(["drop","take"],function(r,i){Ee.prototype[r]=function(u){u=u===S?1:et(ye(u),0);var c=this.__filtered__&&!i?new Ee(this):this.clone();return c.__filtered__?c.__takeCount__=tt(u,c.__takeCount__):c.__views__.push({size:tt(u,vt),type:r+(c.__dir__<0?"Right":"")}),c},Ee.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),kt(["filter","map","takeWhile"],function(r,i){var u=i+1,c=u==vs||u==Mu;Ee.prototype[r]=function(_){var x=this.clone();return x.__iteratees__.push({iteratee:pe(_,3),type:u}),x.__filtered__=x.__filtered__||c,x}}),kt(["head","last"],function(r,i){var u="take"+(i?"Right":"");Ee.prototype[r]=function(){return this[u](1).value()[0]}}),kt(["initial","tail"],function(r,i){var u="drop"+(i?"":"Right");Ee.prototype[r]=function(){return this.__filtered__?new Ee(this):this[u](1)}}),Ee.prototype.compact=function(){return this.filter(Vt)},Ee.prototype.find=function(r){return this.filter(r).head()},Ee.prototype.findLast=function(r){return this.reverse().find(r)},Ee.prototype.invokeMap=be(function(r,i){return typeof r=="function"?new Ee(this):this.map(function(u){return Hr(u,r,i)})}),Ee.prototype.reject=function(r){return this.filter(Qi(pe(r)))},Ee.prototype.slice=function(r,i){r=ye(r);var u=this;return u.__filtered__&&(r>0||i<0)?new Ee(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),i!==S&&(i=ye(i),u=i<0?u.dropRight(-i):u.take(i-r)),u)},Ee.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ee.prototype.toArray=function(){return this.take(vt)},Jt(Ee.prototype,function(r,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),_=$[c?"take"+(i=="last"?"Right":""):i],x=c||/^find/.test(i);_&&($.prototype[i]=function(){var k=this.__wrapped__,C=c?[1]:arguments,R=k instanceof Ee,G=C[0],V=R||n(k),H=function(Ae){var Me=_.apply($,vr([Ae],C));return c&&X?Me[0]:Me};V&&u&&typeof G=="function"&&G.length!=1&&(R=V=!1);var X=this.__chain__,se=!!this.__actions__.length,he=x&&!X,Te=R&&!se;if(!x&&V){k=Te?k:new Ee(this);var me=r.apply(k,C);return me.__actions__.push({func:Fi,args:[H],thisArg:S}),new Ot(me,X)}return he&&Te?r.apply(this,C):(me=this.thru(H),he?c?me.value()[0]:me.value():me)})}),kt(["pop","push","shift","sort","splice","unshift"],function(r){var i=Ma[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",c=/^(?:pop|shift)$/.test(r);$.prototype[r]=function(){var _=arguments;if(c&&!this.__chain__){var x=this.value();return i.apply(n(x)?x:[],_)}return this[u](function(k){return i.apply(n(k)?k:[],_)})}}),Jt(Ee.prototype,function(r,i){var u=$[i];if(u){var c=u.name+"";Ne.call(fn,c)||(fn[c]=[]),fn[c].push({name:i,func:u})}}),fn[Pi(S,Mr).name]=[{name:"wrapper",func:S}],Ee.prototype.clone=Dl,Ee.prototype.reverse=Pl,Ee.prototype.value=Ul,$.prototype.at=Wp,$.prototype.chain=Gf,$.prototype.commit=Gp,$.prototype.next=Vp,$.prototype.plant=Vf,$.prototype.reverse=Hp,$.prototype.toJSON=$.prototype.valueOf=$.prototype.value=Ff,$.prototype.first=$.prototype.head,On&&($.prototype[On]=Fp),$},dn=_l();ur?((ur.exports=dn)._=dn,Lr._=dn):xe._=dn}).call(zu)})(gf,gf.exports);var Sm=gf.exports;const vc=bm(Sm),$c=globalThis.ort,Tm=["Black Clover","Blue Lock","Naruto"];let hf=null;const Em="/what_anime_is_it_from/mobilenetforjs.onnx";async function Ec(){if(hf)return hf;try{if(!$c)throw new Error("onnxruntime-web (ort) not found on global scope");return hf=await $c.InferenceSession.create(Em,{executionProviders:["webgl","wasm"],graphOptimizationLevel:"all"}),hf}catch(ze){throw console.error("Failed to create ONNX session:",ze),new Error("Falha ao carregar o modelo ONNX. "+String(ze))}}async function km(ze){const Re=await Ec(),S=Date.now(),ge={};ge[Re.inputNames[0]]=ze;const $e=await Re.run(ge),Ie=(Date.now()-S)/1e3,Ft=$e[Re.outputNames[0]],F=Array.prototype.slice.call(Ft.data),Le=Cm(F);return[Am(Le),Ie]}async function zm(){await Ec()}function Cm(ze){const Re=Math.max(...ze),S=ze.map(ge=>Math.exp(ge-Re)).reduce((ge,$e)=>ge+$e,0);return ze.map(ge=>Math.exp(ge-Re)/S)}function Am(ze){const Re=ze.map((ge,$e)=>[ge,$e]);return vc.reverse(vc.sortBy(Re,ge=>ge[0])).map(ge=>{const $e=ge[0],fe=ge[1];return{id:fe,name:Tm[fe],probability:($e*100).toFixed(2)+"%",rawProbability:$e}})}const Om=document.getElementById("imageInput"),bc=document.getElementById("imagePreview"),kc=document.getElementById("resultsSection"),jn=document.getElementById("statusText"),xc=document.getElementById("loadingSpinner");Om.addEventListener("change",async ze=>{var S;const Re=(S=ze.target.files)==null?void 0:S[0];if(Re){kc.style.display="none",jn.innerText="Processando imagem...",xc.style.display="block",bc.src=URL.createObjectURL(Re),bc.style.display="block";try{const ge=await ym(Re);let $e;try{$e=await Im(ge)}catch(fe){console.error("Erro no preprocessamento:",fe),jn.innerText="Erro no preprocessamento: "+((fe==null?void 0:fe.message)||String(fe));return}try{const[fe,Ie]=await km($e);Rm(fe,Ie)}catch(fe){console.error("Erro na inferência:",fe),jn.innerText="Erro na inferência: "+((fe==null?void 0:fe.message)||String(fe));return}}catch(ge){console.error("Erro no fluxo:",ge),jn.innerText="Erro ao processar imagem: "+((ge==null?void 0:ge.message)||String(ge))}finally{xc.style.display="none"}}});function Rm(ze,Re){jn.innerText="",kc.style.display="block";const S=ze[0],ge=document.getElementById("winnerContainer"),$e=document.getElementById("winnerName"),fe=document.getElementById("winnerEmoji"),Ie=document.getElementById("detailsList"),Ft=document.getElementById("inferenceTime");$e.innerText=S.name,ge.classList.remove("naruto-theme","black-clover-theme","blue-lock-theme","neutral");let F="🔮";S.name==="Naruto"?(ge.classList.add("naruto-theme"),F="🍥"):S.name==="Black Clover"?(ge.classList.add("black-clover-theme"),F="🍀"):S.name==="Blue Lock"&&(ge.classList.add("blue-lock-theme"),F="⚽"),fe.innerText=F,Ie.innerHTML="",ze.forEach(Le=>{const nt=document.createElement("div");nt.className="detail-item",nt.innerHTML=`
            <span class="detail-name">${Le.name}</span>
            <span class="detail-prob">${Le.probability}</span>
        `,Ie.appendChild(nt)}),Ft.innerText=Re.toFixed(3)}(async function(){try{jn.innerText="Carregando modelo...",await zm(),jn.innerText="Modelo carregado. Escolha uma imagem."}catch(Re){console.error("Erro ao pré-carregar modelo:",Re),jn.innerText="Erro ao carregar modelo: "+((Re==null?void 0:Re.message)||String(Re))}})();
