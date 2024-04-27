import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';
import "../css/loading.css";

const override = {
  display: 'block',
  margin: '3',
  borderColor: "#ff90ae",
};

function Loading({ loading }) {
  return (
      <div className='loading'>
        <PulseLoader
          cssOverride={ override }
          size={ 30 }
          color="#ff90ae"
          loading={ loading }
          speedMultiplier={ 1.3 }
        />
      </div>
  )
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading
