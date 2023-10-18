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
    TarjaEra: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005],
    AnetteEra: [2006,2007,2008,2009,2010,2011,2012],
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
        }
    }
}
Discography.publishCheck(1998); //can be changed