function RegisterForm() {
  return (
    <div className="container">
      <div class="jumbotron">
        <form>
          <div class="form-group mb-3">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="Enter Name"
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Second Name</label>
            <input
              type="text"
              class="form-control"
              id="secondname"
              placeholder="Enter Second Name"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Paasword</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
