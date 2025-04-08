document.getElementById("receiptForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value;
  const phone = document.getElementById("studentPhone").value;
  const seat = document.getElementById("seatNumber").value;
  const hours = document.getElementById("hoursOpted").value;
  const paid = document.getElementById("feesPaid").value;
  const dues = document.getElementById("remainingDues").value;
  const month = document.getElementById("monthPaid").value;

  document.getElementById("rName").innerText = name;
  document.getElementById("rPhone").innerText = phone;
  document.getElementById("rSeat").innerText = seat;
  document.getElementById("rHours").innerText = hours;
  document.getElementById("rPaid").innerText = paid;
  document.getElementById("rDues").innerText = dues;
  document.getElementById("rMonth").innerText = month;

  document.getElementById("receipt").classList.remove("hidden");

  // Create WhatsApp message
  const message = `Dear ${name}, your fee of ₹${paid} for ${month} has been received. Remaining dues: ₹${dues}. Thank you! -SANKALP LIBRARY`;
  const whatsappURL = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = whatsappURL;
  whatsappLink.classList.remove("hidden");
});
