import AwardWinner from "./AwardWinner";
import './Awards.css';
import ohtani from '../json/ohtani.json'
import judge from '../json/judge.json'
import sale from '../json/sale.json'
import skubal from '../json/skubal.json'
import skenes from '../json/skenes.json'
import gil from '../json/gil.json'
import { useEffect } from "react";

const Awards = () => {

  const url = "http://localhost:8081/hitters/Shohei-Ohtani"

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      console.log(result.body)
      const json = await result.json();
      console.log(json)
    }
    fetchData();
  }, [])

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
