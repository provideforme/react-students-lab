const Score = (props) => {
  return ( 
    <>
      {props.scores.map((scores, idx) =>
        <div key={idx}>
          Date: {scores.date} <br />
          <br />
          Scores: 
          {scores.score}
        </div>
      )}
    </>
  );
}

export default Score;