import{r as v,R as d}from"./index.DddtCxX5.js";import{m as p,A as S,H as g,D as b,F as A,g as c,s as u,b as R}from"./Player.DNtQjnxe.js";import"./jsx-runtime.CIMolHGP.js";import"./index.DpKhS-qi.js";/* empty css                       */import"./index.BscAQ9ch.js";import"./index.Py3gQaBW.js";import"./store.aycOQVLs.js";import"./index.bM7OrN6I.js";import"./player.CKjfIk3N.js";import"./play-fill.B_vi0l2m.js";var I=Object.defineProperty,_=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,s=(o,e,t)=>(_(o,typeof e!="symbol"?e+"":e,t),t);const m=typeof navigator<"u",D=m&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,E=m&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||D)&&!window.MSStream,O=m&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,w="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",k="Hls",U="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",M="dashjs",H="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",V="flvjs",N=/www\.dropbox\.com\/.+/,f=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,T="https://videodelivery.net/{id}/manifest/video.m3u8";class y extends v.Component{constructor(){super(...arguments),s(this,"onReady",(...e)=>this.props.onReady(...e)),s(this,"onPlay",(...e)=>this.props.onPlay(...e)),s(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),s(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),s(this,"onPause",(...e)=>this.props.onPause(...e)),s(this,"onEnded",(...e)=>this.props.onEnded(...e)),s(this,"onError",(...e)=>this.props.onError(...e)),s(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),s(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),s(this,"onDisablePIP",e=>{const{onDisablePIP:t,playing:r}=this.props;t(e),r&&this.play()}),s(this,"onPresentationModeChange",e=>{if(this.player&&u(this.player)){const{webkitPresentationMode:t}=this.player;t==="picture-in-picture"?this.onEnablePIP(e):t==="inline"&&this.onDisablePIP(e)}}),s(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),s(this,"mute",()=>{this.player.muted=!0}),s(this,"unmute",()=>{this.player.muted=!1}),s(this,"renderSourceElement",(e,t)=>typeof e=="string"?d.createElement("source",{key:t,src:e}):d.createElement("source",{key:t,...e})),s(this,"renderTrack",(e,t)=>d.createElement("track",{key:t,...e})),s(this,"ref",e=>{this.player&&(this.prevPlayer=this.player),this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(E||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url!==e.url&&!p(this.props.url)&&!(this.props.url instanceof Array)&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:r}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return e.config.forceVideo||e.config.attributes.poster?!1:S.test(e.url)||e.config.forceAudio}shouldUseHLS(e){return O&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:E||this.props.config.forceDisableHls?!1:g.test(e)||f.test(e)}shouldUseDASH(e){return b.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return A.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:r,dashVersion:a,flvVersion:l}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&c(w.replace("VERSION",t),k).then(i=>{if(this.hls=new i(r),this.hls.on(i.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(i.Events.ERROR,(n,h)=>{this.props.onError(n,h,this.hls,i)}),f.test(e)){const n=e.match(f)[1];this.hls.loadSource(T.replace("{id}",n))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()}),this.shouldUseDASH(e)&&c(U.replace("VERSION",a),M).then(i=>{this.dash=i.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(a)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:i.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()}),this.shouldUseFLV(e)&&c(H.replace("VERSION",l),V).then(i=>{this.flv=i.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(i.Events.ERROR,(n,h)=>{this.props.onError(n,h,this.flv,i)}),this.flv.load(),this.props.onLoaded()}),e instanceof Array)this.player.load();else if(p(e))try{this.player.srcObject=e}catch{this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():u(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():u(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),r=this.getDuration();return t>r?r:t}getSource(e){const t=this.shouldUseHLS(e),r=this.shouldUseDASH(e),a=this.shouldUseFLV(e);if(!(e instanceof Array||p(e)||t||r||a))return N.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:r,controls:a,muted:l,config:i,width:n,height:h}=this.props,L=this.shouldUseAudio(this.props)?"audio":"video",P={width:n==="auto"?n:"100%",height:h==="auto"?h:"100%"};return d.createElement(L,{ref:this.ref,src:this.getSource(e),style:P,preload:"auto",autoPlay:t||void 0,controls:a,muted:l,loop:r,...i.attributes},e instanceof Array&&e.map(this.renderSourceElement),i.tracks.map(this.renderTrack))}}s(y,"displayName","FilePlayer");s(y,"canPlay",R.file);export{y as default};
