/*
* @Author: chenchao
* @Date: 2018-04-04 15:42:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-09 20:44:40
*/

import classnames from 'classnames';
import { connect } from 'react-redux';
import { goLogin } from '../../actions.js';
//import {Redirect,Switch,Link,Route} from 'react-router-dom';
// import toast from '@globalcomponent/toast/index.js';
// toast({
//     content: '我错了啦啦啦啦'
// })
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
        //console.log(this.props)
    }
    changeHandle(e) {
        this.setState({
            a: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h3 ref={d => (this.dom = d)}>我是登录页面</h3>
                <i className={classnames('iconfont',{'if-close':true})} style={{color:'blue'}}></i>
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