import React from 'react';
import {Link} from '../routes';

class _error extends React.PureComponent {
  static async getInitialProps(props) {
    const {res, err} = props.ctx;
    const statusCode = res ? res.statusCode : err ? err.statusCode : undefined;

    return {statusCode};
  }

  render() {
    const {statusCode, t} = this.props;
    return (

      <section id='error' className='page-wrapper' style={{minHeight: '50vh'}}>
        <div className="container text-center">
          <h1 style={{color: 'red', fontSize: '80px'}}>{typeof statusCode !== 'undefined' ? statusCode : '500'}</h1>
          <p style={{color: 'red'}}>{typeof statusCode !== 'undefined' ? statusCode : '500'}</p>
          <div className="mt-4">
            <Link reoute={'/'}><a href="/" className="btn btn-primary">Return to home page</a></Link>
          </div>
        </div>
      </section>
    );
  }
}

export default _error;
