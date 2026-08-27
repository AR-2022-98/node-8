const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Arsha" && password === "aaggzx57") {
    window.location.href = "congratulations.html";
  } else {
    output.textContent =
      "AUTHENTICATION FAILED\n\nInvalid identity or access key.";
  }
});
