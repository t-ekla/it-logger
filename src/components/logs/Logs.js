import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

export const Logs = ({ log: { logs, loading }}) => {
  

  useEffect(() => {
    getLogs();
    // es-lint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
      <p className='center'> No logs to show... </p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  log: state.log // pertains to root reducer
});

export default connect(mapStateToProps, { getLogs })(Logs);