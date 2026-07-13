var l=function(i){var a,o,r;return(a=(o=navigator.clipboard)===null||o===void 0||(r=o.writeText)===null||r===void 0?void 0:r.call(o,i))!==null&&a!==void 0?a:Promise.resolve()},d=function(i){l(i).catch(function(){}),window.Sage.toast.trigger({text:"Copied to clipboard"})};export{d as c,l as w};
//# sourceMappingURL=copy-to-clipboard-97582af9.js.map
