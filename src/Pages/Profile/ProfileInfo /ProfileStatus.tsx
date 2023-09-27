import React from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}
interface ProfileStatusStateType {
    editMode: boolean
    status: string;
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
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

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {

        if(prevProps.status !== this.props.status) {
        this.setState({ status: this.props.status.toString() })
            // костыль, приходит объект, который не может отрисовать JSX, дропается ошибка, рушится приложение
        }
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