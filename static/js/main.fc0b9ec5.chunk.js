(this.webpackJsonpenglish=this.webpackJsonpenglish||[]).push([[0],[,,function(t,e,a){t.exports=a.p+"static/media/carta1color.bd1051bc.jpg"},,,function(t,e,a){t.exports=a.p+"static/media/logo.be9fdf25.png"},,,,,,,function(t,e,a){t.exports=a(28)},,,,,function(t,e,a){t.exports=a.p+"static/media/carta2color.6cd18c90.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta3color.55a95187.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta4color.8984da76.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta5color.e48aeca2.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta6color.80644049.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta7color.8046e1c1.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta8color.a781a289.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta9color.a92eb66a.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta10color.e22771f8.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta11color.e5e5a90d.jpg"},function(t,e,a){t.exports=a.p+"static/media/carta12color.f815db31.jpg"},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),l=a(5),i=a.n(l);var s=function(){return o.a.createElement("header",null,o.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"English Cards"))},m=a(6),p=a(7),u=a(8),d=a(10),h=a(9),g=a(1),f=a(11),x=a(2),b=a.n(x),j=(a(17),a(18),a(19),a(20),a(21),a(22),a(23),a(24),a(25),a(26),a(27),function(t){function e(){var t;return Object(p.a)(this,e),(t=Object(d.a)(this,Object(h.a)(e).call(this))).state={topText:"",bottomText:"",randomImg:o.a.createElement("img",{src:b.a,className:"Carta1",alt:"Carta1Color"}),allMemeImgs:[]},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"})).then((function(t){return t.json()})).then((function(e){var a=e.data.memes;t.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),o.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),o.a.createElement("button",null,"Gen")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImg,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),e}(n.Component));var E=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(j,null))};r.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.fc0b9ec5.chunk.js.map