import React ,{Component} from "react";
import Class5 from "./Class5";


export default class Class4 extends Component{
    constructor(){
        super();
        this.x1 = React.createRef();
        this.state = {
            name:""
        }
    }

    myfunc(){
    

     this.setState({name: this.x1.current.value})
    }
    render(){
        return(
           <div className="container">
             <h1>Ref Variable</h1>
             <input ref={this.x1} type="text"/><br/>
            
             <button onClick={()=>{this.myfunc()}}>Calculate</button>
             <p ref={this.state.name}></p>
             <hr/>
             <Class5 username={this.state.name}/>
           </div>
        )
    }
}

