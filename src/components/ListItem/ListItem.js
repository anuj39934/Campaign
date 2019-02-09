import React, {Component} from 'react';

class ListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "list-item">
                <span className = "cmp-no">1</span>
                <div className = "cmp-info">
                    <div className = "cmp-title">Campaign 1 - Emails</div>
                    <div className = "cmp-subtitle">Created at 2:30pm</div>
                </div>
                <div>
                    <span className = "cmp-pause glyphicon glyphicon-pause"></span>
                    <span className = "cmp-comment glyphicon glyphicon-comment"></span>
                    <span className = "cmp-rename glyphicon glyphicon-edit"></span>
                    <span className = "cmp-delete glyphicon glyphicon-delete"></span>
                </div>

            </div>
        )
    }
}

export default ListItem;