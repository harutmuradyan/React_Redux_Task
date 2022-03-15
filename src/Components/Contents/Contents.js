import React , {useState} from 'react'
import './Content.scss'
import {useSelector} from 'react-redux'
import Item from './Item/Item';

const Content = () => {

    const {data} = useSelector((state) => state.team);
    const [teamNameInsert , setTeamNameInsert] = useState();

    const teamNames = [];
    data.forEach(e =>
        teamNames.push(e.name)
    )

        
    return (
        <div className="content">
            <h2 className="content-title">Content</h2>
            
            <div className="content-block">
            {
                teamNames.map((el,index) => (
                    <div key={index} className="content-names">
                        <button className="content-block__item"
                                value={el} 
                                onClick={e => setTeamNameInsert(e.target.value)}>Team Name : {el}</button>
                    </div>
                ))
            }
            </div>
            <Item teamNameInsert={teamNameInsert}/>
        </div>
    )
}
export default Content;