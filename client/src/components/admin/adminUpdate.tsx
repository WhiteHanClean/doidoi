import React, { ReactElement } from 'react'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import { useParams } from 'react-router'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useEffect } from 'react'
import './admin.css'
import {Link} from 'react-router-dom'
import './adminLookBook.css'

export default function AdminUpdate(): ReactElement {
    const {item, error, loading} = useTypeSelector(state => state.oneItem)
    const {getOneItem, updateItem} = useActions()
    const { id } = useParams<{id: string}>()
    const [newName, setNewName]= React.useState<string> ('')
    const [newPrice, setNewPrice]= React.useState<number> ()
    const [newDescrOne, setNewDescrOne]= React.useState<any> ('')
    const [newDescrTwo, setNewDescrTwo]= React.useState<any> ('')
    const [newFile, setNewFile] = React.useState<any>(null)

    useEffect(() => {
        getOneItem(parseInt(id))
    }, [getOneItem, id])

    const selectFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewFile(e.target.files)
    }

    function handleUpdateItem(e:any){
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', newName)
        formData.append('price', `${newPrice}`)
        formData.append('descrOne', newDescrOne)
        formData.append('descrTwo', newDescrTwo)
        formData.append('img', newFile[0])
        if(!!item){
            updateItem(item.id, formData)
        }
    }

    if (loading || !item) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <div className="edit_container">
                <img src={REACT_API + item.img} alt="" />
                <div className="edit-inps">
                    name
                    <textarea className="textarea-edit" placeholder={item.name} onChange={e => setNewName(e.target.value)} />
                    descrOne
                    <textarea className="textarea-edit" placeholder={item.descrOne} onChange={e => setNewDescrOne(e.target.value)} />
                    descrTwo
                    <textarea className="textarea-edit" placeholder={item.descrTwo} onChange={e => setNewDescrTwo(e.target.value)} />
                    price
                    <textarea className="textarea-edit" placeholder={item.price.toString()} onChange={e => setNewPrice(Number(e.target.value))} />
                    image
                    <input type="file" onChange={(e)=>selectFile(e)}  />
                    <button style={{cursor:'pointer',  marginLeft:"20px"}} 
                        className='button btnsave admin-button' 
                        onClick={handleUpdateItem}>  
                        <Link style={{textDecoration:"none" , color:"#fff"}} to='/admin' >post</Link> 
                    </button> 
                </div> 
            </div>
        </div>
    )
}
