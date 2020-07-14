import axios from "axios";
export default class BaseClass {
  constructor() {}


  auth(username, password) {
    axios({
      method: "post",
      url: "https://localhost:5001/api/authentication/authenticate",
      headers: { "Content-Type": "application/json" },
      data: { username: username, password: password }
    })
      .then(response => {
        this.result = response.data.token !== "";
      })
      .catch(() => {});
    return this.result;
  }
}
