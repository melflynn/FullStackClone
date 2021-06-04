import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.currentUserId],
  userId: state.session.currentUserId
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);