function getNumber() {
  const userInput = document.getElementById('search-input').value;

  // Use a regular expression to match the last 4 digits
  const first4DigitsMatch = userInput.match(/^\d{4}/);

  if (first4DigitsMatch) {
    const first4Digits = first4DigitsMatch[0];

    switch (first4Digits) {
      case "0967":
      case "0817":
      case "0904":
      case "0905":
      case "0906":
      case "0915":
      case "0916":
      case "0917":
      case "0926":
      case "0927":
      case "0935":
      case "0936":
      case "0937":
      case "0945":
      case "0954":
      case "0955":
      case "0956":
      case "0957":
      case "0958":
      case "0959":
      case "0965":
      case "0966":
      case "0967":
      case "0975":
      case "0954":
      case "0955":
      case "0956":
      case "0957":
      case "0958":
      case "0959":
      case "0965":
      case "0966":
      case "0967":
      case "0975":
      case "0976":
      case "0977":
      case "0978":
      case "0979":
      case "0995":
      case "0996":
      case "0997":
      case "0925":
        document.getElementById('result').textContent = "Globe";



    }

    /*
   // Check if the input starts with "0967"
    if (first4Digits === "0967") {
      document.getElementById('result').textContent = "Globe";
    }
    else if (first4Digits === "0997") {
        document.getElementById('result').textContent = "TM";
      } else {
      document.getElementById('result').textContent = `First 4 Digits: ${first4Digits}`;
    }
  } else {
    document.getElementById('result').textContent = 'No numeric prefix found.';
  }*/
  }
}