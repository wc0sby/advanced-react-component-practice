import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks"
import Orders from "./components/Orders"
import Tickets from "./components/Tickets"
import AreaChart from "./components/AreaChart"
import DonutChart from "./components/DonutChart"
import TasksPanel from "./components/TasksPanel"
import TransactionsPanel from "./components/TransactionsPanel"
import PropTypes from "prop-types";

function App(props) {
 
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav message={props.messages}/>

          <SideNav />
        </nav>

        <div id="page-wrapper">

            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row">

                <Comments newComment={props.newComments} />

                <Tasks newTask={props.newTasks}/>

                <Orders newOrder={props.newOrders}/>

                <Tickets ticket={props.tickets}/>

                </div>
                    <AreaChart />
                
                <div className="row">
                
                <DonutChart />
                    <div className="col-lg-4">
                          <TasksPanel task={props.tasks} />                          
                    </div>
                    <div className="col-lg-4">
                          <TransactionsPanel transaction={props.orders}>  
                                <div className="text-right">
                                    <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                          </TransactionsPanel>  

                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>

  );
}

App.propTypes = {

};

export default App;
