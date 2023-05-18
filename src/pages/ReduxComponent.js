import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import { addCustomerAction, removeCustomerAction } from '../store/customerReducer';
import { fetchCustomers } from '../asyncAction/customers';
import { decrement, increment } from '../store/tkReducer';


const ReduxComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.toolkit.count);
    // const customers = useSelector(state => state.customers.customers);

    // const addCash = (cash) => {
    //   dispatch({type:"ADD_CASH", payload: cash})
    // }

    // const getCash = (cash) => {
    //   dispatch({type:"GET_CASH", payload: cash})
    // }

    // const addCustomer = (name) => {
    //   const customer = {
    //     name,
    //     id: Date.now(),
    //   }
    //   dispatch(addCustomerAction(customer))
    // }

    // const removeCustomer = (customer) => {
    //   dispatch(removeCustomerAction(customer.id))
    // }

  return (
    <div>
      ReduxComponent
      <div style={{fontsize: "3rem"}}>{count}</div>
      <div style={{display: "flex"}}>
        <Button onClick={() => dispatch(increment())}>Пополнить баланс</Button>
        <Button onClick={() => dispatch(decrement())}>Снять с баланса</Button>

        <Button >Добавить клиента</Button>
        <Button >Добавить клиентов</Button>
      </div>

      {/* {customers.length > 0 ?
        <div>
          {customers.map(customer => 
              <div 
                // onClick={() => removeCustomer(customer)}
                style={{fontSize:"2rem", border: "1px solid black", marginTop:5, padding: "10px"}}
              >
                {/* {customer.name} */}
              {/* </div>
          )}
        </div>
      :
        <div style={{fontSize:"2rem", marginTop:20}}>
          Клиенты отсутствует!
        </div>
      } */} 
    </div>
  )
}

export default ReduxComponent