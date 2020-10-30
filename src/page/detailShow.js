import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import Draw from './draw';
require('../../src/css/searchList.css');
require('../../src/css/detailShow.css');
class DetailShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            startValue: null,
            endValue: null,
            flag:1
        }
    }
    disabledStartDate(startValue) {
        if (!startValue || !this.state.endValue) {
          return false;
        }
        return new Date(startValue).getTime() >= new Date(this.state.endValue).getTime();
      }
      disabledEndDate(endValue) {
        if (!endValue || !this.state.startValue) {
          return false;
        }
        return new Date(endValue).getTime() <= new Date(this.state.startValue).getTime();
      }
      onChange(field, value) {
        console.log(field, 'change', value);
        this.setState({
          [field]: value,
        });
      }
      date(){
        
      var date=new Date();
      var year=date.getFullYear();
      var month=date.getMonth()+1;
      var day=date.getDate();
      
      return year+month+day
      }
      searchRequest(){
        this.setState({list:['','','','','']})
      }
      componentDidMount(){
        this.searchRequest()
      }
     
      scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
        }
      }
   

    render(){
     
        var date=new Date();
        var date2 = new Date();
        date2.setTime(date2.getTime()+24*60*60*1000*2);
        return(<div className='backgroundBox'>
            <div className='searchList-before'>
            <div className='orderNow'>现在就预定</div>
          <div className='searchList'>
          <div className='searchListTitle'>
            境内外特价搜不停
            </div>
          <div　className='searchListTitle1'>目的地/住宿名称：</div>
          <select className='searchSelect'>
            <option>东京</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <div className='searchListTitle1'>入住日期</div>
          <DatePicker style={{marginLeft:'25px',width:'200px'}} disabledDate={this.disabledStartDate.bind(this)}
            
            value={this.state.startValue}
            placeholder={date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}
            onChange={this.onChange.bind(this, 'startValue')} />
          <div className='searchListTitle1'>退房日期</div>
          <DatePicker style={{marginLeft:'25px',width:'200px'}} disabledDate={this.disabledEndDate.bind(this)}
            
            value={this.state.endValue}
            placeholder={date2.getFullYear()+'-'+(date2.getMonth()+1)+'-'+date2.getDate()}
            onChange={this.onChange.bind(this, 'endValue')} />
          
         
          <div className='searchListTitle1'>入住2晚</div>
          <select className='searchSelect'>
            <option>两位成人</option>
            {
            this.state.list.map((item,key) =>{
             return <option key={key}>{item}</option>
                  })
            }
            
          </select>
          <select className='searchSelect2'>
            <option>无儿童</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select className='searchSelect3'>
            <option>1间房</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <button className='searchListButton'>搜特价</button>
         
         </div>
         </div>
         
        <div className='detailShow'>
           <div className='detailIndex'>
           <a onClick={()=>this.scrollToAnchor('cost')}><div className='detailIndexKey'>信息与价格</div></a>
          <a ><div className='detailIndexKey'><Draw/></div></a>
          <a onClick={()=>this.scrollToAnchor('rule')}><div className='detailIndexKey'>规定</div></a>
          <a onClick={()=>this.scrollToAnchor('shouldKnow')}><div className='detailIndexKey'>须知</div></a>
          <a onClick={()=>this.scrollToAnchor('comment')}><div className='detailIndexKey'>评论</div></a>
        </div>
            <div className='detailTitle'>
                <div className='detailFont'>
               Centurion Hotel Residential Akasaka Station（赤坂站百夫长酒店）
               </div>
            </div>
           <div className='detailPicture'>
               <div className='searchPicture'>
                   <a href="javascript:void(0);">
                       <img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/>
                   </a>
                </div>
                <div className='searchPicture'>
                   <a href="javascript:void(0);">
                       <img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/>
                   </a>
                </div>
                <div className='searchPicture'>
                   <a href="javascript:void(0);">
                       <img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/>
                   </a>
                </div>
                <div className='searchPicture2'>
                   <a href="javascript:void(0);">
                       <img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/>
                   </a>
                </div>
                <div className='searchPicture2'>
                   <a href="javascript:void(0);">
                       <img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/>
                   </a>
                </div>
            </div>
           <div id='cost' className='detailCost'>信息与价格</div>
           <div id='facility' className='detailFacility'>设施</div>
           <div id='rule' className='detailRule'>规定</div>
           <div id='shouldKnow' className='detailShouldKnow'>须知</div>
           <div id='comment' className='detailComment'>评论</div>
          
        </div>
        </div>)
    }
}
export default DetailShow