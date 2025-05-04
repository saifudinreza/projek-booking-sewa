// Mobile Menu Toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Vehicle Type Toggle
const btnMotor = document.getElementById("btn-motor");
const btnMobil = document.getElementById("btn-mobil");
const motorSection = document.getElementById("motor-section");
const mobilSection = document.getElementById("mobil-section");

btnMotor.addEventListener("click", function () {
  btnMotor.classList.add("bg-blue-600", "text-white");
  btnMotor.classList.remove("bg-gray-200", "text-gray-700");
  btnMobil.classList.add("bg-gray-200", "text-gray-700");
  btnMobil.classList.remove("bg-blue-600", "text-white");
  motorSection.classList.remove("hidden");
  mobilSection.classList.add("hidden");
});

btnMobil.addEventListener("click", function () {
  btnMobil.classList.add("bg-blue-600", "text-white");
  btnMobil.classList.remove("bg-gray-200", "text-gray-700");
  btnMotor.classList.add("bg-gray-200", "text-gray-700");
  btnMotor.classList.remove("bg-blue-600", "text-white");
  mobilSection.classList.remove("hidden");
  motorSection.classList.add("hidden");
});

// Booking Steps Navigation
const stepContents = document.querySelectorAll(".step-content");
const steps = document.querySelectorAll(".progress-step");
const nextButtons = {
  step1: document.getElementById("next-to-step2"),
  step2: document.getElementById("next-to-step3"),
  step3: document.getElementById("next-to-step4"),
};
const backButtons = {
  step2: document.getElementById("back-to-step1"),
  step3: document.getElementById("back-to-step2"),
  step4: document.getElementById("back-to-step3"),
};

// Store booking data
const bookingData = {
  vehicle: null,
  vehicleType: null,
  startDate: null,
  endDate: null,
  pickupLocation: null,
  returnLocation: null,
  addons: [],
  personalInfo: {},
  paymentMethod: null,
  totalPrice: 0,
};

// Vehicle Selection
const selectButtons = document.querySelectorAll(".select-vehicle");
selectButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Store selected vehicle data
    bookingData.vehicle = this.getAttribute("data-vehicle");
    bookingData.vehiclePrice = parseInt(this.getAttribute("data-price"));
    bookingData.vehicleType = this.closest("#motor-section")
      ? "motor"
      : "mobil";

    // Enable next button
    nextButtons.step1.disabled = false;

    // Update selected vehicle UI
    selectButtons.forEach((btn) => {
      btn.classList.remove("bg-blue-700");
      btn.classList.add("bg-blue-600");
    });
    this.classList.remove("bg-blue-600");
    this.classList.add("bg-blue-700");

    // Update summary in step 2
    updateVehicleSummary();
  });
});

function updateVehicleSummary() {
  document.getElementById("selected-vehicle-name").textContent =
    bookingData.vehicle;
  document.getElementById(
    "selected-vehicle-price"
  ).textContent = `Rp ${bookingData.vehiclePrice.toLocaleString("id-ID")}/hari`;

  // Set vehicle image based on selection
  let imageUrl = "";
  if (bookingData.vehicle === "Honda Scoopy") {
    imageUrl = "honda scoopy.jpg";
  } else if (bookingData.vehicle === "Yamaha NMAX") {
    imageUrl = "nmax.jpg";
  } else if (bookingData.vehicle === "Vespa Sprint") {
    imageUrl = "sprint.jpg";
  } else if (bookingData.vehicle === "Toyota Avanza") {
    imageUrl = "avanza.jpg";
  } else if (bookingData.vehicle === "Honda Jazz") {
    imageUrl = "jazz.jpg";
  } else if (bookingData.vehicle === "Toyota Fortuner") {
    imageUrl = "fortuner.jpg";
  }

  document.getElementById("selected-vehicle-image").src = imageUrl;
  document.getElementById("selected-vehicle-image").alt = bookingData.vehicle;

  // Set vehicle details based on selection
  let type = "",
    capacity = "",
    transmission = "";
  if (
    bookingData.vehicle === "Honda Scoopy" ||
    bookingData.vehicle === "Yamaha NMAX" ||
    bookingData.vehicle === "Vespa Sprint"
  ) {
    type = "Motor";
    capacity = "2 Orang";
    transmission = "Automatic";
  } else {
    type = "Mobil";
    if (
      bookingData.vehicle === "Toyota Avanza" ||
      bookingData.vehicle === "Toyota Fortuner"
    ) {
      capacity = "7 Orang";
    } else {
      capacity = "5 Orang";
    }
    if (bookingData.vehicle === "Toyota Avanza") {
      transmission = "Manual";
    } else {
      transmission = "Automatic";
    }
  }

  document.getElementById("selected-vehicle-type").textContent = type;
  document.getElementById("selected-vehicle-capacity").textContent = capacity;
  document.getElementById("selected-vehicle-transmission").textContent =
    transmission;
}

