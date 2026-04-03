// https://uc.whu.edu.cn/info/1687/16527.htm

import { createEvents } from 'ics'
import type { EventAttributes } from 'ics'
import { writeFileSync } from 'fs'
import { uidGenerateFactory } from './utils.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const calendar_name = '2023-2024'
const uidGenerator = uidGenerateFactory('whu-calendar-2023')

const events: EventAttributes[] = [
  {
    uid: uidGenerator('class-begin'),
    title: '除本科新生外所有本科生和在籍研究生开始上课',
    description: '',
    busyStatus: 'FREE',
    start: [2023, 9, 11],
    end: [2023, 9, 12],
    calName: calendar_name,
  },
]

events.push({
  uid: uidGenerator('undergraduate-freshman-registration'),
  title: '本科新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2023, 8, 25],
  end: [2023, 8, 26],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-before-class-begin'),
  title: '本科生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 8, 26],
  end: [2023, 8, 27],
})

events.push({
  uid: uidGenerator('military-training'),
  title: '新生军训',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 8, 27],
  end: [2023, 9, 17],
})

events.push({
  uid: uidGenerator('undergraduate-master-registration'),
  title: '本科生老生、研究生老生返校注册',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 9, 10],
  end: [2023, 9, 11],
})

// events.push({
//   uid: uidGenerator("undergraduate-registration"),
//   title: "本科生返校注册",
//   description: "",
//   busyStatus: "FREE",
//   start: [2023, 9, 10],
//   end: [2023, 9, 11],
// });

events.push({
  uid: uidGenerator('master-freshman-registration'),
  title: '研究生新生注册',
  description: '请仔细对照录取通知书上的要求准备好材料。',
  busyStatus: 'FREE',
  start: [2023, 9, 9],
  end: [2023, 9, 10],
})

events.push({
  uid: uidGenerator('master-freshman-before-class-begin'),
  title: '研究生新生入学教育开始',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 9, 10],
  end: [2023, 9, 11],
})

events.push({
  uid: uidGenerator('undergraduate-freshman-class-begin'),
  title: '本科生新生开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 9, 18],
  end: [2023, 9, 19],
})

////////////////////////////////////////////////////////////////

/// 2023-2024学年第一学期于2023年9月10日至2023年1月20日，教学周共19周。

for (let i = 0; i < 19; i++) {
  const weekStart = new Date(2023, 8, 10).addWeek(i)
  const weekEnd = new Date(2023, 8, 10).addWeek(i + 1)

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
  start: [2023, 9, 29],
  end: [2023, 9, 30],
})

// events.push({
//   title: '[中秋调休] 第 3 周周一',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 9, 18],
//   end: [2023, 9, 19]
// })

// events.push({
//   title: '[中秋调休] 第 2 周周六',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 9, 20],
//   end: [2023, 9, 21]
// })

events.push({
  uid: uidGenerator('national-day-holiday'),
  title: '国庆节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 10, 1],
  end: [2023, 10, 4],
})

// events.push({
//   title: '[国庆调休] 第 5 周周三',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 9, 26],
//   end: [2023, 9, 27]
// })

// events.push({
//   title: '[国庆调休] 第 4 周周日',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 10, 6],
//   end: [2023, 10, 7]
// })

// events.push({
//   title: '[国庆调休] 第 4 周周六',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 10, 4],
//   end: [2023, 10, 5]
// })

// events.push({
//   title: '[国庆调休] 第 5 周周日',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 10, 5],
//   end: [2023, 10, 6]
// })

// events.push({
//   title: '[国庆调休] 第 5 周周四',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 10, 9],
//   end: [2023, 10, 10]
// })

// events.push({
//   title: '[国庆调休] 第 5 周周六',
//   description: '时间调整见：http://uc.whu.edu.cn/info/1039/12145.htm',
//   busyStatus: 'FREE',
//   start: [2023, 10, 7],
//   end: [2023, 10, 8]
// })

events.push({
  uid: uidGenerator('school-sports-meeting'),
  title: '校运会（11月2日下午-11月4日）',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 11, 2],
  end: [2023, 11, 5],
})

