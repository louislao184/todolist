import logo from './logo.svg';
import './App.css';
import React from "react";
import TolistItem from "./TolistItem";
class App extends React.Component {
  state={
    eventArr : [
      {"id":1,"eventText":"item 1","done":false},
      {"id":2,"eventText":"item 2","done":true}
    ],
    eventText : "",
    done:false,
  };
  input =() =>{
    let eventText = document.getElementById('txtInput').value;
    const newEventArr = [...this.state.eventArr];
  
    const randomId = Math.round(Math.random()*1000000);
    console.log(randomId);
    newEventArr.push({id:randomId,"eventText":eventText,"done":false})
    this.setState({
      
      eventText: eventText,
      eventArr:newEventArr,
    });
    console.log(eventText);
  };
   clickHandler = (todoId,shouldDelete) => {
    let newEventArr = [...this.state.eventArr];
    if(!shouldDelete)
    {
    const target = newEventArr.find((todo)=>{
      return todo.id ===todoId;
    });
    console.log(todoId);
    target.done = !target.done;
  }
  else{
    newEventArr = this.state.eventArr.filter((todo)=>{
      return todo.id !=todoId; 
    })

  }
    this.setState({
      eventArr:newEventArr,

    });
		//if(event.detail == 2){
		//	console.log("Double Clicked")
		//}
	}
  _handleKeyDown=(event)=>{
    
      if(event.key === 'Enter'){
        this.input();
    }
      else if (event.key === 'n') {
        alert('The sky is your limit👀')
    }
  
};

  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);
  }
  render(){
  return (
    <div className="min-h-screen w-full bg-slate-100 flex justify-center items-center">
    <div className="bg-white flex-1 max-w-md rounded-xl shadow-xl overflow-hidden">
      <input type="text" id="txtInput" className="bg-slate-600 text-white p-6 w-full outline-none text-3xl" placeholder="Type something...">
      </input>
      <ul>
      {this.state.eventArr.map(item => (
            <TolistItem key={item.id} id={item.id} done={item.done} clickHandler={this.clickHandler.bind(this)}  >{item.eventText}</TolistItem>
          ))}
      
    </ul>
  </div>
</div>
  );
}
}

export default App;
