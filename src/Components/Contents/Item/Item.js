import React  from 'react'
import './Item.scss';
import {useSelector} from 'react-redux'

const Item = ({teamNameInsert}) => {
    const {data} = useSelector((state) => state.player);

    const arr =  data.filter(item => item.teamName === teamNameInsert);
    
    return (
        <>
            {
                arr.map((e , index) => (
                    <select className='item-block' key={index}>
                        <option className="item-block__item">{e.firstName}</option>
                        <option className="item-block__item">{e.lastName}</option>
                        <option className="item-block__item">{e.createdAt}</option>
                    </select>
                ))
            }
        </>
    )
}

export default Item;