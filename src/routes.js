import React from 'react'
import {Route} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition';
import ColumnList from './components/ColumnList'
import CaseSelection from './components/CaseSelection/CaseSelection'
import CpuCoolerSelection from './components/CpuCoolerSelection/CpuCoolerSelection'
import CpuSelection from './components/CpuSelection/CpuSelection'
import MbSelection from './components/MbSelection/MbSelection'
import MemorySelection from './components/MemorySelection/MemorySelection'
import PsuSelection from './components/PsuSelection/PsuSelection'
import StorageSelection from './components/StorageSelection/StorageSelection'
import VideoSelection from './components/VideoSelection/VideoSelection'
import BuildGuides from './components/BuildGuides/BuildGuides'
import CompletedBuilds from './components/CompletedBuilds/CompletedBuilds'
import SavedList from './components/SavedLists/SavedList'


export default(
  <AnimatedSwitch
    atEnter={{opacity:0}}
    atLeave={{opacity:0}}
    atActive={{opacity:1}}
  >
    <Route exact path='/' component={ColumnList}/>
    <Route path='/case' component={CaseSelection}/>
    <Route path='/cpucooler' component={CpuCoolerSelection}/>
    <Route path='/cpu' component={CpuSelection}/>
    <Route path='/mb' component={MbSelection}/>
    <Route path='/memory' component={MemorySelection}/>
    <Route path='/psu' component={PsuSelection}/>
    <Route path='/storage' component={StorageSelection}/>
    <Route path='/video' component={VideoSelection}/>
    <Route path='/buildguides' component={BuildGuides}/>
    <Route path='/completedbuilds' component={CompletedBuilds}/>
    <Route path='/savedlist' component={SavedList}/>
  </AnimatedSwitch>
)