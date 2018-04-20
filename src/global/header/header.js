/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-20 18:25:53
*/
import './header.scss';
import { NavLink } from 'react-router-dom';
export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="app-header">
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
                    </div>
                </div>
            </header>
        )
    }
}