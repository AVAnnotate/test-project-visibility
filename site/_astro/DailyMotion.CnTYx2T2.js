import{r as m,R as p}from"./index.DNi1g-pO.js";import{j as y,p as l,g as f,c as g,b as P}from"./Player.BisSOn0-.js";import"./jsx-runtime.B6N9iRLn.js";import"./index.B7xmebis.js";import"./index.iExtbhlT.js";import"./store.aycOQVLs.js";import"./index.BDWyZ8Gq.js";import"./player.ChVRuTep.js";import"./play-fill.Dg1rRlI0.js";var D=Object.defineProperty,_=(i,t,e)=>t in i?D(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,r=(i,t,e)=>(_(i,typeof t!="symbol"?t+"":t,e),e);const M="https://api.dmcdn.net/all.js",L="DM",T="dmAsyncInit";class s extends m.Component{constructor(){super(...arguments),r(this,"callPlayer",g),r(this,"onDurationChange",()=>{const t=this.getDuration();this.props.onDuration(t)}),r(this,"mute",()=>{this.callPlayer("setMuted",!0)}),r(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),r(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(t){const{controls:e,config:h,onError:o,playing:u}=this.props,[,n]=t.match(y);if(this.player){this.player.load(n,{start:l(t),autoplay:u});return}f(M,L,T,a=>a.player).then(a=>{if(!this.container)return;const c=a.player;this.player=new c(this.container,{width:"100%",height:"100%",video:n,params:{controls:e,autoplay:this.props.playing,mute:this.props.muted,start:l(t),origin:window.location.origin,...h.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:d=>o(d)}})},o)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(t,e=!0){this.callPlayer("seek",t),e||this.pause()}setVolume(t){this.callPlayer("setVolume",t)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:t}=this.props,e={width:"100%",height:"100%",display:t};return p.createElement("div",{style:e},p.createElement("div",{ref:this.ref}))}}r(s,"displayName","DailyMotion");r(s,"canPlay",P.dailymotion);r(s,"loopOnEnded",!0);export{s as default};
