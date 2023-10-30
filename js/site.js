let basicInfo = {
    Name: "Nightwish",
    Origin: "Kitee, Finland",
    Genre: ["symphonic metal", "power metal", "fold metal", "gothic metal"],
    YearsActive: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,
    2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]   
}

let bandMember ={
    keyboard: "Thomas Holopainen",
    leadVocals: "Floor Jansen",
    guitar: "Emppu Vuorinen",
    drums: "Kai Hahto",
    bass: "Jukka Koskinen",
    multiInstrument: "Troy Donockley" ,
    areMembers: true,
}

let pastMember = {
    areMembers : false,
    drums: "Jukka Nevalainen",
    bass: "Marko Hietala",
    maleVocals: "Marko Hietala",
    leadVocals: ["Tarja Turunen", "Anette Olzon"]
}

let bandHistory = {
    formation: 1996,
    TarjaRange: '1996-2005',
    TarjaEra: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],
    AnetteRange: '2006-2012',
    AnetteEra: [2006,2007,2008,2009,2010,2011,2012],
    currentRange: '2013-current',
    current: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
}

function whichLeadVocal(yearInput){
    if(yearInput>=this.formation && yearInput<=2005){
        return pastMember.leadVocals[0]
    }
    else if (yearInput>2005 && yearInput<=2012){
        return pastMember.leadVocals[1]
    }
    else if (yearInput>= 2014 && yearInput<= 2023) {
        return bandMember.leadVocals;
    } 
    else {
        return "The band was not founded in" + yearInput;
    }
}
const yearInput = 2006; //can be changed
const getYearInput = whichLeadVocal(yearInput);
if (getYearInput) {
    console.log("In " + yearInput + ", the lead vocalist was: " + getYearInput);
} else {
    console.log(getYearInput);
}

let lyricalThemes = {
    beginning: ['mythological','fantasy',],
    later: ['religions','personal stories', 'humans and nature', 'the meaning of life']
}

let Discography = {
    names : ['Angels Fall First','Oceanborn','Wishmaster','Century Child','Once',
    'Dark Passion Play','Imaginaerum','Endless Forms Most Beautiful','Human. :II: Nature.'],
    years : [1997,1998,2000,2002,2004,2007,2011,2015,2020],
    publishCheck: function (publishYear) {
        for (let i = 0; i < this.years.length; i++) {
            if (publishYear === this.years[i]) {
                console.log("This year the album " + this.names[i] + " was published.");
                return;
            }
        }
        console.log("No album found for the year " + publishYear);
    },
    albumDetail :{
        'Angel Fall First' : {
            isReissued: true,
            released: 'November 1st, 1997',
            genres: ['Power metal','Symphonic metal','Folk metal'],
            length: '51:29',
            count: 12
        },
        'Oceanborn':{
            isReissued: true,
            released: 'December 7th, 1998',
            genres: ['Power metal','Symphonic metal'],
            length: '49:02',
            count: 10,
        },
        'Wishmaster' : {
            isReissued: true,
            released: 'May 8th, 2000',
            genres: ['Power metal','Symphonic metal'],
            length: '53:30',
            count: 11,
        },
        'Century Child' :{
            isReissued: true,
            released: 'May 25th, 2002',
            genres: ['Power metal','Symphonic metal'],
            length: '50:09',
            count: 10,
        },
        'Once' :{
            isReissued: false,
            released: 'June 7th, 2004',
            genres: 'Symphonic metal',
            length: '60:06',
            count: 11,
        },
        'Dark Passion Play' :{
            isReissued: false,
            released: 'September 26th, 2007',
            genres: 'Symphonic metal',
            length: '75:36',
            count: 13,
        },
        'Imaginaerum' :{
            isReissued: false,
            released: 'November 30th, 2011',
            genres: 'Symphonic metal',
            length: '74:26',
            count: 13,
        },
        'Endless Forms Most Beautiful' :{
            isReissued: false,
            released: 'March 25th, 2015',
            genres: 'Symphonic metal',
            length: '78:36',
            count: 11,
        },
        'Human. :II: Nature.' :{
            isReissued: false,
            released: 'April 10th, 2021',
            genres: ['Symphonic metal','Orchestral'],
            length: '81:31',
            count: 17,
        }
    }
}
Discography.publishCheck(1998); //can be changed


//displaying contents?

//background(maybe not)
// const bgImage= document.getElementById('bg-image')
// bgImage.setAttribute("src","https://i.postimg.cc/jdJsk1hG/61b10d00285c4342f03bd8f2-footerbg4.png")

//symbol
const symbol=document.getElementById('symbol')
symbol.setAttribute("src","https://i.postimg.cc/YST1Tjpc/symbol.png")

//logo
const logo = document.querySelector('.logo')
logo.setAttribute("src","https://i.postimg.cc/J0jBmhLk/Nightwish-Logo.png")
//logo hover to show img
logo.addEventListener('mouseover', () => {
    symbol.style.opacity =0.8
})
logo.addEventListener('mouseout', () => {
    symbol.style.opacity =0.3
})

