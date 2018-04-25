/*
* @Author: chenchao
* @Date: 2018-04-24 10:40:19
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-25 11:25:10
*/
import api from '../api.js';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
        console.log(this.props)
        cm.changeDocTitle('诗歌详情');
        const { itemId } = this.props.match.params;
        api('itemInfo', { itemId }).then((d) => {
            d.errorCode == 0 && this.setState({
                id: d.id
            })
        })
    }
    render() {
        const { id } = this.state
        return (
            <div>{id}</div>
        )
    }
}