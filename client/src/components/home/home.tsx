import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ProductsList from '../productsList/ProductsList';
import {useActions} from '../../hooks/useActions'

const Home: React.FC = () => {
    const {items, error, loading} = useSelector((state:RootState) => state.item)
    const {fetchItems} = useActions()

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    if (loading) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <div className="container">
            <ProductsList data={items}/>
        </div>
    )
}

export default Home;