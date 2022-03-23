import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem';
import { QUERY_CATEGORIES } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useProductReducer } from '../../utils/reducers';
import ProductList from '../ProductList';
import CategoryMenuBrunch from '../CategoryMenuBrunch';

function BrunchDishes() {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
   

  return (
    <div >
         {categories.map(item => (
             item.name === 'Main Dishes - Dinner' ||
            <ProductList />

         ))}  
            
    </div>
  );
}

export default BrunchDishes;
