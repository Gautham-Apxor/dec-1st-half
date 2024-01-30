!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var c=function(t){return void 0!==t&&!function(t){return null===t}(t)},p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function v(t,e){return Array.from(e).map((function(e,n){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,n))})).join("")}var f=function(t,e){return v(t,e=function(t){var e,n,r,i,a,o,s=0,u=[];if(!t)return t;t+="";do{e=(o=p.indexOf(t.charAt(s++))<<18|p.indexOf(t.charAt(s++))<<12|(i=p.indexOf(t.charAt(s++)))<<6|(a=p.indexOf(t.charAt(s++))))>>16&255,n=o>>8&255,r=255&o,u.push(e),64!==i&&(u.push(n),64!==a&&u.push(r))}while(s<t.length);return u}(e))},_=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},g=function(t){return t.toUpperCase()},h=function(t,e,n){switch(n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return y(e).test(t);default:return!1}},y=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var n=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(n,e)},m=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},x=window.ApxorLogger,A=s((function e(){var n=this;a(this,e),u(this,"xKCr","ALL"),u(this,"MIzj",[]),u(this,"WjAg",[]),u(this,"userAttributesValidated",!0),u(this,"sessionAttributeValidated",!0),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(n.xKCr=t.audience.audience_type,n.MIzj=t.audience.attributes.user,n.WjAg=t.audience.attributes.session,!Array.isArray(n.MIzj)||!Array.isArray(n.WjAg))return x.error("No attributes"),!1}catch(t){return x.error(t),!1}return!0})),u(this,"validate",(function(e,r){var i=!0;"FTU"===n.xKCr&&(i=t.getController().getSessionInfo().is_first_session);var a=n.oLJr(e,n.MIzj),o=n.oLJr(r,n.WjAg);return a||(n.userAttributesValidated=!1),o||(n.sessionAttributeValidated=!1),i&&a&&o})),u(this,"oLJr",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(void 0===t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){if("s"===a)return t;if("l"===a)return parseInt(t);if("f"===a)return parseFloat(t);if("b"===a)switch(t){case"true":return!0;case"false":return!1}})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return"s"===a?t="".concat(t):"l"===a?t=parseInt(t):"f"===a?t=parseFloat(t):"b"===a&&(t=!!t),h(t,e,i)}))}));r=r&&u},o=0;o<n;o++)if(i=a())return i.v}catch(t){x.error(t),r=!1}return r}))})),S=window.ApxorLogger,E=s((function t(){var e=this;a(this,t),u(this,"imgL",0),u(this,"UHAb",0),u(this,"mnag","SESSION"),u(this,"ctps",0),u(this,"DAWG",0),u(this,"vmSD",0),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.imgL=t.frequency.count,-1===e.imgL&&(e.imgL=1e3),e.vmSD=e.imgL,e.UHAb=t.frequency.time_interval,e.mnag=t.frequency.validity,e.DAWG=t.frequency.ses_lmt,e._dayCount=t.frequency.day_lmt;var n=P.getInstance().getQeState();if(!c(n)||!c(n[t._id]))return!0;if("SESSION"===e.mnag){if(e.imgL=parseInt(e.imgL)-parseInt(n[t._id].SESSION),e.imgL<=0)return console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==e.mnag)return S.info("Invalid config."),!1;if(e.imgL=parseInt(e.imgL)-parseInt(n[t._id].OVERALL),e.imgL<=0)return console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return S.error(t),!1}return!0})),u(this,"HJZk",(function(){e.imgL=e.imgL-1})),u(this,"getFrequencyCount",(function(){return e.imgL})),u(this,"sCAk",(function(){"SESSION"===e.mnag&&(e.imgL=e.vmSD,S.info("Campaign Limit reset"))})),u(this,"diRA",(function(t){try{if(e.imgL<=0)return!1;var n=P.getInstance().getQeState();if(!c(n)||!c(n[t]))return!0;if(0!==e.DAWG)if(parseInt(e.DAWG)-parseInt(n[t].SESSION)<=0)return!1;if(0!==e._dayCount){var r,i=m();if(parseInt(e._dayCount)-parseInt((null===(r=n[t])||void 0===r?void 0:r.DATES[i])||0)<=0)return!1}}catch(t){S.error("Error validating the frequency:"+t)}return!0}))})),F=s((function t(){var e=this;a(this,t),u(this,"Spyv",""),u(this,"xKCr",""),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r;e.Spyv=t.meta.name,e.xKCr=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(n=t.meta)||void 0===n?void 0:n.attr)||{},e._isExperiment=null===(r=t.meta)||void 0===r?void 0:r.isExperiment}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),w=window.ApxorLogger,C=s((function t(){var e=this;a(this,t),u(this,"HPho",-1),u(this,"WSLR",-1),u(this,"kMFx",-1),u(this,"pykN",-1),u(this,"FtvJ",!1),u(this,"_nudge_expired",!1),u(this,"_not_yet_active",!1),u(this,"_not_in_specified_time",!1),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return w.error("Not valid dates"),!1;if(e.HPho=Date.parse(t.validity.start_date),e.WSLR=Date.parse(t.validity.end_date),c(t.at_specific_time)&&(e.FtvJ=t.at_specific_time,e.FtvJ&&c(t.time_limits))){var n=(new Date).toISOString().split("T")[0];if(e.kMFx=Date.parse(n+"T"+t.time_limits.start_time+":00.000Z"),e.pykN=Date.parse(n+"T"+t.time_limits.end_time+":00.000Z"),isNaN(e.kMFx)||isNaN(e.pykN))return w.error("Not valid times"),!1}}catch(t){return w.error(t),!1}return!0})),u(this,"validate",(function(){var t=Date.now();return t>e.HPho&&t<e.WSLR?(!e.FtvJ||t>=e.kMFx&&t<=e.pykN||(e._not_in_specified_time=!0),!e.FtvJ||t>=e.kMFx&&t<=e.pykN):(t<e.HPho?e._not_yet_active=!0:t>e.WSLR&&(e._nudge_expired=!0),!1)}))})),b=s((function t(){var e=this;a(this,t),u(this,"Spyv",""),u(this,"xMxC",{}),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.Spyv=t.name,e.xMxC=t.additional_info}catch(t){return!1}return!0}))})),R=s((function t(){var e=this;a(this,t),u(this,"XmtQ",0),u(this,"XsXn",0),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.XmtQ=Number(t.lower),e.XsXn=Number(t.upper),isNaN(e.XmtQ)||isNaN(e.XsXn))return!1}catch(t){return!1}return!0}))})),T=s((function t(){var e=this;a(this,t),u(this,"ofZa",0),u(this,"cosC",""),u(this,"RyHG",""),u(this,"Yuqa",new b),u(this,"PoSE",new R),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.cosC=t.event_type,e.RyHG=t.activity,e.Yuqa.parse(t.details)&&e.PoSE.parse(t.time_bounds)}catch(t){return!1}}))})),J=window.ApxorLogger,M=s((function t(){var e=this;a(this,t),u(this,"ofZa",0),u(this,"RiYE",-1),u(this,"imgL",0),u(this,"TBaT",""),u(this,"RyHG",""),u(this,"cosC",""),u(this,"PoSE",new R),u(this,"Yuqa",new b),u(this,"nqtm",new T),u(this,"WwIi","AND"),u(this,"eCAW",!1),u(this,"xKCr",void 0),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.RiYE=t.sequence,e.imgL=t.count_config.count,e.TBaT=t.count_config.operator,e.RyHG=t.activity,e.cosC=t.event_type,e.WwIi=t.combine_operator,e.xKCr=t.type,e.Yuqa.parse(t.details)&&e.nqtm.parse(t.trigger)&&e.PoSE.parse(t.time_bounds)}catch(t){return J.error(t),!1}}))})),j=window.ApxorLogger,q=s((function t(){var e=this;a(this,t),u(this,"imgL",0),u(this,"TBaT",""),u(this,"cosC",""),u(this,"PoSE",new R),u(this,"Yuqa",new b),u(this,"WwIi","AND"),u(this,"parse",(function(t){try{return e.imgL=t.count_config.count,e.TBaT=t.count_config.operator,e.cosC=t.event_type,e.WwIi=t.combine_operator,e.Yuqa.parse(t.details)&&e.PoSE.parse(t.time_bounds)}catch(t){return j.error(t),!1}}))})),X=window.ApxorLogger,L=function(){function e(){var n=this;a(this,e),u(this,"VsMr",0),u(this,"FHyF",""),u(this,"gRBj",new M),u(this,"Iaet",new q),u(this,"RulA",!1),u(this,"ftde",!1),u(this,"YSEA",0),u(this,"WwIi","AND"),u(this,"FEhV","OR"),u(this,"lmvJ",-1),u(this,"LtCi",[]),u(this,"KTGp",{}),u(this,"ghAj",!1),u(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(n.FHyF=r,n.YSEA=i,n.LtCi=o,"termination"===s&&""!==s){n.Iaet.parse(e);return n.FEhV=n.Iaet.WwIi,n.ahuC(),!0}var u=n.gRBj.parse(e);if(u){if(n.WwIi=n.gRBj.WwIi,n.gRBj.eCAW){var d=n.gRBj.Yuqa.Spyv;"APX_PAGE_OPENED"===d&&(d=n.gRBj.Yuqa.xMxC.navigation_id,d=c(d)?d:n.gRBj.Yuqa.Spyv),n.lmvJ=t.getController().getEventCount(d);var l=n.gRBj.imgL,p=n.gRBj.TBaT;if(n.ftde=n.yjAz(n.lmvJ-1,l,p,!1),n.RulA=n.ftde,n.ftde&&"APX_PAGE_OPENED"===n.gRBj.Yuqa.Spyv)return!0}return a&&0!==i||n.CVrG(),!0}return!1})),u(this,"CVrG",(function(){var t,e=n.gRBj,r=e.nqtm,i=P.getInstance();"app_start"===r.cosC?(n.RulA=!0,i.registerForEvent(_(e.cosC)+"___"+e.Yuqa.Spyv,n.Yrsi)):i.registerForEvent(_(e.cosC)+"___"+r.Yuqa.Spyv,n.Yrsi),null!==(t=window.ApxorRTM)&&void 0!==t&&t.badgesLists.includes(n.FHyF)&&i.registerForEvent(_(e.cosC)+"___"+"apxor-badge-container-".concat("-".concat(n.FHyF).replaceAll(" ","").replace(/[^\w\s]/gi,"")),n.Yrsi)})),u(this,"ahuC",(function(){var t=n.Iaet,e=P.getInstance();n.RulA=!0,e.registerForEvent(_(t.cosC)+"___"+t.Yuqa.Spyv,n.gIaE)})),u(this,"CAtT",(function(t,e,r,i){var a,o=(Date.now()-n.KTGp[e])/1e3;(null===(a=n.gRBj)||void 0===a||null===(a=a.Yuqa)||void 0===a||null===(a=a.xMxC)||void 0===a?void 0:a.time)/1e3>o&&n._displayCampaign(r)})),u(this,"MLOt",(function(t,e,r,i){var a,o;n.ghAj=!0;var s=Date.now(),u=null===(a=n.gRBj)||void 0===a||null===(a=a.nqtm)||void 0===a?void 0:a.Yuqa.Spyv,d=(s-n.KTGp[u])/1e3,l=null===(o=n.gRBj)||void 0===o||null===(o=o.Yuqa)||void 0===o||null===(o=o.xMxC)||void 0===o?void 0:o.time;(l/=1e3)>d&&n._displayCampaign(r)})),u(this,"Yrsi",(function(e,r,i,a){var o,s,u=P.getInstance();if(n.RulA){if(null!==(o=window.ApxorRTM)&&void 0!==o&&o.isBadgePresent&&null!==(s=window.ApxorRTM)&&void 0!==s&&s.badgesLists.includes(n.FHyF)&&t.getController().isBadgeTriggerSatisfied(n.FHyF))return n.ftde=!0,n.gRBj.ofZa=i,void u.validate(n.FHyF,n.YSEA);_(n.gRBj.cosC)===e&&n.IleI(i-n.gRBj.nqtm.ofZa,n.gRBj.PoSE)&&n.gRBj.Yuqa.Spyv===r&&n.CqpF(n.gRBj.Yuqa.xMxC,a)&&(n.VsMr+=1,n.ftde=n.yjAz(n.VsMr,n.gRBj.imgL,n.gRBj.TBaT),n.ftde&&(n.gRBj.ofZa=i,u.validate(n.FHyF,n.YSEA)))}else if(n.RulA=n.jjoO(e,r,i,a),n.RulA){var d=n.gRBj,l=d.nqtm;if(l.ofZa=i,"activity_time"===(null==d?void 0:d.cosC)){var c,p,v,f=null==d||null===(c=d.Yuqa)||void 0===c||null===(c=c.xMxC)||void 0===c?void 0:c.time;(null==d||null===(p=d.Yuqa)||void 0===p||null===(p=p.xMxC)||void 0===p?void 0:p.nkpi.length)>0&&(setTimeout((function(){n.ghAj||(n.ftde=!0,n.ftde&&(n.VsMr+=1,n.ftde=n.yjAz(n.VsMr,n.gRBj.imgL,n.gRBj.TBaT),n.ftde&&(n.gRBj.ofZa=i,u.validate(n.FHyF,n.YSEA)))),d.Yuqa.xMxC.nkpi.map((function(t){u.unregisterFromEvent(g(d.Yuqa.xMxC.et)+"___"+t,n)}))}),f),d.Yuqa.xMxC.nkpi.map((function(t){u.registerForEvent(g(d.Yuqa.xMxC.et)+"___"+t,n.MLOt)}))),(null==d||null===(v=d.Yuqa)||void 0===v||null===(v=v.xMxC)||void 0===v?void 0:v.kpi.length)>0&&(setTimeout((function(){d.Yuqa.xMxC.kpi.map((function(t){u.unregisterFromEvent(g(d.Yuqa.xMxC.et)+"___"+t,n)}))}),f),d.Yuqa.xMxC.kpi.map((function(t){t===d.nqtm.Yuqa.Spyv?(u.unregisterFromEvent(_(l.cosC)+"___"+l.Yuqa.Spyv,n),u.registerForEvent(g(d.Yuqa.xMxC.et)+"___"+t,n.CAtT)):u.registerForEvent(g(d.Yuqa.xMxC.et)+"___"+t,n.MLOt)})))}else u.unregisterFromEvent(_(l.cosC)+"___"+l.Yuqa.Spyv,n),u.registerForEvent(_(d.cosC)+"___"+d.Yuqa.Spyv,n);n.KTGp[r]=Date.now()}})),u(this,"gIaE",(function(t,e,r,i){var a=P.getInstance();_(n.Iaet.cosC)===t&&n.IleI(r,n.Iaet.PoSE)&&n.Iaet.Yuqa.Spyv===e&&n.CqpF(n.Iaet.Yuqa.xMxC,i)&&(n.VsMr+=1,n.ftde=n.yjAz(n.VsMr,n.Iaet.imgL,n.Iaet.TBaT),n.ftde&&(n.Iaet.ofZa=r,a.validateForTermination(n.FHyF,n.YSEA)))})),u(this,"jjoO",(function(t,e,r,i){var a=n.gRBj.nqtm;return _(a.cosC)===t&&a.Yuqa.Spyv===e&&n.IleI(r,a.PoSE)&&n.CqpF(a.Yuqa.xMxC,i)})),u(this,"IleI",(function(t,e){var n=Math.ceil(t);return n>e.XmtQ&&n<e.XsXn})),u(this,"yjAz",(function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(i&&n.gRBj.eCAW&&(t+=n.lmvJ),r){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),u(this,"CqpF",(function(t,e){var n=!0;try{var r,a=function(){if(!e[o]||!1===n)return{v:!1};if("object"===i(t[o])){var r,a=t[o].op,s=t[o].t;"s"===s?r=t[o].val:"l"!==s&&"f"!==s||(r=parseFloat(t[o].val));var u=(Array.isArray(e[o])?e[o]:[e[o]]).some((function(t){return h(t,r,a)}));n=n&&u}else n=n&&h(e[o],t[o],"EQ")};for(var o in t)if(r=a())return r.v}catch(t){X.error(t),n=!1}return n}))}return s(e,[{key:"_displayCampaign",value:function(t){var e=P.getInstance();this.ftde=!0,this.ftde&&(this.VsMr+=1,this.ftde=this.yjAz(this.VsMr,this.gRBj.imgL,this.gRBj.TBaT),this.ftde&&(this.gRBj.ofZa=t,e.validate(this.FHyF,this.YSEA)))}}]),e}(),I=window.ApxorLogger,D=s((function e(){var n=this;a(this,e),u(this,"waEk",[]),u(this,"_ret_day",{}),u(this,"tQOx",{}),u(this,"xfCx",!1),u(this,"GkwL",!1),u(this,"retainedDaysValidated",!0),u(this,"retainedSessionValidated",!0),u(this,"eventDoneInLT",!1),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.waEk=t.overall_cfg.events,n._ret_day=t.overall_cfg.ret_day,n.tQOx=t.overall_cfg.session,n.xfCx=t.overall_cfg.toggleRetDay,n.GkwL=t.overall_cfg.toggleSession}catch(t){return I.error(t),!1}return!0})),u(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),r=parseInt(t.getController().getFromStorage("apx_retained_session"));if(n.xfCx&&!isNaN(e)&&!(e>=n._ret_day.from&&e<=n._ret_day.to))return n.retainedDaysValidated=!1,!1;if(n.GkwL&&!isNaN(r)&&!(r>=n.tQOx.from&&r<=n.tQOx.to))return n.retainedSessionValidated=!1,!1;try{for(var i=t.getController().getFromStorage("_apx_lt_count"),a=t.getSiteId(),o=JSON.parse((new TextDecoder).decode(function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return e}(f(a,i)))),s=0;s<n.waEk.length;s++){if(o[n.waEk[s].name.replace("'","").replace("’","")])return n.eventDoneInLT=!0,!1}}catch(t){I.error("Failed to validate the lt count:"+t)}return!0}))})),O=window.ApxorLogger,V=s((function t(){var e=this;a(this,t),u(this,"MIzj",[]),u(this,"WjAg",[]),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.MIzj=t.attributes.user,e.WjAg=t.attributes.session,!Array.isArray(e.MIzj)||!Array.isArray(e.WjAg))return O.error("No attributes"),!1}catch(t){return O.error(t),!1}return!0})),u(this,"validate",(function(t,n){return e.oLJr(t,e.MIzj)&&e.oLJr(n,e.WjAg)})),u(this,"oLJr",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(!t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){return"s"===a?t:"l"===a?parseInt(t):"f"===a?parseFloat(t):void 0})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return h(t,e,i)}))}));r=r&&u},o=0;o<n;o++)if(i=a())return i.v}catch(t){O.error(t),r=!1}return r}))})),Y=s((function e(){var n=this;a(this,e),u(this,"UJmG",t.getController()),u(this,"type",""),u(this,"_duration_seconds",0),u(this,"NKMu",1),u(this,"parse",(function(t){try{var e,r,i;if(n.xKCr=null===(e=t.terminate_info.time_based)||void 0===e?void 0:e.type,n._duration_seconds=null===(r=t.terminate_info)||void 0===r?void 0:r.time_based.duration_seconds,n.NKMu=null===(i=t.terminate_info.time_based)||void 0===i?void 0:i.days,n.fzTh(t._id))return n.UJmG.persistTerminationInfoLocally(t._id),!1}catch(t){return!1}return!0})),u(this,"fzTh",(function(t){var e,r=JSON.parse(n.UJmG.getFromStorage("apx_termination_ID"));if(!r[t]||null===(e=r[t])||void 0===e||!e.startDate)return!1;var i,a=new Date(r[t].startDate),o=new Date((i=new Date).getMonth()+"/"+i.getDate()+"/"+i.getFullYear()),s=parseInt((o-a)/864e5,10),u=function(){var t=new Date;return{hours:t.getHours(),mins:t.getMinutes()}}(),d=r[t].kMFx;return s===n.NKMu&&u.hours>=d.hours||s>n.NKMu||r[t].goalAcheived}))})),k=s((function t(){var e=this;a(this,t),u(this,"enable_goal_events",!1),u(this,"attributes",{}),u(this,"QmHA",new V),u(this,"clUS",new Y),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r,i;if(e.enable_time_based=null==t||null===(n=t.terminate_info)||void 0===n?void 0:n.enable_time_based,e.enable_time_based&&!e.clUS.parse(t))return!1;if(e.enable_goal_events=null==t||null===(r=t.terminate_info)||void 0===r?void 0:r.enable_goal_events,e.enable_attributes=null==t||null===(i=t.terminate_info)||void 0===i?void 0:i.enable_attributes,e.enable_attributes&&!e.QmHA.parse(t.terminate_info))return!1}catch(t){return window.ApxorLogger.error(t),!1}return!0})),u(this,"validate",(function(t,n){return e.QmHA.validate(t,n)}))})),N=window.ApxorLogger,H=s((function e(){var r=this;a(this,e),u(this,"DRyf",[]),u(this,"FlVi",[]),u(this,"FHyF",""),u(this,"dJuX",new F),u(this,"Noew",new A),u(this,"mnag",new C),u(this,"QapV",new E),u(this,"qyrG",new D),u(this,"bWaY",new k),u(this,"pZMf",!1),u(this,"FjEh",[]),u(this,"_variant_code",""),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e;if(!c(t._id))return N.error("No Id"),!1;if(!c(t.enabled)||!t.enabled)return N.error("Not enabled"),!1;if(!(r.dJuX.parse(t)&&r.mnag.parse(t)&&r.QapV.parse(t)&&r.Noew.parse(t)&&r.qyrG.parse(t)&&r.bWaY.parse(t)))return!1;if(r._variant_code=r.dJuX._isExperiment||r.dJuX._only_context?null===(e=r.dJuX._attr)||void 0===e?void 0:e.apx_variant_code:"TG",!c(t.conditions)||!Array.isArray(t.conditions))return N.error("No valid conditions",t.conditions),!1;r.FHyF=t._id,r.pZMf=!!c(t.sequence_enabled)&&t.sequence_enabled,r.pZMf&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));for(var n=t.conditions,i=n.length,a=0;a<i;a++){r.FjEh=[];var o=n[a];if("didn't"===o.type){var s,u={trigger_key:o.trigger.details.name,no_kpi_array:null==o||null===(s=o.details)||void 0===s||null===(s=s.additional_info)||void 0===s?void 0:s.nkpi,condition_id:null==o?void 0:o._id,time_bounds:o.time_bounds.upper};r.FjEh=[].concat(d(r.FjEh),[u])}var l=new L;l.initialize(o,r.FHyF,a,r.pZMf,r.FjEh)&&r.DRyf.push(l)}if(r.bWaY.enable_goal_events)for(var p=t.terminate_info.goal_events.events,v=p.length,f=0;f<v;f++){var _=new L;_.initialize(p[f],r.FHyF,f,!0,[],"termination")&&r.FlVi.push(_)}return r.DRyf.length>0}catch(t){return N.error(t),!1}})),u(this,"zesD",(function(t){if(!(t<0))if(r.pZMf){var e=r.DRyf[t];if(c(e)&&e.ftde){var n=r.DRyf[t-1];if(c(n)&&!n.ftde)return;var i=r.DRyf[t+1];c(i)?i.CVrG():r.uEfz()}}else r.uEfz()})),u(this,"pwdP",(function(t){t<0||r.lZdq()})),u(this,"uEfz",(function(){var e,i,a=t.getController().getUserAttributes(),o=t.getController().getSessionAttributes();if(null!==(e=window.ApxorRTM)&&void 0!==e&&e.isBadgePresent&&null!==(i=window.ApxorRTM)&&void 0!==i&&i.badgesLists.includes(r.FHyF)&&t.getController().isBadgeTriggerSatisfied(r.FHyF)||null==t||t.logEvent("apx_trigger_satisfied",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG"}),!r.mnag.validate()||!r.Noew.validate(a,o)||!r.qyrG.validate())return r.qyrG.retainedDaysValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"Retained day criteria not met"}),r.qyrG.retainedSessionValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"User session criteria not met"}),r.qyrG.eventDoneInLT&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"Event done in life time"})),r.Noew.userAttributesValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"User property filter not met"}),r.Noew.sessionAttributeValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"Session property filter not met"}),r.mnag._not_in_specified_time&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"Time limits check failed"})),r.mnag._not_yet_active&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"nudge not yet active"})),void(r.mnag._nudge_expired&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"nudge expired"})));for(var s=r.DRyf.length,u=s<1,d="",l=0;l<s;l++){var c=r.DRyf[l],p=c.ftde;if(""===d.trim())u=p;else switch(d){case"AND":u=u&&p;break;case"OR":u=u||p}d=c.WwIi}if(u){if(console.debug("onCondition satisfied"),!r.QapV.diRA(r.FHyF))return console.warn("Maximum limit reached",r.FHyF),void(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:"Campaign limit reached"}));console.log("Dispatching event",r.dJuX.xKCr),t.logEvent("apx_context_evaluated",n(n({apx_nudge_type:"SURVEY"===r.dJuX.xKCr?"survey":"campaign",apx_nudge_id:r.FHyF,apx_nudge_name:r.dJuX.Spyv,apx_variant_code:r.dJuX._isExperiment||r.dJuX._only_context?r.dJuX._attr.apx_variant_code:"TG"},r.dJuX._attr),{},{message_name:r.dJuX.Spyv,id:r.FHyF})),t.getController().dispatchEvent(r.dJuX.xKCr,{name:r.dJuX.xKCr,additional_info:{uuid:r.FHyF,name:r.dJuX.Spyv}})}})),u(this,"lZdq",(function(){for(var e=r.FlVi.length,i=e<1,a="",o=0;o<e;o++){var s=r.FlVi[o],u=s.ftde;if(""===a.trim())i=u;else switch(a){case"AND":i=i&&u;break;case"OR":i=i||u}a=s.FEhV}i&&(console.log("Dispatching event",r.dJuX.xKCr),t.getController().persistTerminationInfoLocally(r.FHyF),!0===r.dJuX._only_context&&t.logEvent("apx_context_evaluated",n(n({},r.dJuX._attr),{},{message_name:r.dJuX.Spyv,id:r.FHyF})),t.getController().dispatchEvent(r.dJuX.xKCr,{name:r.dJuX.xKCr,additional_info:{uuid:r.FHyF,name:r.dJuX.Spyv}}))})),u(this,"validateForTerminationAttributes",(function(){var e=t.getController().getUserAttributes(),n=t.getController().getSessionAttributes();return r.bWaY.validate(e,n)})),u(this,"HJZk",(function(){r.QapV.HJZk()})),u(this,"getFrequencyCount",(function(){return r.QapV.getFrequencyCount()})),u(this,"zcVU",(function(){return r.QapV.sCAk()}))})),Q=s((function t(){var e=this;a(this,t),u(this,"AQkV",{}),u(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(c(t)&&c(t.configs)){var n=t.configs;if(!Array.isArray(n))return;n.sort((function(t,e){var n,r;return(null!==(n=t.prio)&&void 0!==n?n:-1)-(null!==(r=e.prio)&&void 0!==r?r:-1)}));for(var r=0;r<n.length;r++){var i=n[r],a=i._id,o=new H;o.parse(i)?e.AQkV[a]=o:console.warn("Failed to parse cfg",a)}}})),u(this,"validate",(function(t,n){e.AQkV[t]&&e.AQkV[t].zesD(n)})),u(this,"getVariantCode",(function(t){return e.AQkV[t]?e.AQkV[t]._variant_code:""})),u(this,"validateForTermination",(function(t,n){e.AQkV[t]&&e.AQkV[t].pwdP(n)})),u(this,"validateForTerminationAttributes",(function(t){return!!e.AQkV[t]&&e.AQkV[t].validateForTerminationAttributes()})),u(this,"HJZk",(function(t){e.AQkV[t].HJZk()})),u(this,"getFrequencyCount",(function(t){return e.AQkV[t].getFrequencyCount()})),u(this,"resetFrequencyCounts",(function(){var t=e.AQkV;for(var n in t)t[n].zcVU()})),u(this,"lyKo",(function(t){try{if(e.AQkV){var n=e.AQkV[t];if(n&&n.dJuX)return n.dJuX}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),B=window.ApxorLogger,G=s((function e(){var n=this;a(this,e),u(this,"dppn",{}),u(this,"qXyh",[]),u(this,"gwSh",!1),u(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return n.nZtg(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return n.nZtg(t,"CE")}))})),u(this,"DLhF",(function(){for(var t in n.qXyh)n.mPhT(t.event,t.key,t.type);n.gwSh=!0})),u(this,"uSDD",(function(t,e){var r;"function"==typeof e&&((r=n.dppn[t]?n.dppn[t]:[]).push(e),n.dppn[t]=r,B.debug("Listeners list: ",n.dppn))})),u(this,"unregisterFromEvent",(function(t,e){if(n.dppn[t]){for(var r=n.dppn[t],i=[],a=0;a<r.length;a++){var o=r[a];o!==e&&i.push(o)}n.dppn[t]=i}})),u(this,"nZtg",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",r=e+"___"+t.name;n.mPhT(t,r,e)})),u(this,"mPhT",(function(e,r,i){if(n.gwSh){if(B.debug("Notifying listeners for event: "+e+", "+r,n.dppn),n.dppn[r])for(var a=n.dppn[r],o=t.getController().getSDKRunningTimeInSec(),s=0;s<a.length;s++){(0,a[s])(i,e.name,o,e.additional_info)}}else n.qXyh.push({event:e,key:r,type:i})}))})),K=window.ApxorLogger,P=function(){function e(){var n=this;return a(this,e),u(this,"kpoo",!1),u(this,"OEtv",null),u(this,"TSDe",m()),u(this,"xMKw",new G),u(this,"hOOq",t.getSiteId()),u(this,"MpRA",{}),u(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(f(n.hOOq,e)):(n.MpRA={},n.setQeState())}catch(t){return n.MpRA={},n.setQeState()}})),u(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",n.MpRA,!0)}catch(r){""===e?n.MpRA={}:n.MpRA[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",n.MpRA,!0)}return n.MpRA})),u(this,"initialize",(function(){n.kpoo||(n.kpoo=!0,n.OEtv=new Q,n.xMKw.initialize(),n.MpRA=n.getQeState(),K.info("QE Initialized.."))})),u(this,"parse",(function(t){n.Hvlo()?(n.OEtv.parse(t),n.xMKw.DLhF()):K.warn("Must call init first. Unable to proceed")})),u(this,"validate",(function(t,e){n.Hvlo()&&n.OEtv.validate(t,e)})),u(this,"getVariantCode",(function(t){return n.OEtv.getVariantCode(t)})),u(this,"validateForTermination",(function(t,e){n.Hvlo()&&n.OEtv.validateForTermination(t,e)})),u(this,"validateForTerminationAttributes",(function(t,e){return n.OEtv.validateForTerminationAttributes(t,e)})),u(this,"updateCount",(function(t){try{c(n.MpRA[t])||n.createObjConfig(t),n.incrementFrequencies(t),n.setQeState(t),n.OEtv.HJZk(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),u(this,"resetFrequencyCounts",(function(){n.OEtv.resetFrequencyCounts()})),u(this,"getFrequencyCount",(function(t){return n.OEtv.getFrequencyCount(t)})),u(this,"registerForEvent",(function(t,e){n.xMKw.uSDD(t,e)})),u(this,"unregisterFromEvent",(function(t,e){n.xMKw.unregisterFromEvent(t,e)})),u(this,"notifyEventListener",(function(t){n.xMKw.nZtg(t)})),u(this,"fetch",(function(e,n,r,i){t.getController().fetchConfiguration(e,n,r,i)})),u(this,"Hvlo",(function(){return n.kpoo})),u(this,"getCampaignMetaFromQueryEngine",(function(t){return n.OEtv.lyKo(t)})),u(this,"WCgv",(function(){return n.TSDe})),e.instance||(e.instance=this),e.instance}return s(e,[{key:"createObjConfig",value:function(t){try{this.MpRA=this.getQeState(),c(this.MpRA[t])||(this.MpRA[t]={SESSION:0,OVERALL:0,DATES:{}},this.TSDe&&(this.MpRA[t].DATES[this.TSDe]=0),this.setQeState(t))}catch(t){K.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this.MpRA=this.getQeState();var e=this.MpRA[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var n=m();n===this.TSDe&&e.DATES&&e.DATES[n]||(this.TSDe=n,e.DATES={},e.DATES[this.TSDe]=0),e.DATES[this.TSDe]=e.DATES[this.TSDe]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();u(P,"instance",void 0),window.ceVersion=151;try{void 0===exports&&null===exports||(exports.default=P,module.exports=exports.default)}catch(t){}return P}));