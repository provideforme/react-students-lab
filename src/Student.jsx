import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      {props.students.map((student, idx) =>
      <div key={idx}>
        <br />
        Name: {student.name}<br />
        <br />
        Bio: {student.bio}<br />
        <br />
        Scores: <Score scores={student.scores}/>
      </div>
      )}
    </>
  );
}

export default Student;