// Step Navigation
function goToStep(stepNumber) {
  // Hide all step contents
  stepContents.forEach((content) => {
    content.classList.add("hidden");
  });

  // Show current step content
  document
    .getElementById(`step${stepNumber}-content`)
    .classList.remove("hidden");

  // Update progress steps
  steps.forEach((step, index) => {
    step.classList.remove("active", "completed");
    if (index + 1 < stepNumber) {
      step.classList.add("completed");
    } else if (index + 1 === stepNumber) {
      step.classList.add("active");
    }
  });
}

// Next button handlers
nextButtons.step1.addEventListener("click", function () {
  // Validate step 1
  if (!bookingData.vehicle) {
    alert("Silakan pilih kendaraan terlebih dahulu");
    return;
  }

  goToStep(2);
});

nextButtons.step2.addEventListener("click", function () {
  // Validate step 2
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (!startDate || !endDate) {
    alert("Silakan isi tanggal mulai dan selesai sewa");
    return;
  }

  if (new Date(startDate) > new Date(endDate)) {
    alert("Tanggal selesai harus setelah tanggal mulai");
    return;
  }

  // Store rental details
  bookingData.startDate = startDate;
  bookingData.endDate = endDate;
  bookingData.pickupLocation = document.getElementById("pickup-location").value;
  bookingData.returnLocation = document.getElementById("return-location").value;

  // Store addons
  bookingData.addons = [];
  if (document.getElementById("insurance").checked) {
    bookingData.addons.push({ name: "Asuransi", price: 50000 });
  }
  if (
    document.getElementById("helmet").checked &&
    bookingData.vehicleType === "motor"
  ) {
    bookingData.addons.push({ name: "Helm", price: 20000 });
  }
  if (
    document.getElementById("child-seat").checked &&
    bookingData.vehicleType === "mobil"
  ) {
    bookingData.addons.push({ name: "Car Seat Anak", price: 75000 });
  }

  // Calculate total price
  const start = new Date(bookingData.startDate);
  const end = new Date(bookingData.endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  let totalAddons = 0;
  bookingData.addons.forEach((addon) => {
    if (addon.name === "Asuransi") {
      totalAddons += addon.price * diffDays;
    } else {
      totalAddons += addon.price;
    }
  });

  bookingData.totalPrice = bookingData.vehiclePrice * diffDays + totalAddons;

  // Update summary in step 3
  updateOrderSummary(diffDays);

  goToStep(3);
});

nextButtons.step3.addEventListener("click", function () {
  // Validate step 3
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const idNumber = document.getElementById("id-number").value;

  if (!fullName || !email || !phone || !idNumber) {
    alert("Silakan lengkapi data diri Anda");
    return;
  }

  if (
    !document.getElementById("id-photo").files[0] ||
    !document.getElementById("selfie-photo").files[0]
  ) {
    alert("Silakan unggah foto KTP/SIM dan selfie dengan KTP/SIM");
    return;
  }

  // Store personal info
  bookingData.personalInfo = {
    fullName,
    email,
    phone,
    idNumber,
  };

  // Update payment total
  document.getElementById(
    "payment-total"
  ).textContent = `Rp ${bookingData.totalPrice.toLocaleString("id-ID")}`;
  document.getElementById(
    "payment-total-cc"
  ).textContent = `Rp ${bookingData.totalPrice.toLocaleString("id-ID")}`;
  document.getElementById(
    "payment-total-ew"
  ).textContent = `Rp ${bookingData.totalPrice.toLocaleString("id-ID")}`;

  goToStep(4);
});

// Back button handlers
backButtons.step2.addEventListener("click", function () {
  goToStep(1);
});

backButtons.step3.addEventListener("click", function () {
  goToStep(2);
});

backButtons.step4.addEventListener("click", function () {
  goToStep(3);
});

function updateOrderSummary(days) {
  document.getElementById("summary-vehicle-name").textContent =
    bookingData.vehicle;
  document.getElementById("summary-vehicle-price").textContent = `Rp ${(
    bookingData.vehiclePrice * days
  ).toLocaleString("id-ID")}`;

  const startDate = new Date(bookingData.startDate).toLocaleDateString(
    "id-ID",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
  const endDate = new Date(bookingData.endDate).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById(
    "summary-rental-period"
  ).textContent = `${startDate} - ${endDate}`;
  document.getElementById("summary-rental-days").textContent = `${days} hari`;

  const addonsContainer = document.getElementById("summary-addons");
  addonsContainer.innerHTML = "";

  bookingData.addons.forEach((addon) => {
    const addonDiv = document.createElement("div");
    addonDiv.className = "flex justify-between";

    const addonName = document.createElement("span");
    addonName.textContent = addon.name;

    let addonPrice = addon.price;
    if (addon.name === "Asuransi") {
      addonPrice = addon.price * days;
    }

    const addonPriceSpan = document.createElement("span");
    addonPriceSpan.textContent = `Rp ${addonPrice.toLocaleString("id-ID")}`;

    addonDiv.appendChild(addonName);
    addonDiv.appendChild(addonPriceSpan);
    addonsContainer.appendChild(addonDiv);
  });

  document.getElementById(
    "summary-total-price"
  ).textContent = `Rp ${bookingData.totalPrice.toLocaleString("id-ID")}`;
}

// File Upload
document.getElementById("upload-id-btn").addEventListener("click", function () {
  document.getElementById("id-photo").click();
});

document
  .getElementById("upload-selfie-btn")
  .addEventListener("click", function () {
    document.getElementById("selfie-photo").click();
  });

document.getElementById("id-photo").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const preview = document.getElementById("id-photo-preview");
      preview.querySelector("img").src = event.target.result;
      preview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
});

