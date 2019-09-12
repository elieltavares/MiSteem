steem.api.getDiscussionsByCreated({"tag": "kr", "limit": 10}, function(err, result) {
    if (err === null) {
        var i, len = result.length;
        for (i = 0; i < len; i++) {
            var discussion = result[i];
            console.log(i, discussion);
            // Store the last permlink and author
            if (i == len - 1) {
                window.permlink = discussion.permlink;
                window.author = discussion.author;
            }
        }
    } else {
        console.log(err);
    }
});
