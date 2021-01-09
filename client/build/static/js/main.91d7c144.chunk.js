(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{39:function(e,t,n){e.exports=n(73)},44:function(e,t,n){},45:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(35),l=n.n(r),i=(n(44),n(10)),c=n(11),s=n(13),u=n(12),m=(n(45),n(46),n(37)),h=n(5),p=n(79);var d=function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement("a",{className:"navbar-brand",href:"/"},"Search"),o.a.createElement("a",{className:"navbar-brand",href:"/Saved"},"Saved")))},f=n(36),v=n(74),g=n(75),k={img:{backgroundImage:"url(/books.jpeg)",backgroundRepeat:"no-repeat",backgroundPosition:"center"},header:{color:"white",fontSize:50},p:{color:"white",fontSize:25}};var b=function(){return o.a.createElement("div",null,o.a.createElement(v.a,{fluid:!0,style:k.img},o.a.createElement(g.a,null,o.a.createElement("h1",{style:k.header},"Google Books"),o.a.createElement("p",{style:k.p},"Find a book from this collection here"))))},E=n(76);function y(e){return o.a.createElement("div",{className:"input-group input-group-lg"},o.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)))}function j(e){return o.a.createElement(E.a,Object.assign({variant:"dark",type:"submit"},e),"Search")}var w=n(16),O=n.n(w),B=function(e){return O.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},S=function(){return O.a.get("/api/books")},C=function(e){return O.a.delete("/api/books/"+e)},I=function(e){return O.a.post("/api/books",e)},L=n(80),x=n(77),N=n(78),D={card:{margin:15},img:{height:200}},F=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={mounted:!1,bgColor:"",color:"",text:"Save"},e.componentDidMount=function(){e.setState({mounted:!0}),console.log("MOUNTED")},e.getStyle=function(){"Save"===e.state.text?e.setState({bgColor:"696969",color:"black",text:"Saved"}):e.setState({bgColor:"",color:"",text:"Save"})},e.onClickFunc=function(){e.props.saveBook(e.props),e.getStyle()},e}return Object(c.a)(n,[{key:"render",value:function(e){return o.a.createElement(L.a,{style:D.card},o.a.createElement(L.a.Body,null,o.a.createElement(x.a,null,o.a.createElement(N.a,null,o.a.createElement("img",{alt:this.props.title,src:this.props.image,style:D.img})),o.a.createElement(N.a,null,this.props.authors),o.a.createElement(N.a,null,this.props.description),o.a.createElement(N.a,null,o.a.createElement(L.a.Link,{href:this.props.link},"Link Here"),o.a.createElement(E.a,{onClick:this.onClickFunc},this.state.text)))))}}]),n}(a.Component),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return console.log("ResultList!",this.props.bookState),this.props.bookState.map((function(t){return o.a.createElement(F,{key:t.id,id:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg",description:t.volumeInfo.description,saveBook:e.props.saveBook})}))}}]),n}(a.Component),W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[],search:""},e.searchBooks=function(){B(e.state.search).then((function(t){console.log(t.data.items),e.setState({books:t.data.items,search:""})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(f.a)({},a,o))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchBooks()},e.saveBook=function(e){console.log("got the current book!!",e),I({id:e.id,title:e.title,authors:e.authors.authors,description:e.authors.description,image:e.authors.image,link:e.link}).then((function(e){return console.log("posted to database!",e)})).catch((function(e){return console.log("error posting to database",e)}))},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement(y,{value:this.state.search,onChange:this.handleInputChange,name:"search",placeholder:"type keyword here"}),o.a.createElement(j,{onClick:this.handleFormSubmit}),this.state.books.length?o.a.createElement(A,{bookState:this.state.books,saveBook:this.saveBook}):o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("p",null,"No results yet")))}}]),n}(a.Component),M={card:{margin:15},img:{height:200}};var R=function(e){var t=e.title,n=e.authors,a=e.image,r=e.link,l=e.description,i=e.deleteBook;return o.a.createElement(L.a,{style:M.card},o.a.createElement(L.a.Body,null,o.a.createElement(x.a,null,o.a.createElement(N.a,null,o.a.createElement("img",{alt:t,src:a,style:M.img})),o.a.createElement(N.a,null,n),o.a.createElement(N.a,null,l),o.a.createElement(N.a,null,o.a.createElement(L.a.Link,{href:r},"Link Here"),o.a.createElement(E.a,{onClick:i.bind(this,e)},"Delete")))))},z=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return this.props.bookState.map((function(t){return o.a.createElement(R,{key:t._id,id:t._id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,image:t.volumeInfo.image?t.imageLinks.thumbnail:"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg",description:t.volumeInfo.description,deleteBook:e.props.deleteBook})}))}}]),n}(a.Component),H=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.componentDidMount=function(){e.getBooks()},e.deleteBook=function(t){C(t.id).then((function(t){console.log("book deleted!",t),e.getBooks()})).catch((function(e){console.log("error deleting book",e)}))},e.getBooks=function(){S().then((function(t){e.setState({savedBooks:t.data})})).catch((function(e){console.log("error getting books",e)}))},e}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null),this.state.savedBooks.length?o.a.createElement(z,{bookState:this.state.savedBooks,deleteBook:this.deleteBook}):o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("p",null,"No results yet")))}}]),n}(a.Component),J=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(d,null),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:W}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:H})))}}]),n}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(J,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");U?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):_(e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.91d7c144.chunk.js.map