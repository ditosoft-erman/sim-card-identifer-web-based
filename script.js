function getNumber(){
    const userInput = document.getElementById('search-input').value;
      
      // Use a regular expression to match the last 4 digits
      const first4DigitsMatch = userInput.match(/^\d{4}/);

      if (first4DigitsMatch) {
        const first4Digits = first4DigitsMatch[0];

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
      }
}