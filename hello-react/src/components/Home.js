import React, { Component } from 'react';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.age,
            homeLink : props.initValue
        }
    }
    onMakeOlder () {
        this.setState({
           age: this.state.age += 3
        });
        console.log(this);
    }
    // 向父组件传值
    handleGreet() {
        this.props.greet(this.state.age);
    }
    // 兄弟之间传值
    changeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    // 双向数据绑定
    onHandleChange(event) {
        this.setState({
            homeLink:event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <h1>your age is {this.state.age}</h1>
                        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
                        <hr/>
                        <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">
                            Greet
                        </button>
                        <hr/>
                        <input type="text" defaultValue={this.state.homeLink} value={this.state.initValue} onChange={(event) => this.onHandleChange(event)}/>
                        <button onClick={this.changeLink.bind(this)} className="btn btn-primary">
                            changeLink
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
