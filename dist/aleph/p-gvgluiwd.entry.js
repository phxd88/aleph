import{r as o,h as t,d as n,H as s}from"./p-109d28fd.js";import{n as e}from"./p-7601dc1b.js";const r=class{constructor(t){o(this,t),this.setRoot=()=>e(this.el,"root",this.component,this.componentProps)}componentDidLoad(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')}render(){return t(s,{onClick:this.setRoot})}get el(){return n(this)}};export{r as ion_nav_set_root};