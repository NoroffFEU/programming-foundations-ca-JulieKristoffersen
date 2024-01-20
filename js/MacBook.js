let macBook = {
    model: "MacBook Pro",
    year: 2023,
    screenSizeInInches: 14,
    storageCapacityInGB: 512,
    hasTouchBar: true,
    isAvailable: true,
    colorsAvailable: ["Silver", "Space Gray"], 
    purchase: function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("MacBook purchased. Enjoy your new device!");
        } else {
            console.log("Sorry, the MacBook is currently out of stock.");
        }
    }
};
