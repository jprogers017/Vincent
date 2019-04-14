const mcu = [
    [
        "1) Captain America: The First Avenger (2011)",
        "2) Captain Marvel (2019)",
        "3) Iron Man (2008)",
        "4) Iron Man 2 (2010)",
        "5) The Incredible Hulk (2008)",
        "6) Thor (2011)",
        "7) The Avengers (2012)",
        "8) Iron Man 3 (2013)",
        "9) Thor: The Dark World (2013)",
        "10) Captain America: The Winter Soldier (2014)",
        "11) Guardians of the Galaxy (2014)",
        "12) Guardians of the Galaxy Vol. 2 (2017)",
        "13) Avengers: Age of Ultron (2015)",
        "14) Ant-Man (2015)",
        "15) Captain America: Civil War (2016)",
        "16) Spider-Man: Homecoming (2017)",
        "17) Doctor Strange (2016)",
        "18) Black Panther (2018)",
        "19) Thor: Ragnarok (2017)",
        "20) Ant-Man and the Wasp (2018)",
        "21) Avengers: Infinity War (2018)",
        "22) Avengers: Endgame (2019)",
    ],
    {
        name: "Captain America: The First Avenger (2011)",
        link: "https://www.putlockers.me/movie/captain-america-the-first-avenger-1400.html",
        cover: "http://www.gstatic.com/tv/thumb/v22vodart/8205710/p8205710_v_v8_af.jpg",
        year: "1943",
        desc: `Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.`,
        trailerLink: "https://youtu.be/JerVrbLldXw",
        trailer: "https://images4.alphacoders.com/148/thumb-1920-148496.jpg"
    },
    {
        name: "Captain Marvel (2019)",
        link: "https://www.putlockers.me/movie/captain-marvel-25201.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "1995",
        desc: `Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.`,
        trailerLink: "https://youtu.be/Z1BCujX3pw8",
        trailer: "http://hdqwalls.com/wallpapers/captain-marvel-movie-2019-4k-cl.jpg"
    },
    {
        name: "Iron Man (2008)",
        link: "https://www.putlockers.me/movie/iron-man-62.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2010",
        desc: `After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.`,
        trailerLink: "https://youtu.be/8hYlB38asDY",
        trailer: "http://images5.fanpop.com/image/photos/25700000/Iron-Man-movies-cars-guns-backgrounds-25784085-1920-1080.jpg"
    },
    {
        name: "Iron Man 2 (2010)",
        link: "https://www.putlockers.me/movie/iron-man-2-63.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2011",
        desc: `With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.`,
        trailerLink: "https://youtu.be/BoohRoVA9WQ",
        trailer: "https://images3.alphacoders.com/226/thumb-1920-226615.jpg"
    },
    {
        name: "The Incredible Hulk (2008)",
        link: "https://www.putlockers.me/movie/the-incredible-hulk-1391.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2011",
        desc: `Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into, whenever he loses his temper.`,
        trailerLink: "https://youtu.be/xbqNb2PFKKA",
        trailer: "https://wallpapercave.com/wp/mMWT92p.jpg"
    },
    {
        name: "Thor (2011)",
        link: "https://www.putlockers.me/movie/thor-1399.html",
        cover: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2011",
        desc: `The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.`,
        trailerLink: "https://youtu.be/JOddp-nlNvQ",
        trailer: "https://wallpapercave.com/wp/dQpn8Ws.jpg"
    },
    {
        name: "The Avengers (2012)",
        link: "https://www.putlockers.me/movie/the-avengers-70.html",
        cover: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2012",
        desc: `Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.`,
        trailerLink: "https://youtu.be/eOrNdBpGMv8",
        trailer: "https://wallpapercave.com/wp/mm47Rkq.jpg"
    },
    {
        name: "Iron Man 3 (2013)",
        link: "https://www.putlockers.me/movie/iron-man-3-69.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY209_CR3,0,140,209_AL_.jpg",
        year: "2012",
        desc: `When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        trailerLink: "https://youtu.be/YLorLVa95Xo",
        trailer: "http://images6.fanpop.com/image/photos/33500000/Iron-Man-3-iron-man-3-33557277-1680-1050.jpg"
    },
    {
        name: "Thor: The Dark World (2013)",
        link: "https://www.putlockers.me/movie/thor-the-dark-world-170.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY209_CR3,0,140,209_AL_.jpg",
        year: "2013",
        desc: `When Dr. Jane Foster gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.`,
        trailerLink: "https://youtu.be/npvJ9FTgZbM",
        trailer: "https://images.alphacoders.com/460/thumb-1920-460372.jpg"
    },
    {
        name: "Captain America: The Winter Soldier (2014)",
        link: "https://www.putlockers.me/movie/captain-america-the-winter-soldier-27.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY209_CR1,0,140,209_AL_.jpg",
        year: "2014",
        desc: `As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.`,
        trailerLink: "https://youtu.be/tbayiPxkUMM",
        trailer: "https://img2.akspic.com/image/62360-bucky_barnes-captain_america_the_winter_soldier-film-space-marvel_cinematic_universe-1920x1080.jpg"
    },
    {
        name: "Guardians of the Galaxy (2014)",
        link: "https://www.putlockers.me/movie/guardians-of-the-galaxy-17.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2014",
        desc: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.`,
        trailerLink: "https://youtu.be/d96cjJhvlMA",
        trailer: "https://wallpapercave.com/wp/wp1814934.jpg"
    },
    {
        name: "Guardians of the Galaxy Vol. 2 (2017)",
        link: "https://www.netflix.com/watch/80156386?trackId=13752289&tctx=0%2C0%2Ca1b61aa0-6e26-43e2-afe7-1b9154441f1d-568411918%2C%2C",
        cover: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2014",
        desc: `The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.`,
        trailerLink: "https://youtu.be/wUn05hdkhjM",
        trailer: "https://images7.alphacoders.com/890/890444.jpg"
    },
    {
        name: "Avengers: Age of Ultron (2015)",
        link: "https://www.putlockers.me/movie/avengers-age-of-ultron-2402.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2015",
        desc: `When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.`,
        trailerLink: "https://youtu.be/JAUoeqvedMo",
        trailer: "https://wallpapercave.com/wp/wp1818445.jpg"
    },
    {
        name: "Ant-Man (2015)",
        link: "https://www.putlockers.me/movie/ant-man-2110.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2015",
        desc: `Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.`,
        trailerLink: "https://youtu.be/pWdKf3MneyI",
        trailer: "https://wallpapercave.com/wp/wp1810490.jpg"
    },
    {
        name: "Captain America: Civil War (2016)",
        link: "https://www.putlockers.me/movie/captain-america-civil-war-7286.html",
        cover: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2016",
        desc: `Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.`,
        trailerLink: "https://youtu.be/dKrVegVI0Us",
        trailer: "http://djrangerdanger.com/wp-content/uploads/2016/06/Civil-War.jpg?w=640"
    },
    {
        name: "Spider-Man: Homecoming (2017)",
        link: "https://www.putlockers.me/movie/spider-man-homecoming-19690.html",
        cover: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX140_CR0,0,140,209_AL_.jpg",
        year: "2016",
        desc: `Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.`,
        trailerLink: "https://youtu.be/39udgGPyYMg",
        trailer: "https://images8.alphacoders.com/815/thumb-1920-815755.jpg"
    },
    {
        name: "Doctor Strange (2016)",
        link: "https://www.putlockers.me/movie/doctor-strange-19688.html",
        cover: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2016",
        desc: `While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.`,
        trailerLink: "https://youtu.be/HSzx-zryEgM",
        trailer: "http://hdqwalls.com/wallpapers/2016-doctor-strange-movie-new.jpg"
    },
    {
        name: "Black Panther (2018)",
        link: "https://www.netflix.com/watch/80201906?trackId=13752289&tctx=0%2C0%2C0505053565bdfad1ee311c0cc66817adc2ddcddd%3A97c3ea1ee6ec905b8a2693f20c846ca5b015496d%2C%2C",
        cover: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2017",
        desc: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.`,
        trailerLink: "https://youtu.be/xjDjIWPwcPU",
        trailer: "https://wallpaperstream.com/wallpapers/thumbnails/black-panther/Black-Panther-2018-HD_thumb2x.jpg"
    },
    {
        name: "Thor: Ragnarok (2017)",
        link: "https://www.netflix.com/watch/80186608?trackId=13752289&tctx=0%2C0%2C2d28d9a7-9081-4a96-b593-76a67951a6b1-302308001%2C%2C",
        cover: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2017",
        desc: `Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.`,
        trailerLink: "https://youtu.be/ue80QwXMRHg",
        trailer: "https://images7.alphacoders.com/874/874952.jpg"
    },
    {
        name: "Ant-Man and the Wasp (2018)",
        link: "https://www.netflix.com/watch/80220813?trackId=13752289&tctx=1%2C1%2C0505053565bdfad1ee311c0cc66817adc2ddcddd%3A97c3ea1ee6ec905b8a2693f20c846ca5b015496d%2C%2C",
        cover: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2017",
        desc: `As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.`,
        trailerLink: "https://youtu.be/UUkn-enk2RU",
        trailer: "https://cdn.guidingtech.com/imager/media/assets/198427/Best-Ant-Man-and-the-Wasp-Wallpapers-8_4d470f76dc99e18ad75087b1b8410ea9.jpg?1529923687"
    },
    {
        name: "Avengers: Infinity War (2018)",
        link: "https://www.netflix.com/watch/80219127?trackId=13752289&tctx=0%2C0%2Cf31c5eb7-2858-4e31-9e9c-87e299d20c3c-564494734%2C%2C",
        cover: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        year: "2017",
        desc: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
        trailerLink: "https://youtu.be/6ZfuNTqbHE8",
        trailer: "https://wallpapercave.com/wp/wp2302349.png"
    },
    {
        name: "Avengers: Endgame (2019)",
        cover: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: "?",
        desc: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.`,
        trailerLink: "https://youtu.be/TcMBFSGVi1c",
        trailer: "http://movieposterhd.com/wp-content/uploads/2019/03/Avengers-Endgame-2019-Backgrounds.jpg"
    }
]


module.exports = mcu;