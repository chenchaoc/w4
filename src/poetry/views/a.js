/*
* @Author: chenchao
* @Date: 2018-04-25 11:56:38
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-25 16:22:24
*/
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Aa from './aa.js';
import Bb from './bb.js';
import { connect } from 'react-redux';

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                aaaaaa<br/>
                <Link to="/poetry/a/a">进入/poetry/a/a</Link><br/>
                <Link to="/poetry/a/b">进入/poetry/a/b</Link>
                <Route path="/poetry/a/a" component={Aa}></Route>
                <Route path="/poetry/a/b" component={Bb}></Route>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(A);