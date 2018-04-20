/*
* @Author: chenchao
* @Date: 2018-04-04 15:42:10
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-20 15:56:15
*/
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { goLogin } from '../../redux/actions.js';
import toast from '@globalcomponent/toast/index.js';
import dialog from '@globalcomponent/dialog/index.js';
import ContextTest from './context-test.js';
import cc from '@image/cc.jpg';

//console.log(process.env.NODE_ENV)
//console.log(utils.fullDate('1403848644115'));
//console.log(utils.formatMobile(1403841112222));
//console.log(utils.add0(2));
//console.log(utils.jsEncrypt('jdjdjdskskslslss'));
//console.log(utils.jsDecrypt(utils.jsEncrypt('d7d88f7f7888s')))

class Login extends React.Component {
    constructor(props, ctx) {
        super(props)
        this.state = {
            a: 1
        }
    }
    goL(){
        const { dispatch, history } = this.props;
        console.log("用户名"+this.refs.username.value);
        console.log("密码"+this.refs.password.value);
        dispatch(goLogin());
        history.push('/nest');
    }
    componentWillMount() {
    }
    componentDidMount() {

    }
    changeHandle(e) {
        this.setState({
            a: e.target.value
        })
    }
    static childContextTypes = {
        b: PropTypes.number
    }
    getChildContext() {
        return {
            b: 2
        }
    }
    aa() {
        //toast('我知道了呵呵呵呵')
        //toast('啦啦啦啦', {type: 'info'})
        toast({text:'lallalal'})
    }
    bb() {
        dialog({
            //width: 400,
            //height: 250,
            title: '付款信息',
            content: '对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！对不起，余额不足，请充值！',
            confirmText: '我知道了',
            //showConfirmBtn: false,
            confirmCb: () => {
                //console.log('确定确定了')
            }
        })
    }
    render() {
        return (
            <div className="app-login">
                <div onClick={() => this.aa()}>toast</div>
                <div onClick={() => this.bb()}>dialog</div>
                <ContextTest></ContextTest>
                <h3 ref={d => (this.dom = d)}>我是登录页面</h3>
                <div>
                    用户名<input type="text" ref="username" value={this.state.a} onChange={ (e) => { this.changeHandle(e) } }/>
                </div>
                {this.state.a}
                <div>
                    密码<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={() => this.goL()}>点击登录</button>
                </div>
                <img src={cc} alt=""/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Login);