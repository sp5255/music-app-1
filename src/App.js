import SideNav from "./components/SideNav";
import SongCard from "./components/SongCard";
import TopNav from "./components/TopNav";
import SongsContainer from "./components/SongsContainer";

function App() {
  return (
    <div className="App">
        <TopNav />
        <SideNav />
        <SongsContainer />
    </div>
  );
}

export default App;
