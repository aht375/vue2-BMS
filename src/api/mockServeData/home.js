// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 12; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '小米',
            value: 2999
          },
          {
            name: '苹果',
            value: 5999
          },
          {
            name: 'vivo',
            value: 1500
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: '魅族',
            value: 2200
          },
          {
            name: '三星',
            value: 4500
          }
        ],
        // 柱状图
        userData: [
          {
            date: '一月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+770)
          },
          {
            date: '二月',
                        new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+800)
          },
          {
            date: '三月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+600)
          },
          {
            date: '四月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+700)
          },
          {
            date: '五月',
             new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+700)
          },
          {
            date: '六月',
             new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+800)
          },
          {
            date: '六月',
             new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+900)
          },
          {
            date: '七月',
              new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+900)
          },
          {
            date: '八月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+700)
          },
          {
            date: '九月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+900)
          },
          {
            date: '十月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+800)
          },
          {
            date: '十一月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+1000)
          },
          {
            date: '十二月',
            new: Math.floor(Math.random() * 1000),
            active: Math.floor(Math.random() * 1000+1000)
          }
        ],
        // 折线图
        orderData: {
          date: ['2019-01','2019-02','2019-03','2019-04','2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11','2019-12'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: 'vivo',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: '苹果',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: '小米',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: '三星',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: '魅族',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  }
}