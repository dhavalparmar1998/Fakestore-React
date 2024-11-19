import React from "react";

class Class1 extends React.Component{
    myfunction(){
        console.log("called");
        this.props.pname='jeans';
    }
    render(){
        console.log(this);
        return(
           <div className="container">
             <h1>Class Component</h1>
             <p>
                Name : {this.props.pname}
             </p>
             <p>
                Price : {this.props.price}
             </p>
             <p>
                <button onClick={()=>{this.myfunction()}}>Enter</button>
             </p>
           </div>
        )
    }
}

export default Class1

// every class must have render function and that render function should return something