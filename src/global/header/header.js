/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 12:09:40
*/
import './header.scss';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fixedH: false,
            lc: location.href
        }
    }
    componentDidMount() {
        this.fixedPos()
    }
    fixedPos() {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 0) {
                this.setState({
                    fixedH: true
                })
            } else {
                this.setState({
                    fixedH: false
                })
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { lc } = this.state
        if ( lc == location.href) {
            if (this.state.fixedH == nextState.fixedH) {
                return false
            } else {
                return true
            }
        } else {
            this.setState({
                lc: location.href
            })
            return true
        }

    }
    render() {
        const { fixedH } = this.state
        return (
            <header className={classnames('app-header', { 'fixed-header': fixedH })}>
                <div className="main-box clearfix">
                    <div className="header-l f-l font-bold color-75 font-20">
                        <a href="/" className="w100-h100 d-show pd-l-6 pd-r-6">个人网站</a>
                    </div>
                    <div className="header-r f-r clearfix">
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/" activeClassName="nav-active" exact>网站主页</NavLink>
                        </div>
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/fe-dev" activeClassName="nav-active">前端开发</NavLink>
                        </div>
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/health" activeClassName="nav-active">养生健康</NavLink>
                        </div> 
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/single-dog" activeClassName="nav-active">单身笔记</NavLink>
                        </div> 
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/she" activeClassName="nav-active">想念的ta</NavLink>
                        </div>
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <NavLink to="/nest" activeClassName="nav-active">嵌套路由</NavLink>
                        </div>                        
                    </div>
                </div>
            </header>
        )
    }
}