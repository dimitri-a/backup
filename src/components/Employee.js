import React, {Component} from 'react';

export default class Employee extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div>
                <div onClick={this.modalToggle}>
                    <div>
                        <div>
                            <img src={this.props.details.avatar} alt=""/>
                        </div>
                        <div>
                            <div>
                            <span className='name'>
                                {this.props.details.firstName} &nbsp;
                                {this.props.details.lastName}</span>
                                <div>
                                    {this.props.details.bio.slice(0,70)}
                                </div>
                            </div>
                        </div>
                    </div>
       
                </div>

                
            </div>
        );
    }
}
