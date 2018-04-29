/*
* @Author: chenchao
* @Date: 2018-04-25 11:56:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-29 12:59:08
*/
import { Route, Switch, Redirect, Link, Prompt } from 'react-router-dom';
import Aa from './aa.js';
import Bb from './bb.js';
import { goLogin, GO_LOGIN} from '../../redux/actions.js';
import { connect } from 'react-redux';

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //console.log(this.props)
    }
    handleClick() {
        const { dispatch } = this.props
        dispatch(goLogin(GO_LOGIN))
    }
    render() {
        const { isLogin } = this.props
        return (
            <div>
                <div>这是/poetry/a</div>
                <div>{ isLogin ? `redux已登录` : `redux未登录`}</div>
                <div onClick={ () => this.handleClick() }>点击改变登录状态</div>
                <Link to="/poetry/a/a">进入/poetry/a/a</Link><br/>
                <Link to="/poetry/a/b">进入/poetry/a/b</Link>
                <Route path="/poetry/a/a" component={Aa}></Route>
                <Route path="/poetry/a/b" component={Bb}></Route>
                {/*<Prompt  message="Are you sure you want to leave?"></Prompt>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(A);