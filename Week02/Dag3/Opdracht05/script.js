
const superHeroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]



//1
const superHeroNames = (array) => {
    return array.map((superhelden) => {
        return superhelden.name;
    })
}

console.log(superHeroNames(superHeroes));


//2
const superHeroWeight = (array) => {
    return array.filter((superhelden) => {
        return superhelden.weight < 190;
    })
}

console.log(superHeroWeight(superHeroes));


//3
const superHeroNamesWeight = (array) => {
    return array.filter((superhelden) => {
        return superhelden.weight == 200;
    }).map((superhelden) => {
        return superhelden.name;
    });

}

console.log(superHeroNamesWeight(superHeroes));



//4 

const superHeroFirstAppearance = (array) => {
    return array.map((appearance) => {
        return appearance.first_appearance
    })
}

console.log(superHeroFirstAppearance(superHeroes));



//5
const superHeroComicD = (array) => {
    return array.filter((comic) => {
        return comic.publisher == 'DC Comics'
    })
}

console.log(superHeroComicD(superHeroes));

const superHeroComicM = (array) => {
    return array.filter((comic) => {
        return comic.publisher == 'Marvel Comics'
    })
}

console.log(superHeroComicM(superHeroes));


//6
const superHeroComicDcWeightTotal = (array) => {
    return array.filter((comic) => {
        return comic.publisher == 'DC Comics'
    }).map((superheld) => {
        return parseInt(superheld.weight)

    }).reduce((acc, val) => {
        return acc + val
    });
};

console.log(superHeroComicDcWeightTotal(superHeroes));

//7
const superHeroComicMarvelWeightTotal = (array) => {

    return array.filter((comic) => {
        return comic.publisher == 'Marvel Comics'
    }).map((superheld) => {
        return parseFloat(superheld.weight)

    }).reduce((acc, val) => {
        return parseFloat(acc + val)

    });


};

console.log(superHeroComicMarvelWeightTotal(superHeroes));


