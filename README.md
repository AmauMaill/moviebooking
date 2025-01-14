# Movie Booking Application

This project is a simple movie seat booking application built with plain JavaScript. It allows users to select a movie, choose seats, and calculate the total cost based on the number of selected seats. The selected movie and seat data are stored in `localStorage`, allowing the state to persist even if the page is reloaded.


You can see a [live demo here](https://amaumaill.github.io/moviebooking/).


## Features

- **Seat Selection**: Users can click on available seats to select them for booking.
- **Dynamic Pricing**: The movie selection dropdown allows users to choose a movie, which determines the ticket price.
- **LocalStorage Persistence**: Selected seats, movie, and price are saved in `localStorage` and repopulated when the page is reloaded.
- **Total Calculation**: The app automatically calculates and displays the total cost based on the selected seats.

## How It Works

### Core Functions

1. **Seat Selection**: Users can click on seats to toggle their selection status. Seats that are already occupied cannot be selected.
2. **Movie Selection**: The user can select a movie from the dropdown, and the ticket price for that movie is applied to the selected seats.
3. **LocalStorage**: The app uses `localStorage` to store the selected seats and movie data, allowing the UI to be populated with the correct information upon page reload.

### Code Highlights

- **Dynamic Seat Management**: Seats are dynamically marked as selected or occupied, and the total cost and seat count are updated accordingly.
- **Persistence with LocalStorage**: Movie and seat data is saved in `localStorage` to maintain state across page reloads.
- **Event Listeners**: Event listeners are set up for seat selection and movie change, ensuring that the UI updates when these actions occur.

### Example Code Snippet

```javascript
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
});
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/AmauMaill/moviebooking.git
   ```
2. Open the project directory and launch `index.html` in your browser.
3. Select a movie, choose your seats, and check the total.

## Credits

- Tutorial by [Brad Traversy](https://www.traversymedia.com).

## License

This project is licensed under the MIT License and is intended for educational purposes.