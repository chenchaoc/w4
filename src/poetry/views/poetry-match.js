/*
* @Author: chenchao
* @Date: 2018-07-02 16:28:39
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-23 18:34:11
*/
import { Route, Switch, Redirect, Link, Prompt, NavLink } from 'react-router-dom';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: [123,124,125,126,127,128,129]
        }
    }
    render() {
        const { ids } = this.state
        return (
            <div className="app-poetry">
                <div className="main-box">
                    <div>诗歌页面</div>
                    {
                        ids.map((id,index) => {
                            return (
                                (index % 2) == 1 ? 
                                <div key={ index }><Link to={ `/poetry/${id}/project` }>{`go-project-${id}`}</Link></div> :
                                <div key={ index }><Link to={ `/poetry/${id}/jiu` }>{`go-jiu-${id}`}</Link></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}