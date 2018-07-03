/*
* @Author: chenchao
* @Date: 2018-04-25 11:56:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-03 11:07:27
*/
import { Route, Switch, Redirect, Link, Prompt, NavLink } from 'react-router-dom';
import { goLogin } from '../../redux/actions.js';
import { connect } from 'react-redux';

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleClick() {
        const { dispatch } = this.props
        dispatch(goLogin())
    }
    render() {
        const { isLogin } = this.props
        return (
            <div>
                <div>这是/poetry/project</div>
                <div>{ isLogin ? `redux已登录` : `redux未登录`}</div>
                <div onClick={ () => this.handleClick() }>点击改变登录状态</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(A);