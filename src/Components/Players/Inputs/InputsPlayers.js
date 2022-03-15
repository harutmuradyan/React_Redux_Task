import React , {useState , useCallback} from "react";
import { useDispatch } from "react-redux"; 
import { updatePlayer } from "../../../Redux/slices/player.slice";

const InputsPlayers = ({activeInputs , elemId}) => {

        const [updatedFirstName , setUpdatedFirstName] = useState('');
        const [updatedLastName , setUpdatedLasttName] = useState('');
        const [updateCreatedAt , setUpdatedCreatedAt] = useState('');
        const [updateTeam , setUpdateTeam] = useState('');
        console.log(elemId)
        const dispatch = useDispatch();

        const handleUpdatePlayer = useCallback(async () => {
                await dispatch(updatePlayer( { 
                    id:elemId, 
                    firstName: updatedFirstName , 
                    lastName : updatedLastName ,
                    createdAt: updateCreatedAt,
                    teamName : updateTeam    
                }))

                setUpdatedFirstName('')
                setUpdatedLasttName('')
                setUpdatedCreatedAt('')
                setUpdateTeam('')
        },[dispatch,updatedFirstName,updatedLastName , updateCreatedAt , updateTeam  , elemId])

        return (
                <div className={activeInputs ? "inputs active" : "inputs"}>
                        <input  type="text" 
                                className="input" 
                                placeholder="Update FirstName"
                                value={updatedFirstName}
                                onChange={e => setUpdatedFirstName(e.target.value)} />
                        <input  type="text" 
                                className="input" 
                                placeholder="Update LastName"
                                value={updatedLastName}
                                onChange={e => setUpdatedLasttName(e.target.value)} />
                        <input  type="text" 
                                className="input" 
                                placeholder="Update CreateAt"
                                value={updateCreatedAt}
                                onChange={e => setUpdatedCreatedAt(e.target.value)} />
                        <input  type="text" 
                                className="input" 
                                placeholder="Update TeamName"
                                value={updateTeam}
                                onChange={e => setUpdateTeam(e.target.value)} />
                        <button onClick={handleUpdatePlayer}>Send</button>
                </div>
        )
}

export default InputsPlayers;