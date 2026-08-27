const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  output.textContent = "CONTACTING NODE-8...";

  try {
    const response = await fetch(
      "./challenge.json?attempt=" + Date.now(),
      {
        method: "GET",
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    await response.json();

    if (username === "Arsha" && password === "aaggzx57") {
      output.textContent = "ACCESS GRANTED\n\nRedirecting...";

      setTimeout(() => {
        window.location.href = "congratulations.html";
      }, 1000);
    } else {
      output.textContent =
        "AUTHENTICATION FAILED\n\nInvalid identity or access key.";
    }

  } catch (error) {
    output.textContent =
      "NODE-8 ERROR\n\n" + error.message;
  }
});
