import{r as l,R as n}from"./index.DNi1g-pO.js";import{g as p,e as h,c as u,b as m}from"./Player.BisSOn0-.js";import"./jsx-runtime.B6N9iRLn.js";import"./index.B7xmebis.js";import"./index.iExtbhlT.js";import"./store.aycOQVLs.js";import"./index.BDWyZ8Gq.js";import"./player.ChVRuTep.js";import"./play-fill.Dg1rRlI0.js";var d=Object.defineProperty,c=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e,t)=>(c(s,typeof e!="symbol"?e+"":e,t),t);const y="https://cdn.embed.ly/player-0.1.0.min.js",f="playerjs";class o extends l.Component{constructor(){super(...arguments),r(this,"callPlayer",u),r(this,"duration",null),r(this,"currentTime",null),r(this,"secondsLoaded",null),r(this,"mute",()=>{this.callPlayer("mute")}),r(this,"unmute",()=>{this.callPlayer("unmute")}),r(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){p(y,f).then(t=>{this.iframe&&(this.player=new t.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:a,seconds:i})=>{this.duration=a,this.currentTime=i}),this.player.on("buffered",({percent:a})=>{this.duration&&(this.secondsLoaded=this.duration*a)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e*100)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e=this.props.url.match(h)[1],t={width:"100%",height:"100%"};return n.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:t,allow:"encrypted-media; autoplay; fullscreen;"})}}r(o,"displayName","Streamable");r(o,"canPlay",m.streamable);export{o as default};
