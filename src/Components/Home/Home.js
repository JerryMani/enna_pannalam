
import HomeDailyRecom from "./HomeDailyRecom"
import HomeProf from "./HomeProf"
import HomeTotalMatch from "./HomeTotalMatch"
import "./home.css"

const Home = () => {
  return (
    <div className="home-cont">
        <HomeProf/>
        <div className="home-body-container">
          <HomeDailyRecom/>
          <HomeTotalMatch/>
        </div>
    </div>
  )
}

export default Home