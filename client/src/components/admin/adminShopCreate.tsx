import { Link } from 'react-router-dom'
import React, { ReactElement } from 'react'
import { useActions } from '../../hooks/useActions'
import './adminLookBook.css'

export default function AdminShopCreate(): ReactElement {

    const { createItem } = useActions()

    const [name, setName] = React.useState<string>('')
    const [price, setPrice] = React.useState<number>()
    const [descrOne, setDescrOne] = React.useState<any>('')
    const [descrTwo, setDescrTwo] = React.useState<any>('')
    const [file, setFile] = React.useState<any>(null)

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    function handleCreateItem(e: any) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('descrOne', descrOne)
        formData.append('descrTwo', descrTwo)
        formData.append('img', file[0])
        createItem(formData)

        setName('')
        setPrice(0)
        setDescrOne('')
        setDescrTwo('')
        setFile(null)
    }

    return (
        <div className="container">

            <br />
            <div className="create-inps">

                <p> Название товара </p>
                <textarea className="inputs"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <p>  Цена товара </p>
                <textarea className="inputs"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />
                <br />
                <p>  Описание 1-ое </p>
                <textarea className="inputs"

                    value={descrOne}
                    onChange={e => setDescrOne(e.target.value)}
                />
                <br />
                <p> Описание 2-ое </p>
                <textarea
                    className="inputs"
                    value={descrTwo}
                    onChange={e => setDescrTwo(e.target.value)}
                />
                <br />
                <p>  Вставьте картинку товара </p>
                <input
                    onChange={(e) => selectFile(e)}
                    type="file" />
                <br />
                <button style={{
                    cursor: 'pointer', padding: "10px 15px",
                    background: "linear-gradient(118deg, #ff5722, rgba(255, 87, 34, .7))",
                    color: "#fff"
                }}
                    className='button btnsave'
                    onClick={handleCreateItem}>
                    <Link style={{color:"white", textDecoration:"none"}}to='/adminShop' > Создать товар ;) </Link>
                </button>
            </div>
        </div>
    )
}
