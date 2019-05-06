import {useState} from 'react';
import HomePageLayout from '../../components/layouts/home/HomePageLayout';
import {Router} from '../../routes';
import './HomePage.scss';

function HomePage() {
    const [q, setQ] = useState('');

    const onChange = (e) => {
        const {value} = e.target;
        setQ(value);
    };

    const searchFormSubmitHandler = (e) => {
        e.preventDefault();
        if(!q) return;
        Router.pushRoute(`/san-jose?q=${q}`);
    };

    return (
        <HomePageLayout>
            <div className="search-component">
                <div>
                    <img src="/static/img/searchLogo.png" alt=""/>
                    <p className="mt-3 search-component-desc">Find blockchain meetups near you now.</p>
                </div>
                <div className="search-form">
                    <form noValidate={true} onSubmit={searchFormSubmitHandler}>
                        <div className="form-group">
                            <input type="text" value={q} onChange={onChange} className="form-control"/>
                            <img className="search-addon" src="/static/img/search-icon.png" alt="search"/>
                        </div>
                    </form>
                </div>
            </div>
        </HomePageLayout>
    );
}

export default HomePage;