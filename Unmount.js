import React,{Component} from "react";
class ComponentOne extends Component{
    componentWillUnmount(){
    alert('The component is going to be unmounted');
    }
    render(){
        return <h1>Component One</h1>;
    }
}
class Appli extends Component{
    state={display:true};
    delete=()=>{
        this.setState({display:false});

    };
    render(){
        let comp;
        if (this.state.display){
            comp=<ComponentOne />
        }
        return(
            <div>
                {comp}
                <button onClick={this.delete}>Delete Component</button>
            </div>
        );
    }
}
export default Appli;