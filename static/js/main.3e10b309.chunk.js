/*! For license information please see main.3e10b309.chunk.js.LICENSE.txt */
(this.webpackJsonpmytube=this.webpackJsonpmytube||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"video_detail_channel_container__3MYTO",channel_Container:"video_detail_channel_channel_Container__39dOD",channel:"video_detail_channel_channel__89QFs",channelInfo:"video_detail_channel_channelInfo__3u4hP",channelTitle:"video_detail_channel_channelTitle__RhPpD",subscribeON:"video_detail_channel_subscribeON__2JI5s",subscribeOFF:"video_detail_channel_subscribeOFF__3GbZi",description:"video_detail_channel_description__2-snB"}},function(e,t,n){e.exports={video__container:"video_item_video__container__2kHgO",grid:"video_item_grid__9K7hV",list:"video_item_list__2s8YS",video__item:"video_item_video__item__2DQOS",video__thumbnail:"video_item_video__thumbnail__1WhU1",video__description:"video_item_video__description__3ZL2_",video__title:"video_item_video__title__22O1b",video__channel:"video_item_video__channel__3y0jF"}},function(e,t,n){e.exports={header:"search_header_header__2aaTk",logo:"search_header_logo__2QqoC",img:"search_header_img__Qtb3z",title:"search_header_title__2m2Kr",input:"search_header_input__2fK5a",button:"search_header_button__mi5oB"}},function(e,t,n){e.exports={container:"comment_item_container__4INB4",userImg:"comment_item_userImg__1uRyI",userInfo:"comment_item_userInfo__EupH_",userId:"comment_item_userId__37LKh"}},function(e,t,n){e.exports={app:"app_app__27JZb",content:"app_content__1zMVp",detail:"app_detail___JXvP",list:"app_list__1lbDz"}},function(e,t,n){e.exports={container:"video_detail_title_container__F8II5",viewCount:"video_detail_title_viewCount__3Tg_r",like:"video_detail_title_like__2km8w"}},,function(e,t,n){e.exports={container:"loading_container__2FgHm",loader:"loading_loader__1N_TI",animate:"loading_animate__HpQRg"}},function(e,t,n){e.exports={commentList:"comment_list_commentList__3e8mx"}},,function(e,t,n){e.exports={video__list:"video_list_video__list__3d4BU"}},function(e,t,n){e.exports={detail:"video_detail_detail__3qwfY"}},,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(14),i=n.n(c),r=(n(23),n(2)),o=n.n(r),l=n(4),u=n(3),d=n(6),p=n.n(d),j=n(0),_=Object(s.memo)((function(e){var t=e.video.snippet,n=t.title,s=t.channelTitle,a=e.video.snippet.thumbnails.medium.url,c=e.onVideoClick,i=e.video,r="list"===e.display?p.a.list:p.a.grid;return Object(j.jsx)("li",{className:"".concat(p.a.video__container," ").concat(r),onClick:function(){c(i)},children:Object(j.jsxs)("div",{className:p.a.video__item,children:[Object(j.jsx)("img",{className:p.a.video__thumbnail,src:a,alt:"video thumbnail"}),Object(j.jsxs)("div",{className:p.a.video__description,children:[Object(j.jsx)("p",{className:p.a.video__title,children:n}),Object(j.jsx)("p",{className:p.a.video__channel,children:s})]})]})})})),h=n(15),b=n.n(h),m=function(e){var t=e.videos,n=e.onVideoClick,s=e.display;return Object(j.jsx)("ul",{className:b.a.video__list,children:t.map((function(e){return Object(j.jsx)(_,{video:e,onVideoClick:n,display:s},e.id.videoId)}))})},v=n(12),f=n.n(v),O=function(e){return Object(j.jsx)("div",{className:f.a.container,children:Object(j.jsx)("div",{className:f.a.loader,children:Object(j.jsx)("span",{})})})},x=n(7),y=n.n(x),N=function(e){var t=e.mainPageGo,n=Object(s.useRef)(),a=function(){var t=n.current.value;e.onSearch(t)};return Object(j.jsxs)("header",{className:y.a.header,children:[Object(j.jsxs)("div",{className:y.a.logo,onClick:function(){t()},children:[Object(j.jsx)("img",{className:y.a.img,src:"/images/Youtube.png",alt:"lgo"}),Object(j.jsx)("h1",{className:y.a.title,children:"Mytube"})]}),Object(j.jsx)("input",{ref:n,className:y.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(j.jsx)("button",{className:y.a.button,type:"submit",onClick:function(){a()},children:Object(j.jsx)("i",{className:"fas fa-search"})})]})},w=n(16),g=n.n(w),k=function(e){var t=e.video;return Object(j.jsx)("iframe",{className:"",id:"player",type:"text/html",title:"youtube video player",width:"100%",height:"700px",src:"https://www.youtube.com/embed/".concat(t.id.videoId),frameBorder:"0",allowFullScreen:!0})},I=n(10),C=n.n(I),S=function(e){var t=e.video,n=e.videoInfo,a=Object(s.useState)(0),c=Object(u.a)(a,2),i=c[0],r=c[1],o=Object(s.useState)(0),l=Object(u.a)(o,2),d=l[0],p=l[1],_=Object(s.useState)(!0),h=Object(u.a)(_,2),b=h[0],m=h[1],v=Object(s.useState)(!0),f=Object(u.a)(v,2),O=f[0],x=f[1],y=Object(s.useRef)(),N=Object(s.useRef)(),w=n[0].statistics.viewCount,g=t.snippet.publishTime.split("T")[0].replaceAll("-",". ");w=parseInt(w).toLocaleString("ko-KR");var k=function(e){return e>=1e4?Math.floor(e/1e4)+"\ub9cc\uba85":e>=1e3?Math.floor(e/1e3)+"\ucc9c\uba85":e+"\uba85"};return Object(s.useEffect)((function(){r(n[0].statistics.likeCount),p(n[0].statistics.dislikeCount)}),[n]),Object(j.jsxs)("div",{className:C.a.container,children:[Object(j.jsx)("h2",{children:t.snippet.title}),Object(j.jsxs)("div",{className:C.a.viewCount,children:[Object(j.jsxs)("p",{children:["\uc870\ud68c\uc218 ",w,"\ud68c ",Object(j.jsxs)("span",{children:["\u2022 ",g]})," "]}),Object(j.jsx)("div",{className:C.a.like,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{ref:y,onClick:function(){b?(r(parseInt(i)+1),m(!1),y.current.style.color="#3EA6FF",O||(p(parseInt(d)-1),x(!0),N.current.style.color="#aaaaaa")):(r(parseInt(i)-1),m(!0),y.current.style.color="#aaaaaa")},children:Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-thumbs-up"}),k(i)]})}),Object(j.jsx)("li",{ref:N,onClick:function(){O?(p(parseInt(d)+1),x(!1),N.current.style.color="#3EA6FF",b||(r(parseInt(i)-1),m(!0),y.current.style.color="#aaaaaa")):(p(parseInt(d)-1),x(!1),N.current.style.color="#aaaaaa")},children:Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-thumbs-down"}),k(d)]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-share"}),"\uacf5\uc720"]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-save"}),"\uc800\uc7a5"]})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-ellipsis-h"})})]})})]})]})},F=n(5),T=n.n(F),R=function(e){var t,n=e.video,a=e.channel,c=Object(s.useState)(!1),i=Object(u.a)(c,2),r=i[0],o=i[1],l=a[0].statistics.subscriberCount,d=a[0].statistics.hiddenSubscriberCount;t=l>=1e4?l/1e4+"\ub9cc\uba85":l>=1e3?l/1e3+"\ucc9c\uba85":l+"\uba85";var p=a[0].snippet.description,_=Object(s.useRef)();return Object(j.jsxs)("div",{className:T.a.container,children:[Object(j.jsxs)("div",{className:T.a.channel_Container,children:[Object(j.jsxs)("div",{className:T.a.channel,children:[Object(j.jsx)("div",{className:T.a.thumbnails,children:Object(j.jsx)("img",{src:a[0].snippet.thumbnails.default.url,alt:""})}),Object(j.jsxs)("div",{className:T.a.channelInfo,children:[Object(j.jsx)("h3",{className:T.a.channelTitle,children:n.snippet.channelTitle}),d?Object(j.jsx)("span",{}):Object(j.jsxs)("p",{children:["\uad6c\ub3c5\uc790 ",t]})]})]}),Object(j.jsx)("div",{onClick:function(){o(!r)},children:r?Object(j.jsx)("span",{ref:_,className:T.a.subscribeON,children:"\uad6c\ub3c5\uc911"}):Object(j.jsx)("span",{ref:_,className:T.a.subscribeOFF,children:"\uad6c\ub3c5"})})]}),Object(j.jsx)("div",{className:T.a.description,children:p.split("\n").map((function(e,t){return Object(j.jsxs)("span",{children:[e,Object(j.jsx)("br",{})]},t)}))})]})},L=n(13),q=n.n(L),E=n(8),P=n.n(E),A=function(e){for(var t,n=e.comment,s=e.today,a=n.snippet.topLevelComment.snippet.authorProfileImageUrl,c=n.snippet.topLevelComment.snippet.authorDisplayName,i=n.snippet.topLevelComment.snippet.textOriginal,r=n.snippet.topLevelComment.snippet.publishedAt.split("T")[0].split("-").map((function(e){return parseInt(e)})),o=[],l=0;l<r.length;l++)o.push(s[l]-r[l]);return o[0]>1?t=o[0]-1+"\ub144 \uc804":1===o[0]?t=12*o[0]+o[1]+"\uac1c\uc6d4 \uc804":0===o[0]&&(o[1]>0?t=o[1]+"\uac1c\uc6d4 \uc804":0===o[1]&&(t=o[2]+"\uc77c \uc804")),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:P.a.container,children:[Object(j.jsx)("div",{className:P.a.userImg,children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsxs)("div",{className:P.a.userInfo,children:[Object(j.jsxs)("p",{className:P.a.userId,children:[c," ",Object(j.jsx)("span",{children:t})]}),Object(j.jsx)("p",{className:P.a.userComment,children:i})]})]})})},B=function(e){var t=e.comments,n=new Date,s=n.getFullYear(),a=n.getMonth()+1,c=n.getDate(),i=[];return i.push(s),i.push(a),i.push(c),Object(j.jsx)("div",{className:q.a.container,children:Object(j.jsx)("ul",{className:q.a.commentList,children:t.map((function(e){return Object(j.jsx)(A,{comment:e,today:i},e.id)}))})})},D=function(e){var t=e.video,n=e.channel,s=e.videoInfo,a=e.comments;return Object(j.jsxs)("section",{className:g.a.detail,children:[Object(j.jsx)(k,{video:t}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)(S,{video:t,videoInfo:s}),Object(j.jsx)(R,{video:t,channel:n}),Object(j.jsx)(B,{comments:a})]})]})},M=n(9),V=n.n(M);var K=function(e){var t=e.youtube,n=Object(s.useState)(!0),a=Object(u.a)(n,2),c=a[0],i=a[1],r=Object(s.useState)([]),d=Object(u.a)(r,2),p=d[0],_=d[1],h=Object(s.useState)(null),b=Object(u.a)(h,2),v=b[0],f=b[1],x=Object(s.useState)(),y=Object(u.a)(x,2),w=y[0],g=y[1],k=Object(s.useState)(),I=Object(u.a)(k,2),C=I[0],S=I[1],F=Object(s.useState)(),T=Object(u.a)(F,2),R=T[0],L=T[1],q=Object(s.useRef)(),E=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.channel(n).then((function(e){g(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.videoInfo(n).then((function(e){S(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.comments(n).then((function(e){L(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.snippet.channelId);case 2:return e.next=4,P(t.id.videoId);case 4:return e.next=6,A(t.id.videoId);case 6:setTimeout((function(){f(t)}),500),M();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){q.current.scrollIntoView()};return Object(s.useEffect)((function(){t.mostPopular().then((function(e){_(e),setTimeout((function(){i(!1)}),1e3)}))}),[t]),c?Object(j.jsx)(O,{}):Object(j.jsxs)("div",{className:V.a.app,ref:q,children:[Object(j.jsx)(N,{onSearch:function(e){t.search(e).then((function(e){_(e),f(null)}))},mainPageGo:function(){f(null)}}),Object(j.jsxs)("section",{className:V.a.content,children:[v&&Object(j.jsx)("div",{className:V.a.detail,children:Object(j.jsx)(D,{video:v,channel:w,videoInfo:C,comments:R})}),Object(j.jsx)("div",{className:V.a.list,children:Object(j.jsx)(m,{videos:p,onVideoClick:B,display:v?"list":"grid"})})]})]})},H=n(17),J=n(18),Q=new(function(){function e(t){Object(H.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(J.a)(e,[{key:"mostPopular",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=".concat(this.key),this.requestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=".concat(t,"&type=video&key=").concat(this.key),this.requestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"channel",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=".concat(t,"&key=").concat(this.key),this.requestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"videoInfo",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=".concat(t,"&key=").concat(this.key),this.requestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"comments",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance&videoId=".concat(t,"&maxResults=25&key=").concat(this.key),this.requestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,e.abrupt("return",s.items);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyBbgip2FWRZ06Retj7AkcsqEuwH1CLo-AE");i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(K,{youtube:Q})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.3e10b309.chunk.js.map