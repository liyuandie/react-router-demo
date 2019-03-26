import React, { Component } from 'react'
import './style.css'
import { Table, Divider, Tag, Empty } from 'antd'

const columns = [
  {
    title: '',
    dataIndex: 'time',
    key: 'time',
    width: '30px',
    render: text => <a href="javascript:;">{text}</a>,
    align: 'center'
  },
  {
    title: 'TUE',
    dataIndex: 'tue',
    key: 'tue',
    align: 'center',
    width: '80px',
    render: tue =>
      tue.length === 0 ? (
        <Empty image={require('../imgs/pig.jpeg')} description={<span> </span>} className="img" />
      ) : (
        <p className="table-text">
          {tue[0]}
          <br />
          <span>
            {tue.map(tag => {
              return tue.indexOf(tag) === 0 ? null : (
                <Tag color={'blue'} key={tag} className="tag">
                  {tag}
                </Tag>
              )
            })}
          </span>
        </p>
      )
  },
  {
    title: 'WED',
    dataIndex: 'wed',
    key: 'wed',
    align: 'center',
    width: '80px',
    render: wed =>
      wed.length === 0 ? (
        <Empty image={require('../imgs/pig.jpeg')} description={<span> </span>} className="img" />
      ) : (
        <p className="table-text">
          {wed[0]}
          <br />
          <span>
            {wed.map(tag => {
              return wed.indexOf(tag) === 0 ? null : (
                <Tag color={'magenta'} key={tag} className="tag">
                  {tag}
                </Tag>
              )
            })}
          </span>
        </p>
      )
  },
  {
    title: 'THU',
    key: 'thu',
    dataIndex: 'thu',
    width: '80px',
    align: 'center',
    render: thu =>
      thu.length === 0 ? (
        <Empty image={require('../imgs/pig.jpeg')} description={<span> </span>} className="img" />
      ) : (
        <p className="table-text">
          {thu[0]}
          <br />
          <span>
            {thu.map(tag => {
              return thu.indexOf(tag) === 0 ? null : (
                <Tag color={'volcano'} key={tag} className="tag">
                  {tag}
                </Tag>
              )
            })}
          </span>
        </p>
      )
  },
  {
    title: 'FRI',
    key: 'fri',
    dataIndex: 'fri',
    width: '80px',
    align: 'center',
    render: fri =>
      fri.length === 0 ? (
        <Empty image={require('../imgs/pig.jpeg')} description={<span> </span>} className="img" />
      ) : (
        <p className="table-text">
          {fri[0]}
          <br />
          <span>
            {fri.map(tag => {
              return fri.indexOf(tag) === 0 ? null : (
                <Tag color={'cyan'} key={tag} className="tag">
                  {tag}
                </Tag>
              )
            })}
          </span>
        </p>
      )
  }
]

const data = [
  {
    key: '1',
    time: '一',
    tue: ['政府与非盈利组织会计', 'FE190194', '张玲 1-16周', '西教B301'],
    wed: ['财经应用文写作', 'FE190084', '黄丽天', ' 1-16周', '西教B305'],
    thu: ['财务管理案例分析', 'FE190211', '苏浩', '1-8周', '二教308'],
    fri: []
  },
  {
    key: '2',
    time: '二',
    tue: [],
    wed: [],
    thu: ['财务管理案例分析', 'FE190211', '苏浩 ', '1-8周', '二教308'],
    fri: ['会计英语', 'FE190164', '魏茜嘉 ', '1-16周', '东教A305']
  },
  {
    key: '3',
    time: '三',
    tue: ['通用英语读写V', 'PR010033', '龚伟', ' 1-16周', '实验大楼409'],
    wed: [],
    thu: [],
    fri: ['企业经济分析', 'FE190248', '彭涌超 ', '双周上', '西教B503']
  },
  {
    key: '3',
    time: '四',
    tue: ['税务稽查方法与实务', 'FE190165', '王爱娜 ', '1-16周', '西教B505'],
    wed: ['企业经济分析', 'FE190248', '彭涌超 ', '1-16周', '西教B303'],
    thu: [],
    fri: []
  }
]
class CourseTimeTable extends Component {
  render() {
    return <Table dataSource={data} columns={columns} bordered pagination={false} />
  }
}

export default CourseTimeTable
