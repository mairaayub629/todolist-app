import { connect } from 'react-redux';
import TodoList from '../../components/todolist'
import { AddToList, GetList} from '../../store/actions/listActions'

function TodoPage(props) {

    return(
        <div>
           <TodoList props={props} />
        </div>
    ) 

}

const mapStateToProps = (state) => {
    return {
        list: state.todolist.list
    };
 }

 const mapDispatchToProps = (dispatch) => {
    return {
      AddToList,
      GetList
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);