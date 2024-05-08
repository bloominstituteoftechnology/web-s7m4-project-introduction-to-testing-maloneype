import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import txt from '../i18n/index.json'


describe('Module 4 Project Tests', () => {
  const allLanguages = [["en", "English Language"], ["esp", "Spanish Language"]]
  allLanguages.forEach(lang => {
    const allTexts = getEntriesByKeyPrefix(txt[lang[0]], "TEXT")
    const allLabels = getEntriesByKeyPrefix(txt[lang[0]], "LABEL")
    const allPlaceholders = getEntriesByKeyPrefix(txt[lang[0]], "PLACEHOLDER")
    console.log(allTexts)
    console.log(allLabels)
    console.log(allPlaceholders)
    describe(lang[0], () => {
      /*
        👉 TASK 1
  
        One test is done for you as an example.
      */
     console.log(allTexts)
      allTexts.forEach(txt => {
          test(`${txt[0]} is visible`, () => {
            render(<App lang={lang[0]} />)
            expect(screen.getByText(txt[1])).toBeVisible()
          })
        })
    
      allLabels.forEach(lbl => {
          test(`${lbl[0]} is visible`, () => {
            render(<App lang={lang[0]} />)
            expect(screen.getByLabelText(lbl[1])).toBeVisible()
          })
        })
    
      allPlaceholders.forEach(plc => {
          test(`${plc[0]} is visible`, () => {
            render(<App lang={lang[0]} />)
            expect(screen.getByPlaceholderText(plc[1])).toBeVisible()
          })
        })
    
        
  
    })
  })
})

function getEntriesByKeyPrefix (obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split("_")[0] === keyPrefix)
}
