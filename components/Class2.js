import React from "react";

class Class2 extends React.Component{
    constructor(){
        super();
        console.log("constructor called");
        this.state = {
            name:"user1",
            age:20,
            brand:["nike","puma"]
        }
    }
    myfunc(){
        console.log("test");
        console.log(this);
        this.setState({
            name:"user2",
            brand:["zara","tata"]
        })
    }
    render(){
        console.log("Render Called", Math.random());
        return(
            <div className="container">
                <h1>State Variable</h1>
                <p>
                    Name : {this.state.name}
                </p>
                <p>
                    Age : {this.state.age}
                </p>
                <p>
                    Brands : {this.state.brand.join(",")}
                </p>
                <p>
                    <button onClick={()=>{this.myfunc()}}>Change</button>
                </p>

            </div>
        )
    }
}

export default Class2;

// a contructor is always called once but rendering can be done multiple times