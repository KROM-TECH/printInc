(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aa6db68"],{"0872":function(t,e,a){"use strict";var r=a("dcd9"),s=a.n(r);s.a},ac60:function(t,e,a){t.exports=a.p+"media/cont.e8e60aa3.aac"},b8fa:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"social"},[a("div",{staticClass:"cd a",on:{click:t.play}},[t._v(" "+t._s(t.state)+" ")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)]),a("div",{staticClass:"form"},[t._m(5),a("form",{attrs:{name:"submit-to-google-sheet"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[a("input",{attrs:{placeholder:"Name",type:"text",name:"Name",id:""}}),a("input",{attrs:{placeholder:"Email",type:"email",name:"Email",id:""}}),a("textarea",{attrs:{placeholder:"Message",name:"Message",id:"",cols:"23",rows:"5"}}),a("button",{attrs:{id:"btn",type:"submit"}},[t._v(t._s(t.text))])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://twitter.com/kromate_24",target:"_blank",rel:"noreferrer"}},[a("div",{staticClass:"cd twitter"},[t._v(" Twitter ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://kromate.hashnode.dev/",target:"_blank",rel:"noreferrer"}},[a("div",{staticClass:"cd github"},[t._v(" Hashnode ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://www.instagram.com/kromtech_24/",target:"_blank",rel:"noreferrer"}},[a("div",{staticClass:"cd instagram"},[t._v(" Instagram ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://github.com/kromate",target:"_blank",rel:"noreferrer"}},[a("div",{staticClass:"cd github"},[t._v(" Github ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://wa.me/2348146923944",target:"_blank",rel:"noreferrer"}},[a("div",{staticClass:"cd whatsapp"},[t._v(" Whatsapp ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("None of the fields are required ("),a("i",[t._v("You free to remain Anonymous")]),t._v(")😉")])}],n=(a("d3b7"),new Audio);n.src=a("ac60");var i={data:function(){return{state:"Play",text:"Submit"}},methods:{play:function(){console.log("playingo"),"Play"==this.state?(this.state="Pause",n.play()):(this.state="Play",n.pause())},handleSubmit:function(){var t=this,e=document.forms["submit-to-google-sheet"],a="https://script.google.com/macros/s/AKfycbxHtzgmNP5GGoomN1JUwX6UCWwqnEhiUGGwz4BnjYyNYV6PaT8/exec";document.querySelector("#btn").disabled=!0,this.text="Sending",fetch(a,{method:"POST",body:new FormData(e)}).then((function(e){t.text="Sent"})).catch((function(e){alert("Error!",e.message),document.querySelector("#btn").disabled=!1,t.text="Submit"}))}}},c=i,o=(a("0872"),a("2877")),l=Object(o["a"])(c,r,s,!1,null,"3940f49f",null);e["default"]=l.exports},dcd9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6aa6db68.2a15a93f.js.map