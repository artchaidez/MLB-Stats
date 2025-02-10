import Header from './Header'
import Footer from './Footer'
import AwardWinner from './AwardWinner';
import './Awards.css';

const App = () => {

  const ohtani = {
    firstName: "Shohei",
    lastName: "Ohtani",
    city: "Los Angeles",
    team: "Dodgers",
    img: "https://images.fangraphs.com/nobg_small_22879333.png",
    games: 159,
    plateApperances: 731,
    homeRuns: 54,
    rbis: 130,
    stolenBases: 59,
    bbPercentage: 11.1,
    kPercentage: 22.2,
    ba: .310,
    obp: .390,
    slg: .646,
    wrcPlus: 181,
    bsr: 9.8,
    def: -17.2,
    fWar: 9.1
  }

  const judge = {
    firstName: "Aaron",
    lastName: "Aaron",
    city: "New York",
    team: "Yankees",
    img: "https://images.fangraphs.com/nobg_small_22879706.png",
    games: 158,
    plateApperances: 704,
    homeRuns: 58,
    rbis: 144,
    stolenBases: 10,
    bbPercentage: 18.9,
    kPercentage: 24.3,
    ba: .322,
    obp: .458,
    slg: .701,
    wrcPlus: 218,
    bsr: -0.4,
    def: -9.9,
    fWar: 11.2
  }

  return (
    <>
      <Header/>
      <AwardWinner data={ohtani}/>
      <AwardWinner data={judge}/>
      <Footer />
    </>
  );
}

export default App;
