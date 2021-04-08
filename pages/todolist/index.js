import { connect } from 'react-redux';
import TodoList from '../../components/todolist'
import { AddToList, GetList} from '../../store/actions/listActions'

function TodoPage({ GetList }) {

    return(
        <div>
           <TodoList GetList={GetList}/>
        </div>
    ) 

}

const mapStateToProps = (state) => {
    return {
        list: state.todolist.list
    };
 }

 const mapDispatchToProps = (dispatch) => ({
      AddToList: dispatch(AddToList),
      GetList: dispatch(GetList)
  })
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);