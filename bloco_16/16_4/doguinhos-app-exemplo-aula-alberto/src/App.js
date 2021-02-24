import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './actions/resquestData';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchDog}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

// console.log(this.state.src);
const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog()),
});

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
