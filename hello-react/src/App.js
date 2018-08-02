import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Hiome'
        }
    }

    // 接收子组件的数据
    onGreet(age) {
        alert('hello' + age);
    }

    onChangeLinkHome(newName) {
        this.setState({
            homeLink: newName
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <Home
                            age={12}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkHome.bind(this)}
                            initValue={this.state.homeLink}
                        />
                        <h1>Hello</h1>
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
