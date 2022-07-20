import { globalLogin } from 'playwright-test'

export default async function globalSetup() {
  globalLogin()
}
