import{r as y,R as n}from"./index.DddtCxX5.js";import{l as c,g as m,c as P,b as f}from"./Player.DNtQjnxe.js";import"./jsx-runtime.CIMolHGP.js";import"./index.DpKhS-qi.js";/* empty css                       */import"./index.BscAQ9ch.js";import"./index.Py3gQaBW.js";import"./store.aycOQVLs.js";import"./index.bM7OrN6I.js";import"./player.CKjfIk3N.js";import"./play-fill.B_vi0l2m.js";var _=Object.defineProperty,g=(r,t,e)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,s=(r,t,e)=>(g(r,typeof t!="symbol"?t+"":t,e),e);const D="https://play.vidyard.com/embed/v4.js",V="VidyardV4",R="onVidyardAPI";class p extends y.Component{constructor(){super(...arguments),s(this,"callPlayer",P),s(this,"mute",()=>{this.setVolume(0)}),s(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),s(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(t){const{playing:e,config:l,onError:h,onDuration:d}=this.props,a=t&&t.match(c)[1];this.player&&this.stop(),m(D,V,R).then(i=>{this.container&&(i.api.addReadyListener((o,u)=>{this.player||(this.player=u,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},a),i.api.renderPlayer({uuid:a,container:this.container,autoplay:e?1:0,...l.options}),i.api.getPlayerMetadata(a).then(o=>{this.duration=o.length_in_seconds,d(o.length_in_seconds)}))},h)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(t,e=!0){this.callPlayer("seek",t),e||this.pause()}setVolume(t){this.callPlayer("setVolume",t)}setPlaybackRate(t){this.callPlayer("setPlaybackSpeed",t)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:t}=this.props,e={width:"100%",height:"100%",display:t};return n.createElement("div",{style:e},n.createElement("div",{ref:this.ref}))}}s(p,"displayName","Vidyard");s(p,"canPlay",f.vidyard);export{p as default};
