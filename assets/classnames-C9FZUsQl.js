function u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var f={}.hasOwnProperty;function e(){for(var r="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(r=a(r,s(o)))}return r}function s(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return e.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var n="";for(var o in r)f.call(r,o)&&r[o]&&(n=a(n,o));return n}function a(r,n){return n?r?r+" "+n:r+n:r}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(i);var c=i.exports;const p=u(c);export{p as c,u as g};
