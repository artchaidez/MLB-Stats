import AwardWinner from "./AwardWinner";
import './Awards.css';

const Awards = () => {

  return (
    <>
      <h1 className="award-type-heading">MVP Award Winners</h1>
      <AwardWinner name={"hitters/Shohei-Ohtani"} />
      <AwardWinner name={"hitters/Aaron-Judge"} />
      <h1 className="award-type-heading">Cy Young Award Winners</h1>
      <AwardWinner name={"pitchers/Chris-Sale"} />
      <AwardWinner name={"pitchers/Tarik-Skubal"} />
      <h1 className="award-type-heading">Rookie of the Year Award Winners</h1>
      <AwardWinner name={"pitchers/Paul-Skenes"} />
      <AwardWinner name={"pitchers/Luis-Gil"} />
    </>
  );
};

export default Awards;
