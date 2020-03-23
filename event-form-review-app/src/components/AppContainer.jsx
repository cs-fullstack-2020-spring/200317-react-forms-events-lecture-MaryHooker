import React,{Component} from 'react';
import Review from './Review';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            clicks:0,
         }
    }
    //call back function to reset update above state
    updateClicks= (click) =>{
        this.setState(
            {
                clicks: click
            }
        )
    }

    render() { 
        return ( 
            <div>
                 <h1>03 23 2020</h1>
                 <h2>The button has been clicked {this.state.clicks} times</h2>
                 <div>
                     <Review updateClicks={this.updateClicks}/>
                 </div>
            </div>
         );
    }
}
 
export default AppContainer;