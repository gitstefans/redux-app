import SongList from './components/SongList';
import SongDetails from './components/SongDetails';

const App = () => {
    return (
        <div className="wraps">
            <div className='left'>
                <SongList />
            </div>
            <div className='right'>
                <SongDetails />
            </div>
        </div>
    );
}

export default App;