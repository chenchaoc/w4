/*
* @Author: chenchao
* @Date: 2018-04-18 16:25:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-28 14:31:10
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
                    ©2016-2018   版权所有    www.chenchaoc.top    <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_black" className="color-ff">赣ICP备17002295号</a>
                </div>
            </footer>
        )
    }
}