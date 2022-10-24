(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{833:function(e,t,r){"use strict";r.r(t),r.d(t,{BigNumber:function(){return s.O$},FixedFormat:function(){return i.xO},FixedNumber:function(){return i.xs},_base16To36:function(){return s.t2},_base36To16:function(){return s.g$},formatFixed:function(){return i.S5},parseFixed:function(){return i.Ox}});var s=r(2593),i=r(20335)},39593:function(e,t,r){"use strict";const s=r(34411),i=Symbol("max"),n=Symbol("length"),o=Symbol("lengthCalculator"),h=Symbol("allowStale"),a=Symbol("maxAge"),l=Symbol("dispose"),p=Symbol("noDisposeOnSet"),u=Symbol("lruList"),c=Symbol("cache"),E=Symbol("updateAgeOnGet"),f=()=>1;const $=(e,t,r)=>{const s=e[c].get(t);if(s){const t=s.value;if(v(e,t)){if(I(e,s),!e[h])return}else r&&(e[E]&&(s.value.now=Date.now()),e[u].unshiftNode(s));return t.value}},v=(e,t)=>{if(!t||!t.maxAge&&!e[a])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[a]&&r>e[a]},m=e=>{if(e[n]>e[i])for(let t=e[u].tail;e[n]>e[i]&&null!==t;){const r=t.prev;I(e,t),t=r}},I=(e,t)=>{if(t){const r=t.value;e[l]&&e[l](r.key,r.value),e[n]-=r.length,e[c].delete(r.key),e[u].removeNode(t)}};class R{constructor(e,t,r,s,i){this.key=e,this.value=t,this.length=r,this.now=s,this.maxAge=i||0}}const N=(e,t,r,s)=>{let i=r.value;v(e,i)&&(I(e,r),e[h]||(i=void 0)),i&&t.call(s,i.value,i.key,e)};e.exports=class{constructor(e){if("number"===typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!==typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[i]=e.max||1/0;const t=e.length||f;if(this[o]="function"!==typeof t?f:t,this[h]=e.stale||!1,e.maxAge&&"number"!==typeof e.maxAge)throw new TypeError("maxAge must be a number");this[a]=e.maxAge||0,this[l]=e.dispose,this[p]=e.noDisposeOnSet||!1,this[E]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!==typeof e||e<0)throw new TypeError("max must be a non-negative number");this[i]=e||1/0,m(this)}get max(){return this[i]}set allowStale(e){this[h]=!!e}get allowStale(){return this[h]}set maxAge(e){if("number"!==typeof e)throw new TypeError("maxAge must be a non-negative number");this[a]=e,m(this)}get maxAge(){return this[a]}set lengthCalculator(e){"function"!==typeof e&&(e=f),e!==this[o]&&(this[o]=e,this[n]=0,this[u].forEach((e=>{e.length=this[o](e.value,e.key),this[n]+=e.length}))),m(this)}get lengthCalculator(){return this[o]}get length(){return this[n]}get itemCount(){return this[u].length}rforEach(e,t){t=t||this;for(let r=this[u].tail;null!==r;){const s=r.prev;N(this,e,r,t),r=s}}forEach(e,t){t=t||this;for(let r=this[u].head;null!==r;){const s=r.next;N(this,e,r,t),r=s}}keys(){return this[u].toArray().map((e=>e.key))}values(){return this[u].toArray().map((e=>e.value))}reset(){this[l]&&this[u]&&this[u].length&&this[u].forEach((e=>this[l](e.key,e.value))),this[c]=new Map,this[u]=new s,this[n]=0}dump(){return this[u].map((e=>!v(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[u]}set(e,t,r){if((r=r||this[a])&&"number"!==typeof r)throw new TypeError("maxAge must be a number");const s=r?Date.now():0,h=this[o](t,e);if(this[c].has(e)){if(h>this[i])return I(this,this[c].get(e)),!1;const o=this[c].get(e).value;return this[l]&&(this[p]||this[l](e,o.value)),o.now=s,o.maxAge=r,o.value=t,this[n]+=h-o.length,o.length=h,this.get(e),m(this),!0}const E=new R(e,t,h,s,r);return E.length>this[i]?(this[l]&&this[l](e,t),!1):(this[n]+=E.length,this[u].unshift(E),this[c].set(e,this[u].head),m(this),!0)}has(e){if(!this[c].has(e))return!1;const t=this[c].get(e).value;return!v(this,t)}get(e){return $(this,e,!0)}peek(e){return $(this,e,!1)}pop(){const e=this[u].tail;return e?(I(this,e),e.value):null}del(e){I(this,this[c].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const s=e[r],i=s.e||0;if(0===i)this.set(s.k,s.v);else{const e=i-t;e>0&&this.set(s.k,s.v,e)}}}prune(){this[c].forEach(((e,t)=>$(this,t,!1)))}}},22257:function(e,t,r){const s=Symbol("SemVer ANY");class i{static get ANY(){return s}constructor(e,t){if(t=n(t),e instanceof i){if(e.loose===!!t.loose)return e;e=e.value}l("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===s?this.value="":this.value=this.operator+this.semver.version,l("comp",this)}parse(e){const t=this.options.loose?o[h.COMPARATORLOOSE]:o[h.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new p(r[2],this.options.loose):this.semver=s}toString(){return this.value}test(e){if(l("Comparator.test",e,this.options.loose),this.semver===s||e===s)return!0;if("string"===typeof e)try{e=new p(e,this.options)}catch(t){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof i))throw new TypeError("a Comparator is required");if(t&&"object"===typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new u(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new u(this.value,t).test(e.semver);const r=(">="===this.operator||">"===this.operator)&&(">="===e.operator||">"===e.operator),s=("<="===this.operator||"<"===this.operator)&&("<="===e.operator||"<"===e.operator),n=this.semver.version===e.semver.version,o=(">="===this.operator||"<="===this.operator)&&(">="===e.operator||"<="===e.operator),h=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),l=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||s||n&&o||h||l}}e.exports=i;const n=r(12893),{re:o,t:h}=r(55765),a=r(7539),l=r(74225),p=r(26376),u=r(66902)},66902:function(e,t,r){class s{constructor(e,t){if(t=n(t),e instanceof s)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new s(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!f(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const t of this.set)if(1===t.length&&$(t[0])){this.set=[t];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();const t=`parseRange:${Object.keys(this.options).join(",")}:${e}`,r=i.get(t);if(r)return r;const s=this.options.loose,n=s?l[p.HYPHENRANGELOOSE]:l[p.HYPHENRANGE];e=e.replace(n,y(this.options.includePrerelease)),h("hyphen replace",e),e=e.replace(l[p.COMPARATORTRIM],u),h("comparator trim",e);let a=(e=(e=(e=e.replace(l[p.TILDETRIM],c)).replace(l[p.CARETTRIM],E)).split(/\s+/).join(" ")).split(" ").map((e=>m(e,this.options))).join(" ").split(/\s+/).map((e=>T(e,this.options)));s&&(a=a.filter((e=>(h("loose invalid filter",e,this.options),!!e.match(l[p.COMPARATORLOOSE]))))),h("range list",a);const $=new Map,v=a.map((e=>new o(e,this.options)));for(const i of v){if(f(i))return[i];$.set(i.value,i)}$.size>1&&$.has("")&&$.delete("");const I=[...$.values()];return i.set(t,I),I}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Range is required");return this.set.some((r=>v(r,t)&&e.set.some((e=>v(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"===typeof e)try{e=new a(e,this.options)}catch(t){return!1}for(let r=0;r<this.set.length;r++)if(w(this.set[r],e,this.options))return!0;return!1}}e.exports=s;const i=new(r(39593))({max:1e3}),n=r(12893),o=r(22257),h=r(74225),a=r(26376),{re:l,t:p,comparatorTrimReplace:u,tildeTrimReplace:c,caretTrimReplace:E}=r(55765),f=e=>"<0.0.0-0"===e.value,$=e=>""===e.value,v=(e,t)=>{let r=!0;const s=e.slice();let i=s.pop();for(;r&&s.length;)r=s.every((e=>i.intersects(e,t))),i=s.pop();return r},m=(e,t)=>(h("comp",e,t),e=g(e,t),h("caret",e),e=R(e,t),h("tildes",e),e=d(e,t),h("xrange",e),e=L(e,t),h("stars",e),e),I=e=>!e||"x"===e.toLowerCase()||"*"===e,R=(e,t)=>e.trim().split(/\s+/).map((e=>N(e,t))).join(" "),N=(e,t)=>{const r=t.loose?l[p.TILDELOOSE]:l[p.TILDE];return e.replace(r,((t,r,s,i,n)=>{let o;return h("tilde",e,t,r,s,i,n),I(r)?o="":I(s)?o=`>=${r}.0.0 <${+r+1}.0.0-0`:I(i)?o=`>=${r}.${s}.0 <${r}.${+s+1}.0-0`:n?(h("replaceTilde pr",n),o=`>=${r}.${s}.${i}-${n} <${r}.${+s+1}.0-0`):o=`>=${r}.${s}.${i} <${r}.${+s+1}.0-0`,h("tilde return",o),o}))},g=(e,t)=>e.trim().split(/\s+/).map((e=>A(e,t))).join(" "),A=(e,t)=>{h("caret",e,t);const r=t.loose?l[p.CARETLOOSE]:l[p.CARET],s=t.includePrerelease?"-0":"";return e.replace(r,((t,r,i,n,o)=>{let a;return h("caret",e,t,r,i,n,o),I(r)?a="":I(i)?a=`>=${r}.0.0${s} <${+r+1}.0.0-0`:I(n)?a="0"===r?`>=${r}.${i}.0${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.0${s} <${+r+1}.0.0-0`:o?(h("replaceCaret pr",o),a="0"===r?"0"===i?`>=${r}.${i}.${n}-${o} <${r}.${i}.${+n+1}-0`:`>=${r}.${i}.${n}-${o} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${n}-${o} <${+r+1}.0.0-0`):(h("no pr"),a="0"===r?"0"===i?`>=${r}.${i}.${n}${s} <${r}.${i}.${+n+1}-0`:`>=${r}.${i}.${n}${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${n} <${+r+1}.0.0-0`),h("caret return",a),a}))},d=(e,t)=>(h("replaceXRanges",e,t),e.split(/\s+/).map((e=>O(e,t))).join(" ")),O=(e,t)=>{e=e.trim();const r=t.loose?l[p.XRANGELOOSE]:l[p.XRANGE];return e.replace(r,((r,s,i,n,o,a)=>{h("xRange",e,r,s,i,n,o,a);const l=I(i),p=l||I(n),u=p||I(o),c=u;return"="===s&&c&&(s=""),a=t.includePrerelease?"-0":"",l?r=">"===s||"<"===s?"<0.0.0-0":"*":s&&c?(p&&(n=0),o=0,">"===s?(s=">=",p?(i=+i+1,n=0,o=0):(n=+n+1,o=0)):"<="===s&&(s="<",p?i=+i+1:n=+n+1),"<"===s&&(a="-0"),r=`${s+i}.${n}.${o}${a}`):p?r=`>=${i}.0.0${a} <${+i+1}.0.0-0`:u&&(r=`>=${i}.${n}.0${a} <${i}.${+n+1}.0-0`),h("xRange return",r),r}))},L=(e,t)=>(h("replaceStars",e,t),e.trim().replace(l[p.STAR],"")),T=(e,t)=>(h("replaceGTE0",e,t),e.trim().replace(l[t.includePrerelease?p.GTE0PRE:p.GTE0],"")),y=e=>(t,r,s,i,n,o,h,a,l,p,u,c,E)=>`${r=I(s)?"":I(i)?`>=${s}.0.0${e?"-0":""}`:I(n)?`>=${s}.${i}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${a=I(l)?"":I(p)?`<${+l+1}.0.0-0`:I(u)?`<${l}.${+p+1}.0-0`:c?`<=${l}.${p}.${u}-${c}`:e?`<${l}.${p}.${+u+1}-0`:`<=${a}`}`.trim(),w=(e,t,r)=>{for(let s=0;s<e.length;s++)if(!e[s].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(h(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const s=e[r].semver;if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}},26376:function(e,t,r){const s=r(74225),{MAX_LENGTH:i,MAX_SAFE_INTEGER:n}=r(83295),{re:o,t:h}=r(55765),a=r(12893),{compareIdentifiers:l}=r(86742);class p{constructor(e,t){if(t=a(t),e instanceof p){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!==typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>i)throw new TypeError(`version is longer than ${i} characters`);s("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[h.LOOSE]:o[h.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<n)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof p)){if("string"===typeof e&&e===this.version)return 0;e=new p(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof p||(e=new p(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof p||(e=new p(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],i=e.prerelease[t];if(s("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return l(r,i)}while(++t)}compareBuild(e){e instanceof p||(e=new p(e,this.options));let t=0;do{const r=this.build[t],i=e.build[t];if(s("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return l(r,i)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"===typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(0===l(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=p},7539:function(e,t,r){const s=r(58718),i=r(81194),n=r(71312),o=r(25903),h=r(21544),a=r(12056);e.exports=(e,t,r,l)=>{switch(t){case"===":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e===r;case"!==":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return s(e,r,l);case"!=":return i(e,r,l);case">":return n(e,r,l);case">=":return o(e,r,l);case"<":return h(e,r,l);case"<=":return a(e,r,l);default:throw new TypeError(`Invalid operator: ${t}`)}}},46269:function(e,t,r){const s=r(26376);e.exports=(e,t,r)=>new s(e,r).compare(new s(t,r))},58718:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>0===s(e,t,r)},71312:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)>0},25903:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)>=0},21544:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)<0},12056:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>s(e,t,r)<=0},81194:function(e,t,r){const s=r(46269);e.exports=(e,t,r)=>0!==s(e,t,r)},45712:function(e,t,r){const s=r(66902);e.exports=(e,t,r)=>{try{t=new s(t,r)}catch(i){return!1}return t.test(e)}},83295:function(e){const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:t,MAX_SAFE_COMPONENT_LENGTH:16}},74225:function(e,t,r){var s=r(34155);const i="object"===typeof s&&s.env&&s.env.NODE_DEBUG&&/\bsemver\b/i.test(s.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=i},86742:function(e){const t=/^[0-9]+$/,r=(e,r)=>{const s=t.test(e),i=t.test(r);return s&&i&&(e=+e,r=+r),e===r?0:s&&!i?-1:i&&!s?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},12893:function(e){const t=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!==typeof e?{loose:!0}:t.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},55765:function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:s}=r(83295),i=r(74225),n=(t=e.exports={}).re=[],o=t.src=[],h=t.t={};let a=0;const l=(e,t,r)=>{const s=a++;i(e,s,t),h[e]=s,o[s]=t,n[s]=new RegExp(t,r?"g":void 0)};l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","[0-9]+"),l("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),l("MAINVERSION",`(${o[h.NUMERICIDENTIFIER]})\\.(${o[h.NUMERICIDENTIFIER]})\\.(${o[h.NUMERICIDENTIFIER]})`),l("MAINVERSIONLOOSE",`(${o[h.NUMERICIDENTIFIERLOOSE]})\\.(${o[h.NUMERICIDENTIFIERLOOSE]})\\.(${o[h.NUMERICIDENTIFIERLOOSE]})`),l("PRERELEASEIDENTIFIER",`(?:${o[h.NUMERICIDENTIFIER]}|${o[h.NONNUMERICIDENTIFIER]})`),l("PRERELEASEIDENTIFIERLOOSE",`(?:${o[h.NUMERICIDENTIFIERLOOSE]}|${o[h.NONNUMERICIDENTIFIER]})`),l("PRERELEASE",`(?:-(${o[h.PRERELEASEIDENTIFIER]}(?:\\.${o[h.PRERELEASEIDENTIFIER]})*))`),l("PRERELEASELOOSE",`(?:-?(${o[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[h.PRERELEASEIDENTIFIERLOOSE]})*))`),l("BUILDIDENTIFIER","[0-9A-Za-z-]+"),l("BUILD",`(?:\\+(${o[h.BUILDIDENTIFIER]}(?:\\.${o[h.BUILDIDENTIFIER]})*))`),l("FULLPLAIN",`v?${o[h.MAINVERSION]}${o[h.PRERELEASE]}?${o[h.BUILD]}?`),l("FULL",`^${o[h.FULLPLAIN]}$`),l("LOOSEPLAIN",`[v=\\s]*${o[h.MAINVERSIONLOOSE]}${o[h.PRERELEASELOOSE]}?${o[h.BUILD]}?`),l("LOOSE",`^${o[h.LOOSEPLAIN]}$`),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE",`${o[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),l("XRANGEIDENTIFIER",`${o[h.NUMERICIDENTIFIER]}|x|X|\\*`),l("XRANGEPLAIN",`[v=\\s]*(${o[h.XRANGEIDENTIFIER]})(?:\\.(${o[h.XRANGEIDENTIFIER]})(?:\\.(${o[h.XRANGEIDENTIFIER]})(?:${o[h.PRERELEASE]})?${o[h.BUILD]}?)?)?`),l("XRANGEPLAINLOOSE",`[v=\\s]*(${o[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[h.XRANGEIDENTIFIERLOOSE]})(?:${o[h.PRERELEASELOOSE]})?${o[h.BUILD]}?)?)?`),l("XRANGE",`^${o[h.GTLT]}\\s*${o[h.XRANGEPLAIN]}$`),l("XRANGELOOSE",`^${o[h.GTLT]}\\s*${o[h.XRANGEPLAINLOOSE]}$`),l("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),l("COERCERTL",o[h.COERCE],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM",`(\\s*)${o[h.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",l("TILDE",`^${o[h.LONETILDE]}${o[h.XRANGEPLAIN]}$`),l("TILDELOOSE",`^${o[h.LONETILDE]}${o[h.XRANGEPLAINLOOSE]}$`),l("LONECARET","(?:\\^)"),l("CARETTRIM",`(\\s*)${o[h.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",l("CARET",`^${o[h.LONECARET]}${o[h.XRANGEPLAIN]}$`),l("CARETLOOSE",`^${o[h.LONECARET]}${o[h.XRANGEPLAINLOOSE]}$`),l("COMPARATORLOOSE",`^${o[h.GTLT]}\\s*(${o[h.LOOSEPLAIN]})$|^$`),l("COMPARATOR",`^${o[h.GTLT]}\\s*(${o[h.FULLPLAIN]})$|^$`),l("COMPARATORTRIM",`(\\s*)${o[h.GTLT]}\\s*(${o[h.LOOSEPLAIN]}|${o[h.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE",`^\\s*(${o[h.XRANGEPLAIN]})\\s+-\\s+(${o[h.XRANGEPLAIN]})\\s*$`),l("HYPHENRANGELOOSE",`^\\s*(${o[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[h.XRANGEPLAINLOOSE]})\\s*$`),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},49602:function(e){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},34411:function(e,t,r){"use strict";function s(e){var t=this;if(t instanceof s||(t=new s),t.tail=null,t.head=null,t.length=0,e&&"function"===typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,i=arguments.length;r<i;r++)t.push(arguments[r]);return t}function i(e,t,r){var s=t===e.head?new h(r,null,t,e):new h(r,t,t.next,e);return null===s.next&&(e.tail=s),null===s.prev&&(e.head=s),e.length++,s}function n(e,t){e.tail=new h(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function o(e,t){e.head=new h(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function h(e,t,r,s){if(!(this instanceof h))return new h(e,t,r,s);this.list=s,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=s,s.Node=h,s.create=s,s.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},s.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},s.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},s.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)n(this,arguments[e]);return this.length},s.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},s.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},s.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},s.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,s=0;null!==r;s++)e.call(t,r.value,s,this),r=r.next},s.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,s=this.length-1;null!==r;s--)e.call(t,r.value,s,this),r=r.prev},s.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},s.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},s.prototype.map=function(e,t){t=t||this;for(var r=new s,i=this.head;null!==i;)r.push(e.call(t,i.value,this)),i=i.next;return r},s.prototype.mapReverse=function(e,t){t=t||this;for(var r=new s,i=this.tail;null!==i;)r.push(e.call(t,i.value,this)),i=i.prev;return r},s.prototype.reduce=function(e,t){var r,s=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");s=this.head.next,r=this.head.value}for(var i=0;null!==s;i++)r=e(r,s.value,i),s=s.next;return r},s.prototype.reduceReverse=function(e,t){var r,s=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");s=this.tail.prev,r=this.tail.value}for(var i=this.length-1;null!==s;i--)r=e(r,s.value,i),s=s.prev;return r},s.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},s.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},s.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new s;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=0,n=this.head;null!==n&&i<e;i++)n=n.next;for(;null!==n&&i<t;i++,n=n.next)r.push(n.value);return r},s.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new s;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=this.length,n=this.tail;null!==n&&i>t;i--)n=n.prev;for(;null!==n&&i>e;i--,n=n.prev)r.push(n.value);return r},s.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var s=0,n=this.head;null!==n&&s<e;s++)n=n.next;var o=[];for(s=0;n&&s<t;s++)o.push(n.value),n=this.removeNode(n);null===n&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(s=0;s<r.length;s++)n=i(this,n,r[s]);return o},s.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var s=r.prev;r.prev=r.next,r.next=s}return this.head=t,this.tail=e,this};try{r(49602)(s)}catch(a){}}}]);