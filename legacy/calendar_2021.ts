// https://uc.whu.edu.cn/xl/a2021_2022nxl.htm
// https://www.whu.edu.cn/info/1118/18862.htm
// http://uc.whu.edu.cn/info/1039/12145.htm

import { createEvents } from 'ics'
import type { EventAttributes } from 'ics'
import { writeFileSync } from 'fs'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import './utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const calendar_name = '2021-2022'

const events: EventAttributes[] = [
  {
    title: '所有本科生和在籍研究生开始上课',
    description: '时间调整见：https://www.whu.edu.cn/info/1118/18862.htm',
    busyStatus: 'FREE',
    start: [2021, 9, 6],
    end: [2021, 9, 7],
    calName: calendar_name,
  },
]

events.push({
  title: '本科新生注册',
  description:
    '请仔细对照录取通知书上的要求准备好材料。时间调整见：https://www.whu.edu.cn/info/1118/18862.htm',
  busyStatus: 'FREE',
  // start: [2021, 8, 19],
  // end: [2021, 8, 20]
  start: [2021, 9, 2],
  end: [2021, 9, 3],
})

events.push({
  title: '本科生新生入学教育',
  description: '时间调整见：https://www.whu.edu.cn/info/1118/18862.htm',
  busyStatus: 'FREE',
  // start: [2021, 8, 20],
  // end: [2021, 8, 21]
  start: [2021, 9, 3],
  end: [2021, 9, 6],
})

// events.push({
//   title: '军训',
//   description: '',
//   busyStatus: 'FREE',
//   start: [2021, 8, 21],
//   end: [2021, 9, 5]
// })

events.push({
  title: '研究生返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 9, 3],
  end: [2021, 9, 4],
})

events.push({
  title: '本科生返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 9, 5],
  end: [2021, 9, 6],
})

events.push({
  title: '研究生新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2021, 9, 11],
  end: [2021, 9, 12],
})

events.push({
  title: '研究生新生入学教育',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 9, 12],
  end: [2021, 9, 13],
})

events.push({
  title: '研究生新生开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 9, 13],
  end: [2021, 9, 14],
})

////////////////////////////////////////////////////////////////

/// 2021-2022学年第一学期于2021年9月5日至2022年1月8日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2021, 8, 5).addWeek(i)
  const weekEnd = new Date(2021, 8, 5).addWeek(i + 1)

  events.push({
    title: `[1] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

events.push({
  title: '中秋节假期',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 9, 21],
  end: [2021, 9, 22],
})

events.push({
  title: '[中秋调休] 第 3 周周一',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 9, 18],
  end: [2021, 9, 19],
})

events.push({
  title: '[中秋调休] 第 2 周周六',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 9, 20],
  end: [2021, 9, 21],
})

events.push({
  title: '国庆节假期',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 1],
  end: [2021, 10, 4],
})

events.push({
  title: '[国庆调休] 第 5 周周三',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 9, 26],
  end: [2021, 9, 27],
})

events.push({
  title: '[国庆调休] 第 4 周周日',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 6],
  end: [2021, 10, 7],
})

events.push({
  title: '[国庆调休] 第 4 周周六',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 4],
  end: [2021, 10, 5],
})

events.push({
  title: '[国庆调休] 第 5 周周日',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 5],
  end: [2021, 10, 6],
})

events.push({
  title: '[国庆调休] 第 5 周周四',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 9],
  end: [2021, 10, 10],
})

events.push({
  title: '[国庆调休] 第 5 周周六',
  description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
  busyStatus: 'FREE',
  start: [2021, 10, 7],
  end: [2021, 10, 8],
})

events.push({
  title: '校运会',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 11, 5],
  end: [2021, 11, 7],
})

events.push({
  title: '元旦假期',
  description: '',
  busyStatus: 'FREE',
  start: [2022, 1, 1],
  end: [2022, 1, 2],
})

events.push({
  title: '春节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2022, 2, 1],
  end: [2022, 2, 2],
})

events.push({
  title: '考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2021, 12, 26],
  end: [2022, 1, 9],
})

events.push({
  title: '寒假',
  description: '教职工寒假执行学校通知。',
  busyStatus: 'FREE',
  start: [2022, 1, 9],
  end: [2022, 2, 13],
})

////////////////////////////////////////////////////////////////

/// 2021-2022学年第二学期于2022年2月13日至2022年6月18日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2022, 1, 13).addWeek(i)
  const weekEnd = new Date(2022, 1, 13).addWeek(i + 1)

  events.push({
    title: `[2] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

events.push({
  title: '第二学期返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2022, 2, 13],
  end: [2022, 2, 14],
})

events.push({
  title: '第二学期开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2022, 2, 14],
  end: [2022, 2, 15],
})

events.push({
  title: '清明节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 4, 5],
  end: [2022, 4, 6],
})

events.push({
  title: '劳动节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 5, 1],
  end: [2022, 5, 2],
})

events.push({
  title: '端午节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 6, 3],
  end: [2022, 6, 4],
})

events.push({
  title: '第二学期考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2022, 6, 5],
  end: [2022, 6, 19],
})

////////////////////////////////////////////////////////////////

for (let i = 0; i < 4; i++) {
  const weekStart = new Date(2022, 5, 19).addWeek(i)
  const weekEnd = new Date(2022, 5, 19).addWeek(i + 1)

  events.push({
    title: `[3] 第 ${i + 1} 周`,
    description: '',
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate(),
  })
}

////////////////////////////////////////////////////////////////

// events.push({
//   title: '第三学期',
//   description: '',
//   busyStatus: 'FREE',
//   start: [2021, 6, 19],
//   end: [2022, 7, 17]
// })

events.push({
  title: '暑假',
  description: '教职工暑假执行学校通知',
  busyStatus: 'FREE',
  start: [2022, 7, 17],
  end: [2022, 9, 4],
})

createEvents(events, async (error: Error | undefined, value: string | undefined) => {
  if (error) {
    console.log(error)
  }

  if (value) {
    writeFileSync(`${__dirname}/${calendar_name}.ics`, value)
  }
})
