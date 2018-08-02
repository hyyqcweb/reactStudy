import React from 'react';

// 无状态组件,也称函数式组件

const Header = (props) => {
    // props 接收传值
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-1 col-xs-offset-11">
                    <h1>{props.homeLink}</h1>
                </div>
            </div>
        </div>
    )
};
export default Header
