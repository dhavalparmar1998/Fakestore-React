import React ,{Component} from "react";

export default class Class3 extends Component{
    constructor(){
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
    }

    myfunc(){
        console.log(this);
        console.log(this.x1);
        console.log(this.x2);
        console.log(this.x3);

        var ans1 = this.x1.current.value;
        var ans2 = this.x2.current.value;

        this.x3.current.innerHTML = ans1*ans2;
    }
    render(){
        return(
           <div className="container">
             <h1>Ref Variable</h1>
             <input ref={this.x1} type="text"/><br/>
             <input ref={this.x2} type="text"/><br/>
             <button onClick={()=>{this.myfunc()}}>Calculate</button>
             <p ref={this.x3}></p>
           </div>
        )
    }
}

