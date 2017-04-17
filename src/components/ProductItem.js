/**
 * Created by hezw on 16/10/7.
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import { appService, appInfo } from '../service'

export default class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myFavorite: this.props.myFavorite,
      issueList: this.props.issueList
    }
    this.collectionDele = this.collectionDele.bind(this)
    this.issueDele = this.issueDele.bind(this)
  }


  collectionDele(e, i) {

    //unmark
    let url = `${appInfo.address.goodsUnmark}${e.id}/`

    appService.request(url, null, true, 'POST')
      .then(result => {
        console.log('Request result: %o', result)
      })
      .catch(error => {
        alert('删除失败')
      })

    //splice收藏的删除功能
    let newFav = this.state.myFavorite.splice(i, 1)
    this.setState({
      myFavorite: this.state.myFavorite
    })

  }


  issueDele(e, i) {
    let url = `${appInfo.address.delPublish}${e.uid}/`
    console.log('issueDele' + e.id)
    appService.request(url, null, true, 'POST')
      .then(result => {
        console.log('Request result: %o', result)
      })
      .catch(error => {
        alert('删除失败')
      })
    let issue = this.state.issueList.splice(i, 1)
    this.setState({
      issueList: this.state.issueList
    })
    console.log('issueList' + this.props.issueList)
  }

  render() {

    let listGood = this.props.scId
    let name = this.props.name

    return (
      <div>
        {name === 'mycategory' ?
          <div style={{ height: '192px', clear: 'both', display: 'inline' }}>
            {
              this.state.myFavorite.map((e, i) => {
                let linkAddr = `/IN/goods/${e.detail.uid}`
                return (
                  <div className="productContent">
                    <div className="productItem">
                      <div style={{ height: '192px', width: '230px' }}>
                        <Link to={linkAddr}>
                          <div style={{ width: '', height: '120px', backgroundImage: 'url(' + e.detail.images[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center center', }}></div>
                          <a className="productTitle">{e.detail.title}</a>
                        </Link>
                        <div className="productItemTipBox"></div>
                        <div className="productItemTip">{e.detail.price}</div>
                        <div className="productItemDele" onClick={() => { this.collectionDele(e, i) } }>删除</div>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
          : (name === 'secondIssue' ?
            <div>
              {
                this.state.issueList.map((e, i) => {
                  let linkAddr = `/IN/goods/${e.uid}`
                  return (
                    <div className="productContent">
                      <div className="productItem">
                        <div style={{ height: '192px', width: '230px' }}>
                          <Link to={linkAddr}>
                            <div style={{ width: '', height: '120px', backgroundImage: 'url(' + e.images[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center center', }}></div>
                            <a className="productTitle">{e.title}</a>
                          </Link>
                          <div className="productItemTipBox"></div>
                          <div className="productItemTip">{e.price}<span style={{ fontSize: '14px' }}></span></div>
                          <div className="productItemDele" onClick={() => { this.issueDele(e, i) } }>删除</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            :
            <div>
              {
                listGood.map((e, i) => {
                  let linkAddr = `/IN/goods/${e.uid}`
                  return (
                    <div className="productContent">
                      <Link to={linkAddr}>
                        <div className="productItem">
                          <div style={{ width: '230px', height: '120px', backgroundImage: 'url(' + e.images[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center center', }}></div>
                          <a className="productTitle">{e.title}</a>
                          <div className="productItemTipBox"></div>
                          <div className="productItemTip">{e.price}<span style={{ fontSize: '14px' }}></span></div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    )
  }
}
