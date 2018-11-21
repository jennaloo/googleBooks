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
                var newH3 = document.createElement('h3');
                var newP = document.createElement('p');

                resultContainer.className = "col-12 text-center";

                newImg.src = bookData.imageLinks.thumbnail;
                newH3.innerText = bookData.title;
                newP.innerText = bookData.description;
                document.getElementById('results').appendChild(resultContainer);
                resultContainer.appendChild(newImg);
                resultContainer.appendChild(newH3);
                resultContainer.appendChild(newP);
            }
        },

        type: "GET"
    })
}
