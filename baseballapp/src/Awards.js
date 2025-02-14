import AwardWinner from "./AwardWinner";
import './Awards.css';

const Awards = () => {
  const ohtani = {
    firstName: "Shohei",
    lastName: "Ohtani",
    city: "Los Angeles",
    team: "Dodgers",
    hitter: true,
    img: "https://images.fangraphs.com/nobg_small_22879333.png",
    games: 159,
    plateApperances: 731,
    homeRuns: 54,
    rbis: 130,
    stolenBases: 59,
    bbPercentage: 11.1,
    kPercentage: 22.2,
    ba: 0.31,
    obp: 0.39,
    slg: 0.646,
    wrcPlus: 181,
    bsr: 9.8,
    def: -17.2,
    fWar: 9.1,
  };

  const judge = {
    firstName: "Aaron",
    lastName: "Judge",
    city: "New York",
    team: "Yankees",
    hitter: true,
    img: "https://images.fangraphs.com/nobg_small_22879706.png",
    games: 158,
    plateApperances: 704,
    homeRuns: 58,
    rbis: 144,
    stolenBases: 10,
    bbPercentage: 18.9,
    kPercentage: 24.3,
    ba: 0.322,
    obp: 0.458,
    slg: 0.701,
    wrcPlus: 218,
    bsr: -0.4,
    def: -9.9,
    fWar: 11.2,
  };

  const sale = {
    firstName: "Chris",
    lastName: "Sale",
    city: "Atlanta",
    team: "Braves",
    hitter: false,
    img: "https://images.fangraphs.com/nobg_small_22868979.png",
    games: 29,
    qualityStarts: 18,
    wins: 18,
    loses: 3,
    inningsPitched: 177.2,
    strikeouts: 225,
    kPercentage: 32.1,
    bbPercentage: 5.6,
    groundBallRate: 44.8,
    era: 2.38,
    xEra: 2.79,
    fip: 2.09,
    xFip: 2.64,
    fWar: 6.4,
  };

  const skubal = {
    firstName: "Tarik",
    lastName: "Skubal",
    city: "Detroit",
    team: "Tigers",
    hitter: false,
    img: "https://images.fangraphs.com/nobg_small_22878616.png",
    games: 31,
    qualityStarts: 22,
    wins: 18,
    loses: 4,
    inningsPitched: 192.0,
    strikeouts: 228,
    kPercentage: 30.3,
    bbPercentage: 4.6,
    groundBallRate: 45.7,
    era: 2.39,
    xEra: 2.68,
    fip: 2.49,
    xFip: 2.83,
    fWar: 5.1,
  };

  const skenes = {
    firstName: "Paul",
    lastName: "Skenes",
    city: "Pittsburgh",
    team: "Pirates",
    hitter: false,
    img: "https://images.fangraphs.com/nobg_small_22878519.png",
    games: 23,
    qualityStarts: 11,
    wins: 3,
    loses: 15,
    inningsPitched: 133.0,
    strikeouts: 170,
    kPercentage: 33.1,
    bbPercentage: 6.2,
    groundBallRate: 51.2,
    era: 1.96,
    xEra: 2.5,
    fip: 2.44,
    xFip: 2.53,
    fWar: 4.3,
  };

  const gil = {
    firstName: "Luis",
    lastName: "Gil",
    city: "New York",
    team: "Yankees",
    hitter: false,
    img: "https://images.fangraphs.com/nobg_small_23166484.png",
    games: 29,
    qualityStarts: 10,
    wins: 15,
    loses: 7,
    inningsPitched: 151.2,
    strikeouts: 171,
    kPercentage: 26.8,
    bbPercentage: 12.1,
    groundBallRate: 35.6,
    era: 3.5,
    xEra: 3.83,
    fip: 4.14,
    xFip: 4.36,
    fWar: 2.2,
  };

  return (
    <>
      <div className="award-type-header">MVP Award Winners</div>
      <AwardWinner data={ohtani} />
      <AwardWinner data={judge} />
      <div className="award-type-header">Cy Young Award Winners</div>
      <AwardWinner data={sale} />
      <AwardWinner data={skubal} />
      <div className="award-type-header">Rookie of the Year Award Winners</div>
      <AwardWinner data={skenes} />
      <AwardWinner data={gil} />
    </>
  );
};

export default Awards;
