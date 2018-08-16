/*
* @Author: chenchao
* @Date: 2018-04-25 10:47:17
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-16 16:13:44
*/
import './index.scss';
import ygfp from '@globalimage/ygfp.jpg';
import api from '../api.js';
import List from '../component/list';
import { Fragment } from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        api('homeList').then((d) => {
            this.setState({
                lists: d.list
            })
        }).catch((error) => {
            console.log(error)
        })
        // api('all').then((r) => {
        //     console.log(r)
        // })
    }
    render() {
        const { lists } = this.state;
        return (
            <div className="app-home">
                <div className="home-banner">
                    <img className="w100-h100" src={ygfp} alt="云谷飞瀑" title="云谷飞瀑" />
                </div>
                <div className="home-list main-box">
                    {
                        lists.map((v,i) => {
                            return (
                                <Fragment key={i}>
                                    <List {...v} />
                                </Fragment>
                            )
                            
                        })
                    }
                </div>
            </div>
        )
    }
}