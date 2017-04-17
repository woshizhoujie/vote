import React, { Component } from 'react'
import { TabsUnderline } from '../components/Table'
import ProductItem from './ProductItem'
import ListDetail from '../components/ListDetail'

import { Spin } from 'antd'
import { appService, appInfo } from '../service'
import { Grid, Row, Col } from 'react-bootstrap'

class MyCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
    }

    //我的发布
    this.issueList = []

    //我的收藏
    this.myFavorite = []
  }

  componentWillMount() {
    //我的发布
    console.log('component will mount')
    appService.request(appInfo.address.myPublishes, null, true)
      .then(response => {
        console.log('My issue: %o', response)
        this.issueList = response.results
        //我的收藏
        appService.request(appInfo.address.goodsFavourite, null, true)
          .then(response => {
            this.myFavorite = response.results
            console.log('我的收藏')
            console.log(this.myFavorite)
            this.setState({ isLoading: false })
          })
      })
  }

  render() {
    let name = this.props.name
    return (
      <div >
        {this.state.isLoading ? <div className="example"><Spin size="large" /></div> :

          name === 'release' ?
            <ul>
              <TabsUnderline name="mypersonal" >
                <li name="二手物品" className="tabli">
                  <div className="mycenter" >
                    <ProductItem issueList={this.issueList.filter((item) => {
                      return item.app_type === 'goods'
                    }
                    )} name='secondIssue' />
                  </div>
                </li>

                <li name="租房信息" className="tabli">
                  <div className="mycenter" >
                    <ListDetail issueTene={this.issueList.filter((item) => {
                      return item.app_type === 'tenement'
                    }
                    )} name='teneIssue' cateName='tenement' />
                  </div>
                </li>
              </TabsUnderline>

            </ul>

            : (name === 'order' ?
              <ul>
                <TabsUnderline name="mypersonal" >
                  <li name="租房信息" className="tabli">
                    <div className="mycenter">
                      订单租房信息
                            </div>
                  </li>
                  <li name="娱乐美食" className="tabli">
                    <div className="mycenter">
                      订单娱乐美食
                            </div>
                  </li>
                </TabsUnderline>
              </ul>
              :
            <ul>
                <TabsUnderline name="mypersonal" >
                  <li name="二手物品" className="tabli">
                    <div className="mycenter">
                        <ProductItem myFavorite={this.myFavorite} name='mycategory' />
                    </div>
                  </li>
                </TabsUnderline>
              </ul>




              
            )
        }
      </div>
    )
  }
}

export default MyCategory;
