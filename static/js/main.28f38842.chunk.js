(this["webpackJsonpbudget-calculator"]=this["webpackJsonpbudget-calculator"]||[]).push([[0],[,,,,,function(e,t,s){e.exports=s.p+"static/media/login.80f37359.svg"},,,function(e,t,s){e.exports=s.p+"static/media/save.d82c8949.svg"},function(e,t,s){e.exports=s.p+"static/media/edit.b26a118c.svg"},function(e,t,s){e.exports=s.p+"static/media/delete.45844116.svg"},function(e,t,s){e.exports=s.p+"static/media/refresh.4d49b1ee.svg"},function(e,t,s){e.exports=s.p+"static/media/settings.4b4752d6.svg"},function(e,t,s){e.exports=s.p+"static/media/calculator.d0eb6fd9.svg"},function(e,t,s){e.exports=s.p+"static/media/username.b6fc0f15.svg"},function(e,t,s){e.exports=s.p+"static/media/registration.2d9cb434.svg"},function(e,t,s){e.exports=s.p+"static/media/password.b810fd50.svg"},function(e,t,s){e.exports=s(36)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(7),r=s.n(i),o=(s(22),s(1)),c=s(2),l=s(4),u=s(3),h=(s(23),s(8)),p=s.n(h),m=(s(24),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={value:"",focus:!1},a}return Object(c.a)(s,[{key:"clearInput",value:function(){var e=this.state;e.value="",this.setState(e)}},{key:"inputValue",value:function(e){var t=this.state;t.value=this.props.validateValue(e.target),this.setState(t)}},{key:"createItem",value:function(){if(this.state.value.length){var e=this.props.transformValue(this.state.value);this.props.checkValue(e)&&(this.props.createItem(e),this.clearInput())}}},{key:"changeFocus",value:function(){var e=this.state;e.focus=!e.focus,this.setState(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"item-creator-wrapper",onFocus:function(t){return e.changeFocus()},onBlur:function(t){return e.changeFocus()},style:{height:"".concat(.05715*this.props.size,"px"),boxShadow:"0 0 ".concat(.006*this.props.size,"px ").concat(this.props.boxShadows.light).concat(this.state.focus?", inset 0px 0px ".concat(.02*this.props.size,"px -").concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light):"")}},n.a.createElement("div",{className:"item-creator-value"},n.a.createElement("input",{type:"text",value:this.state.value,onChange:function(t){return e.inputValue(t)},onKeyPress:function(t){return"Enter"===t.key?e.createItem(t):null},style:{fontSize:"".concat(.034*this.props.size,"px")}})),n.a.createElement("div",{className:"item-creator-save"},n.a.createElement("button",{onClick:function(t){return e.createItem()}},n.a.createElement("img",{src:p.a,alt:"save"}))))}}]),s}(a.Component)),g=(s(25),s(9)),d=s.n(g),y=s(10),v=s.n(y),b=s(11),f=s.n(b),S=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={editing:!1,deleting:!1,value:e.value},a}return Object(c.a)(s,[{key:"editingValue",value:function(){var e=this.state;e.editing=!this.state.editing,this.setState(e)}},{key:"deleteItem",value:function(){var e=this.state;e.deleting=!0,this.setState(e)}},{key:"deletingItem",value:function(){var e=this;this.deleteItem(),setTimeout((function(){return e.props.deleteItem(e.props.id)}),400)}},{key:"editValue",value:function(){if(this.state.value.length){this.editingValue();var e=this.state;e.value=this.props.transformValue(this.state.value),this.setState(e),this.props.changeItemValue(this.props.id,this.props.transformValue(this.state.value))}}},{key:"inputValue",value:function(e){var t=this.state;t.value=this.props.validateValue(e.target),this.setState(t)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"item-wrapper".concat(this.state.deleting?" item-deleting":""),style:{height:"".concat(.05715*this.props.size,"px"),boxShadow:"0 0 ".concat(.006*this.props.size,"px ").concat(this.props.boxShadows.light).concat(this.state.editing?", inset 0px 0px ".concat(.02*this.props.size,"px -").concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light):"")}},n.a.createElement("div",{className:"item-value"},n.a.createElement("input",{type:"text",value:this.state.value,onChange:function(t){return e.inputValue(t)},onKeyPress:function(t){return"Enter"===t.key?e.editValue():null},readOnly:!this.state.editing,autoFocus:this.state.editing,style:{fontSize:"".concat(.034*this.props.size,"px")}})),n.a.createElement("div",{className:"item-edit"},n.a.createElement("button",{onClick:function(t){return e.editValue()}},n.a.createElement("img",{src:this.state.editing?f.a:d.a,alt:"edit"})),n.a.createElement("button",{onClick:function(t){return e.deletingItem()}},n.a.createElement("img",{src:v.a,alt:"delete"}))))}}]),s}(a.Component),x=(s(26),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).changeItemValue=function(t,s){e.props.changeItemValue(e.props.description,t,s)},e.deleteItem=function(t){e.props.deleteItem(e.props.description,t)},e.validateValue=function(e){var t=e.value,s=e.selectionStart;return/\d|\.|(undefined)/.test(t[s-1])?("."===t[0]&&(t="0"+t),/((?<=\.\d{2})\d+)|(^0{2,})|((?<=\d*\.\d*)\.)|(^0(?=\d))/.test(t)&&(t=t.replace(/((?<=\.\d{2})\d+)|(^0{2,})|((?<=\d*\.\d*)\.)|(^0(?=\d))/g,""),e.selectionStart=s,e.selectionEnd=s),t.length>10&&(t=t.slice(0,11))):(t=t.slice(0,s-1)+t.slice(s),e.selectionStart=s-1,e.selectionEnd=s-1),t},e.transformValue=function(e){return e.replace(/\.0*(?!\d+)/g,"").replace(/(?<=\.\d)(?!\d)/g,"0")},e.createItem=function(t){e.props.createItem(e.props.description,t)},e}return Object(c.a)(s,[{key:"checkValue",value:function(e){return!!e.length&&(1!==e.length||"0"!==e[0])}},{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return n.a.createElement(S,{key:t.id,id:t.id,value:t.value,validateValue:e.validateValue,changeItemValue:e.changeItemValue,deleteItem:e.deleteItem,transformValue:e.transformValue,size:e.props.size,boxShadows:e.props.boxShadows})}));return n.a.createElement("div",{className:"items-box"},n.a.createElement("p",{style:{fontSize:"".concat(.04*this.props.size,"px")}},this.props.title),n.a.createElement(m,{validateValue:this.validateValue,createItem:this.createItem,transformValue:this.transformValue,checkValue:this.checkValue,size:this.props.size,boxShadows:this.props.boxShadows}),n.a.createElement("div",{className:"items"},t))}}]),s}(a.Component)),E=(s(27),function(e){return n.a.createElement("button",{className:"datepicker-item",onClick:function(t){return e.changeDate(t.target.innerText)}},n.a.createElement("span",{className:e.selected?"selected":"",style:{fontSize:.03*e.size}},0===e.selectable?e.description.slice(0,3):e.description))}),k=(s(28),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=[];if(0===this.props.selectable.type)t=this.props.months;else if(1===this.props.selectable.type)for(var s=12*Math.floor(this.props.selectable.value/12);s<12*Math.floor((this.props.selectable.value+12)/12);s++)t.push(s);var a=t.map((function(t,s){return n.a.createElement(E,{key:s,description:t,selectable:e.props.selectable.type,selected:0===e.props.selectable.type?e.props.date.year===e.props.selectable.value&&t===e.props.date.month:t===e.props.date.year,changeDate:e.props.changeDate,size:e.props.size})}));return n.a.createElement("div",{className:"datepicker-calendar",tabIndex:"0",style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light),borderWidth:"".concat(.003*this.props.size,"px")}},n.a.createElement("div",{className:"datepicker-switcher"},n.a.createElement("button",{onClick:function(t){return e.props.changeSelectableValue(!1)}},n.a.createElement("span",{style:{fontSize:.03*this.props.size}},"\u2039")),n.a.createElement("button",{onClick:function(t){return e.props.changeSelectableType(!1)},style:{fontSize:.03*this.props.size}},0===this.props.selectable.type?this.props.selectable.value:"".concat(t[0],"-").concat(t[t.length-1])),n.a.createElement("button",{onClick:function(t){return e.props.changeSelectableValue(!0)}},n.a.createElement("span",{style:{fontSize:.03*this.props.size}},"\u203a"))),n.a.createElement("div",{className:"datepicker-months"},a))}}]),s}(a.Component)),w=(s(29),s(30),function(e){return n.a.createElement("div",{className:"datapicker-display",style:{boxShadow:"0 0 ".concat(.01*e.size,"px ").concat(e.boxShadows.light)}},n.a.createElement("input",{type:"text",value:e.selected.month,onClick:function(t){return e.calendarVisible(t.target.parentNode.nextElementSibling)},style:{fontSize:"".concat(.04*e.size,"px")},readOnly:!0}),n.a.createElement("input",{type:"text",value:e.selected.year,onFocus:function(t){return e.calendarVisible(t.target.parentNode.nextElementSibling)},style:{fontSize:"".concat(.025*e.size,"px")},readOnly:!0}))}),z=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={selectable:{type:e.selectable.value,value:a.props.date.year}},a}return Object(c.a)(s,[{key:"calendarVisible",value:function(e){e.focus()}},{key:"changeSelectableType",value:function(e){var t=this.state.selectable.type+(e?-1:1),s=this.state;t>=0&&t<this.props.selectable.possible.length&&(s.selectable.type=t,this.setState(s))}},{key:"changeSelectableValue",value:function(e){var t=this.state,s=t.selectable.type?12:1;t.selectable.value+=e?s:-s,this.setState(t)}},{key:"changeDate",value:function(e){if(0===this.state.selectable.type)this.props.changeDate(this.props.selectable.possible[this.state.selectable.type],this.props.months.map((function(e){return e.slice(0,3)})).indexOf(e),this.state.selectable.value);else{this.props.changeDate(this.props.selectable.possible[this.state.selectable.type],Number(e));var t=this.state;t.selectable.value=Number(e),this.setState(t)}this.changeSelectableType(!0)}},{key:"render",value:function(){return n.a.createElement("div",{className:"datepicker"},n.a.createElement(w,{selected:this.props.date,calendarVisible:this.calendarVisible,size:this.props.size,boxShadows:this.props.boxShadows}),n.a.createElement(k,{months:this.props.months,date:this.props.date,selectable:this.state.selectable,changeDate:this.changeDate.bind(this),changeSelectableType:this.changeSelectableType.bind(this),changeSelectableValue:this.changeSelectableValue.bind(this),size:this.props.size,boxShadows:this.props.boxShadows}))}}]),s}(a.Component),I=(s(31),s(12)),N=s.n(I),O=(s(32),function(e){return n.a.createElement("button",{className:"settings-button".concat(" settings-active"===e.settingsActive?" settings-button-active":""),onClick:e.openSettings,title:e.title},n.a.createElement("img",{src:N.a,alt:"settings"}))}),V=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"transformMoney",value:function(e){return String(e).replace(/(?<=\.\d)(?!\d)/g,"0")}},{key:"render",value:function(){return n.a.createElement("div",{className:"display"},n.a.createElement("div",{className:"display-all-money"},n.a.createElement("span",{style:{fontSize:.03*this.props.size}},this.props.money.title),n.a.createElement("span",{style:{fontSize:.03*this.props.size}},this.transformMoney(this.props.money.value.all))),n.a.createElement("div",{className:"display-month-money"},n.a.createElement("span",{style:{fontSize:.05*this.props.size}},this.transformMoney(this.props.money.value.month))),n.a.createElement("div",{className:"display-settings-button"},n.a.createElement(O,{settingsActive:this.props.settingsActive,openSettings:this.props.openSettings,title:this.props.storage.settings})))}}]),s}(a.Component),j={budget:{incomes:"incomes",expences:"expences"},key:"budget_calculator",themes:{light:"light",dark:"dark"},languages:{ru:"ru",en:"en"},datepicker:{selectable:{value:0,possible:["month","year"]}},pages:{app:"",signIn:"signInActive",settings:"settingsActive"},styles:{settingsActive:{transform:"rotateY(-90deg) translateZ(500px)"},signInActive:{transform:"rotateY(-90deg) rotateZ(90deg) translate3d(250px, 250px, 500px)"},boxShadows:{light:"black",dark:"white"}}},A={ru:{budget:{incomes:"\u0414\u043e\u0445\u043e\u0434\u044b",expences:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b",money:"\u0412\u0441\u0435\u0433\u043e"},months:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],settings:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",themes:["\u0421\u0432\u0435\u0442\u043b\u0430\u044f","\u0422\u0451\u043c\u043d\u0430\u044f"],languages:["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439"],theme:"\u0422\u0435\u043c\u0430",language:"\u042f\u0437\u044b\u043a"},signIn:{login:"\u0412\u043e\u0439\u0442\u0438",registration:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",username:"\u041f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c",password:"\u041f\u0430\u0440\u043e\u043b\u044c"},app:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},en:{budget:{incomes:"Incomes",expences:"Expences",money:"All"},months:["January","February","March","April","May","June","July","August","September","October","November","December"],settings:{title:"Settings",themes:["Light","Dark"],languages:["Russian","English"],theme:"Theme",language:"Language"},signIn:{login:"Login",registration:"Registration",username:"Username",password:"Password"},app:"App"}},C={active:"anonim",users:{anonim:{username:"anonim",password:"",budget:{incomes:{years:{},money:0},expences:{years:{},money:0}},date:{month:new Date(Date.now()).getMonth(),year:new Date(Date.now()).getFullYear()},settings:{theme:j.themes.dark,language:j.languages.en}}}},J=(s(33),s(13)),M=s.n(J),D=(s(34),function(e){return n.a.createElement("button",{className:"calculator-button",onClick:e.openApp,title:e.title},n.a.createElement("img",{src:M.a,alt:"app"}))}),T=s(5),L=s.n(T),F=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=[],s=0;for(var a in this.props.themes)t.push(n.a.createElement("option",{key:s,value:a},this.props.storage.settings.themes[s])),s++;var i=[];for(var r in s=0,this.props.languages)i.push(n.a.createElement("option",{key:s,value:r},this.props.storage.settings.languages[s])),s++;return n.a.createElement("div",{className:"settings-wrapper settings-".concat(this.props.theme)},n.a.createElement("button",{className:"open-sign-in",onClick:this.props.openLogin,title:this.props.storage.signIn},n.a.createElement("img",{src:L.a,alt:"sign in"})),n.a.createElement(D,{openApp:this.props.openApp,title:this.props.storage.app}),n.a.createElement("form",{className:"settings-form",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("label",{style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light)}},n.a.createElement("div",{className:"form-description-wrapper form-description-wrapper-".concat(this.props.theme)},n.a.createElement("span",{style:{fontSize:.034*this.props.size}},this.props.storage.settings.theme),n.a.createElement("div",{className:"triangle",style:{borderWidth:.038*this.props.size}})),n.a.createElement("select",{value:this.props.theme,onChange:function(t){return e.props.changeTheme(t.target.value)},style:{fontSize:.034*this.props.size}},t)),n.a.createElement("label",{style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light)}},n.a.createElement("div",{className:"form-description-wrapper form-description-wrapper-".concat(this.props.theme)},n.a.createElement("span",{style:{fontSize:.034*this.props.size}},this.props.storage.settings.language),n.a.createElement("div",{className:"triangle",style:{borderWidth:.038*this.props.size}})),n.a.createElement("select",{value:this.props.language,onChange:function(t){return e.props.changeLanguage(t.target.value)},style:{fontSize:.034*this.props.size}},i))))}}]),s}(a.Component),U=(s(35),s(14)),W=s.n(U),B=s(15),P=s.n(B),R=s(16),Y=s.n(R),Z=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={error:{status:!1,message:"",removing:!1},active:{page:"login",button:{rotate:!1}},user:{username:"",password:""}},a}return Object(c.a)(s,[{key:"createError",value:function(e){var t=this.state;t.error.status=!0,t.error.message=e,this.setState(t)}},{key:"removingError",value:function(){var e=this,t=this.state;t.error.removing=!0,this.setState(t),setTimeout((function(){return e.removeError()}),500)}},{key:"removeError",value:function(){var e=this.state;e.error.status=!1,e.error.message="",e.error.removing=!1,this.setState(e)}},{key:"rotateButton",value:function(){var e=this,t=this.state;t.active.button.rotate=!0,this.setState(t),setTimeout((function(){return e.changeActive()}),250)}},{key:"changeActive",value:function(){var e=this,t=this.state;t.active.page="login"===t.active.page?"registration":"login",this.setState(t),setTimeout((function(){t.active.button.rotate=!1,e.setState(t)}),250)}},{key:"clearForm",value:function(){var e=this.state;e.user.username="",e.user.password="",this.setState(e)}},{key:"checkForm",value:function(){var e;this.state.user.username.length&&this.state.user.password.length&&("registration"===this.state.active.page?e=this.props.createUser(this.state.user.username,this.state.user.password):"login"===this.state.active.page&&(e=this.props.login(this.state.user.username,this.state.user.password)),e.status?this.clearForm():this.createError(e.error))}},{key:"inputPassword",value:function(e){var t=this.state;t.user.password=e.target.value,this.setState(t),this.state.error.status&&this.removingError()}},{key:"inputUsername",value:function(e){var t=this.state;t.user.username=e.target.value,this.setState(t),this.state.error.status&&this.removingError()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"sign-in-wrapper sign-in-".concat(this.props.theme)},n.a.createElement("div",{className:"rotate-container"},n.a.createElement(D,{openApp:this.props.openApp,title:this.props.storage.app}),n.a.createElement("div",{className:"settings-button-wrapper"},n.a.createElement(O,{settingsActive:this.props.settingsActive,openSettings:this.props.openSettings,title:this.props.storage.settings})),n.a.createElement("button",{className:"open-registration".concat(this.state.active.button.rotate?" rotate-button":""),title:"login"===this.state.active.page?this.props.storage.signIn.registration:this.props.storage.signIn.login,onClick:function(t){e.removingError(),e.rotateButton()},disabled:this.state.active.button.rotate},n.a.createElement("img",{src:"login"===this.state.active.page?P.a:L.a,alt:this.state.active.page})),n.a.createElement("form",{className:"sign-in-form",onSubmit:function(e){return e.preventDefault()}},this.state.error.status?n.a.createElement("div",{className:"error-message".concat(this.state.error.removing?" error-removing":"")},n.a.createElement("span",{style:{fontSize:.035*this.props.size}},this.state.error.message)):null,n.a.createElement("label",{style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light)}},n.a.createElement("input",{placeholder:this.props.storage.signIn.username,type:"text",value:this.state.user.username,maxLength:8,onChange:function(t){return e.inputUsername(t)},style:{fontSize:.04*this.props.size}}),n.a.createElement("img",{src:W.a,alt:"username"})),n.a.createElement("label",{style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light)}},n.a.createElement("input",{placeholder:this.props.storage.signIn.password,type:"password",value:this.state.user.password,maxLength:8,onChange:function(t){return e.inputPassword(t)},style:{fontSize:.04*this.props.size}}),n.a.createElement("img",{src:Y.a,alt:"password"})),n.a.createElement("button",{className:"".concat(this.state.active.button.rotate?"rotate-button":""," sign-in-button-").concat(this.props.theme),onClick:function(t){return e.checkForm()},style:{boxShadow:"0 0 ".concat(.01*this.props.size,"px ").concat(this.props.boxShadows.light)}},n.a.createElement("span",{style:{fontSize:.04*this.props.size}},"login"===this.state.active.page?this.props.storage.signIn.login:this.props.storage.signIn.registration)))))}}]),s}(a.Component),K=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s),(e=t.call(this)).createItem=function(t,s){var a=JSON.parse(localStorage.getItem(j.key)),n=e.state,i=Number(s),r=t===j.budget.incomes?i:-i;if(a.users[a.active].budget[t].years[e.state.date.year]||(a.users[a.active].budget[t].years[e.state.date.year]={months:{}}),a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month]){a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].money=Math.round(100*(a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].money+i))/100;var o=a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].values.length?a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].values[0].id+1:0;a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].values.unshift({id:o,value:s})}else a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month]={money:i,values:[{id:0,value:s}]};a.users[a.active].budget[t].money=Math.round(100*(a.users[a.active].budget[t].money+i))/100,localStorage.setItem(j.key,JSON.stringify(a)),n.items[t]=a.users[a.active].budget[t].years[e.state.date.year].months[e.state.date.month].values,n.money.month=Math.round(100*(n.money.month+r))/100,n.money.all=Math.round(100*(n.money.all+r))/100,e.setState(n)},e.deleteItem=function(t,s){var a=e.state.items[t].map((function(e){return e.id})).indexOf(s),n=e.state.items[t],i=e.state,r=Number(n[a].value),o=t===j.budget.incomes?-r:r;n.splice(a,1),i.money.month=Math.round(100*(i.money.month+o))/100,i.money.all=Math.round(100*(i.money.all+o))/100;var c=JSON.parse(localStorage.getItem(j.key));c.users[c.active].budget[t].years[e.state.date.year].months[e.state.date.month].values=n,c.users[c.active].budget[t].years[e.state.date.year].months[e.state.date.month].money=Math.round(100*(c.users[c.active].budget[t].years[e.state.date.year].months[e.state.date.month].money-r))/100,c.users[c.active].budget[t].money=Math.round(100*(c.users[c.active].budget[t].money-r))/100,localStorage.setItem(j.key,JSON.stringify(c)),e.setState(i)},e.changeItemValue=function(t,s,a){var n=e.state.items[t].map((function(e){return e.id})).indexOf(s),i=e.state.items[t],r=e.state,o=Math.round(100*(Number(a)-Number(i[n].value)))/100,c=t===j.budget.incomes?o:-o;i[n].value=a,r.money.month=Math.round(100*(r.money.month+c))/100,r.money.all=Math.round(100*(r.money.all+c))/100;var l=JSON.parse(localStorage.getItem(j.key));l.users[l.active].budget[t].years[e.state.date.year].months[e.state.date.month].values=i,l.users[l.active].budget[t].years[e.state.date.year].months[e.state.date.month].money=Math.round(100*(l.users[l.active].budget[t].years[e.state.date.year].months[e.state.date.month].money+o))/100,l.users[l.active].budget[t].money=Math.round(100*(l.users[l.active].budget[t].money+o))/100,localStorage.setItem(j.key,JSON.stringify(l)),e.setState(r)};var a=JSON.parse(localStorage.getItem(j.key));a||(a=C,localStorage.setItem(j.key,JSON.stringify(a)));var n=a.users[a.active],i=0,r=0;return n.budget.incomes.years[n.date.year]&&n.budget.incomes.years[n.date.year].months[n.date.month]&&(i=n.budget.incomes.years[n.date.year].months[n.date.month].money),n.budget.expences.years[n.date.year]&&n.budget.expences.years[n.date.year].months[n.date.month]&&(r=n.budget.expences.years[n.date.year].months[n.date.month].money),e.styles=j.styles,e.state={money:{all:n.budget.incomes.money-n.budget.expences.money,month:i-r},date:{month:n.date.month,year:n.date.year},items:{incomes:n.budget.incomes.years[n.date.year]&&n.budget.incomes.years[n.date.year].months[n.date.month]?n.budget.incomes.years[n.date.year].months[n.date.month].values:[],expences:n.budget.expences.years[n.date.year]&&n.budget.expences.years[n.date.year].months[n.date.month]?n.budget.expences.years[n.date.year].months[n.date.month].values:[]},settings:{active:j.pages.app,theme:n.settings.theme,language:n.settings.language},size:500},e}return Object(c.a)(s,[{key:"changeDate",value:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.date.year,a=this.state;a.date[e]=t,e===j.datepicker.selectable.possible[0]&&(a.date.year=s);var n=JSON.parse(localStorage.getItem(j.key)),i=0,r=0;n.users[n.active].budget.incomes.years[a.date.year]&&n.users[n.active].budget.incomes.years[a.date.year].months[a.date.month]&&(i=n.users[n.active].budget.incomes.years[a.date.year].months[a.date.month].money),n.users[n.active].budget.expences.years[a.date.year]&&n.users[n.active].budget.expences.years[a.date.year].months[a.date.month]&&(r=n.users[n.active].budget.expences.years[a.date.year].months[a.date.month].money),a.items.incomes=n.users[n.active].budget.incomes.years[a.date.year]&&n.users[n.active].budget.incomes.years[a.date.year].months[a.date.month]?n.users[n.active].budget.incomes.years[a.date.year].months[a.date.month].values:[],a.items.expences=n.users[n.active].budget.expences.years[a.date.year]&&n.users[n.active].budget.expences.years[a.date.year].months[a.date.month]?n.users[n.active].budget.expences.years[a.date.year].months[a.date.month].values:[],a.money.month=i-r,n.users[n.active].date=a.date,localStorage.setItem(j.key,JSON.stringify(n)),this.setState(a)}},{key:"openSettings",value:function(){var e=this.state;e.settings.active=j.pages.settings,this.setState(e)}},{key:"openApp",value:function(){var e=this.state;e.settings.active=j.pages.app,this.setState(e)}},{key:"openLogin",value:function(){var e=this.state;e.settings.active=j.pages.signIn,this.setState(e)}},{key:"changeTheme",value:function(e){var t=this.state,s=JSON.parse(localStorage.getItem(j.key));t.settings.theme=e,s.users[s.active].settings.theme=e,localStorage.setItem(j.key,JSON.stringify(s)),this.setState(t)}},{key:"changeLanguage",value:function(e){var t=this.state,s=JSON.parse(localStorage.getItem(j.key));t.settings.language=e,s.users[s.active].settings.language=e,localStorage.setItem(j.key,JSON.stringify(s)),this.setState(t)}},{key:"createUser",value:function(e,t){var s=JSON.parse(localStorage.getItem(j.key));for(var a in s.users)if(a===e)return{status:!1,error:"\u041b\u043e\u0433\u0438\u043d \u0437\u0430\u043d\u044f\u0442"};s.users[e]=C.users.anonim,s.users[e].username=e,s.users[e].password=t,s.active=e,localStorage.setItem(j.key,JSON.stringify(s));var n=s.users[e];return this.changeUser(n),{status:!0,error:""}}},{key:"login",value:function(e,t){var s=JSON.parse(localStorage.getItem(j.key));for(var a in s.users)if(a===e&&s.users[a].password===t){s.active=e,localStorage.setItem(j.key,JSON.stringify(s));var n=s.users[e];return this.changeUser(n),{status:!0,error:""}}return{status:!1,error:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}}},{key:"changeUser",value:function(e){var t=0,s=0;e.budget.incomes.years[e.date.year]&&e.budget.incomes.years[e.date.year].months[e.date.month]&&(t=e.budget.incomes.years[e.date.year].months[e.date.month].money),e.budget.expences.years[e.date.year]&&e.budget.expences.years[e.date.year].months[e.date.month]&&(s=e.budget.expences.years[e.date.year].months[e.date.month].money),this.setState({money:{all:e.budget.incomes.money-e.budget.expences.money,month:t-s},date:{month:e.date.month,year:e.date.year},items:{incomes:e.budget.incomes.years[e.date.year]&&e.budget.incomes.years[e.date.year].months[e.date.month]?e.budget.incomes.years[e.date.year].months[e.date.month].values:[],expences:e.budget.expences.years[e.date.year]&&e.budget.expences.years[e.date.year].months[e.date.month]?e.budget.expences.years[e.date.year].months[e.date.month].values:[]},settings:{active:j.pages.app,theme:e.settings.theme,language:e.settings.language}})}},{key:"windowResize",value:function(){var e=.8*window.innerHeight,t=.8*window.innerWidth,s=this.state;console.log(s,t,e),e>t?s.size=t:t>e&&(s.size=e),this.styles.settingsActive={transform:"rotateY(-90deg) translateZ(".concat(s.size,"px)")},this.styles.signInActive={transform:"rotateY(-90deg) rotateZ(90deg) translate3d(".concat(s.size/2,"px, ").concat(s.size/2,"px, ").concat(s.size,"px)")},this.setState(s)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.windowResize.bind(this)),this.windowResize()}},{key:"render",value:function(){return n.a.createElement("div",{id:"budget-calculator",style:{width:this.state.size,height:this.state.size,perspective:2*this.state.size}},n.a.createElement("div",{className:"container-3d",style:this.styles[this.state.settings.active]},n.a.createElement("div",{className:"container".concat(" budget-calculator-".concat(this.state.settings.theme)),style:{boxShadow:"0 0 ".concat(.01*this.state.size,"px ").concat(this.styles.boxShadows[this.state.settings.theme])}},n.a.createElement(V,{money:{title:A[this.state.settings.language].budget.money,value:this.state.money},settingsActive:this.state.settings.active,openSettings:this.openSettings.bind(this),size:this.state.size,storage:{settings:A[this.state.settings.language].settings.title}}),n.a.createElement("div",{className:"date"},n.a.createElement(z,{date:{month:A[this.state.settings.language].months[this.state.date.month],year:this.state.date.year},selectable:j.datepicker.selectable,months:A[this.state.settings.language].months,changeDate:this.changeDate.bind(this),size:this.state.size,boxShadows:this.styles.boxShadows})),n.a.createElement("div",{className:"items-boxes"},n.a.createElement(x,{description:j.budget.incomes,title:A[this.state.settings.language].budget.incomes,items:this.state.items.incomes,createItem:this.createItem.bind(this),deleteItem:this.deleteItem.bind(this),changeItemValue:this.changeItemValue.bind(this),size:this.state.size,boxShadows:this.styles.boxShadows}),n.a.createElement(x,{description:j.budget.expences,title:A[this.state.settings.language].budget.expences,items:this.state.items.expences,createItem:this.createItem.bind(this),deleteItem:this.deleteItem.bind(this),changeItemValue:this.changeItemValue.bind(this),size:this.state.size,boxShadows:this.styles.boxShadows}))),n.a.createElement(F,{changeTheme:this.changeTheme.bind(this),themes:j.themes,languages:j.languages,changeLanguage:this.changeLanguage.bind(this),openApp:this.openApp.bind(this),openLogin:this.openLogin.bind(this),openSettings:this.openSettings.bind(this),theme:this.state.settings.theme,language:this.state.settings.language,storage:{settings:A[this.state.settings.language].settings,signIn:A[this.state.settings.language].signIn.login,app:A[this.state.settings.language].app},size:this.state.size,boxShadows:this.styles.boxShadows}),n.a.createElement(Z,{openSettings:this.openSettings.bind(this),openApp:this.openApp.bind(this),createUser:this.createUser.bind(this),settingsActive:this.state.settings.active,login:this.login.bind(this),storage:{settings:A[this.state.settings.language].settings.title,signIn:A[this.state.settings.language].signIn,app:A[this.state.settings.language].app},theme:this.state.settings.theme,size:this.state.size,boxShadows:this.styles.boxShadows})))}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.28f38842.chunk.js.map