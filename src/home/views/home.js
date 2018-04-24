/*
* @Author: chenchao
* @Date: 2018-04-20 16:18:14
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-24 17:25:51
*/
import './home.scss';
import ygfp from '@image/ygfp.jpg';
import api from '../api.js';
import List from '../component/list.js';
import { Fragment } from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
/*        api('homeList').then((d) => {
            this.setState({
                lists: d.list
            })
        })*/
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