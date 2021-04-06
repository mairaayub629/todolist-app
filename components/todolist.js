import react, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';

function ListForm(props) {

   const [list, setList] = useState([]);

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