document.getElementById("getSumBtn").addEventListener("click", function() {
    let prices = document.querySelectorAll(".price");
    let total = 0;
    
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    let totalRow = document.createElement("tr");
    let totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.classList.add("fw-bold", "text-center");
    totalCell.setAttribute("id", "ans");  // Added this line
    totalCell.textContent = `Total Price: Rs ${total}`;
    
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
});
