/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-19 15:18:28
*/
import './header.scss';
import { Link } from 'react-router-dom';
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
                            <Link to="/home">网站主页</Link>
                        </div>
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <Link to="/fe-dev">前端开发</Link>
                        </div>
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <Link to="/health">养生健康</Link>
                        </div> 
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <Link to="/single-dog">单身狗笔记</Link>
                        </div> 
                        <div className="nav-item f-l d-show pd-l-6 pd-r-6">
                            <Link to="/she">想念的ta</Link>
                        </div>                      
                    </div>
                </div>
            </header>
        )
    }
}