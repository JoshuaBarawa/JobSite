(this.webpackJsonpjoblisting=this.webpackJsonpjoblisting||[]).push([[0],{12:function(n){n.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},23:function(n,o,e){"use strict";e.r(o);var t,i=e(1),a=e.n(i),r=e(8),s=e.n(r),l=e(13),c=e(3),d=e(2),p=d.c.div(t||(t=Object(c.a)(["\n\n    display: flex;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n    margin-bottom: 40px;\n    padding: 20px;\n    border-radius: 5px;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #fff;\n    word-break: break-all;\n   \n\n    #desc{\n        display: flex;\n        justify-content: space-between;\n    }\n\n    #logo{\n        margin-right: 30px;\n        width: 100px;\n    }\n\n    #description span:nth-child(1){\n        color: hsl(180, 29%, 50%);\n    }\n\n    #description #new{\n        color: #fff;\n        background-color: hsl(180, 29%, 50%);\n        border-radius: 10px;\n        font-size: 14px;\n        margin-left: 10px;\n        padding: 2px 3px;\n        font-weight: bold;\n    }\n\n    #description #featured {\n        color: #fff;\n        background-color: #403e42;\n        margin-left: 10px;\n        font-size: 12px;\n        margin-left: 10px;\n        padding: 4px 5px;\n        font-weight: bold;\n        border-radius: 10px;\n    }\n\n    #description #contract, #postedAt, #location{\n        color: hsl(180, 8%, 52%);\n        padding-right: 7px;\n    }\n\n    #description h3:hover{\n        color: hsl(180, 29%, 50%);\n    }\n\n    #tools span{\n       padding-right: 20px;\n       background-color: hsl(180, 31%, 95%);\n       color: hsl(180, 29%, 50%);\n       font-size: 15px;\n       font-weight: bold;\n       margin-left: 15px;\n       text-align: center;\n       padding: 5px 10px;\n       border-radius: 5px;\n    }\n\n    #tools span:hover{\n       color: #fff;\n       background-color: hsl(180, 29%, 50%);\n    }\n\n\n    &:hover{\n        border-left: hsl(180, 29%, 50%) 3px solid;\n        cursor: pointer;\n    }\n\n    @media (max-width: 1400px){\n       flex-direction: column;\n       \n       #desc{\n        margin-bottom: 20px;\n        width: 100%; \n        justify-content: flex-start;\n     }\n\n     #description #contract, #postedAt, #location{\n        display: inline-block;\n        margin-top: 10px;\n    }\n\n    #tools span{\n        display: inline-block;\n        margin-top: 10px;\n     }\n\n     #tools{\n        width: 100%;\n     }\n\n    }\n\n    @media (max-width: 710px){\n        #desc{\n            flex-direction: column; \n            border-bottom: hsl(180, 8%, 52%) 2px solid;\n            align-items: left; \n            width: 100%; \n      }\n   \n      #description #contract, #postedAt, #location{\n        margin-bottom: 10px;\n     }\n\n     #logo{\n         width: 70px;\n         position: relative;\n         margin-top: -50px;\n        \n     }\n \n     }\n\n"]))),g=e(0);var u,x=function(n){n.id;var o=n.item;return Object(g.jsxs)(p,{children:[Object(g.jsxs)("div",{id:"desc",children:[Object(g.jsx)("img",{id:"logo",src:o.logo,alt:""}),Object(g.jsxs)("div",{id:"description",children:[Object(g.jsx)("span",{children:o.company}),!!o.new&&Object(g.jsx)("span",{id:"new",children:"NEW"}),!!o.featured&&Object(g.jsx)("span",{id:"featured",children:"FEATURED"}),Object(g.jsx)("h3",{children:o.position}),Object(g.jsx)("span",{id:"postedAt",children:o.postedAt}),Object(g.jsxs)("span",{id:"contract",children:[" . ",o.contract]}),Object(g.jsxs)("span",{id:"location",children:[" . ",o.location]})]})]}),Object(g.jsxs)("div",{id:"tools",children:[Object(g.jsx)("span",{children:o.role}),Object(g.jsx)("span",{children:o.level}),o.languages.map((function(n){return Object(g.jsx)("span",{children:n})})),o.tools.map((function(n){return Object(g.jsx)("span",{children:n})}))]})]})},f=e(12);function m(){var n=Object(i.useState)(""),o=Object(l.a)(n,2),e=o[0],t=o[1];return console.log(e),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{id:"search",type:"text",placeholder:"search job...",onChange:function(n){return t(n.target.value)}}),f.filter((function(n){return""===n.position.toLowerCase()||n.position.toLowerCase().includes(e.toLocaleLowerCase())?n:n.position.toLowerCase().includes(e.toLocaleLowerCase())?"ooops....job not found":void 0})).map((function(n,o){return Object(g.jsx)(x,{item:n},o)}))]})}var h,b,j=d.c.div(u||(u=Object(c.a)(["\n\npadding: 20px 18%;\nmargin: 0px 20px;\n\n"]))),v=Object(d.b)(h||(h=Object(c.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');\n*{\n    font-family: 'Spartan', sans-serif;\n    box-sizing: border-box;\n\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    background-color: hsl(180, 31%, 95%);\n}\n\n#search{\n    padding: 10px 40px;\n    border-radius: 10px;\n    margin-bottom: 30px;\n    border:none;\n    background-color: hsl(180, 31%, 85%);\n    font-size: 18px;\n    position: sticky;\n    top: 5%;\n}\n\n#search:focus{\n   outline:none;\n}\n\n@media (max-width: 710px){\n    #search{\n       width: 100%;\n     }\n\n }\n\n"]))),w=d.c.div(b||(b=Object(c.a)(["\n\nbackground-color : hsl(180, 29%, 50%);\nheight: 100px;\nposition: sticky;\ntop: 0;\nz-index: 1;\n"]))),y=function(){return Object(g.jsx)(w,{})},O={mobile:"768px"};var S=function(){return Object(g.jsxs)(d.a,{theme:O,children:[Object(g.jsx)(v,{}),Object(g.jsx)(y,{}),Object(g.jsx)(j,{children:Object(g.jsx)(m,{})})]})},F=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(o){var e=o.getCLS,t=o.getFID,i=o.getFCP,a=o.getLCP,r=o.getTTFB;e(n),t(n),i(n),a(n),r(n)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),F()}},[[23,1,2]]]);
//# sourceMappingURL=main.486684fa.chunk.js.map