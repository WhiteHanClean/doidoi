import { ReactElement, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { REACT_API } from '../../constants'
import './adminLookBook.css'

export default function Shop(): ReactElement {
    const { items, error, loading } = useTypeSelector(state => state.item)
    const { fetchItems, deleteItem } = useActions()
    const history = useHistory()

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    async function deleteItemById(id: number) {
        await deleteItem(id)
        fetchItems()
    }

    function handleUpdateCLick(id: number) {
        history.push('adminShopUpdate/' + id)
    }

    if (loading) {
        return <h3 className="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <div className="admin-shop">
                <Link className="admin-button" style={{ marginRight: "10px", textDecoration: 'none' }} to='/admin'> назад </Link><br />
                <Link style={{ textDecoration: 'none' }} to='/adminShopCreate'>
                    <div
                        style={{ width: '150px', cursor: 'pointer', textDecoration: 'none' }}
                        className="create_item button admin-button"> Создать товар
                    </div>
                </Link>
            </div>
            <div className="shop_items">
                {items.map(item =>
                    <div className='shop_item_card' key={item.id}>
                        <div className="item_img">
                            <img 
                                loading="lazy"
                                style={{ width: '90%', height: '250px' }}
                                src={REACT_API + item.img}
                                alt="" />
                        </div>
                        <div className="item_name">
                            {item.name}
                        </div>
                        <div className="item_price">
                            <strong>${item.price}</strong>
                        </div>
                        <div style={{ display: 'flex', paddingTop: '5px'}} className="admin_buttons">
                            <div style={{ cursor: 'pointer' }}
                                onClick={() => deleteItemById(item.id)}
                                className="deleteItem button admin-button">
                                Delete
                            </div>
                            <div style={{ cursor: 'pointer', marginLeft:"55px"  }}
                                onClick={() => handleUpdateCLick(item.id)}
                                className='button updateButton admin-button'> edit
                            </div>

                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}

