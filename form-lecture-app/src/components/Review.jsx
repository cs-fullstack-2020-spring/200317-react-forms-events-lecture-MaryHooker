import React,{Component} from 'react';


class Review extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                {/* pull down using this.props the new variable made in its reference */}
                <h3>{this.props.reviewText}</h3>
                {/* use the function onClick to give the button an event listener and set it to equal the function established in the parent using this.props */}
                <button className='button' onClick={this.props.updateNumber}>Click Me!</button>
            </div>
        )
    }
}

export default Review;