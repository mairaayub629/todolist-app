import react, { useState, useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';

function ListForm({ GetList }) {

   const [list, setList] = useState([]);
//    const { GetList } = props; 

   useEffect(()=> {
    //    (async()=> {
    //       const resp = await GetList();
    //       console.log('resp', resp);
    //       if(resp && resp.value){
    //           setList(resp.value);
    //       }
    //    })();

       async function fetchMyAPI() {
        const resp = await GetList();
        console.log('resp', resp);
        if(resp && resp.value){
            setList(resp.value);
        }
      }
  
      fetchMyAPI()
   }, []);

   const AddtoList=(value) => {
      list.push(value);
      setList(list);
   }


    return(
        <div>
            <input type="text" name="list" />
            <button type="submit" onClick={item =>  AddtoList(item.target.value) }>  Add Item </button>

            <p>List of Items</p>
            {list.length >0 && list.map(item => {
                <p>
                {item}
                </p>
            })

            }
        </div>
    )
}

ListForm = reduxForm({
    form: 'listform'
  })(ListForm)
  

export default ListForm;