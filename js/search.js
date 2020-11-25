function map() {
    $('.fa-angle-up').toggleClass('clicked');
    if($('.location-map').css('display') == 'none') {
        $('.location-map').show();
    }
    else {
        $('.location-map').hide();
    }
}

function area(code) {
    $(".article-element").html('');
    $.getJSON('/js/attraction.json', function (data) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 12; j++) {
                let thumbnail, title, location, gu;
                gu = data[i].response.body.items.item[j].sigungucode;

                if (code == gu) {
                    thumbnail = data[i].response.body.items.item[j].firstimage;
                    title = data[i].response.body.items.item[j].title;
                    location = data[i].response.body.items.item[j].addr1;

                    var list = '';
                    list += '<li>';
                    list += '<a href="#">';
                    list += '<img src=' + thumbnail + ' class="article-element-thumb">';
                    list += '<div class="article-element-info">';
                    list += '<h4><strong>' + title + '</strong></h4>';
                    list += '<p>' + location + '</p>';
                    list += '</div></a></li>'
                    $(".article-element").append(list);
                } else {
                    continue;
                }
            }
        }
    })
}

function attraction(start, end) {
    $(".article-element").html('');
    $.getJSON('/js/attraction.json', function (data) {
        for (let i = start; i < end; i++) {
            for (let j = 0; j < 12; j++) {
                let thumbnail, title, location;
                thumbnail = data[i].response.body.items.item[j].firstimage;
                title = data[i].response.body.items.item[j].title;
                location = data[i].response.body.items.item[j].addr1;

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
}

function a_search() {
    const key = document.getElementById('attraction-search').value;
    $(".article-element").html('');
    $.getJSON('/js/attraction.json', function (data) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 12; j++) {
                let thumbnail, title, location;
                title = data[i].response.body.items.item[j].title;

                if (title.indexOf(key) != -1) {
                    thumbnail = data[i].response.body.items.item[j].firstimage;
                    location = data[i].response.body.items.item[j].addr1;

                    var list = '';
                    list += '<li>';
                    list += '<a href="#">';
                    list += '<img src=' + thumbnail + ' class="article-element-thumb">';
                    list += '<div class="article-element-info">';
                    list += '<h4><strong>' + title + '</strong></h4>';
                    list += '<p>' + location + '</p>';
                    list += '</div></a></li>'
                    $(".article-element").append(list);
                } else {
                    continue;
                }
            }
        }
    })
}

function events(start, end) {
    $(".article-element").html('');
    $.getJSON('/js/events.json', function (data) {
        for (let i = start; i < end; i++) {
            for (let j = 0; j < 12; j++) {
                let thumbnail, title, location;
                thumbnail = data[i].response.body.items.item[j].firstimage;
                title = data[i].response.body.items.item[j].title;
                location = data[i].response.body.items.item[j].addr1;

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
}

function e_search() {
    console.log('d');
    const key = document.getElementById('events-search').value;
    $(".article-element").html('');
    $.getJSON('/js/events.json', function (data) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 12; j++) {
                let thumbnail, title, location;
                title = data[i].response.body.items.item[j].title;

                if (title.indexOf(key) != -1) {
                    thumbnail = data[i].response.body.items.item[j].firstimage;
                    location = data[i].response.body.items.item[j].addr1;

                    var list = '';
                    list += '<li>';
                    list += '<a href="#">';
                    list += '<img src=' + thumbnail + ' class="article-element-thumb">';
                    list += '<div class="article-element-info">';
                    list += '<h4><strong>' + title + '</strong></h4>';
                    list += '<p>' + location + '</p>';
                    list += '</div></a></li>'
                    $(".article-element").append(list);
                } else {
                    continue;
                }
            }
        }
    })
}