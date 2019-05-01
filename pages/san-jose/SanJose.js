import DefaultPageLayout from "../../components/layouts/default/DefaultPageLayout";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getSearchData} from "../../store/actions/searchActions";
import {Container} from "reactstrap";
import Events from "./component/Events";
import './SanJose.scss';

function SanJose({data}) {
  return (
    <DefaultPageLayout>
      <div className='jan-jose-page'>
        <Container>
          <div className="outer-page">
            <div className="main-poster">
              <img src="/static/img/main-poster.png" alt=""/>
            </div>
            <div className='inner-page'>
              <h3 className='page-title'>
                Discover those events near you:
              </h3>
              <Events events={data}/>
            </div>
            <div className='inner-page'>
              <h3 className='page-title'>
                All events:
              </h3>
              <Events events={data}/>
            </div>
          </div>
        </Container>
      </div>
    </DefaultPageLayout>
  )
}

SanJose.getInitialProps = async ({ctx}) => {
  const data = ctx.store.getState().search.data;
  if (!data) {
    await ctx.store.dispatch(getSearchData());
  }
};

SanJose.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  data: state.search.data,
});

export default connect(mapStateToProps)(SanJose);