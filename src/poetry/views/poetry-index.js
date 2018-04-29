/*
* @Author: chenchao
* @Date: 2018-04-25 11:00:39
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-29 12:30:36
*/
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Fragment } from 'react';
import A from './a.js';
import B from './b.js';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div>这是/poetry</div>
                <Link to={{pathname: '/poetry/pic/123', hash: 'abc', query: { a: 1, b: 2} }}>进入路由/poetry/pic/:itemId,测试this.props.location.query</Link><br/>
                <Link to="/poetry/a">进入/poetry/a</Link><br/>
                <Link to="/poetry/b">进入/poetry/b</Link>
                <Route path="/poetry/a" component={A}></Route>
                <Route path="/poetry/b" component={B}></Route>
            </Fragment>
        )
    }
}