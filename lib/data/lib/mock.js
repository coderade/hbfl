const _ = require('lodash');
const assets = require('../../../util/assets');
const userData = [];
const racersData = [
    {
        id: 1,
        name: 'Mario',
        type: 'Speedball',
        src: assets.mario,
        results: []
    }, {
        id: 2,
        name: 'Link',
        type: 'Speedball',
        src: assets.link,
        results: []
    }, {
        id: 3,
        name: 'Browser',
        type: 'Tiny Terror',
        src: assets.bowser,
        results: []
    }, {
        id: 4,
        name: 'Yoshi',
        type: 'Roller',
        src: assets.yoshi,
        results: []
    }, {
        id: 5,
        name: 'Donkey Kong',
        type: 'Stealth',
        src: assets.donkeyKong,
        results: []
    }, {
        id: 6,
        name: 'Toad',
        type: 'ZigZagger',
        src: assets.toad,
        results: []
    }
];
const favorites = [];
const raceData = [
    {
        id: 1,
        venue: 'Rainbow Road',
        city: 'Seattle, WA',
        date: '08/29/18',
        results: []
    }, {
        id: 2,
        venue: `Bowser's Castle`,
        city: 'Daytona Beach, FL',
        date: '09/31/18',
        results: []
    }, {
        id: 3,
        venue: 'Yoshi Valley',
        city: 'Tokyo, Japan',
        date: '07/14/17',
        results: []
    }
];

const User = {
    sync() {
        return Promise.resolve()
    },
    findOne(query) {
        console.log(query, userData);
        return Promise.resolve(_.find(userData,
            u => u.username === query.where.username || u.id === query.where.id))
    },
    findAll(query) {
        return Promise.resolve(userData.map(u => ({[query.attributes[0]]: u[query.attributes[0]]})))
    },
    create(user) {
        user.id = userData.length + 1;
        userData.push(user);
        return Promise.resolve()
    }
};

const UserFavorite = {
    sync() {
        return Promise.resolve()
    },
    findAll(query) {
        return Promise.resolve(favorites.filter(f => f.userId === query.where.userId))
    },
    destroy(query) {
        _.remove(favorites, f =>
            f.userId === query.where.userId && f.hamsterId === query.where.hamsterId);
        return Promise.resolve()
    },
    create(favorite) {
        _.remove(favorites, (f) => {
            return f.userId === favorite.userId &&
                f.hamsterId === favorite.hamsterId
        });
        favorites.push(favorite);
        return Promise.resolve()
    }
};

const Hamster = {
    getAll() {
        return Promise.resolve(racersData)
    },
    put(hamster) {
        _.remove(racersData, (h) => {
            return h.id === hamster.id
        });
        racersData.push(hamster);
        return Promise.resolve()
    }
};

const Race = {
    get(table, id) {
        return Promise.resolve(_.find(raceData, r => r.id === id))
    },
    getAll() {
        return Promise.resolve(raceData)
    },
    put(race) {
        _.remove(raceData, (r) => {
            return r.id === race.id
        });
        raceData.push(race);
        return Promise.resolve()
    }
};

module.exports = {
    User,
    UserFavorite,
    Hamster,
    Race
};
