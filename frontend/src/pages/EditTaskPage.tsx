function EditTaskPage() {
  return (
    <div className="card">
      <input placeholder="Title"></input>
      <textarea placeholder="Description"></textarea>
      <button className="btn">Update</button>
    </div>
  );
}

export default EditTaskPage;
