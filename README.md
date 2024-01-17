#Macbook object

This Macbook object has following properties:
- model (String), The MacBook is set to the "Macbook Pro"
- year (Number), The year the Macbook was produced
- screenSizeInInches (Number), The screen size
- storageCapacityInGB (Number), The storage capacity og the Macbook
- hasTouchBar (Boolean), Indicates whether the MacBook has a Touch Bar
- isAvailable (Boolean), Indicates whether the MacBook is available for purchase
- colorsAvailable (Array), Different available colors
-
    
    // Function: The purchase method simulates buying the MacBook, updating its availability.
    purchase: function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("MacBook purchased. Enjoy your new device!");
        } else {
            console.log("Sorry, the MacBook is currently out of stock.");
        }
    }