$(".article-element").html('');
$.getJSON('/js/attraction.json').error(function () {
    alert("error");
})
// $.getJSON('/js/attraction.json', function (data) {
//     for (let i = 0; i < 8; i++) {
//         for (let j = 0; j < 12; j++) {
//             let thumbnail, title, location;
//             thumbnail = data[i].response.body.items.item[j].firstimage;
//             title = data[i].response.body.items.item[j].title;
//             location = data[i].response.body.items.item[j].addr1;

//             console.log(thumbnail);
//             console.log(title);
//             console.log(location);

//             var list = '';
//             list += '<li>';
//             list += '<a href="#">';
//             list += '<img src=' + thumbnail + ' class="article-element-thumb">';
//             list += '<div class="article-element-info">';
//             list += '<h4><strong>' + title + '</strong></h4>';
//             list += '<p>' + location + '</p>';
//             list += '</div></a></li>'
//             $(".article-element").append(list);
//         }
//     }
// })
$.getJSON('/js/events.json', function (data) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 12; j++) {
            let thumbnail, title, location;
            thumbnail = data[i].response.body.items.item[j].firstimage;
            title = data[i].response.body.items.item[j].title;
            location = data[i].response.body.items.item[j].addr1;

            console.log(thumbnail);
            console.log(title);
            console.log(location);

            var list = '';
            list += '<li>';
            list += '<a href="#">';
            list += '<img src=' + thumbnail + ' class="article-element-thumb">';
            list += '<div class="article-element-info">';
            list += '<h4><strong>' + title + '</strong></h4>';
            list += '<p>' + location + '</p>';
            list += '</div></a></li>'
            $(".article-element").append(list);
        }
    }
})