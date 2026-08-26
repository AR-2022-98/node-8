const form=document.getElementById("loginForm"),output=document.getElementById("output");
const accounts={
 arsha:{password:"BlackBox!4827x",message:"AUTHENTICATION ACCEPTED\n\nWelcome back, Arsha.\n\nNODE-8 recognizes the operator.\n\nYou found the front door. That was the easy part."},
 mrgpt:{password:"Node8_AI#7319",message:"AUTHENTICATION ACCEPTED\n\nHello, Mr. GPT.\n\nNODE-8 has detected an unusually large amount of artificial intelligence.\n\nPlease stop judging the JavaScript."},
 admin:{password:"N8_Admin$9041",message:"AUTHENTICATION ACCEPTED\n\nADMIN ACCESS REQUESTED.\n\nNice try.\n\nCalling yourself admin does not make you admin."},
 guest:{password:"Guest_8!6204",message:"AUTHENTICATION ACCEPTED\n\nGUEST ACCESS.\n\nCongratulations.\n\nYou have been granted absolutely nothing."},
 root:{password:"RootNode@5816",message:"AUTHENTICATION ACCEPTED\n\nROOT DETECTED.\n\nBold assumption.\n\nNODE-8 is mildly impressed."}
};
form.addEventListener("submit",e=>{e.preventDefault();const u=document.getElementById("username").value.trim().toLowerCase(),p=document.getElementById("password").value;if(!u||!p){output.textContent="ERROR // IDENTITY AND ACCESS KEY REQUIRED";return}const a=accounts[u];if(a&&p===a.password)output.textContent=a.message+"\n\nSESSION: "+Math.random().toString(16).slice(2,10).toUpperCase();else output.textContent=`AUTHENTICATION FAILED\n\nIdentity: ${u}\n\nNODE-8 response:\nNice try.\n\nHint: Some identities are hiding something.`});