document
  .getElementById("selfie-photo")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const preview = document.getElementById("selfie-photo-preview");
        preview.querySelector("img").src = event.target.result;
        preview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  });

// Payment Method Selection
const paymentMethods = document.querySelectorAll(
  'input[name="payment-method"]'
);
const paymentDetails = document.querySelectorAll(".payment-details");

paymentMethods.forEach((method) => {
  method.addEventListener("change", function () {
    paymentDetails.forEach((detail) => {
      detail.classList.add("hidden");
    });

    if (this.id === "bank-transfer") {
      document
        .getElementById("bank-transfer-details")
        .classList.remove("hidden");
      bookingData.paymentMethod = "Transfer Bank";
    } else if (this.id === "credit-card") {
      document.getElementById("credit-card-details").classList.remove("hidden");
      bookingData.paymentMethod = "Kartu Kredit";
    } else if (this.id === "e-wallet") {
      document.getElementById("e-wallet-details").classList.remove("hidden");
      bookingData.paymentMethod = "E-Wallet";
    }
  });
});

// E-Wallet Selection
const eWalletOptions = document.querySelectorAll(".e-wallet-option");
eWalletOptions.forEach((option) => {
  option.addEventListener("click", function () {
    eWalletOptions.forEach((opt) => {
      opt.classList.remove("border-blue-500");
    });
    this.classList.add("border-blue-500");
    bookingData.eWalletProvider = this.querySelector("p").textContent;
  });
});
// Additional code can be added here if needed
