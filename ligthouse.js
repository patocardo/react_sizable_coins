import lighthouse from 'lighthouse'
import chromeLauncher from 'chrome-launcher'
const launcher = async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance'],
    port: chrome.port
  }
  const runnerResult = await lighthouse('http://localhost:5173/', options)

  console.log(runnerResult.report)
  await chrome.kill()
}
launcher()
