import{r as g,R as f}from"./index.DNi1g-pO.js";import{r as D,h as l,i as v,g as I,p as T,c as C,b as w}from"./Player.BisSOn0-.js";import"./jsx-runtime.B6N9iRLn.js";import"./index.B7xmebis.js";import"./index.iExtbhlT.js";import"./store.aycOQVLs.js";import"./index.BDWyZ8Gq.js";import"./player.ChVRuTep.js";import"./play-fill.Dg1rRlI0.js";var N=Object.defineProperty,R=(r,t,e)=>t in r?N(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,s=(r,t,e)=>(R(r,typeof t!="symbol"?t+"":t,e),e);const S="https://player.twitch.tv/js/embed/v1.js",A="Twitch",M="twitch-player-";class n extends g.Component{constructor(){super(...arguments),s(this,"callPlayer",C),s(this,"playerID",this.props.config.playerId||`${M}${D()}`),s(this,"mute",()=>{this.callPlayer("setMuted",!0)}),s(this,"unmute",()=>{this.callPlayer("setMuted",!1)})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(t,e){const{playsinline:p,onError:h,config:d,controls:c}=this.props,a=l.test(t),i=a?t.match(l)[1]:t.match(v)[1];if(e){a?this.player.setChannel(i):this.player.setVideo("v"+i);return}I(S,A).then(o=>{this.player=new o.Player(this.playerID,{video:a?"":i,channel:a?i:"",height:"100%",width:"100%",playsinline:p,autoplay:this.props.playing,muted:this.props.muted,controls:a?!0:c,time:T(t),...d.options});const{READY:y,PLAYING:u,PAUSE:m,ENDED:E,ONLINE:P,OFFLINE:L,SEEK:_}=o.Player;this.player.addEventListener(y,this.props.onReady),this.player.addEventListener(u,this.props.onPlay),this.player.addEventListener(m,this.props.onPause),this.player.addEventListener(E,this.props.onEnded),this.player.addEventListener(_,this.props.onSeek),this.player.addEventListener(P,this.props.onLoaded),this.player.addEventListener(L,this.props.onLoaded)},h)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(t,e=!0){this.callPlayer("seek",t),e||this.pause()}setVolume(t){this.callPlayer("setVolume",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){const t={width:"100%",height:"100%"};return f.createElement("div",{style:t,id:this.playerID})}}s(n,"displayName","Twitch");s(n,"canPlay",w.twitch);s(n,"loopOnEnded",!0);export{n as default};