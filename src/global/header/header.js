/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-30 15:45:21
*/
import './header.scss';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fixedH: false,
            lc: location.href,
            items: [{
                to: '/',
                itemWord: '首页',
                isexact: true
            }, {
                to: '/fe-dev',
                itemWord: '前端开发'
            }, {
                to: '/health',
                itemWord: '养生健康'
            }, {
                to: '/poetry',
                itemWord: '诗歌'
            }, {
                to: '/single-dog',
                itemWord: '单身笔记'
            }, {
                to: '/she',
                itemWord: '想念的她',
            }]
        }
    }
    componentDidMount() {
        //this.fixedPos()
    }
/*    fixedPos() {
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
    handleActive(match, location) {
        if (location.pathname == '/') {            
            return true
        } else {
            return false
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

    }*/
    render() {
        const { fixedH, items } = this.state
        return (
            <header className={classnames('app-header', { 'fixed-header': fixedH })}>
                <div className="main-box flex between">
                    <div className="header-l">
                        <a href="/" className="w100-h100 d-show fw-b f-20">个人网站</a>
                    </div>
                    <div className="header-r flex">
                        {
                            items.map((item,i) => {
                                return (
                                    <div className="nav-item" key={i}>
                                        <NavLink to={ item.to } activeClassName="nav-active" className={ classnames('d-i-b', {'nav-bottom': fixedH}) } exact={ item.isexact }>{item.itemWord}</NavLink>
                                    </div>
                                )
                            })
                        }
                        {/*<div className="nav-item f-l  pd-l-12">
                            <NavLink to="/" activeClassName="nav-active" exact isActive={(match,locatin) => this.handleActive(match,locatin)}>首页</NavLink>
                            <NavLink to="/" activeClassName="nav-active" exact>首页</NavLink>
                        </div>
                        <div className="nav-item f-l pd-l-12">
                            <NavLink to="/fe-dev" activeClassName="nav-active">前端开发</NavLink>
                        </div>
                        <div className="nav-item f-l pd-l-12">
                            <NavLink to="/health" activeClassName="nav-active">养生健康</NavLink>
                        </div>
                        <div className="nav-item f-l pd-l-12">
                            <NavLink to="/poetry" activeClassName="nav-active">诗歌</NavLink>
                        </div>                         
                        <div className="nav-item f-l pd-l-12">
                            <NavLink to="/single-dog" activeClassName="nav-active">单身笔记</NavLink>
                        </div> 
                        <div className="nav-item f-l pd-l-12">
                            <NavLink to="/she" activeClassName="nav-active" className="d-show w100-h100">想念的ta</NavLink>
                        </div>*/}                  
                    </div>
                </div>
            </header>
        )
    }
}