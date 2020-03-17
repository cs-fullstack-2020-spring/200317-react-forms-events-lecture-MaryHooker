import React,{Component} from 'react';
import Review from './Review';
import StudentForm from './StudentForm'


class AppContainer extends Component{
    constructor(props){
        super(props);
        //Set inital number of clicks in state
        this.state = {
       
            numberOfClicks: 0,
        }
    }
    //Create a function to update the number of clicks using this.setState
    updateNumber = () =>{
        this.setState(
            {
                numberOfClicks:this.state.numberOfClicks + 1
            }
        )
           
    }

    render(){
        return(
            <div>
                <div>
               <h1>03 17 2020</h1>
               {/* Call the current state of number of clicks to render in text */}
               <h2>The button has been clicked {this.state.numberOfClicks} times</h2>
               {/* Reference the child component and add attributes to be passed down*/}
               <Review updateNumber={this.updateNumber} reviewText='Forms and Events'/>
               </div>
              <div>
               <StudentForm/>
               </div>
            </div>
        )
    }
}

export default AppContainer;