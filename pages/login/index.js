import { connect } from 'react-redux';
import LoginForm from '../../components/login'

function LoginPage(props) {
    return(
        <div>
           <LoginForm/>
        </div>
    ) 

}

function mapStateToProps(state) {
    return {
    };
 }
 
export default connect(mapStateToProps)(LoginPage);