import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dataDir = join(__dirname, '../data')

const dataFiles = readdirSync(dataDir).filter(f => f.endsWith('.json'))

console.log('🔍 Auditing Academic Calendar Semester Alignments (Sunday-Start Check)\n')

let hasError = false

dataFiles.forEach(file => {
  const content = JSON.parse(readFileSync(join(dataDir, file), 'utf-8'))
  console.log(`📂 Processing: ${file}`)

  content.semesters.forEach((s: any) => {
    const date = new Date(s.start[0], s.start[1] - 1, s.start[2])
    const dayOfWeek = date.getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (dayOfWeek !== 0) {
      console.error(`  ❌ Error in ${s.name}: Starts on ${days[dayOfWeek]} (${s.start.join('-')})`)
      hasError = true
    } else {
      console.log(`  ✅ ${s.name}: Correct (Sunday start)`)
    }
  })
})

if (hasError) {
  console.log('\n🛑 Found misalignment errors. Please fix the JSON start dates to the preceding Sunday.')
  process.exit(1)
} else {
  console.log('\n✨ All semesters are correctly aligned to Sunday starts.')
}
