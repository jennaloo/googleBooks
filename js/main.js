function getBook() {

    var results = document.getElementById("results").innerHTML = "";

    var book = document.getElementById('bookSearch').value;

    $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + book + '',
        dataType: "json",
        success: function (data) {
            console.log(data);

            for (i = 0; i < data.items.length; i++) {
                var bookData = data.items[i].volumeInfo;

                var resultContainer = document.createElement('div');
                var newImg = document.createElement('img');

                newImg.src = bookData.imageLinks.thumbnail;

                document.getElementById('results').appendChild(resultContainer);
                resultContainer.appendChild(newImg);
            }
        },

        type: "GET"
    })
}
