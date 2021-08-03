(this.webpackJsonptodo2=this.webpackJsonptodo2||[]).push([[0],{12:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(3),a=r.n(c),d=(r(12),r(1));var s=function(e){return Object(d.jsx)("div",{className:"flex flex-col justify-start pt-3 sm:p-3 bg-gray-900 w-full min-h-screen sm:min-h-full sm:mt-6 sm:mb-6 sm:max-w-md sm:rounded-xl sm:mx-auto md:mt-12 md:mb-12 md:max-w-lg lg:max-w-xl",children:e.children})};var l=function(){return Object(d.jsx)("h1",{className:"flex-shrink text-white font-semibold text-lg sm:text-xl md:text-2xl text-center mb-6",children:"What's the Plan for Today?"})},i=r(2),m=r(4),u=["red","yellow","green","blue","indigo","purple","pink"],x={todos:[],tempText:"",lastId:0,lastColor:u[Math.floor(Math.random()*u.length)]},b=Object(m.b)({name:"todo",initialState:x,reducers:{addTodoHandler:function(e){var t="";if(""!==e.tempText.trim()){t=e.tempText.trim();var r,n=u.lastIndexOf(e.lastColor);r=n+1>6?"red":u[n+1],e.todos.push({id:e.lastId+1,text:t,color:r,isDone:!1}),e.lastId++,e.lastColor=r,e.tempText=""}},changeTitleHandler:function(e,t){e.tempText=t.payload}}}),j=b.actions,h=b;var p=function(){var e=Object(i.c)((function(e){return e.todo.tempText})),t=Object(i.b)();return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(j.addTodoHandler())},className:"flex justify-center mb-6",children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a todo",className:"appearance-none bg-gray-900 text-white text-sm px-3 py-2 w-1/2 rounded-l-md border-2 border-purple-900 focus:outline-none focus:border focus:border-purple-500",onChange:function(e){t(j.changeTitleHandler(e.target.value))},value:e}),Object(d.jsx)("button",{className:"bg-gradient-to-r from-blue-700 to-purple-700 text-sm px-3 py-2 text-white rounded-r-md border-2 border-l-0 border-purple-800",children:"Add Todo"})]})};var f=function(e){return Object(i.c)((function(e){return e.todo.title})),Object(i.b)(),Object(d.jsxs)("div",{className:"flex justify-between px-3 py-3 mx-4 mb-3 items-center bg-gradient-to-r from-".concat(e.data.color,"-500 to-").concat(e.data.color,"-700 rounded-md border-2 border-").concat(e.data.color,"-600"),children:[Object(d.jsx)("h1",{className:"text-white",children:e.data.text}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("svg",{className:"w-6 h-6 text-gray-200 mr-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(d.jsx)("svg",{className:"w-6 h-6 text-gray-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})," "]})]})};var g=function(){var e=Object(i.c)((function(e){return e.todo.todos}));return Object(d.jsx)(d.Fragment,{children:e.map((function(e){return Object(d.jsx)(f,{data:e},e.id)}))})};var O=function(){return Object(d.jsxs)(s,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(p,{}),Object(d.jsx)(g,{})]})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))},v=Object(m.a)({reducer:{todo:h.reducer}});a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{store:v,children:Object(d.jsx)(O,{})})}),document.getElementById("root")),w()}},[[18,1,2]]]);
//# sourceMappingURL=main.4302ea14.chunk.js.map