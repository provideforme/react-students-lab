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
      </div>
      )}
    </>
  );
}

export default Student;