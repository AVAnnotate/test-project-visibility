import{r as c,R as h}from"./index.DddtCxX5.js";import{r as d,g as l,c as y,b as f}from"./Player.DNtQjnxe.js";import"./jsx-runtime.CIMolHGP.js";import"./index.DpKhS-qi.js";/* empty css                       */import"./index.BscAQ9ch.js";import"./index.Py3gQaBW.js";import"./store.aycOQVLs.js";import"./index.bM7OrN6I.js";import"./player.CKjfIk3N.js";import"./play-fill.B_vi0l2m.js";var m=Object.defineProperty,b=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e,t)=>(b(s,typeof e!="symbol"?e+"":e,t),t);const n="https://connect.facebook.net/en_US/sdk.js",p="FB",u="fbAsyncInit",P="facebook-player-";class o extends c.Component{constructor(){super(...arguments),r(this,"callPlayer",y),r(this,"playerID",this.props.config.playerId||`${P}${d()}`),r(this,"mute",()=>{this.callPlayer("mute")}),r(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){if(t){l(n,p,u).then(i=>i.XFBML.parse());return}l(n,p,u).then(i=>{i.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),i.Event.subscribe("xfbml.render",a=>{this.props.onLoaded()}),i.Event.subscribe("xfbml.ready",a=>{a.type==="video"&&a.id===this.playerID&&(this.player=a.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config,t={width:"100%",height:"100%"};return h.createElement("div",{style:t,id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}r(o,"displayName","Facebook");r(o,"canPlay",f.facebook);r(o,"loopOnEnded",!0);export{o as default};