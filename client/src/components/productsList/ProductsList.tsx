import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../store/types/types'
import ProductCard from './ProductCard'
import classes from './ProductsList.module.css'

interface Props {
  data: IProduct[]
}

const ProductsList: React.FC<Props> = ({ data }) => {
  return (
    <ul className={classes.productsList}>
      {data.map((item) => (
        <li className={classes.productsListItem} key={item.id}>
          <Link to={`/shop/${item.id}`} className={classes.productsListItemLink}>
            <ProductCard data={item}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default memo(ProductsList)
