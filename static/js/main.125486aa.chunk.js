(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(42),a(4)),i=a(5),s=a(7),m=a(6),u=a(8),p=(a(44),a(46),a(48),a(50),a(109)),d=a(108),h=a(2),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.Grid,{className:"tertiary"},r.a.createElement(h.Cell,{col:4},r.a.createElement("p",null,this.props.training.duration)),r.a.createElement(h.Cell,{col:8},r.a.createElement("h4",null,this.props.training.trainingProvider),r.a.createElement("p",null,this.props.training.course),r.a.createElement("p",null,this.props.training.type))),r.a.createElement("hr",{style:{borderTop:"2px dotted red"}}))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Grid,{className:"secondary"},r.a.createElement(h.Cell,{col:4},r.a.createElement("p",null,this.props.secondary.completionDate)),r.a.createElement(h.Cell,{col:8},r.a.createElement("h4",null,this.props.secondary.schoolName),r.a.createElement("p",null,this.props.secondary.name)))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tertiary:[{trainingProvider:"Tshwane University Of Technology",duration:"Jan 2014 - Oct 2017",course:"Computer Systems Engineering",type:"National Diploma"},{trainingProvider:"IBM Cognitive",duration:"1 week",course:"HTML5 and CSS3",type:"Certificate"}],secondary:{schoolName:"Vezukhono Secondary School",name:"Grade 12",completionDate:"Dec 2012"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"education"},r.a.createElement("h1",null,"Education"),r.a.createElement("h2",null,"Tertiary"),this.state.tertiary.map(function(e,t){return r.a.createElement(E,{training:e,key:t})}),r.a.createElement("h2",null,"Secondary"),r.a.createElement(f,{secondary:this.state.secondary}))}}]),t}(n.Component),g=function(e){return r.a.createElement(h.Grid,null,r.a.createElement(h.Cell,{col:4},r.a.createElement("h5",{style:{marginTop:"0px"}},e.exp.position)),r.a.createElement(h.Cell,{col:8},r.a.createElement("p",{className:"company-description"},e.exp.company," ",e.exp.duration),r.a.createElement("ul",{className:"work-duties"},e.exp.duties.map(function(e,t){return r.a.createElement("li",{key:t}," ",e)}))))},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={workExperience:[{position:"Junior Software Developer",company:"IBM SA",duration:"April 2018 to date",duties:["Design Web Application Using Python on Django Web Framework pattern to make it extensible and flexible","Building Reusable code and libraries for future use.","Development of API\u2019s using Django-Rest-framework with the help of its documentations.","Developing new user-facing features using React.js","Building reusable components and front-end libraries for future use.","Using GIT for version control","Wrote and executed various MYSQL database queries from python using Python-MySQL connector and MySQL dB package.","Integrating React with Redux for proper state managment","Developing UI by using common Front end Framework like Material UI, antd and react-mdl"]},{position:"Junior Software Developer",company:"Brolink",duration:"July 2017 to March 2018",duties:["Handling day to day clients requests on the websure system,","Development of JSON API to allow communication between ASP.NET and Universe basic web system.","Involved in the Integration of Websure system structure from universe into ASP.NET.","Tested and troubleshooted all applications, websites and components as being developed.","Reporting projects status and updating sprint cards on trello boards during the 15min daily scrum meetings","Ensuring that completed tickets meet the description of done as set out during the beginning of a sprint"]},{position:"Systems Developer Intern",company:"Geekulcha",duration:"1 year (June 2016 to June 2017)",duties:["Design, build, and maintain efficient, reusable, and reliable C++ code","Implement performance and quality modules.","Identify bottlenecks and bugs, and devise solutions to these problems","Help maintain code quality, organization, and atomization","Front-end Development using HTML5,CSS3, Javascript and JQUERY","Back-End development using ASP.Net/ PHP as server side depending on the project requirement.","Development and maintenance of the database stored procedures, views and functions for hosted web applications. ","Ensure all database systems meet business and performance requirements.","Identify inefficiencies in current databases and investigate solutions. ","Team leader leading the Development team, and served as a lead mentor for the Geekulcha Vacation work hosted in Pretoria, Soweto and also in Kimberly."]}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience-container"},r.a.createElement("h1",null,"Work Experience"),this.state.workExperience.map(function(e,t){return r.a.createElement(g,{exp:e,key:t})}))}}]),t}(n.Component),v=function(){return r.a.createElement(h.Grid,{className:"bio-grid"},r.a.createElement(h.Cell,{col:12},r.a.createElement("p",null,"I am a competent individual always ready to take up on a challenge, I have good Mentorship skills, able to work under pressure, alone or in a team, I am an Agile Fan. I do full stack development using ( React,nodejs, python-django) with an emphasis on Front End Development."),r.a.createElement("p",null,"Experienced in developing CRUD applications, RESTFul API's using python django-rest-framework, common library use of Redux, redux-thunk, react-router-dom, react-mdl, react-bootstrap MaterializeCSS MaterialUI, and Antd")))},j=function(){return r.a.createElement("div",null,r.a.createElement(h.Grid,null,r.a.createElement(h.Cell,{className:"profile-left-col",col:6},r.a.createElement("div",null,r.a.createElement("img",{src:"https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58",alt:"profile-pic",className:"resume-avatar"})),r.a.createElement("h2",{style:{paddingTop:"1px"}},"Sakhile Sibuyi"),r.a.createElement("h4",{className:"job-description"},"Full Stack Web Developer"),r.a.createElement("hr",{style:{borderTop:"2px solid red",width:"100%"}})),r.a.createElement("hr",null),r.a.createElement(h.Cell,{col:6,className:"contact-section"},r.a.createElement("h4",null,"Phone"),r.a.createElement("p",null," (+27) 8253 21066"),r.a.createElement("h4",null,"Email"),r.a.createElement("p",null," saksman3@gmail.com"),r.a.createElement("h4",null,"Address"),r.a.createElement("p",null,"24501 Barcelona, Daveyton, 1520"))),r.a.createElement(v,null),r.a.createElement("hr",{style:{borderTop:"5px solid red",width:"100%"}}))},k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.Grid,null,r.a.createElement(h.Cell,{className:"profile-right-col",col:8,style:{width:"70%",margin:"auto"}},r.a.createElement(j,null),r.a.createElement(b,null),r.a.createElement("hr",{style:{borderTop:"5px solid red"}}),r.a.createElement(y,null))))}}]),t}(n.Component),C=function(e){return r.a.createElement(h.Card,{className:"projectCards",shadow:5},r.a.createElement(h.CardTitle,{style:{color:"".concat(e.textColor),height:"176px",background:"url(".concat(e.logo,") center / cover")}},e.project.title),r.a.createElement(h.CardText,null,e.project.description),r.a.createElement("hr",null),r.a.createElement(h.CardActions,{className:"cardActions"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"".concat(e.project.url.github)},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"".concat(e.project.url.liveDemo)},"LiveDemo")),r.a.createElement(h.CardMenu,{style:{color:"#6363fc"}},r.a.createElement(h.IconButton,{name:"share"})))},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={logo:"https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",textColor:"white",projects:[{title:"Articles App",description:"A simple articles app with React + django",url:{github:"http://guthub.com/saksman3/articles",liveDemo:"http://articles-app.herokuapp.com"}},{title:"beer-app",description:"beer app for canpango",url:{github:"http://guthub.com/saksman3/beer-app",liveDemo:"http://my-beer-app.herokuapp.com"}},{title:"portfolio-app",description:"Portfolio app illustrations using react-mdl components, css and react router",url:{github:"http://guthub.com/saksman3/myportfolio",liveDemo:"https://sakhile-portfolio-app.herokuapp.com/"}}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Projects-container"},this.state.projects.map(function(t,a){return r.a.createElement(C,{project:t,key:a,logo:e.state.logo,textColor:e.state.textColor})}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeTab:0},a.OnChange=function(e){a.setState(function(){return{activeTab:e}})},a.toggleTabs=function(){switch(a.state.activeTab){case 1:return r.a.createElement("div",null,r.a.createElement("h1",null,"Python."));case 2:return r.a.createElement("div",null,r.a.createElement("h1",null,"Mysql Projects"));default:return r.a.createElement(w,null)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(h.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.OnChange(t)},ripple:!0},r.a.createElement(h.Tab,{style:{color:"white"}},"React"),r.a.createElement(h.Tab,{style:{color:"white"}},"Python"),r.a.createElement(h.Tab,{style:{color:"white"}},"MySQL")),r.a.createElement("section",null,r.a.createElement(h.Grid,null,r.a.createElement(h.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleTabs())))))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(h.Grid,{className:"homepage-grid"},r.a.createElement(h.Cell,{col:12},r.a.createElement("img",{src:"https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{style:{marginBottom:"0px"}},"Full stack developer"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML|CSS |Bootstrap|NodeJs | Python | React | Redux |Javascript|MySQL"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://za.linkedin.com/in/sakhile-sibuyi-795548112",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fa fa-linkedin-square"})),r.a.createElement("a",{href:"https://twitter.com/sakhilesibuyi",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fa fa-twitter-square"})),r.a.createElement("a",{href:"https://github.com/saksman3/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fa fa-github"})))))))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(h.Grid,{className:"contact-grid"},r.a.createElement(h.Cell,{col:6},r.a.createElement("h2",null,"Sakhile Sibuyi"),r.a.createElement("img",{src:"https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58",alt:"avatar",style:{height:"200px"}}),r.a.createElement("p",{className:"contact-message"},"I am actively looking for people to connect, collaborate and share information and skills with ,perhaps if you have a project in mind or would like to meet me so we can have a cup of coffee while brainstorming then feel free to contact me using any of the contacts method listed.")),r.a.createElement(h.Cell,{col:6,style:{background:"white"}},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contacts-list"},r.a.createElement(h.List,null,r.a.createElement(h.ListItem,null,r.a.createElement(h.ListItemContent,{className:"list-items"},r.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"})," (+27) 8253 21066")),r.a.createElement(h.ListItem,null,r.a.createElement(h.ListItemContent,{className:"list-items"},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"saksman3@gmail.com")),r.a.createElement(h.ListItem,null,r.a.createElement(h.ListItemContent,{className:"list-items"},r.a.createElement("i",{className:"fa fa-skype","aria-hidden":"true"}),"live:saksman3")))))))}}]),t}(n.Component),x=function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",component:N,exact:!0}),r.a.createElement(d.a,{path:"/resume",component:k}),r.a.createElement(d.a,{path:"/project",component:O}),r.a.createElement(d.a,{path:"/contact",component:_}))},D=a(106),I=function(e){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(h.Layout,null,r.a.createElement(h.Header,{title:r.a.createElement(D.a,{style:{textDecoration:"none",color:"white"},to:"/"},"MyPortfolio"),scroll:!1,className:"header-color"},r.a.createElement(h.Navigation,null,r.a.createElement(D.a,{to:"/resume"},"Resume"),r.a.createElement(D.a,{to:"/project"},"Projects"),r.a.createElement(D.a,{to:"/contact"},"ContactMe"))),r.a.createElement(h.Drawer,{title:r.a.createElement(D.a,{style:{textDecoration:"none",color:"black"},to:"/"},"Portfolio")},r.a.createElement(h.Navigation,null,r.a.createElement(D.a,{to:"/resume"},"Resume"),r.a.createElement(D.a,{to:"/project"},"Projects"),r.a.createElement(D.a,{to:"/contact"},"ContactMe"))),r.a.createElement(h.Content,null,r.a.createElement("div",{className:"page-content"}),e.children)))},S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null,r.a.createElement(x,null)))}}]),t}(n.Component);a(102),a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(107);o.a.render(r.a.createElement(T.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){e.exports=a(105)},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){}},[[37,2,1]]]);
//# sourceMappingURL=main.125486aa.chunk.js.map