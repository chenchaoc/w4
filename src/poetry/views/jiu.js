/*
* @Author: chenchao
* @Date: 2018-04-25 11:56:34
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-03 11:07:15
*/

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className="a">这是jiu</div>
                { this.props.match.params.itemId }
            </div>
        )
    }
}
