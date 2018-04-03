/*
* @Author: chenchao
* @Date: 2018-04-03 10:40:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 11:48:47
*/
import cc from './cc.jpeg';
import { Fragment } from 'react';

export default class extends React.Component {
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