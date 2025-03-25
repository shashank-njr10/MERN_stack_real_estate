import SearchBar from '../../components/seachBar/searchBar';
import './homePage.scss';

function HomePage() {
    return (
        <div className = 'homePage'>
            <div className= "textContainer">
                <div className = "wrapper">
                <h1 className = "title"> 
                    Find Real Estate & Get Your Dream Place. Find Real Estate & Get Your Dream Place
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <SearchBar />
                <div className = "boxes">
                    <div className = "box">
                        <h1>16+</h1>
                        <h2>Years Of Experience</h2>
                    </div>
                    <div className = "box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className = "box">
                        <h1>5000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>   
            </div>
            <div className = "imgContainer">
                <img src ="/bg.png" alt = "" />
            </div>
        </div>
    )
}

export default HomePage;