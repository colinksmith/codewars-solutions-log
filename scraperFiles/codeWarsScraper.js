const puppeteer = require('puppeteer')
const fs = require('fs')
const urlLink = process.argv[2]

const todayDate = `../${generateTodayDate()}`
const dirPath = todayDate
const filePath = `${todayDate}/daily-kata.js`


function generateTodayDate() {
    let date = new Date()
    let returnDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`
    return returnDate
}


async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto(urlLink)
   let element1 = await page.waitForSelector("h4")
   let kataTitle = await page.evaluate(element => element.textContent, element1)
   let element2Parent = await page.waitForSelector("#description")
   let kataDesc = await page.evaluate(elementParent => {
    let childList = Array.from(elementParent.children)
    let description = ''
    for (let i = 0; i < childList.length; i++){
        if (childList[i].textContent.includes('\n')){
            childList[i].textContent = childList[i].textContent.replaceAll('\n', '\n//')
        }
        description += `\n//${childList[i].textContent}`
    }
    description += '\n\n'
    return description
   }, element2Parent)
   // console.log(kataTitle)
//    console.log(kataDesc)
   browser.close()
   return [kataTitle, kataDesc]
}
const createDir = (dirPath) => {
   fs.mkdirSync(dirPath, {recursive: true}, (error) => {
       if (error) {
           console.error('An error occurred: ', error)
       } else {
        //    console.log('Your directory is made!')
       }
   })
}
const createFile = (filePath, fileContent) => {
   fs.writeFile(filePath, fileContent, (error) => {
       if (error) {
           console.error('An error occurred: ', error)
       } else {
        //    console.log('Your file is made!')
       }
   })
}
const copyFile = () => {
    fs.copyFile('../template/index.html', `${todayDate}/index.html`, (err) => {
        if (err){
            console.error(err)
        } else {
            // console.log(`copied file`)
        }
      })
}

async function main() {
   let kata = await scrape()
//    console.log(kata)
   const content = `//${kata[0]}\n//${kata[1]}`
   try {
      if (fs.existsSync(filePath)){
          fs.appendFile(filePath, `\n\n${content}`, (err) => {
              if (err) throw err
          })
          console.log(`${filePath} already exists, and data has been added for "${kata[0]}"`)
      } else {
          createDir(dirPath)
          createFile(filePath,content)
          copyFile()
          console.log(`created ${filePath} for "${kata[0]}"`)
      }
  } catch (err){
      console.error(err)
  }
}
main()