events.push({
  uid: uidGenerator('new-year-holiday'),
  title: '元旦假期',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 1, 1],
  end: [2023, 1, 2],
})

events.push({
  uid: uidGenerator('spring-festival-holiday'),
  title: '春节假期',
  description: '',
  busyStatus: 'FREE',
  start: [2023, 2, 10],
  end: [2023, 2, 11],
})

events.push({
  uid: uidGenerator('term-1-final-week'),
  title: '考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 1, 7],
  end: [2024, 1, 21],
})

events.push({
  uid: uidGenerator('winter-vacation'),
  title: '寒假',
  description: '教职工寒假执行学校通知。',
  busyStatus: 'FREE',
  start: [2024, 1, 21],
  end: [2024, 2, 25],
})

////////////////////////////////////////////////////////////////

/// 2023-2024学年第二学期于2023年2月25日至2023年6月29日，教学周共18周。

for (let i = 0; i < 18; i++) {
  const weekStart = new Date(2024, 1, 25).addWeek(i)
  const weekEnd = new Date(2024, 1, 25).addWeek(i + 1)

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
  start: [2024, 2, 25],
  end: [2024, 2, 26],
})

events.push({
  uid: uidGenerator('class-begin-term-2'),
  title: '第二学期开始上课',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 2, 26],
  end: [2024, 2, 27],
})

events.push({
  uid: uidGenerator('ching-ming-festival-holiday'),
  title: '清明节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2024, 4, 4],
  end: [2024, 4, 5],
})

events.push({
  uid: uidGenerator('may-day-holiday'),
  title: '劳动节假期',
  description: '调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm',
  busyStatus: 'FREE',
  start: [2024, 5, 1],
  end: [2024, 5, 2],
})

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-1"),
//     title: "[劳动节调休]十二周周二",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 4, 23],
//     end: [2023, 4, 24],
// });

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-2"),
//     title: "[劳动节调休]十一周周六",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 4, 29],
//     end: [2023, 4, 30],
// });

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-3"),
//     title: "[劳动节调休]十二周周日",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 4, 30],
//     end: [2023, 5, 1],
// });

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-4"),
//     title: "[劳动节调休]十一周周日",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 5, 2],
//     end: [2023, 5, 3],
// });

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-5"),
//     title: "[劳动节调休]十二周周六",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 5, 3],
//     end: [2023, 5, 4],
// });

// events.push({
//     uid: uidGenerator("may-day-holiday-take-day-off-6"),
//     title: "[劳动节调休]十二周周三",
//     description: "调休通知见：https://uc.whu.edu.cn/info/1520/16195.htm",
//     busyStatus: "FREE",
//     start: [2023, 5, 6],
//     end: [2023, 5, 7],
// });

events.push({
  uid: uidGenerator('dragon-boat-festival-holiday'),
  title: '端午节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2024, 6, 10],
  end: [2024, 6, 11],
})

events.push({
  uid: uidGenerator('term-2-final-week'),
  title: '第二学期考试周',
  description: '',
  busyStatus: 'FREE',
  start: [2024, 6, 16],
  end: [2024, 6, 30],
})

////////////////////////////////////////////////////////////////

for (let i = 0; i < 4; i++) {
  const weekStart = new Date(2024, 5, 30).addWeek(i)
  const weekEnd = new Date(2024, 5, 30).addWeek(i + 1)

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

// events.push({
//   title: '第三学期',
//   description: '',
//   busyStatus: 'FREE',
//   start: [2023, 6, 19],
//   end: [2023, 7, 17]
// })

events.push({
  uid: uidGenerator('summer-vacation'),
  title: '暑假',
  description: '教职工暑假执行学校通知',
  busyStatus: 'FREE',
  start: [2024, 7, 28],
  end: [2024, 9, 8],
})

createEvents(events, async (error: Error | undefined, value: string | undefined) => {
  if (error) {
    console.log(error)
  }

  if (value) {
    writeFileSync(`${__dirname}/${calendar_name}.ics`, value)
  }
})
