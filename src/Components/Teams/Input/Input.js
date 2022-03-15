import React , {useState , useCallback} from "react";
import { updateTeam } from "../../../Redux/slices/team.slice"; 
import { useDispatch } from "react-redux";
const Input = ({activeInput , elemId}) => {

    const [updateCreateAt , setUpdateCreateAt] = useState("");
    const [updatedName,setUpdatedName] = useState("");    
    const dispatch = useDispatch();

    const handleUpdateTeam = useCallback(async () => {
        await dispatch(updateTeam( { 
            id: elemId, 
            name: updatedName, 
            createdAt : updateCreateAt} 
            ))

            setUpdatedName('')
            setUpdateCreateAt('')
    },[dispatch , updatedName , updateCreateAt , elemId])


    return (
        <div className={activeInput ? "inputs active" : "inputs"}>
            <input  
            type="text" 
            className="input" 
            placeholder="Update Name"   
            value={updatedName} 
            onChange={e => setUpdatedName(e.target.value)}
            />
            <input  
            type="text" 
            className="input" 
            placeholder="Update Name"   
            value={updateCreateAt} 
            onChange={e => setUpdateCreateAt(e.target.value)}
            />
            <button onClick={handleUpdateTeam}>Send</button>
    </div>
    )
}

export default Input;