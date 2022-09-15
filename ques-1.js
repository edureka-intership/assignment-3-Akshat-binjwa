class restaurantManager {

    //restaurent_List:
    restaurantList = [
        {
            id: 1, restaurant_Name: "restaurant-1", restaurant_Address: "kasana Tower", restaurant_City: "Noida",
        },
        {
            id: 2, restaurant_Name: "restaurant-2", restaurant_Address: "kaushambi", restaurant_City: "Ghaziabad",
        },
        {
            id: 3, restaurant_Name: "restaurant-3", restaurant_Address: "PVR Plaza", restaurant_City: "Meerut",

        },
        {
            id: 4, restaurant_Name: "restaurant-4", restaurant_Address: "DLF Mall", restaurant_City: "Delhi",
        },
        {
            id: 5, restaurant_Name: "restaurant-5", restaurant_Address: "Ashok Nagar", restaurant_City: "Sonipat",
        }]
    //Function
    print_All_Restaurant_Names() {
        return this.restaurantList.forEach(
            function (restro) {
                console.log(restro.restaurant_Name);
            });
    }
    //Function
    filter_Restaurant_By_City = (restaurant_City) => {
        console.log(this.restaurantList.filter(list => list.restaurant_City == restaurant_City));
    }

}

//1.a print_All_Restaurant_Names
let restaurant_list_Onconsole = new restaurantManager();
restaurant_list_Onconsole.print_All_Restaurant_Names();

//1.b print_All_Restaurant_Names
restaurant_list_Onconsole.filter_Restaurant_By_City("Meerut");
