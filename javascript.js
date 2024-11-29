fetch('/assets/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load header.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('headercontainer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

fetch('/assets/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load header.html');
    }
    return response.text();
})
.then(data => {
    document.getElementById('footercontainer').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});

  // Contacts Page
    document.getElementById('loadcontacts').addEventListener('click', function(event) {
        event.preventDefault();
        loadBioContent('/assets/contacts.html'); // Replace 'bio.html' with your file path
    });

  // About page
    document.getElementById('loadabout').addEventListener('click', function(event) {
        event.preventDefault();
        loadBioContent('assets/about.html'); // 
    });

      // Roles Page
    document.getElementById('loadroles').addEventListener('click', function(event) {
        event.preventDefault();
        loadBioContent('/assets/roles.html'); // 
    });


  // Career Page
    document.getElementById('loadcareer').addEventListener('click', function(event) {
        event.preventDefault();
        loadBioContent('/assets/career.html');
        loadSideContent('/assets/sidebars/career'); // 
    });


    function loadBioContent(filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error loading the file: ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                // Overwrite the content of the "bio" div with the loaded HTML
                document.getElementById('bio').innerHTML = data;
            })
            .catch(error => {
                console.error('There was a problem:', error);
            });
    }