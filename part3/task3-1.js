function tellFortune(jobTitle, location, partnerName, numChildren) {
  return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
}

console.log(tellFortune("software engineer", "Jordan", "Alice", 3));
