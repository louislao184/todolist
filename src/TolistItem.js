import React from "react";

class NavItem extends React.Component{
    render(){
        return(
            <li className={`p-6 text-3xl transition border-b border-slate-100 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 text-slate-600 ${this.props.done?"line-through":""} `} onClick={(e)=>{this.props.clickHandler(this.props.id,e.shiftKey);}}>
                {this.props.children}
            </li>
        );
    }
}

export default NavItem;