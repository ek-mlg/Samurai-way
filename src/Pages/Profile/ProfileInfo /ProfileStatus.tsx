import React, {useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ status, updateStatus }) => {

    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(currentStatus);
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);
    console.log(status)
        return (
            <div>
                {!editMode ?
                    <div>
                        <span
                            onDoubleClick={activateEditMode}
                        >{currentStatus || '-'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={onStatusChange}
                               autoFocus={true}
                               onBlur={deactivateEditMode}
                               value={currentStatus}
                        />
                    </div>
                }
            </div>
        );
}

export default ProfileStatus;