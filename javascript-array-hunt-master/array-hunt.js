$(document).ready(function () {
    let australianAnimals = ["bandicoot", "crocodile", "dingo", "echidna",
        "frilled-dragon", "kangaroo", "koala", "ostrich", "platypus",
        "striped-possum", "tasmanian-devil", "wombat"];
    let chineseFood = ["bao", "chow-mein", "dumplings", "egg-rolls",
        "fortune-cookies", "fried-rice", "gyoza", "lo-mein", "mapo-tofu",
        "ramen", "shumai", "wonton-soup"];
    let dinosaurs = ["ankylosaurus", "brachiosaurus", "dilophosaurus",
        "pachycelphalosaurus", "pterodactyl", "stegosaurus",
        "styracosaurus", "triceratops", "tyrannosaurus-rex",
        "velociraptor"];
    let solarSystem = ["earth", "jupiter", "luna", "mars", "mercury",
        "neptune", "saturn", "sol", "uranus", "venus"];

    $("#imageSet").change(showAllImages);
    $("#huntButton").click(arrayHunt);

    showAllImages();

    function showAllImages() {
        // What image set was selected? This is the directory name
        let directoryName = $("#imageSet").val();
        // Based on the selection, use the correct array
        let arrayOfImagesNames = getSelectedArray();

        // Empty out any children from the div
        let imageDiv = $("#originalArray").empty();

        // Make two rows of images, half in each row
        let half = arrayOfImagesNames.length / 2;
        // How many images are in the current row?
        let count = 0;
        // The current <div class="row">
        let row;

        for (let fileName of arrayOfImagesNames) {
            // Time to make a new row?
            if (count === 0 || count >= half) {
                row = $("<div>").addClass("row");
                imageDiv.append(row);
                count = 0;
            }
            // append a <figure> with the image and its caption
            row.append(createImage(directoryName, fileName));
            count++;
        }

    }

    function createImage(directory, fileName) {
        // Create a div with a Bootstrap class
        let col = $("<div>").addClass("col");
        // Create a figure (can have a caption)
        let figure = $("<figure>").addClass("figure");
        col.append(figure);

        // Create the image itself
        let img = $("<img>");
        img.attr("src", `${directory}/${fileName}.png`);
        img.attr("alt", fileName);

        // Add the image to the figure
        figure.append(img);

        // Create a caption
        let caption = $(`<figcaption>${fileName}</figcaption>`)
            .addClass("figure-caption text-center");
        figure.append(caption);

        return col;
    }

    function getSelectedArray() {
        // Which image set was selected?
        let selection = $("#imageSet").val();

        // Return the array that corresponds to
        // the selected string
        if (selection === "chinese")
            return chineseFood;
        else if (selection === "solar")
            return solarSystem;
        else if (selection === "dinos")
            return dinosaurs;
        else if (selection === "aussie")
            return australianAnimals;
    }

    function arrayHunt() {
        let myArray = getSelectedArray();

        /*
        Find the first and last string in the array.
        Output them to td#firstLast
         */
        let first = myArray[0];
        let count = myArray.length;
        let last = myArray[count - 1];

        $("td#firstLast").text(first + " " + last);


        /*
        Find the first string that contains an 'n'.
        Output it to td#firstEnn
         */

        for (let i = 0; i < myArray.length; i++){
            let nString = myArray[i];
            let nChar = nString.includes("n");
            if (nChar === true){
                $("td#firstEnn").text(nString);
                break;
            }
        }

        /*
        Find all of the strings with less than 6 characters.
        Output them to td#lessThanSix
         */

        let shortArray = [];
        for (let i=0;i<myArray.length;i++){
            let less6 = myArray[i].length;
                if (less6 < 6){
                   shortArray.push(myArray[i])
                }
       }
        $("td#lessThanSix").text(shortArray);


        /*
        Find the longest string in the array.
        Output it to td#longName
         */

        let lgth = 0;
        let longest;

        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i].length > lgth) {
                lgth = myArray[i].length;
                longest = myArray[i];
            }
        }
        $("td#longName").text(longest);



        /*
        Find all of the strings that do not contain the letter 's'.
        Output them to td#noEss
         */

        let noS = [];
        for (let i=0;i<myArray.length;i++){
            let sString = myArray[i];
            let sChar = sString.includes("s");
            if (sChar === false){
                noS.push(myArray[i])
            }
        }
        $("td#noEss").text(noS);



        /*
        Output all of the strings, but with all of their vowels
        in uppercase, to td#upperVowels
         */

        //for(let i=0;i<myArray.length;i++){
            //let upper = myArray[i].replace("e", "E")
        //}


        /*
        Output all of the strings in reverse order and separated by
        ' - ' to td#reverseDash
         */


    }

});