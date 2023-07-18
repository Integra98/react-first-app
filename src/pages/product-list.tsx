import React, { useContext } from 'react';
import { Product } from '../components/Product';
// import { products } from './data/Products';
import { useProducts } from '../hooks/products';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductList(){
    const { loading, error, products, addProduct } = useProducts()
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      addProduct(product);
      closeModal()
    }
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {error && <Error errorMessage={error}/>}
        {products.map(product => <Product product={product} key={product.id} />)}
        {modal && <Modal title={'Create New Product'} onClose={() => closeModal()}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>}
  
        <button className='fixed bottom-5 right-5 rounded-full bg-yellow-400 text-white text-2xl px-4 py-2'
        onClick={() => openModal()}>+</button>
      </div>
    );
}