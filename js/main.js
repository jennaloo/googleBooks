function getBook() {

    var book = document.getElementById('bookSearch').value;
    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + book + '',
        dataType: "json",
        success: function (data) {
            console.log(data);
            for (i = 0; i < data.items.length; i++) {

                var image = data.items[i].volumeInfo.imageLinks.thumbnail;

                document.getElementById('book').innerHTML += '<img src=' + image + '>';

                var title = data.items[i].volumeInfo.title;
                document.getElementById('book').innerHTML += '<h3>' + title + '</h3>';

                var info = data.items[i].volumeInfo.description;
                if (info !== undefined) {
                    document.getElementById('book').innerHTML += '<p>' + info + '</p>';
                }

            }
        },

        type: "GET"
    })
}
