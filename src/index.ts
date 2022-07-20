import { chromium, Page } from '@playwright/test'
import dotenv from 'dotenv'

// read in environment variables
dotenv.config({ path: 'playwright/.env.playwright' })

export async function globalLogin() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // do stuff

  // save localStorage and cookies to file
  await page
    .context()
    .storageState({ path: 'playwright/playwright.session.json' })
  await browser.close()
}

export async function login(appPage: Page) {
  console.log(appPage)
}
