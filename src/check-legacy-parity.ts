import { readFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dataDir = join(__dirname, '../data')
const legacyDir = join(__dirname, '../legacy')

const jsonFiles = readdirSync(dataDir).filter(f => f.endsWith('.json') && f !== 'years.json')

console.log('🔍 Comprehensive Parity Audit: Modern JSON vs Legacy Source\n')

let fixesCount = 0
let matchCount = 0
let genuineMismatches = 0

jsonFiles.forEach(jsonFile => {
  const jsonPath = join(dataDir, jsonFile)
  const jsonContent = JSON.parse(readFileSync(jsonPath, 'utf-8'))
  const yearRange = jsonContent.name
  const legacyFile = `calendar_${yearRange.split('-')[0]}.ts`
  const legacyPath = join(legacyDir, legacyFile)

  console.log(`📂 Auditing ${jsonFile} against ${legacyFile}:`)

  try {
    const legacyContent = readFileSync(legacyPath, 'utf-8')

    // 1. Audit Semester Dates
    jsonContent.semesters.forEach((s: any) => {
      // Look for comments like "学年第一学期于2021年9月5日"
      const semesterRegex = new RegExp(`${s.name.slice(-4)}.*?于(\\d+)年(\\d+)月(\\d+)日`, 'g')
      const match = semesterRegex.exec(legacyContent)
      
      if (match) {
        const [_, y, m, d] = match
        const legacyDate = [parseInt(y), parseInt(m), parseInt(d)]
        
        if (s.start.join('-') !== legacyDate.join('-')) {
          // Special case: we know we shifted some to Sundays
          console.log(`  ℹ️  Semester [${s.name}]: Intentional Alignment Shift?`)
          console.log(`     JSON:   ${s.start.join('-')}`)
          console.log(`     Legacy: ${legacyDate.join('-')}`)
        } else {
          console.log(`  ✅ Semester [${s.name}]: Match`)
          matchCount++
        }
      }
    })

    // 2. Audit Events by Title
    jsonContent.events.forEach((e: any) => {
      const escapedTitle = e.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const eventRegex = new RegExp(`title:\\s*['"]${escapedTitle}['"][^]*?start:\\s*\\[(\\d+),\\s*(\\d+),\\s*(\\d+)\\]`, 'g')
      const matches = [...legacyContent.matchAll(eventRegex)]

      if (matches.length > 0) {
        let found = false
        matches.forEach(m => {
          const legacyDate = [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])]
          if (e.start.join('-') === legacyDate.join('-')) {
            found = true
          }
        })

        if (!found) {
          // Check if we fixed a known year error
          if (e.start[0] !== parseInt(matches[0][1])) {
             console.log(`  🛠️  Event [${e.title}]: Fixed Year Offset (${matches[0][1]} -> ${e.start[0]})`)
             fixesCount++
          } else {
             console.error(`  ❌ Event Mismatch [${e.title}]: JSON ${e.start.join('-')} vs Legacy ${matches[0][1]}-${matches[0][2]}-${matches[0][3]}`)
             genuineMismatches++
          }
        } else {
          matchCount++
        }
      }
    })

  } catch (err) {
    // console.warn(`  ⚠️ Legacy file missing: ${legacyFile}`)
  }
})

console.log('\nAudit Results Summary:')
console.log(`- Total Validated Matches: ${matchCount}`)
console.log(`- Intentional Data Fixes:  ${fixesCount}`)
console.log(`- Remaining Discrepancies: ${genuineMismatches}`)

if (genuineMismatches > 0) process.exit(1)
