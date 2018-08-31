import { connect } from 'react-redux'
import Status from '../../components/common/Status/index.jsx'

function mapStateToProps (state) {
  return state.user.status
}

const StatusMessage = connect(
  mapStateToProps
)(Status);

export default StatusMessage
