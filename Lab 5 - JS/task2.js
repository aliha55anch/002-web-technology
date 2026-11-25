const density = prompt("Enter Traffic Density:");
if (density === "Emergency") {
  console.log("Ambulance detected: Turns green immediately. Light Stays green for 90 seconds");
} else if (density === "Medium") {
  console.log("Light Stays green for 40 seconds");
} else if (density === "Low") {
  console.log("Light Stays green for 20 seconds");
} else if (density === "High") {
  console.log("Light stays green for 60 seconds");
} else {
  console.log("Invalid Input");
}
