/*
* @Author: chenchao
* @Date: 2018-04-04 15:42:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-04 16:31:36
*/

//import './login.scss'; //根匹配路径必须import一个css 否则js一直报错？？
import classnames from 'classnames';
import { connect } from 'react-redux';
import { goLogin } from '../../actions.js';
//import {Redirect,Switch,Link,Route} from 'react-router-dom';

class Login extends React.Component {
    state = {
        list: ['aa','bb','cc']
    }
    goLogin(){
        const { dispatch, history } = this.props;
        console.log("用户名"+this.refs.username.value);
        console.log("密码"+this.refs.password.value);
        dispatch(goLogin());
        history.push('/content');
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h3 ref={d => (this.dom = d)}>我是登录页面</h3>
                <i className={classnames('iconfont',{'if-close':true})} style={{color:'blue'}}></i>
                <div>
                    用户名<input type="text" ref="username" />
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