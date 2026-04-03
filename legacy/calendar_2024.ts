// https://uc.whu.edu.cn/info/1687/16527.htm

import { createEvents } from 'ics'
import type { EventAttributes } from 'ics'
import { writeFileSync } from 'fs'
import { uidGenerateFactory } from './utils.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const calendar_name = '2024-2025'
const uidGenerator = uidGenerateFactory('whu-calendar-2024')

const events: EventAttributes[] = [
  {
    uid: uidGenerator('class-begin'),
    title: '除本科新生外所有本科生和在籍研究生开始上课',
    description: '',
    busyStatus: 'FREE',
    start: [2024, 9, 9],
    end: [2024, 9, 10],
    calName: calendar_name,
  },
]

events.push({
  uid: uidGenerator('undergraduate-freshman-registration'),
  title: '本科新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2024, 9, 2],
  end: [2024, 9, 3],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-before-class-begin'),
  title: '本科生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 9, 3],
  end: [2024, 9, 4],
})

events.push({
  uid: uidGenerator('military-training'),
  title: '新生军训',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 9, 3],
  end: [2024, 9, 23],
})

events.push({
  uid: uidGenerator('undergraduate-master-registration'),
  title: '本科生老生、研究生老生返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 9, 8],
  end: [2024, 9, 9],
})

events.push({
  uid: uidGenerator('master-freshman-registration'),
  title: '研究生新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2024, 9, 3],
  end: [2024, 9, 4],
})

events.push({
  uid: uidGenerator('master-freshman-before-class-begin'),
  title: '研究生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 9, 4],
  end: [2024, 9, 5],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-class-begin'),
  title: '本科生新生开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 9, 23],
  end: [2024, 9, 24],
})

////////////////////////////////////////////////////////////////

/// 2024-2025学年第一学期于2024年9月8日至2025年1月11日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2024, 8, 8).addWeek(i)
  const weekEnd = new Date(2024, 8, 8).addWeek(i + 1)

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
  start: [2024, 9, 17],
  end: [2024, 9, 18],
})

events.push({
  uid: uidGenerator('national-day-holiday'),
  title: '国庆节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 10, 1],
  end: [2024, 10, 4],
})

events.push({
  uid: uidGenerator('school-sports-meeting'),
  title: '校运会（11月7日下午-11月9日）',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 11, 7],
  end: [2024, 11, 10],
})

events.push({
  uid: uidGenerator('new-year-holiday'),
  title: '元旦假期',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 1, 1],
  end: [2025, 1, 2],
})

events.push({
  uid: uidGenerator('spring-festival-holiday'),
  title: '春节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 1, 29],
  end: [2025, 1, 30],
})

events.push({
  uid: uidGenerator('term-1-final-week'),
  title: '考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 12, 29],
  end: [2025, 1, 12],
})

events.push({
  uid: uidGenerator('winter-vacation'),
  title: '寒假',
  description: '教职工寒假执行学校通知。',
  busyStatus: 'FREE',
  start: [2025, 1, 12],
  end: [2025, 2, 16],
})

////////////////////////////////////////////////////////////////

/// 2024-2025学年第二学期于2025年2月16日至2024年6月21日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2025, 1, 16).addWeek(i)
  const weekEnd = new Date(2025, 1, 16).addWeek(i + 1)

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
  start: [2025, 2, 16],
  end: [2025, 2, 17],
})

events.push({
  uid: uidGenerator('class-begin-term-2'),
  title: '第二学期开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 2, 17],
  end: [2025, 2, 18],
})

events.push({
  uid: uidGenerator('ching-ming-festival-holiday'),
  title: '清明节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2025, 4, 4],
  end: [2025, 4, 5],
})

events.push({
  uid: uidGenerator('may-day-holiday'),
  title: '劳动节假期',
  description: '调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm',
  busyStatus: 'FREE',
  start: [2025, 5, 1],
  end: [2025, 5, 2],
})

events.push({
  uid: uidGenerator('dragon-boat-festival-holiday'),
  title: '端午节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2025, 5, 31],
  end: [2025, 6, 1],
})

events.push({
  uid: uidGenerator('term-2-final-week'),
  title: '第二学期考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2025, 6, 8],
  end: [2025, 6, 22],
})

////////////////////////////////////////////////////////////////

for (let i = 0; i < 4; i++) {
  const weekStart = new Date(2025, 5, 22).addWeek(i)
  const weekEnd = new Date(2025, 5, 22).addWeek(i + 1)

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
  start: [2025, 7, 20],
  end: [2025, 9, 7],
})

createEvents(events, async (error: Error | undefined, value: string | undefined) => {
  if (error) {
    console.log(error)
  }

  if (value) {
    writeFileSync(`${__dirname}/${calendar_name}.ics`, value)
  }
})
