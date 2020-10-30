import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
require('../../src/css/searchList.css');
class SearchList extends React.Component{
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
    render(){
      
      var date=new Date();
      var date2 = new Date();
      date2.setTime(date2.getTime()+24*60*60*1000*2);
      return(
      <div className='backgroundBox'>
         
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
         <div className='searchHotel'>
           <div className='searchCount'>東京：共{this.state.list.length}家住宿</div>
         {
    this.state.list.map((item,key) =>{
      return <div key={key}> <div className='searchContent'>
      <div className='searchPicture'><a href="javascript:void(0);"><img src='https://cf.bstatic.com/images/hotel/max1280x900/219/219645738.jpg' alt='123'/></a></div>
        <div className='searchdetail'>
          <ul > 
            <div className='fontsize5'><a href="javascript:void(0);">Shinagawa Prince Hotel（品川王子大饭店）</a></div>
            <div className='fontsize2'>离中心地区6 km  靠近地铁站</div>
            <div className='fontsize2'>过去10分钟有1人搜索过相同日期</div>
            <div className='fontsize2'>限时优惠Go To Travel</div>
          </ul>
          <div className='estimate1'>非常好8.3</div>
          <ul > 
            <div className='fontsize'>公寓整租</div>
            <div className='fontsize2'> 1间卧室 • 1间浴室 • 26 平方米2张双人床</div>
            <div className='fontsize3'>预订无忧：计划有变可取消，锁定好价趁现在！</div>
            <div className='fontsize4'>该房型在我们网站上仅剩3间</div>
            </ul>
          <div className='estimate2'>¥6,649</div>
          <button>查看可订选项 　＞</button>
        </div>
      </div>  </div>
    })
  }
        
           
         </div>
      </div>
      )
    }
  }
  export default SearchList;