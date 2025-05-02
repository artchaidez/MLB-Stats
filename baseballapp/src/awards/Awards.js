import AwardWinner from "./AwardWinner";
import './Awards.css';

const Awards = () => {

  return (
    <>
      <div className="award-type-header">MVP Award Winners</div>
      <AwardWinner name={"hitters/Shohei-Ohtani"} />
      <AwardWinner name={"hitters/Aaron-Judge"} />
      <div className="award-type-header">Cy Young Award Winners</div>
      <AwardWinner name={"pitchers/Chris-Sale"} />
      <AwardWinner name={"pitchers/Tarik-Skubal"} />
      <div className="award-type-header">Rookie of the Year Award Winners</div>
      <AwardWinner name={"pitchers/Paul-Skenes"} />
      <AwardWinner name={"pitchers/Luis-Gil"} />
    </>
  );
};

export default Awards;
