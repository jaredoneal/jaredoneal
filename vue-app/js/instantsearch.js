var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.

        beers: [
        {
                "name": "Ghost Train Switchman's Stash",
                "abv": "6.9%",
                "ibu": "71.7",
                "srm": "7.3",
                "id":"2",
                "snippet": "Indian Pale Lager with a west coast twist.",
                "image": "https://pbs.twimg.com/profile_images/885610988673916931/WlaM6ujR_400x400.jpg",
                "seasonal": "Yes"
            },
                {
                "name": "Ghost Train Terminal Station Brown Ale",
                "abv": "4.5%",
                "ibu": "22.3",
                "srm": "20.2",
                "id":"2",
                "snippet": "Northern English Style Brown Ale with a balanced, nutty flavor.",
                "image": "https://pbs.twimg.com/profile_images/885610988673916931/WlaM6ujR_400x400.jpg",
                "seasonal": "Yes"
            },
        {
                "name": "Ghost Train Dark Ride",
                "abv": "8.7%",
                "ibu": "23.2",
                "srm": "18.5",
                "id":"2",
                "snippet": "A Belgian Style Strong Ale brewed with Alabama wildflower honey.",
                "image": "https://pbs.twimg.com/profile_images/885610988673916931/WlaM6ujR_400x400.jpg",
                "seasonal": "Yes"
            },
        {
                "name": "Ghost Train Go-Devil Golden Ale",
                "abv": "4.9%",
                "ibu": "25.6",
                "srm": "4.1",
                "id":"2",
                "snippet": "West Coast style Golden Ale. Citra abounds.",
                "image": "https://pbs.twimg.com/profile_images/885610988673916931/WlaM6ujR_400x400.jpg",
                "seasonal": "Yes"
            },
        {
                "name": "Ghost Train Craft Lager",
                "abv": "4.6%",
                "ibu": "19",
                "srm": "3.5",
                "id":"2",
                "snippet": "Crisp, refreshing, American Lager.",
                "image": "https://pbs.twimg.com/profile_images/885610988673916931/WlaM6ujR_400x400.jpg",
                "seasonal": "Yes"
            },
        {
                "name": "TrimTab Raspberry Berliner Weisse",
                "abv": "5.2%",
                "ibu": "7",
                "srm": "7",
                "id":"2",
                "snippet": "Tart, wheat ale with raspberry and cherry puree.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "Yes"
            },
            {
                "name": "TrimTab Bankston 88",
                "abv": "4.5%",
                "ibu": "31",
                "srm": "6",
                "id":"2",
                "snippet": "Wheat-based belgian with Centennial and Sorachi Ace hops.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "Yes"
            },
            {
                "name": "TrimTab Imperial City Olde Ale",
                "abv": "7.3%",
                "ibu": "55",
                "srm": "20",
                "id":"2",
                "snippet": "Dark fruit, light chocolate, slightly sweet.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "Yes"
            },
            {
                "name": "TrimTab Rescue Ship Pale Ale",
                "abv": "5.5%",
                "ibu": "18",
                "srm": "4",
                "id":"2",
                "snippet": "Citrusy, dry-hopped Pale ale.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "Yes"
            },
            {
                "name": "TrimTab Pillar to Post Rye Brown",
                "abv": "5.5%",
                "ibu": "41",
                "srm": "24",
                "id":"2",
                "snippet": "Seven different malts, spicy, earthy, chocolatey.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "No"
            },
            {
                "name": "TrimTab IPA",
                "abv": "6.5%",
                "ibu": "61",
                "srm": "10",
                "id":"2",
                "snippet": "A balanced, sessionable IPA, dryhopped, lots of Pacifica.",
                "image": "https://trimtabbrewing.com/wp-content/uploads/2016/07/emblem-bw.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Urban Farmer",
                "abv": "5.6%",
                "ibu": "15",
                "srm": "5",
                "id":"2",
                "snippet": "Farmhouse ale with a saison yeast.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Bearded Lady",
                "abv": "4.2%",
                "ibu": "13.3",
                "srm": "3.5",
                "id":"2",
                "snippet": "Light bodied American Wheat. Subtle citrus flavor.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Coffee Oatmeal Stout",
                "abv": "5.7%",
                "ibu": "51.2",
                "srm": "37.1",
                "id":"2",
                "snippet": "Strong coffee brew with Willamette hops.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Snake Handler",
                "abv": "10%",
                "ibu": "100+",
                "srm": "9.6",
                "id":"2",
                "snippet": "Double IPA, biscuity, caramelly, strong pine.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Brown Ale",
                "abv": "5.4%",
                "ibu": "31",
                "srm": "18.5",
                "id":"2",
                "snippet": "Sweet, nutty, mild hops.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People IPA",
                "abv": "7.1%",
                "ibu": "75.5",
                "srm": "9.4",
                "id":"2",
                "snippet": "Unfiltered, dryhopped, IPA.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "No"
            },
            {
                "name": "Good People Pale Ale",
                "abv": "5.8%",
                "ibu": "37.8",
                "srm": "7.4",
                "id":"1",
                "snippet": "A complex but versatile American Pale Ale.",
                "image": "http://www.goodpeoplebrewing.com/imgs/logo.png",
                "seasonal": "Yes"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredBeers: function () {
            var beers_array = this.beers,
                searchString = this.searchString;

            if(!searchString){
                return beers_array;
            }

            searchString = searchString.trim().toLowerCase();

            beers_array = beers_array.filter(function(item){
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
                if(item.snippet.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
                if(item.abv.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return beers_array;;
        }
    }
});

Vue.component('toggle-list-item', {
  template: '#list-item',
  props: ['item'],
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive: false
    }
  },
})
