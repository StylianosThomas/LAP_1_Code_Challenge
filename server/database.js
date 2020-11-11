//write a function to retrieve data and then export it to the server side.
// Official Albums Chart Top10List @ 06 November 2020 - 12 November 2020source !!!!Do NOT use this link  https://www.officialcharts.com/charts/singles-chart/

// Page URL is for youtube video
const music = [
    {"ID":"1", "Album":"POSITIONS", "Label":"REPUBLIC RECORDS ", "Artist": "ARIANA GRANDE", "title":"Positions", "Url": "https://youtu.be/tcYodQoapMg"},
    {"ID":"2", "Album":"LOVE GOES", "Label":"CAPITOL", "Artist": "SAM SMITH", "title":"Love Goes", "Url": "https://youtu.be/-vxoRzZzNHo"},
    {"ID":"3", "Album":"MUSIC THE AIR THAT I BREATHE", "Label":"EAST WEST/RHINO",  "Artist": "CLIFF RICHARD", "title":"The Air That I Breathe (with Albert Hammond)", "Url": "https://youtu.be/rM3lvy0Vut8"},
    {"ID":"4", "Album":"LETTER TO YOU", "Label":"COLUMBIA",  "Artist": "BRUCE SPRINGSTEEN", "title":"Letter To You", "Url": "https://youtu.be/AQyLEz0qy-g"},
    {"ID":"5", "Album":"POST HUMAN - SURVIVAL HORROR", "Label":"RCA", "Artist": "BRING ME THE HORIZON", "title":"Teardrops", "Url": "https://youtu.be/L5uV3gmOH9g"},
    {"ID":"6", "Album":"DNA", "Label":"HUNCHOZONE", "Artist": "M HUNCHO & NAFE SMALLZ","title":"Da New Age", "Url": "https://youtu.be/cHj-AdeVgDU"},
    {"ID":"7", "Album":"SHOOT FOR THE STARS AIM FOR THE MOON", "Label":"REPUBLIC RECORDS", "Artist": "POP SMOKE", "title":"Aim For The Moon", "Url": "https://youtu.be/IkHgpc2Fjxk"},
    {"ID":"8", "Album":"LONG HOT SUMMERS - THE STORY OF", "Label":"POLYDOR/UMC", "Artist": "STYLE COUNCIL", "title":"Long Hot Summers: The Story Of The Style Council(soundtrack)", "Url": "https://www.youtube.com/watch?v=132l6rtsxpU&list=OLAK5uy_nbMD4zBB49BsMwOzsFZkmzHx6KcbRbQdc"},
    {"ID":"9", "Album":"DIVINELY UNINSPIRED TO A HELLISH EXTENT", "Label":"EMI", "Artist": "LEWIS CAPALDI", "title":"Don't Get Me Wrong", "Url": "https://youtu.be/sN4Zwu_i98A"},
    {"ID":"10","Album":"THE HUMAN DEMANDS", "Label":"INFECTIOUS MUSIC", "Artist": "AMY MACDONALD", "title":"The Human Demands", "Url": "https://youtu.be/Kr9aR1M8DFo"}
];

// for movies the url will bring to the official page where found
const movies = [
    {"ID":"1", "Label":"WALT DISNEY", "title": "HOCUS POCUS", "Url": "https://disney.co.uk/"},
    {"ID":"2", "Label":"TOUCHSTONE", "title": "THE NIGHTMARE BEFORE CHRISTMAS", "Url": "https://the-nightmare-before-christmas.fandom.com/wiki/Touchstone_Pictures"},
    {"ID":"3", "Label":"WARNER HOME VIDEO", "title": "SCOOB", "Url": "https://www.warnerbros.com/movies/scoob"},
    {"ID":"4", "Label":"WALT DISNEY", "title": "ONWARD", "Url": "https://disney.co.uk/"},
    {"ID":"5", "Label":"WALT DISNEY", "title": "FROZEN 2", "Url": "https://disney.co.uk/"},
    {"ID":"6", "Label":"SONY PICTURES HE", "title": "GHOSTBUSTERS (1984)", "Url": "https://www.ghostbusters.com/"},
    {"ID":"7", "Label":"UNIVERSAL PICTURES", "title": "CASPER", "Url": "https://casper.fandom.com/wiki/Casper_(film)"},
    {"ID":"8", "Label":"WARNER HOME VIDEO", "title": "THE WITCHES", "Url": "https://www.warnerbros.com/movies/witches"},
    {"ID":"9", "Label":"UNIVERSAL PICTURES", "title": "THE INVISIBLE MAN", "Url": "https://www.universalpictures.com/movies/the-invisible-man"},
    {"ID":"10","Label":"WARNER HOME VIDEO", "title": "IT - CHAPTER TWO", "Url": "https://www.warnerbros.com/movies/it-chapter-two"}
];


//functions to export the database
function getMovies(movies){
    return movies;
}

function getAlbum(music){
    return music;
}
