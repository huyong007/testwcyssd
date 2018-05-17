
axios.get('/api/user?name=xugaoyang')
    .then(function (response) {
        let userInfo = response.data;

        axios.get('api/topics?user_id=' + userInfo._id)
            .then(function (response) {
                let topics = response.data;

                // i got it.
            })
            .catch(function (err) {
                console.log(err);
            });
    })
    .catch(function (err) {
        console.log(err);
    });










function getTopics(id) {
    axios.get('api/topics?user_id=' + id)
        .then(function (response) {
            let topics = response.data;

            // i got it.
        })
        .catch(function (err) {
            console.log(err);
        });
}

axios.get('/api/user?name=xugaoyang')
    .then(function (response) {
        let userInfo = response.data;

        getTopics(userInfo.id)
    })
    .catch(function (err) {
        console.log(err);
    });