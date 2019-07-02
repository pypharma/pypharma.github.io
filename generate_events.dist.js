var _meetup = require('meetup-api')({
    key: 'YOURKEY'
});

_meetup.getEvents({
    group_urlname: 'GDG-Toulouse',
    status: "upcoming,past"
}, function (err, response) {
    if (!response) return;
    const results = response.results
        .filter(event => event.visibility === 'public')
        .map((event) => ({
            id: event.id,
            venueName: event.venue.name,
            venueCity: event.venue.city,
            venueAddress: event.venue.address_1,
            name: event.name,
            description: event.description,
            time: event.time,
            timeISOString: new Date(event.time).toISOString(),
            event_url: event.event_url,
        }));
    console.log(JSON.stringify(results));
});