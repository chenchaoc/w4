/*
* @Author: chenchao
* @Date: 2018-04-25 11:31:42
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-29 11:07:37
*/
export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>{this.props.match.params.itemId}</div>
        )
    }
}