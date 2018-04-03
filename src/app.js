/*
* @Author: chenchao
* @Date: 2018-03-30 16:59:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 18:08:07
*/
import './app.scss';
import cc from './cc.jpeg';
import { Fragment } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <img src={cc} alt=""/>
                <div>我是webpack4,很高兴认识你</div>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));