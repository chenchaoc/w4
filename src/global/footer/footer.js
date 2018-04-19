/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-19 14:29:43
*/
import './footer.scss';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="app-footer">
                <div className="main-box">
                    ©2018   版权所有    www.chenchaoc.top    赣ICP备17002295号
                </div>
            </footer>
        )
    }
}