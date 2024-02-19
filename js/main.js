function scrollToSection() {
  // Select the target section by its ID
  var targetSection = document.getElementById('Paribahan');

  // Scroll to the target section using the scrollTo method
  targetSection.scrollIntoView({ behavior: 'smooth' });
}


// Select Seat Color change

let selectedSeats = [];
function selectSeat(seatID) {
  const seat = document.getElementById(seatID);

  // Check if the seat is already selected
  if (selectedSeats.includes(seatID)) {
    return; // Seat already selected, do nothing
  }

  // Ensure only a maximum of 4 seats can be selected
  if (selectedSeats.length >= 4) {
    alert('Maximum 4 seats can be selected.');
    return;
  }

  // Add seat to the selectedSeats array
  selectedSeats.push(seatID);

  // Add or remove the classes for background color and text color
  seat.style.backgroundColor = '#1DD100';
  seat.classList.add('text-white');

  // Append details of the selected seat to the list
  const seatDetails = document.createElement('li');
  seatDetails.classList.add('flex', 'justify-between', 'my-2');
  seatDetails.innerHTML = `
      <p class="font-inter">${seatID}</p>
      <p class="font-inter">Economy</p>
      <p class="font-inter">550</p>
    `;
  document.getElementById('selectedSeats').appendChild(seatDetails);

  // Update the selected seat count in the span element
  const selectedSeatCount = document.getElementById('selectedSeats').childElementCount;
  document.getElementById('badge').textContent = selectedSeatCount;

  // Decrease the total seat number by 1
  const totalSeatsElement = document.getElementById('totalSeats');
  let totalSeats = parseInt(totalSeatsElement.textContent);
  totalSeats--;
  totalSeatsElement.textContent = totalSeats;

  calculateTotalPrice();
  checkNextButton();
}



// Calculate Total Price
let totalPrice = 0;
let grandTotal = 0;
function calculateTotalPrice() {
  // Retrieve the count of selected seats
  const TotalSeatCount = document.getElementById('badge').textContent;

  // Calculate the total price
  totalPrice = TotalSeatCount * 550; // Assuming ticket price is 550

  // Update the TotalPrice paragraph element's text content
  const totalPriceElement = document.getElementById('TotalPrice');
  totalPriceElement.innerText = totalPrice; // Update with the calculated total price

  grandTotal = totalPrice;
  const grandTotalElement = document.getElementById('GrandTotal');
  grandTotalElement.innerText = grandTotal;
  checkCouponEnablement();
}

// Function to check if coupon box should be enabled
function checkCouponEnablement() {
  const selectedSeatCount = parseInt(document.getElementById('badge').textContent);
  const couponInput = document.getElementById('couponInput');
  const applyCouponButton = document.getElementById('applyCouponButton');

  if (selectedSeatCount >= 4) {
    couponInput.removeAttribute('disabled');
    applyCouponButton.removeAttribute('disabled');
    couponInput.classList.remove('disabled:bg-[#F7F8F8]');
    applyCouponButton.classList.remove('disabled:bg-[#F7F8F8]');
  } else {
    couponInput.setAttribute('disabled', true);
    applyCouponButton.setAttribute('disabled', true);
    couponInput.classList.add('disabled:bg-[#F7F8F8]');
    applyCouponButton.classList.add('disabled:bg-[#F7F8F8]');
  }
}




function applyCoupon() {
  const couponInput = document.getElementById('couponInput').value.trim();

  // Check if minimum 4 seats are selected
  const selectedSeatCount = parseInt(document.getElementById('badge').textContent);
  if (selectedSeatCount < 4) {
    alert('Minimum 4 seats must be selected to apply coupon.');
    return;
  }

  const couponDiscounts = {
    'NEW15': 0.85,
    'Couple 20': 0.80
  };

  // Apply discount based on the coupon code
  if (couponInput in couponDiscounts) {
    grandTotal = totalPrice * couponDiscounts[couponInput];
  } else {
    alert('Invalid coupon code.');
    return;
  }

  const grandTotalElement = document.getElementById('GrandTotal');
  grandTotalElement.innerText = grandTotal;

  document.getElementById('couponBox').style.display = 'none';
  // Update coupon success message HTML
  const SuccessMessage=document.getElementById('couponSuccessMessage');
  SuccessMessage.innerHTML=
    `<li id="couponDiscountApplied" class="flex justify-between">
      <p class="font-inter">Coupon Discount (Applied)</p>
      <p class="font-inter">BDT<span id="couponDiscountAmount" class="ml-1 font-inter">-${totalPrice - grandTotal}</span></p>
    </li>`;
  // Display the coupon success message
  SuccessMessage.style.display = 'block';



}

// Event for the "Apply" button
document.getElementById('applyCouponButton').addEventListener('click', applyCoupon);
calculateTotalPrice();


function checkNextButton() {
  // Get phone number input and Next button
  const phoneNumberInput = document.getElementById('phoneNumberInput');
  const nextButton = document.getElementById('nextButton');

  //phone number trim
  const phoneNumber = phoneNumberInput.value.trim();

  //Phone Number validation
  const validPhoneNumber = /^\d{11}$/.test(phoneNumber);

  //check min 1 selected
  const seatCount = parseInt(document.getElementById('badge').textContent);
  const selectedSeat = seatCount >= 1;

  // Enable or disable the Next button based on conditions
  if (validPhoneNumber && selectedSeat) {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.setAttribute('disabled', true);
  }

}
//phone number----- input field
document.getElementById('phoneNumberInput').addEventListener('input', checkNextButton);
checkNextButton();

// ===========================================
//appear the modal
function toggleModal() {
  const modalCheckbox = document.getElementById('my_modal_7');
  modalCheckbox.checked = !modalCheckbox.checked;
}


// ===========================================
// Get Next button by ID
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', toggleModal);

//modal Continue button by id
const continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', function () {
  //Close Modal
  const modalCheckbox = document.getElementById('my_modal_7');
  modalCheckbox.checked = false;
  window.location.reload();
});


