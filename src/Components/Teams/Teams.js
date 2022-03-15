import React , {useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import './Teams.scss';
import { addTeam, removeTeam } from "../../Redux/slices/team.slice";
import Input from "./Input/Input";

const Teams = () => {
    const [name , setName] = useState('');
    const [createdAt , setCreatedAt] = useState(''); 
    const [activeInput , setActiveInput] = useState([false , 0]);

    const {data} = useSelector((state) => state.team);
    const dispatch = useDispatch();

    const handleAddTeam = useCallback(async (e) => {
        
        if (name){
            await dispatch(addTeam( { 
                id:Math.floor(Math.random() * 100),
                name:name , createdAt : createdAt}
            ))
            setName('')
            setCreatedAt('')
        }
     
    },[dispatch,name,createdAt])

    const handleRemoveTeam = useCallback(async (id) => {
        await dispatch(removeTeam({id:id } ))
       
    },[dispatch])


    return (
        <div className="teams">
            <h2 className="teams-title">Teams</h2>
            <div className="btns">
                <input  type="text" 
                        value={name} 
                        className="input" 
                        placeholder="Insert Name" 
                        onChange={e => setName(e.target.value)}/>
                <input  type="text" 
                        value={createdAt} 
                        className="input" 
                        placeholder="Insert createdAt" 
                        onChange={e => setCreatedAt(e.target.value)}/>
                <button className="btn-add" 
                        onClick={handleAddTeam}>Add
                </button>
            </div>
            <div className="teams-content">
            {
               data.map((el,index) => (
                   <div key={index} className="teams-block">
                        <p className="teams-block__item">Id : {el.id}</p>
                        <p className="teams-block__item">Name : {el.name}</p>
                        <p className="teams-block__item">CreatedAt : {el.createdAt}</p>
                        <Input  activeInput={activeInput[0]} elemId={activeInput[1]}/>
                        <div className="btns">
                            <button className="btn-update" onClick={() => setActiveInput([true , el.id])}>Update</button>
                            <button className="btn-remove" onClick={() => handleRemoveTeam(el.id)}>Remove</button>
                        </div>
                   </div>
               ))
            }
            </div>
        </div>
    )
}

export default Teams;