/*
* @Author: chenchao
* @Date: 2018-04-20 16:18:14
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-20 17:09:05
*/
import ygfp from '@image/ygfp.jpg';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="app-home">
                <div className="home-banner">
                    <img className="w100-h100" src={ygfp} alt="云谷飞瀑" title="云谷飞瀑" />
                </div>
            </div>
        )
    }
}