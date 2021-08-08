import React, { ReactElement, useEffect } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { REACT_API } from '../../constants'
import './adminLookBook.css'
import { useState } from 'react'

export default function AdminLookbook(): ReactElement {
    const { gallery, error, loading } = useTypeSelector(state => state.gallery)
    const { fetchGallery, deleteGallery, createGallery } = useActions()
    const [file, setFile] = useState<any>(null)
    const [page, /*setPage*/] = useState<number>(1)
    // const [limit, setLimit] = useState<number>(3)

    useEffect(() => {
        console.log(gallery)
    }, [gallery])

    useEffect(() => {
        fetchGallery(page)
        console.log(page, 'page has changed')
    }, [page, fetchGallery])


    function deleteGalleryById(id: number) {
        deleteGallery(id)
        fetchGallery(50)
    }

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    function handleCreateGallery(e: any) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('img', file[0])
        createGallery(formData)
        fetchGallery(50)
    }



    if (loading) {
        return <h3 className="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <div className="containborder-radius:10px;er">
                <br />

                <input className="admin-input" onChange={(e) => selectFile(e)} style={{ marginTop: '15px' }} type="file" placeholder="ok" />
                <button onClick={handleCreateGallery} type="submit" className="admin-button">Загрузить фото</button>

                {gallery.map(item =>
                    <div style={{ margin: '20px auto', padding: '10px' }} key={item.id}>
                        <img loading="lazy" style={{ width: '100%' }} src={REACT_API + item.img} alt="" />
                        <div className="lookbook_buttons" style={{ display: 'flex', cursor: 'pointer', margin: '20px' }}>
                            <div onClick={() => deleteGalleryById(item.id)} className="admin-button">Delete</div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

