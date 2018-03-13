import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import setting from '@/components/Setting'
import feedback from '@/components/Feedback'
import MyComment from '@/components/MyComment'
import MyCollect from '@/components/MyCollect'
import Article from '@/components/Article'
import Login from '@/components/login'
import Resign from '@/components/resign'
import rank from '@/components/rank'
import Message from '@/components/message'
import TuCao from '@/components/TuCao'
import Fabu from '@/components/Fabu'
import About from'@/components/About'
import uploadavatar from'@/components/UploadAvatar'
import Myhome from'@/components/Myhome'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
 path:'/setting',
 component:setting
},{
path:'/uploadavatar',
component:uploadavatar
},
{
path:'/Fabu',
component:Fabu

},
{
  path:'/login',
  component:Login
},
{
  path:'/resign',
  component:Resign 
},
{
  path: '/rank',
  component: rank
},
{
  path:'/message',
  component:Message
},
 {
  path: '/TuCao',
  component: TuCao

},
{
path:'/About',
component:About

},
{
path:'/MyComment',
component:MyComment

},
{
path:'/MyCollect',
component:MyCollect

},
{
path:'/Article',
component:Article

},{
path:'/feedback',
component:feedback

},
{
path:'/Myhome',
component:Myhome

}
  ]
})
