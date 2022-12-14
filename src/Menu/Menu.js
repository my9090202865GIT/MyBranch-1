import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  state={
    menuItem:'H',
    isMobileView:document.body.offsetWidth<600?true:false,
    left:-190
 }
 constructor(){
     super();
     let timeoutId;
     let _flag=true
     window.addEventListener('resize',()=>{
         if(_flag){
             this.fnResize();
             _flag=false
         }
         clearTimeout(timeoutId)
         timeoutId=window.setTimeout(()=>{
             this.fnResize()
         },200)
     })
 }
 fnResize=()=>{
     const width=document.body.offsetWidth;
         let isMobileView=false
         if(width < 600){
             isMobileView=true
         }
         this.setState({
             isMobileView
         })
         console.log('7 lines code')
 }
 fnMenuClick=(eve)=>{
     const {id,nodeName}=eve.target
     eve.stopPropagation()
     if(nodeName=='UL')return;
     let menuItem=id
     this.setState({
         menuItem,
         left:-190
     })
 }
 fnMobileMenuBtnClick=()=>{
       this.setState({
           left:this.state.left==0 ? -190: 0
       })
 }
  render() {
    return template.call(this);
  }
}

export default Menu;
