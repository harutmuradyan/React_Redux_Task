import React, { useState , useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Players.scss';
import { addPlayer, removePlayer } from "../../Redux/slices/player.slice";
import InputsPlayers from "./Inputs/InputsPlayers";

const Players = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [createdAt,setCreatedAt] = useState();
    const [teamName , setTeamName] = useState('');
    const [activeInputs , setActiveInputs] = useState([false , 0]);
    
    const {data} = useSelector((state) => state.player);
    const dispatch = useDispatch();



    const handleAddPlayer = useCallback(async (e) => {
        if (lastName && firstName && createdAt){
            await dispatch(addPlayer( { 
                id:Math.floor(Math.random() * 3000),
                lastName:lastName , 
                firstName:firstName,
                createdAt:createdAt,
                teamName : teamName
                }))
            setLastName('')
            setFirstName('')
            setCreatedAt('')
            setTeamName('')
        }
    },[dispatch,lastName,firstName,createdAt,teamName])

    const handleRemovePlayer = useCallback(async (id) => {
        await dispatch(removePlayer({id:id } ))
    },[dispatch])


    return (
        <div className="players">
            <h2 className="players-title">Players</h2>
            <div className="btns">
                <input  type="text"  
                        className="input" 
                        placeholder="Insert FirstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                <input  className="input" 
                        type="text"
                        placeholder="Insert LastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                <input  className="input" 
                        type="text"
                        placeholder="Insert createdAt"
                        value={createdAt}
                        onChange={e => setCreatedAt(e.target.value)} />
                 <input  className="input" 
                        type="text"
                        placeholder="Insert Team Name"
                        value={teamName}
                        onChange={e => setTeamName(e.target.value)} />
                <button className="btn-add"
                        onClick={handleAddPlayer}
                >
                        Add
                </button>
            </div>
            <div className="players-content">
            {
                data.map((el,index) => (
                    <div key={index} className="players-block">
                        <p className="players-block__item">Id : {el.id}</p>
                        <p className="players-block__item">FirstName : {el.firstName}</p>
                        <p className="players-block__item">LastName : {el.lastName}</p>
                        <p className="players-block__item">createdAt : {el.createdAt}</p>
                        <InputsPlayers  activeInputs={activeInputs[0]} elemId={activeInputs[1]}/>
                        <div className="btns">
                            <button className="btn-update" onClick={() => {setActiveInputs([true , el.id])}}>
                                Update
                            </button>
                            <button className="btn-remove" onClick={() => {handleRemovePlayer(el.id)}}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Players;