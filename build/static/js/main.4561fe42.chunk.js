(this.webpackJsonpparsify=this.webpackJsonpparsify||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a(0),c=a(14),r=a.n(c),i=(a(142),a(6)),o=(a.p,a(143),a(118)),l=a(178),d=a(44),h=a(224),b=a(221),p=a(222),j=a(86),u=a(113),g=(a(144),a(54)),m=a.n(g),f=function(e){var t=e.items,a=e.onAnalyze,c=(e.onSearch,e.forSubmit),r=Object(s.useState)({text:""}),o=Object(i.a)(r,2),l=o[0],d=o[1];return Object(n.jsxs)("div",{style:{padding:"50px",height:"100%"},children:[Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){return c(e,l)},children:Object(n.jsx)(j.a,{label:"Enter Song",variant:"outlined",style:{width:"50vw",height:"50px"},onChange:function(e){return function(e){d({text:e.target.value})}(e)}})}),Object(n.jsx)("div",{className:"dataWrapper",style:{height:400,width:"100%",marginTop:"2%"},children:Object(n.jsx)(u.a,{rows:t,columns:[{field:"track",headerName:"Song Name",width:300},{field:"artists",headerName:"Artists",width:300},{field:"album",headerName:"Album",width:300},{field:"id",headerName:"UUID",width:220,hide:!0}],pageSize:6,onRowClick:function(e){a(e)}})})]})},y=a(115),x=a.n(y);var O=function(){var e=Object(s.useState)({searchItems:[],searching:!1}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)({hidden:!0,chartData:[],title:""}),j=Object(i.a)(r,2),u=j[0],g=j[1],y=Object(s.useState)(!1),O=Object(i.a)(y,2),v=O[0],k=O[1];Object(s.useEffect)((function(){!function(){var e=0;!function t(){e++,document.body.style.background="linear-gradient(".concat(e,"deg, rgba(217, 119, 191, 1) 0%, rgba(217, 163, 98, 1) 33%, rgba(217, 141, 98, 1) 60%, rgba(217, 96, 85, 1) 100%, rgba(217, 74, 74, 1) 100%)"),requestAnimationFrame(t)}()}(),w()}),[]);var w=function(){m.a.get("/load").then((function(e){c({searchItems:e.data,searching:!1}),g({hidden:!0,chartData:{},title:""})}))},I=function(e){k(e)};return u.hidden?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"IOX"})}),Object(n.jsx)(o.a,{elevation:24,style:{background:"rgba(1, 1, 1, 0"},children:Object(n.jsx)("div",{className:"App-view",children:a.searching?Object(n.jsxs)("aside",{children:[Object(n.jsx)("p",{children:"loading..."}),Object(n.jsx)(l.a,{})]}):Object(n.jsx)(f,{items:a.searchItems,onAnalyze:function(e){m.a.get("/analyze/".concat(e.rowModel.id,"/").concat(e.rowModel.data.track,"/").concat(e.rowModel.data.artists,"/").concat(e.rowModel.data.album)).then((function(e){var t=e.data[0],a=t.danceability,n=t.energy,s=t.instrumentalness,c=t.speechiness,r=t.liveness,i=t.acousticness,o=t.valence,l=t.key,d=t.mode,h=t.tempo;g({hidden:!1,title:e.data[0].track,danceability:parseInt(100*a),energy:parseInt(100*n),instrumentalness:parseInt(100*s),speechiness:parseInt(100*c),liveness:parseInt(100*r),acousticness:parseInt(100*i),valence:parseInt(100*o),key:"".concat(["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"][l]," ").concat(d>0?"Major":"Minor"),tempo:"".concat(Math.floor(h))});var b={chart:{width:"70%",type:"radialBar",forColor:"#010101"},colors:["rgba(217, 119, 191, 1)","rgba(217, 163, 98, 1)","rgba(217, 141, 98, 1)","rgba(217, 96, 85, 1)","rgba(217, 74, 74, 1)","#58E899","rgba(25, 141, 183, 1)"],series:[parseInt(100*a),parseInt(100*n),parseInt(100*s),parseInt(100*c),parseInt(100*r),parseInt(100*i),parseInt(100*o)],plotOptions:{radialBar:{track:{show:!1}}}};new x.a(document.querySelector("#apexWrap"),b).render()})).catch((function(e){console.log("analysis failed!",e)}))},onSearch:c,forSubmit:function(e,t){e.preventDefault();var a=t.text;if(!a)return c({searching:!0,searchItems:[]}),w();c({searching:!0,searchItems:[]}),m.a.get("/search/".concat(a)).then((function(e){c({searchItems:e.data})})).catch((function(e){console.error(e)}))},isSearching:a.searching})})})]}):Object(n.jsxs)("div",{className:"chartContainer",children:[Object(n.jsxs)(o.a,{elevation:10,className:"titleContainer",children:[Object(n.jsx)("p",{className:"stats",style:{color:"#fff"},children:"Key: ".concat(u.key)}),Object(n.jsx)("p",{className:"stats",style:{color:"#fff"},children:"BPM: ".concat(u.tempo)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(217, 119, 191, 1)"},children:"Danceability: ".concat(u.danceability)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(217, 163, 98, 1)"},children:"Energy: ".concat(u.energy)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(217, 141, 98, 1)"},children:"Instrumentalness: ".concat(u.instrumentalness)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(217, 96, 85, 1)"},children:"Speechiness: ".concat(u.speechiness)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(217, 74, 74, 1)"},children:"Liveness: ".concat(u.liveness)}),Object(n.jsx)("p",{className:"stats",style:{color:"#58E899"},children:"Acousticness: ".concat(u.acousticness)}),Object(n.jsx)("p",{className:"stats",style:{color:"rgba(25, 141, 183, 1)"},children:"Valence: ".concat(u.valence)})]}),Object(n.jsxs)("div",{className:"resetContainer",children:[Object(n.jsx)(d.a,{onClick:function(){I(!0)},style:{color:"rgba(217, 163, 98, 1)",border:"1px #010101 solid",backgroundColor:"rgba(1,1,1,.9)",boxShadow:"2px 2px 8px rgba(1,1,1,.5)"},children:"Legend"}),Object(n.jsx)(d.a,{onClick:function(e){w()},style:{color:"rgba(217, 74, 74, 1)",border:"1px #010101 solid",backgroundColor:"rgba(1,1,1,.9)",boxShadow:"2px 2px 8px rgba(1,1,1,.5)"},children:"Reset"})]}),Object(n.jsx)(h.a,{onClose:function(){I(!1)},onClick:function(){I(!1)},"aria-labelledby":"simple-dialog-title",open:v,children:Object(n.jsxs)("div",{style:{backgroundColor:"#010101",padding:"25px"},children:[Object(n.jsx)(b.a,{id:"simple-dialog-title",children:"Feature Definitions"}),Object(n.jsx)(p.a,{children:"Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity."}),Object(n.jsx)(p.a,{children:"Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."}),Object(n.jsx)(p.a,{children:"Instrumentalness predicts whether a track contains no vocals. \u201cOoh\u201d and \u201caah\u201d sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \u201cvocal\u201d."}),Object(n.jsx)(p.a,{children:"Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 100 the attribute value."}),Object(n.jsx)(p.a,{children:"Liveness detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live."}),Object(n.jsx)(p.a,{children:"Acousticness is A confidence measure of whether the track is acoustic."}),Object(n.jsx)(p.a,{children:"Valence is a measure describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."})]})}),Object(n.jsx)("div",{class:"songTitle",children:Object(n.jsx)("p",{className:"stats",style:{color:"#ffffff",width:"100%",textAlign:"center"},children:'"'.concat(u.title,'"')})}),Object(n.jsx)("div",{className:"chartWrap rotate",id:"apexWrap"})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},k=a(45),w=a(220),I=(a(168),Object(k.a)({typography:{fontFamily:"VT323",fontSize:18},palette:{type:"dark",text:{primary:"#d9a362",secondary:"#d9a362"},action:{active:"#d9a362"},divider:"#d9a362",primary:{main:"#d9a362",light:"#d9a362"},secondary:{main:"#d9a362",light:"#d9a362"}}}));r.a.render(Object(n.jsx)(w.a,{theme:I,children:Object(n.jsx)(O,{})}),document.getElementById("root")),v()}},[[169,1,2]]]);
//# sourceMappingURL=main.4561fe42.chunk.js.map