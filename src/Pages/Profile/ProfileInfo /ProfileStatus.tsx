import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState( { editMode: true } )
    }

    deActivateEditMode() {
        this.setState( { editMode: false } )
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span
                        onDoubleClick={this.activateEditMode.bind(this)}
                        >{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;