const form = document.getElementById("loginForm");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make the challenge request so it appears in F12 → Network.
  try {
    await fetch("./challenge.json?attempt=" + Date.now(), {
      cache: "no-store"
    });
  } catch (error) {
    console.log("Challenge request failed:", error);
  }

  // Fictional NODE-8 login
  if (username === "Arsha" && password === "aaggzx57") {
    window.location.href = "congratulations.html";
  } else {
    output.textContent =
      "AUTHENTICATION FAILED\n\n" +
      "Invalid identity or access key.";
  }
});
