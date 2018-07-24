/*
* @Author: chenchao
* @Date: 2018-04-25 11:00:39
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-23 18:35:24
*/
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import Project from './project.js';
import Jiu from './jiu.js';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { itemId } = this.props.match.params
        return (
            <div className="app-poetry-index">
                <div className="main-box">
                    <div>这是/poetry</div>
                    <Link to={{pathname: '/poetry/pic/123', hash: 'abc', query: { a: 1, b: 2}, search: '?sort=name', state: {from: true} }}>进入路由/poetry/pic/:itemId,测试this.props.location.query</Link><br/>
                    <div><NavLink to={ `/poetry/${itemId}/project` } activeStyle={{color: 'red', textDecoration: 'underline'}}>project</NavLink></div>
                    <div><NavLink to={ `/poetry/${itemId}/jiu` } activeStyle={{color: 'red', textDecoration: 'underline'}}>jiu</NavLink></div>                
                    <Route path="/poetry/:itemId/project" component={Project}></Route>
                    <Route path="/poetry/:itemId/jiu" component={Jiu}></Route>
                </div>
            </div>
        )
    }
}