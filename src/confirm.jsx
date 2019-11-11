/**
 * Created by weiyun on 2019/11/12.
 */
import React from 'react';
import Confirm from './confirm_modal.js';
function confirm(props){
    return (
        <div>
            <Confirm
                width={props.width}
                height={props.height}
                visible={props.visible}
                title={props.title}
                content={props.content}
                opacit={props.opacit}
                onOk={props.onOk}
                onCancel={props.onCancel}
            />

        </div>
    )

}
export default confirm
