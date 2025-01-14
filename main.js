const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")

populateUI();

// Flow: becomes mutable
let tikcetPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(selectedMovieIndex, selectedMoviePrice) {
    localStorage.setItem('selectedMovieIndex', selectedMovieIndex);
    localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    // Note: using spread syntax
    const selectedSeatsIndex = [...selectedSeats]
        .map((seat) => {
            return [...seats].indexOf(seat)
        })
    
    localStorage.setItem('selectedSeatsIndex', JSON.stringify(selectedSeatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * tikcetPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
    // Seats
    const selectedSeatsIndex = JSON.parse(localStorage.getItem("selectedSeatsIndex"));

    if (selectedSeatsIndex !== null && selectedSeatsIndex.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeatsIndex.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    // Movie and price
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
    tikcetPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
})

// Initial count and total set
updateSelectedCount();