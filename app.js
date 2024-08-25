//! Step 1: Create array of images to be used later on in various functions-
let photoAlbum = [
    {
        url: 'Media/Buzludzha-monument-bulgaria-FULLSIZE.webp',
        alt: 'This outdoor photo is of the Buzludazha monument, Bulgaria'
    },

    {
        url: 'Media/Buzludzha-monument-bulgaria-inside-FULLSIZE.webp',
        alt: 'This indoor photo is of the Buzludazha monument, Bulgaria'
    },

    {
        url: 'Media/nakagin-capsule-tower-FULLSIZE.webp',
        alt: 'This outdoor photo is of the Nakagin Capsule tower, Japan. Looks like loads of stacked washing machines',
    },
    {
        url: 'Media/Tbilisi-Georgia.webp',
        alt: 'This outdoor photo is of a tower block of flats in Tbilisi, Georgia',
    },
    {
        url: 'Media/REPRE-Czechia.webp',
        alt: 'This outdoor photo is of the REPRE cultural centre, Czechia',
    },
    {
        url: 'Media/carpark-barbican-london-FULLSIZE.webp',
        alt: 'This photo is of the inside of a very blocky, concrete carpark in the barbican centre, London',
    },
    {
        url: 'Media/barbican-centre-London.webp',
        alt: 'This outdoor photo is of the main centre within the barbican, London',
    },
    {
        url: 'Media/Chernobyl-Ukraine.webp',
        alt: 'This outdoor photo is of the abandoned block of flats in Pripyat, Ukraine',
    },
    {
        url: 'Media/hotel-polissya-Pripyat-Ukraine.webp',
        alt: 'This outdoor photo is of the abandoned Hotel Polissya in Pripyat, Ukraine',
    },
    {
        url: 'Media/maria-konigin-des-friedens-church-in-velbert-germany-FULLSIZE.webp',
        alt: 'This indoor photo of the Nevigeser Wallfahrtsdom church, Germany',
    },
    {
        url: 'Media/Petrol-Bosnia-&-Herzegovina.webp',
        alt: 'This outdoor photo is of a fully concrete petrol station, Bosnia & Herzegovina',
    },
    {
        url: 'Media/Pool-Chernobyl-Ukraine.webp',
        alt: 'This indoor photo is of the famously abandoned empty swimming pool, Pripyat, Ukraine ',
    },
    {
        url: 'Media/bumpercars-Pripyat-Ukraine.webp',
        alt: 'This outdoor photo is of the widely recognisable abandoned bumper cars, Pripyat, Ukraine ',
    }

]
//! Step 4: Make a variables for the containers (reference the DOM, then the specific element as below-)
const thumbnailCont = document.getElementById('thumbnailCont')
const showPhotos = document.getElementById('showPhotos')

//! Step 5: (in this case) Create a function for the thumbnail to make it interactive-
function makeThumbnails() {
    photoAlbum.forEach(function(photo){   //5a: forEach will (auto loop) through each photo within the photoAlbum array
    //5b:  for each of the photo objects you want make a photo tag -this is called 'img' 
    let photoElement = document.createElement('img')
    //5c:  you then want to set a src & alt (on the newly created pics from the photoAlbum in this case)
    photoElement.src = photo.url
    photoElement.alt = photo.alt
    //5d: below allows a user to tab through each indivdual img, refing the photoElement variable
    photoElement.setAttribute('tabindex', '0');
    //5e:  now add a click event to trigger an action when the element is clicked upon, using addEventListener-
    photoElement.addEventListener('click', function() {
        console.log(`Clicked on ${photo.alt}`)
        makeLargePhoto(photo)
    })

    photoElement.addEventListener('keydown', function(event) {
            console.log(event)
            if (event.code === 'Enter') {
                makeLargePhoto(photo)
            }
        })
    //5f:  when the photos are created from the click event, we then want to place them into the HTML doc, aka the DOM
    //5f:  from there we can then not only see the photos but edit them in CSS sheet
    thumbnailCont.appendChild(photoElement)
    })
}




//5g: after creating the function in Step 5, we now just call upon the function below to make it work-
makeThumbnails()

//! Step 6: Make a function for creating the large photos
function makeLargePhoto(bigPhoto) {
    //6a: you'll first need to 'empty' the thumbnailCont so that the previous pic isn't going to stick around
    //6a: '.innerHTML' that allows you to get or set the HTML content inside an element.
    //!6a: REMEMBER add the '' at the beginning, not the end. otherwise it will keep clearing the created pics!!!
    showPhotos.innerHTML = ''
    //6b: like in Step 5b on the 'photoElement'
    const largePhotoElement = document.createElement('img')
    largePhotoElement.src = bigPhoto.url
    largePhotoElement.alt = bigPhoto.alt
    //6c: like in Step 5e, only we are now putting the full scale photos in the 'showPhotos' container-
    showPhotos.appendChild(largePhotoElement)
    
}

playBtn.addEventListener('click', function() {
    synth.play()
    
})

pauseBtn.addEventListener('click', function() {
    synth.pause()
})

stopBtn.addEventListener('click', function() {
    // pause the playback
    synth.pause()
    // set time to 0
    synth.currentTime = 0
})



