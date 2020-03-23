import React,{Component} from 'react';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            clicks: 1,
         }
    }
    //event function for button
    addToClicks= ()=>{
        //increment number of clicks by 1
        this.setState(
            {
                clicks: this.state.clicks + 1
            }
        )
        //pull down parent function and the updated state back up
        this.props.updateClicks(this.state.clicks)
    }

    render() { 
        return ( 
            <div>
                 <button onClick={this.addToClicks}>Click Me</button>
            </div>
         );
    }
}
 
export default Review;