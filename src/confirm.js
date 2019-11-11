/**
 * Created by weiyun on 2019/9/12.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import './index.css';

const noop = _=> undefined
class Confirm extends Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        okText: PropTypes.string,
        cancelText: PropTypes.string,
        titleClass: PropTypes.string,
        contentClass: PropTypes.string,
        footerClass: PropTypes.string,
        okClass: PropTypes.string,
        cancelClass: PropTypes.string,
        height:PropTypes.string,
        width:PropTypes.string,
        opacity: PropTypes.number
    }

    static  defaultProps = {
        onOk: noop,
        onCancel: noop,
        okText: '确定',
        cancelText: '取消',
        titleClass: 'modal-title',
        contentClass: 'modal-text',
        footerClass: 'modal-footer',
        okClass: 'modal-confirm',
        cancelClass: 'modal-cancel',
        height:'auto',
        width:'520px',
        opacity: 0.6
    }
    render(){
        return this.props.visible?(
            <div className="modal-box" style={{backgroundColor:`rgba(0, 0, 0, ${this.props.opacity})`}}>
                <div className="modal-content" style={{width:this.props.width,height:this.props.height}}>
                    <div className={this.props.titleClass}>{this.props.title}</div>
                    <div className={this.props.contentClass}>{this.props.content}</div>
                    <div className={this.props.footerClass}>
                        <div onClick={this.props.onOk} className={this.props.okClass}>{this.props.okText}</div>
                        <div onClick={this.props.onCancel} className={this.props.cancelClass}>{this.props.cancelText}</div>
                    </div>
                </div>
            </div>
        ):null
    }
}
export default Confirm







