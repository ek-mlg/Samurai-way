import React from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})

    }

    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}
                        >{this.state.status || '-'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                               value={this.state.status || ''}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;