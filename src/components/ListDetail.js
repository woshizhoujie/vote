import React, { Component } from 'react'
import { Link } from 'react-router'
import { appService, appInfo } from '../service'

class ListDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issueTene: this.props.issueTene
    }
    this.issueDele = this.issueDele.bind(this)
  }

  issueDele(e, i) {
    let url = `${appInfo.address.delPublish}${e.uid}/`
    appService.request(url, null, true, 'POST')
      .then(result => {
        console.log('Request result: %o', result)
      })
      .catch(error => {
        alert('删除失败')
      })
    let issue = this.state.issueTene.splice(i, 1)
    this.setState({
      issueTene: this.state.issueTene
    })
  }




  render() {
    //获取从娱乐美食和租房信息传过来的参数 就是各自的信息数组
    let listGood = this.props.scId
    let cateName = this.props.cateName
    let name = this.props.name
    return (
      <div >
        {name === "teneIssue" ?
          <div>
            {
              this.state.issueTene.map((e, i) => {
                let linkAddr = `/IN/${cateName}/${e.uid}`
                return (
                  <div className="detbox">

                    <div className="detimg">
                      <div style={{ height: '100%', overflow: 'hidden', backgroundImage: 'url(' + e.images[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center center', }}></div>
                    </div>
                    <div className="detborder">
                      <div className="detfont">
                        <p style={{ color: '#464646', fontWeight: '500' }}>{e.title}</p><br />
                        {cateName === 'entertainment' ? <p className="detfonts">{e.telephone}</p> : <p className="detfonts">地址：{e.address}</p>}<br />
                        <p className="detfonts">
                          {cateName === 'entertainment' ? <p>{e.address}</p> : <p className="detfonts">查看：{e.view_count}<span style={{ marginLeft: '240px' }}>{e.is_official ? '商家' : '个人'}</span></p>}
                        </p>
                      </div>
                      <div className="detremark" style={{paddingTop:'10px'}}>
                        {cateName === 'entertainment' ? <p >网站<br /><div className="deturl"><u >{e.website}</u></div></p> : <p >每月<br /><span style={{ color: '#ff9900', fontSize: '28px', display: 'block', margin: '-8' }}>{e.rent}</span> 磅</p>}
                        <Link to={linkAddr}><div className="detsees">查看详情</div> </Link>
                        <p style={{ width: '220px', height: '25px', lineHeight: '25px', fontSize: '14px', color: '#000', textAlign: 'center', position: 'absolute', left: '2px', top: '120px',cursor:'pointer' }} onClick={() => { this.issueDele(e, i) } }>删除</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          : <div>{
            listGood.map((e, i) => {
              let linkAddr = `/IN/${cateName}/${e.uid}`
              return (
                <Link to={linkAddr}>
                  <div className="detbox">
                    <div className="detimg">
                      <div style={{ height: '100%', overflow: 'hidden', backgroundImage: 'url(' + e.images[0].img + ')', backgroundSize: 'cover', backgroundPosition: 'center center', }}></div>
                    </div>
                    <div className="detborder">
                      <div className="detfont">
                        <p style={{ color: '#464646', fontWeight: '500' }}>{e.title}</p><br />
                        {cateName === 'entertainment' ? <p className="detfonts">{e.telephone}</p> : <p className="detfonts">地址：{e.address}</p>}<br />
                        <p className="detfonts">
                          {cateName === 'entertainment' ? <p>{e.address}</p> : <p className="detfonts">查看：{e.view_count}<span style={{ marginLeft: '240px' }}>{e.is_official ? '商家' : '个人'}</span></p>}
                        </p>
                      </div>
                      <div className="detremark">
                        {cateName === 'entertainment' ? <p >网站<br /><div className="deturl"><u >{e.website}</u></div></p> : <p >每月<br /><span style={{ color: '#ff9900', fontSize: '28px', display: 'block', margin: '-8' }}>{e.rent}</span> 磅</p>}
                        <div className="detsee">查看详情</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
          </div>
        }
      </div>
    );
  }
}

export default ListDetail;   