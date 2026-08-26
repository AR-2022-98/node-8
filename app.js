const form = document.getElementById("loginForm");
const output = document.getElementById("output");

if (form && output) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.textContent = "CONTACTING NODE-8...";

    fetch("./challenge.json?ts=" + Date.now())
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }

        return response.json();
      })
      .then(function (data) {
        output.textContent =
          "REQUEST ACCEPTED\n\n" +
          "CHALLENGE: " + data.challenge + "\n" +
          "STATUS: " + data.status + "\n\n" +
          data.message + "\n\n" +
          data.hint;
      })
      .catch(function (error) {
        output.textContent =
          "NODE-8 ERROR\n\n" +
          "Could not load challenge.json\n" +
          error.message;
      });
  });
}
