/*
* @Author: chenchao
* @Date: 2018-04-04 15:42:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 16:46:50
*/
import classnames from 'classnames';
import { connect } from 'react-redux';
import { goLogin } from '../../actions.js';
//import {Redirect,Switch,Link,Route} from 'react-router-dom';
import toast from '@globalcomponent/toast/index.js';
import dialog from '@globalcomponent/dialog/index.js';
//console.log(process.env.NODE_ENV)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 1
        }
    }
    goLogin(){
        const { dispatch, history } = this.props;
        console.log("用户名"+this.refs.username.value);
        console.log("密码"+this.refs.password.value);
        dispatch(goLogin());
        history.push('/content');
    }
    componentDidMount() {

    }
    changeHandle(e) {
        this.setState({
            a: e.target.value
        })
    }
    aa() {
        toast('我知道了呵呵呵呵')
        //toast('啦啦啦啦', {type: 'info'})
    }
    bb() {
        dialog({
            //width: 400,
            //height: 250,
            //title: '付款信息',
            content: '对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！',
            confirmText: '我知道了',
            //showConfirmBtn: false,
        })
    }
    render() {
        return (
            <div>
                <div onClick={() => this.aa()}>toast</div>
                <div onClick={() => this.bb()}>dialog</div>
                <h3 ref={d => (this.dom = d)}>我是登录页面</h3>
                <div>
                    用户名<input type="text" ref="username" value={this.state.a} onChange={ (e) => { this.changeHandle(e) } }/>
                </div>
                <div>
                    密码<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={() => this.goLogin()}>点击登录</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Login);