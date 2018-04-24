/*
* @Author: chenchao
* @Date: 2018-04-24 10:40:19
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-24 16:53:08
*/

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
        cm.changeDocTitle('页面详情')
    }
    render() {
        return (
            <div>{this.props.match.params.itemId}</div>
        )
    }
}