// https://uc.whu.edu.cn/info/1687/16527.htm

import { createEvents } from 'ics'
import type { EventAttributes } from 'ics'
import { writeFileSync } from 'fs'
import { uidGenerateFactory } from './utils.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const calendar_name = '2025-2026'
const uidGenerator = uidGenerateFactory('whu-calendar-2025')

const events: EventAttributes[] = [
  {
    uid: uidGenerator('class-begin'),
    title: '除本科新生外所有本科生和在籍研究生开始上课',
    description: '',
    busyStatus: 'FREE',
    start: [2025, 9, 8],
    end: [2025, 9, 9],
    calName: calendar_name,
  },
]

events.push({
  uid: uidGenerator('undergraduate-freshman-registration'),
  title: '本科新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2025, 9, 1],
  end: [2025, 9, 2],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-before-class-begin'),
  title: '本科生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 9, 2],
  end: [2025, 9, 3],
})

events.push({
  uid: uidGenerator('military-training'),
  title: '新生军训',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 9, 2],
  end: [2025, 9, 22],
})

events.push({
  uid: uidGenerator('undergraduate-master-registration'),
  title: '本科生老生、研究生老生返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 9, 7],
  end: [2025, 9, 8],
})

events.push({
  uid: uidGenerator('master-freshman-registration'),
  title: '研究生新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2025, 9, 2],
  end: [2025, 9, 3],
})

events.push({
  uid: uidGenerator('master-freshman-before-class-begin'),
  title: '研究生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 9, 3],
  end: [2025, 9, 4],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-class-begin'),
  title: '本科生新生开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 9, 22],
  end: [2025, 9, 23],
})

////////////////////////////////////////////////////////////////

/// 2025-2026学年第一学期于2025年9月7日至2026年1月17日，教学周共19周。
/// Date第二个参数从0开始，因此9月使用8。

for (let i = 0; i < 19; i++) {
  const weekStart = new Date(2025, 8, 7).addWeek(i)
  const weekEnd = new Date(2025, 8, 7).addWeek(i + 1)

  events.push({
    uid: uidGenerator(`term-1-week-${i + 1}`),
    title: `[1] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

events.push({
  uid: uidGenerator('mid-autumn-festival-holiday'),
  title: '中秋节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 10, 6],
  end: [2025, 10, 7],
})

events.push({
  uid: uidGenerator('national-day-holiday'),
  title: '国庆节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 10, 1],
  end: [2025, 10, 4],
})

events.push({
  uid: uidGenerator('school-sports-meeting'),
  title: '校运会（11月6日下午-11月8日）',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 11, 6],
  end: [2025, 11, 9],
})

events.push({
  uid: uidGenerator('new-year-holiday'),
  title: '元旦假期',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 1, 1],
  end: [2026, 1, 2],
})

events.push({
  uid: uidGenerator('spring-festival-holiday'),
  title: '春节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 2, 17],
  end: [2026, 2, 18],
})

events.push({
  uid: uidGenerator('term-1-final-week'),
  title: '考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 1, 4],
  end: [2026, 1, 18],
})

events.push({
  uid: uidGenerator('winter-vacation'),
  title: '寒假',
  description: '教职工寒假执行学校通知。',
  busyStatus: 'FREE',
  start: [2026, 1, 18],
  end: [2026, 2, 28],
})

////////////////////////////////////////////////////////////////

/// 2025-2026学年第二学期于2026年3月1日至2026年7月4日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2026, 2, 2).addWeek(i)
  const weekEnd = new Date(2026, 2, 2).addWeek(i + 1)

  events.push({
    uid: uidGenerator(`term-2-week-${i + 1}`),
    title: `[2] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

events.push({
  uid: uidGenerator('registration-term-2'),
  title: '第二学期返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 3, 1],
  end: [2026, 3, 2],
})

events.push({
  uid: uidGenerator('class-begin-term-2'),
  title: '第二学期开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 3, 2],
  end: [2026, 3, 3],
})

events.push({
  uid: uidGenerator('ching-ming-festival-holiday'),
  title: '清明节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2026, 4, 5],
  end: [2026, 4, 6],
})

events.push({
  uid: uidGenerator('may-day-holiday'),
  title: '劳动节假期',
  description: '调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm',
  busyStatus: 'FREE',
  start: [2026, 5, 1],
  end: [2026, 5, 2],
})

events.push({
  uid: uidGenerator('dragon-boat-festival-holiday'),
  title: '端午节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2026, 6, 19],
  end: [2026, 6, 20],
})

events.push({
  uid: uidGenerator('term-2-final-week'),
  title: '第二学期考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2026, 6, 21],
  end: [2026, 7, 5],
})

////////////////////////////////////////////////////////////////

for (let i = 0; i < 2; i++) {
  const weekStart = new Date(2026, 7, 5).addWeek(i)
  const weekEnd = new Date(2026, 7, 5).addWeek(i + 1)

  events.push({
    uid: uidGenerator(`term-3-week-${i + 1}`),
    title: `[3] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

events.push({
  uid: uidGenerator('summer-vacation'),
  title: '暑假',
  description: '教职工暑假执行学校通知',
  busyStatus: 'FREE',
  start: [2026, 7, 19],
  end: [2026, 9, 6],
})

createEvents(events, async (error: Error | undefined, value: string | undefined) => {
  if (error) {
    console.log(error)
  }

  if (value) {
    writeFileSync(`${__dirname}/${calendar_name}.ics`, value)
  }
})
