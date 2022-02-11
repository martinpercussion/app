import React, {Component} from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';

class ClassButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.initialValue ?? 0
        }

        this.suma = this.add.bind();

}

add = () => {return this.setState({value:this.state.value +1})};

render () {
    return (
    <div>
        <Button variant="success" onClick={this.suma}>+</Button>{' '}
        <p>{this.state.value}</p>
        <Button variant="danger" onClick={this.suma}>-</Button>{' '}


    </div>

    );

}
}

export default ClassButton; 
