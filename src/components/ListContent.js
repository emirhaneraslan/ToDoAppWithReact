import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './ListContent.css'
import ListContentFooter from './ListContentFooter'
import ListItem from './ListItem'

const ListContent = () => {
    const {todoList,todoFilter} =useSelector((state)=>state.todo)
    const [list,setList]=useState([])

    useEffect(()=> {
        if(todoFilter==="all") {
            setList(todoList)
            return
        }
        setList(todoList.filter((x)=>x.complete))
    },[todoList,todoFilter])
    return(
        <div className="item-content-wrapper">
            <div className="content">
                {list.length<1 && <div className='text-xs text-gray-700 font-bold text-center'>Henüz Bir Eleman Mevcut Değil</div>}
                
                {list.map((x)=> {
                    return(
                        <ListItem key={x.id}
                        item={x}
                        className={x.complete?'completed':''}
                            >
                            
                        </ListItem>
                    )
                })}
            </div>
            <ListContentFooter>

            </ListContentFooter>
        </div>
    )
}

export default ListContent