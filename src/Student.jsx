const Student = (props) => {
  return ( 
    <>
      <h3>
        {props.student.name}'s bio: <br /><br /> {props.student.bio}
      </h3>
    </>
  );
}

export default Student;