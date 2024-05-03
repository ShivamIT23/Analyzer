import { INSTAGRAM_MAX_CHAR , FACEBOOK_MAX_CHAR } from "./constants";

export default function Stats({numOfCharacter , numOfWords}) {
  return (
    <section className="stats">
      <Stat num={numOfWords} label='Words'/>
      <Stat num={numOfCharacter} label='Characters'/>
      <Stat num={INSTAGRAM_MAX_CHAR - numOfCharacter} label='Instagram'/>
      <Stat num={FACEBOOK_MAX_CHAR - numOfCharacter} label='Facebook'/>
    </section>
  );
}

function Stat({ num , label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${num<0 ? 'stat__number--limit' : ''}`}>{num}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