//basic information
document.querySelector('.info-logo').setAttribute("src","https://i.postimg.cc/kMytNd3X/Basic-Info.png")
document.querySelector('.band-name').innerHTML="Name: "+basicInfo.Name
document.querySelector('.band-origin').innerHTML="Origin: "+basicInfo.Origin
const genreElement = document.querySelector('.band-genre')
const genreList = basicInfo.Genre.join(", ")
genreElement.textContent = `Genres: ${genreList}`

//current members
document.querySelector('.members-logo').setAttribute("src","https://i.postimg.cc/nhcjyTKb/fontbolt.png")
document.querySelector('.member1').innerHTML="Lead vocal: "+bandMember.leadVocals
document.querySelector('.member2').innerHTML="Keyboard: "+bandMember.keyboard
document.querySelector('.member3').innerHTML="Guitar: "+bandMember.guitar
document.querySelector('.member4').innerHTML="Drums: "+bandMember.drums
document.querySelector('.member5').innerHTML="Bass: "+bandMember.bass
document.querySelector('.member6').innerHTML="Multiple Instrumentalist: "+bandMember.multiInstrument

//band history using creating p tag method
// function displayHistory() {
//     const historyContainer = document.querySelector('.history-container')

//     const formationYear = document.createElement('p')
//     formationYear.textContent = 'Formation Year: ' + bandHistory.formation;
//     historyContainer.appendChild(formationYear)

//     const tarjaEra = document.createElement('p')
//     tarjaEra.textContent = 'Tarja Era: ' + bandHistory.TarjaRange
//     historyContainer.appendChild(tarjaEra)

//     const anetteEra = document.createElement('p')
//     anetteEra.textContent = 'Anette Era: ' + bandHistory.AnetteRange
//     historyContainer.appendChild(anetteEra)

//     const currentEra = document.createElement('p')
//     currentEra.textContent = 'Floor Era (current): ' + bandHistory.currentRange
//     historyContainer.appendChild(currentEra)
// }
// displayHistory()

document.querySelector('.history-logo').setAttribute("src","https://i.postimg.cc/vTcNBCVR/fontbolt-1.png")

//button for checking the history
const input =document.getElementById('year-input')
const checkButton =document.querySelector('.btnCheck')
checkButton.addEventListener('click',()=>{
    const userInput= parseInt(input.value)

    //if statements based on year
    if (userInput>= bandHistory.formation && userInput<=bandHistory.TarjaEra[bandHistory.TarjaEra.length-1]){
        //input between 1996-2005
        document.getElementById('tarja-era').style.opacity="100%"
        document.getElementById('tarja-era').style.color="goldenrod"
        document.getElementById('anette-era').style.opacity='0%'
        document.getElementById('current-era').style.opacity='0%'
    }else if (userInput>bandHistory.TarjaEra[bandHistory.TarjaEra.length - 1]&& userInput<=bandHistory.AnetteEra[bandHistory.AnetteEra.length - 1]) {
        //input between 2006-2012
        document.getElementById('tarja-era').style.opacity='0%'
        document.getElementById('anette-era').style.opacity='100'
        document.getElementById('current-era').style.opacity='0%'
        document.getElementById('anette-era').style.color="goldenrod"
    }else if (userInput > bandHistory.AnetteEra[bandHistory.AnetteEra.length - 1] &&userInput<=bandHistory.current[bandHistory.current.length - 1]) {
        //input between 2013-2023
        document.getElementById('tarja-era').style.opacity= '0%'
        document.getElementById('anette-era').style.opacity='0%'
        document.getElementById('current-era').style.opacity='100%'
        document.getElementById('current-era').style.color="goldenrod"
    }else {
        window.alert('No records found for the year you input;;')
    }
    input.value = ""
}
)

//discorgraphy...try to use for loop(how to use for each again??
document.querySelector('.discography-logo').setAttribute("src","https://i.postimg.cc/1zr16x7b/fontbolt-2.png")
function displayDiscography() {
    const discographyContainer = document.querySelector('.discography-container')
    for (let i=0;i<Discography.names.length; i++){
        const albumName = Discography.names[i]
        const albumYear = Discography.years[i]

        const albumLink = document.createElement('a');
        albumLink.textContent = albumName + ' (' + albumYear + ')';
        // Set the href attribute to point to the album's page within the "pages" folder
        albumLink.href = 'pages/album-' + i + '.html';
        // Create a line break for better formatting
        const lineBreak = document.createElement('br');
        // Append the link and line break to the discographyContainer
        discographyContainer.appendChild(albumLink);
        discographyContainer.appendChild(lineBreak);
        // const albumElement = document.createElement('p')
        // albumElement.textContent= albumName+'('+albumYear+')'
        // discographyContainer.appendChild(albumElement)
    }
}
//how to create a class for each of the albumElement
displayDiscography();