import{r as l,R as p}from"./index.DddtCxX5.js";import{g as n,e as h,c as u,b as m}from"./Player.DNtQjnxe.js";import"./jsx-runtime.CIMolHGP.js";import"./index.DpKhS-qi.js";/* empty css                       */import"./index.BscAQ9ch.js";import"./index.Py3gQaBW.js";import"./store.aycOQVLs.js";import"./index.bM7OrN6I.js";import"./player.CKjfIk3N.js";import"./play-fill.B_vi0l2m.js";var d=Object.defineProperty,c=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);const y="https://cdn.embed.ly/player-0.1.0.min.js",f="playerjs";class a extends l.Component{constructor(){super(...arguments),r(this,"callPlayer",u),r(this,"duration",null),r(this,"currentTime",null),r(this,"secondsLoaded",null),r(this,"mute",()=>{this.callPlayer("mute")}),r(this,"unmute",()=>{this.callPlayer("unmute")}),r(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){n(y,f).then(t=>{this.iframe&&(this.player=new t.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:o,seconds:i})=>{this.duration=o,this.currentTime=i}),this.player.on("buffered",({percent:o})=>{this.duration&&(this.secondsLoaded=this.duration*o)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(h)[1],t={width:"100%",height:"100%"};return p.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:t,allow:"encrypted-media; autoplay; fullscreen;"})}}r(a,"displayName","Streamable");r(a,"canPlay",m.streamable);export{a as default};
