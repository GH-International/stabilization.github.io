System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker"],(function(e,t){var n={},o={},a={};return{setters:[function(e){n.React=e.React},function(e){o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){a.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={8891:e=>{"use strict";e.exports=n},7756:e=>{"use strict";e.exports=o},1362:e=>{"use strict";e.exports=a}},t={};function c(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,c),a.exports}c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var r={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(r),c.d(r,{default:()=>o});var e=c(8891),t=c(7756);var n=c(1362);function o(o){const[a,c]=e.React.useState(o.config.headerBackgroundColor),[r,l]=e.React.useState(o.config.headerTextColor),[i,u]=e.React.useState(o.config.defaultButtonBackgroundColor),[d,s]=e.React.useState(o.config.defaultButtonColor),[g,f]=e.React.useState(o.config.selectedButtonBackgroundColor),[h,m]=e.React.useState(o.config.selectedButtonColor);return e.React.createElement("div",{className:"widget-setting"},e.React.createElement(t.SettingSection,{title:o.intl.formatMessage({id:"settingsLabel",defaultMessage:"Settings"})},e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Header Background"),e.React.createElement(n.ThemeColorPicker,{color:a,height:26,icon:"none",value:a,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("headerBackgroundColor",t)}),void c(t);var t},placement:"auto",type:"default",width:30}))),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Header Text Color"),e.React.createElement(n.ThemeColorPicker,{color:r,height:26,icon:"none",value:r,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("headerTextColor",t)}),void l(t);var t},placement:"auto",type:"default",width:30}))),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Default Button Background Color"),e.React.createElement(n.ThemeColorPicker,{color:i,height:26,icon:"none",value:i,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("defaultButtonBackgroundColor",t)}),void u(t);var t},placement:"auto",type:"default",width:30}))),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Default Button Text Color"),e.React.createElement(n.ThemeColorPicker,{color:d,height:26,icon:"none",value:d,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("defaultButtonColor",t)}),void s(t);var t},placement:"auto",type:"default",width:30}))),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Selected Button Background Color"),e.React.createElement(n.ThemeColorPicker,{color:g,height:26,icon:"none",value:g,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("selectedButtonBackgroundColor",t)}),void f(t);var t},placement:"auto",type:"default",width:30}))),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"}},e.React.createElement("h4",{style:{flex:"1"}},"Selected Button Text Color"),e.React.createElement(n.ThemeColorPicker,{color:h,height:26,icon:"none",value:h,onChange:e=>{return t=e,o.onSettingChange({id:o.id,config:o.config.set("selectedButtonColor",t)}),void m(t);var t},placement:"auto",type:"default",width:30})))))}})(),r})())}}}));