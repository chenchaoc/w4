/*
* @Author: chenchao
* @Date: 2018-05-22 11:24:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-22 15:36:00
*/

/* 示例  <Switch checked={checked} onChange={(value) => this.setState({checked: value})}></Switch> */

import './switch.scss';
import { Fragment } from 'react';
import PropTypes from 'prop-types'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: (nextProps.checked !== this.state.checked) ? nextProps.checked : this.state.checked
        })
    }
    handleChange() {
        this.props.onChange(!this.state.checked)
        this.setState({
            checked : !this.state.checked,
        })      
    }
    static propTypes = {
        checked: PropTypes.bool.isRequired, //提示内容
        onChange: PropTypes.func
    }
    static defaultProps = {
        checked: false,
        onChange: () => {}
    }
    render() {
        const { checked } = this.props
        return (
            <Fragment>
                <label className="switch-label">
                    <input type="checkbox" className="switch-input d-none" checked={checked} onChange={() => this.handleChange()} />
                    <span className="switch-core"></span>
                </label>
            </Fragment>
        )
    }
}