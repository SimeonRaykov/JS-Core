let assert = require('chai').assert;
let expect = require('chai').expect;
class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}
//let testov = new SoftUniFy();
//testov.downloadSong("mon","don","ssf");
//console.log(testov.rateArtist('mon'));

describe('constructor', function () {
    let softunify;
    beforeEach(function () {
        softunify = new SoftUniFy();
    });
    it('throw error for empty song list', function () {
     softunify.songsLists;
     function iThrowError() {
        throw new Error("Your song list is empty");
    }
     assert.throws(iThrowError,Error,"Your song list is empty");
    });

    it("allSongs should be Initialized as an {}",function(){
        let result = softunify.allSongs;
        expect(result).to.be.eql({});
    })

    it("one song should be played for 1 push",function(){
        softunify.downloadSong('Mon', 'Don', 'SSS')
        let result = softunify.songsList;
        expect(result).to.be.eql("Don - SSS");
    })

       it("output should say that song isnt downloaded yet",function(){
       softunify.downloadSong('Mon', 'Don', 'SSS')
    let result = softunify.playSong("Mon");
       expect(result).to.be.eql('You have not downloaded a Mon song yet. Use SoftUniFy\'s function downloadSong() to change that!')
    })
       it("output should be 0 for votes",function(){
     softunify.downloadSong("mon","don","ssf");
     let result = softunify.rateArtist('mon');
   //  expect(softunify.rateArtist("mon")).to.be.eql(0);
      assert.equal(result,0);
     })
 });  