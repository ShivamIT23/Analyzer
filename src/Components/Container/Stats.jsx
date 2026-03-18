import { X_MAX_CHAR , FACEBOOK_MAX_CHAR} from "../../lib/constants";

export default function Stats({numOfCharacter , numOfWords}) {
  return (
    <section className="stats">
      <Stat num={numOfWords} label='Words'/>
      <Stat num={numOfCharacter} label='Characters'/>
      <Stat num={X_MAX_CHAR - numOfCharacter} label='Twitter/X'/>
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
