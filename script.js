//your code here
let mainSection = document.querySelector('main')
let verifyBtn = document.querySelector('.verify')
let resetBtn = document.querySelector('.reset')
let images = ['img1', 'img2', 'img3', 'img4', 'img5']
let message = document.createElement('p')
message.id ='para'
mainSection.append(message)

let randomIndex = parseInt(Math.random()* images.length) +1
let randomImage = images[randomIndex-1]
images.splice(randomIndex, 0, randomImage)

images.forEach((item,index)=> {
	let image = document.createElement('img')
	image.className = item
    mainSection.prepend(image)
})

let selectedImage = []
let allImages = document.querySelectorAll('img')
allImages.forEach(item=> {
    item.addEventListener('click', (e)=> {
        if(selectedImage.includes(item.className)) {
            console.log("yesss")
            selectedImage.pop()
            item.classList.remove('selected')
        }
        if(selectedImage.length < 2) {
            if(!selectedImage.includes(item.className)) {
                item.classList.add('selected')
                selectedImage.push(item.className)
                resetBtn.style.display = 'block'
            }
        }
        if(selectedImage.length === 2) {
            verifyBtn.style.display = 'block'
        } else {
            verifyBtn.style.display = 'none'
        }
    })

})

resetBtn.addEventListener('click', (e)=> {
    allImages.forEach(item=> {
        item.classList.remove('selected')
    })
    selectedImage = []
    resetBtn.style.display = 'none'
    verifyBtn.style.display = 'none'
    message.innerText = ''
})

verifyBtn.addEventListener('click', (e)=> {
    let text = selectedImage[0] === selectedImage[1] ? 'You are a human. Congratulations!' :
    `We can't verify you as a human. You selected the non-identical tiles.`
    message.innerText =  text
    verifyBtn.style.display = 'none'
})

