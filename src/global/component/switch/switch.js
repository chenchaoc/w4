/*
* @Author: chenchao
* @Date: 2018-05-22 11:24:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-06-22 11:56:37
*/

/* 示例  <Switch checked={checked} onChange={(value) => this.setState({checked: value})}></Switch> */

import './switch.scss';
import { Fragment } from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
        console.log(checked)
        return (
            <Fragment>
                <label className="switch-label">
                    <input type="checkbox" className={ classnames('switch-input d-none', { 'switch-input-checked':  checked }) } checked={checked} onChange={() => this.handleChange()} />
                    <span className="switch-core"></span>
                </label>
            </Fragment>
        )
    }
}